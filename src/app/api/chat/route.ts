import OpenAI from "openai";
import { OpenAIStream } from "ai";
import { NextResponse } from "next/server";
import { OramaManager } from "@/lib/orama";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { getSubscriptionStatus } from "@/lib/stripe-actions";
import { FREE_CREDITS_PER_DAY } from "@/app/constants";
import type { Message } from "ai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = await auth()
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const isSubscribed = await getSubscriptionStatus()
        if (!isSubscribed) {
            const chatbotInteraction = await db.chatbotInteraction.findUnique({
                where: { day: new Date().toDateString(), userId }
            })
            if (!chatbotInteraction) {
                await db.chatbotInteraction.create({
                    data: { day: new Date().toDateString(), count: 1, userId }
                })
            } else if (chatbotInteraction.count >= FREE_CREDITS_PER_DAY) {
                return NextResponse.json({ error: "Limit reached" }, { status: 429 });
            }
        }

        const { messages, accountId } = await req.json();
        const oramaManager = new OramaManager(accountId)
        await oramaManager.initialize()
        const lastMessage = messages[messages.length - 1]
        const context = await oramaManager.vectorSearch({ prompt: lastMessage.content })

        const prompt = {
            role: "system" as const,
            content: `You are an AI email assistant embedded in an email client app.
            THE TIME NOW IS ${new Date().toLocaleString()}
            START CONTEXT BLOCK
            ${context.hits.map((hit) => JSON.stringify(hit.document)).join('\n')}
            END OF CONTEXT BLOCK
            - Be helpful, clever, and articulate.
            - Rely on the provided email context to inform your responses.
            - If the context does not contain enough information, politely say you don't have enough information.
            - Keep your responses concise and relevant.`
        };

        const response = await openai.chat.completions.create({
            model: "openai/gpt-oss-120b:free",
            messages: [
                prompt,
                ...messages.filter((message: Message) => message.role === "user"),
            ],
            stream: true,
        });

        const stream = OpenAIStream(response as any, {
            onCompletion: async () => {
                const today = new Date().toDateString()
                await db.chatbotInteraction.upsert({
                    where: { userId, day: today },
                    create: { userId, day: today, count: 1 },
                    update: { count: { increment: 1 } }
                })
            },
        });
        return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
});
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "error" }, { status: 500 });
    }
}