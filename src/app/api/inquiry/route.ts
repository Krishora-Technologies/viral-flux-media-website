import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    // Check edge country headers
    const ipCountry = (
      request.headers.get("cf-ipcountry") ||
      request.headers.get("x-vercel-ip-country") ||
      ""
    ).toUpperCase();

    const data = await request.json();
    const { name, brandName, phone, email, goal, note, selectedCountry } = data;

    // Filter out Nigeria / Ghana or obvious earning spam queries
    const cleanPhone = (phone || "").replace(/\s+/g, "");
    const isSpamCountry =
      ipCountry === "NG" ||
      ipCountry === "GH" ||
      cleanPhone.startsWith("+234") ||
      cleanPhone.startsWith("+233");

    const textPayload = `${name || ""} ${brandName || ""} ${note || ""}`.toLowerCase();
    const isEarningSpam =
      textPayload.includes("viralflux.com.ng") ||
      textPayload.includes("earning") ||
      textPayload.includes("daily task") ||
      textPayload.includes("referral reward") ||
      textPayload.includes("registration fee");

    if (isSpamCountry || isEarningSpam) {
      // Return 200 OK so the spammer/bot believes it succeeded without alerting them, but do NOT push to Discord
      return NextResponse.json({
        success: true,
        filtered: true,
      });
    }

    if (!WEBHOOK_URL) {
      return NextResponse.json({ success: true, localOnly: true });
    }

    const countryTag = selectedCountry || ipCountry || "International";

    const content = [
      `🎯 **New High-Value Client Inquiry**`,
      `**Region / Origin:** ${countryTag} ${ipCountry ? `(IP: ${ipCountry})` : ""}`,
      `**Name:** ${name}`,
      `**Brand / Business:** ${brandName}`,
      `**Phone:** ${phone}`,
      `**Email:** ${email}`,
      `**Goal:** ${goal}`,
      `**Project Brief:** ${note || "None provided"}`,
    ].join("\n");

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
