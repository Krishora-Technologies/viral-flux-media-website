import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, brandName, phone, email, goal, note } = data;
    
    const content = `**New Inquiry**\n**Name:** ${name}\n**Brand:** ${brandName}\n**Phone:** ${phone}\n**Email:** ${email}\n**Goal:** ${goal}\n**Note:** ${note}`;
    
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
