import { NextResponse } from "next/server";

async function getWebhookUrl(): Promise<string> {
  if (process.env.DISCORD_WEBHOOK_URL) {
    return process.env.DISCORD_WEBHOOK_URL;
  }

  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = await getCloudflareContext({ async: true });
    const cfEnv = ctx?.env as Record<string, unknown> | undefined;
    if (cfEnv && typeof cfEnv.DISCORD_WEBHOOK_URL === "string" && cfEnv.DISCORD_WEBHOOK_URL) {
      return cfEnv.DISCORD_WEBHOOK_URL;
    }
  } catch {
    // getCloudflareContext not available in current environment
  }

  return "";
}

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

    const webhookUrl = await getWebhookUrl();

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not configured.");
      return NextResponse.json({ success: true, localOnly: true });
    }

    const countryTag = selectedCountry || ipCountry || "International";

    const embed = {
      title: "🎯 New High-Value Client Inquiry",
      color: 0xccff00, // Viral Flux signature lime accent
      fields: [
        { name: "👤 Name", value: name ? String(name).slice(0, 256) : "N/A", inline: true },
        { name: "🏢 Brand / Business", value: brandName ? String(brandName).slice(0, 256) : "N/A", inline: true },
        { name: "📞 Phone", value: phone ? String(phone).slice(0, 256) : "N/A", inline: true },
        { name: "✉️ Email", value: email ? String(email).slice(0, 256) : "N/A", inline: true },
        { name: "🎯 Goal", value: goal ? String(goal).slice(0, 256) : "N/A", inline: true },
        { name: "🌍 Origin", value: `${countryTag}${ipCountry ? ` (IP: ${ipCountry})` : ""}`, inline: true },
        { name: "📝 Project Brief", value: note ? String(note).slice(0, 1024) : "None provided", inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Viral Flux Media • Inquiry Notification",
      },
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `🎯 **New Client Inquiry Received:** ${name || "Client"} (${brandName || "Brand"})`,
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error(`Discord API error: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
