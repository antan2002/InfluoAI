import OpenAI from "openai";
import { OpenAIStream } from "ai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const response = await openai.chat.completions.create({
        model: "openai/gpt-oss-120b:free",
        messages: [
            {
                role: "system",
                content: `You are a helpful AI embedded in an email client used to autocomplete sentences. Be concise and match the tone of the existing text.`,
            },
            {
                role: "user",
                content: `Help me complete my train of thought: ##${prompt}## Keep the response short.`,
            },
        ],
        stream: true,
    });

    const stream = OpenAIStream(response as any);
    return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
});
}