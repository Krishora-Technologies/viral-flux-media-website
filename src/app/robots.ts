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
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "meta-webindexer",
          "meta-externalagent",
          "meta-externalfetcher",
          "Amazonbot",
          "cohere-ai"
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://viralfluxmedia.in/sitemap.xml",
  };
}
