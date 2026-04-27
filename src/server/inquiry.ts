import { createServerFn } from "@tanstack/react-start";

const WEBHOOK_URL = "https://discordapp.com/api/webhooks/1498257131969839154/iz4Cy5rpnUmy4eWW1somG6h6YoEiwVdxqUAOzgS8_yOukEEY7c2Gy_9WVKby48IB50VW";

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
