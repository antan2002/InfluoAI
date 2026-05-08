import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function getEmbeddings(text: string) {
    try {
        const response = await openai.embeddings.create({
            model: "openai/text-embedding-ada-002",
            input: text.replace(/\n/g, " "),
        });
        return response.data[0].embedding as number[];
    } catch (error) {
        console.log("error calling embeddings api", error);
        throw error;
    }
}