import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "Claude-Bot", "PerplexityBot", "Applebot-Extended"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.viralfluxmedia.in/sitemap.xml",
  };
}
