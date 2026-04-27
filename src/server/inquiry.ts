import { createServerFn } from "@tanstack/react-start";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

export const submitInquiryFn = createServerFn({ method: "POST" })
  .inputValidator((data: {
    name: string;
    brandName: string;
    phone: string;
    email: string;
    goal: string;
    note: string;
  }) => data)
  .handler(async ({ data }) => {
    const { name, brandName, phone, email, goal, note } = data;
    
    const content = `**New Inquiry**\n**Name:** ${name}\n**Brand:** ${brandName}\n**Phone:** ${phone}\n**Email:** ${email}\n**Goal:** ${goal}\n**Note:** ${note}`;
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      return { success: true };
    } catch (e) {
      console.error(e);
      return { success: false };
    }
  });
