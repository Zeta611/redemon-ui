import path from "path";
import { readFileSync } from "fs";
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const systemInstruction = readFileSync(
  path.join(process.cwd(), "app", "api", "llm", "systemInstruction.txt"),
  "utf8",
);

export async function POST(req: Request) {
  const { skeleton } = await req.json();

  if (!skeleton) {
    return NextResponse.json(
      { error: "skeleton is required." },
      { status: 400 },
    );
  }

  console.debug("Received skeleton:", skeleton);
  console.debug("System instruction:", systemInstruction);

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: skeleton,
    config: { systemInstruction },
  });

  if (response && response.text) {
    return NextResponse.json({ code: response.text });
  } else {
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
