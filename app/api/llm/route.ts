import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function POST(req: Request) {
  // const { source, timelines } = await req.json();
  const { question } = await req.json();

  if (!question) {
    return NextResponse.json(
      { error: "question is required." },
      { status: 400 },
    );
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: question,
    config: {
      systemInstruction:
        "You are a program synthesis expert. Your task is to find a single function call that explains a series of state changes.",
    },
  });

  if (response && response.text) {
    return NextResponse.json({ answer: response.text });
  } else {
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
