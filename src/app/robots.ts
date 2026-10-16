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
          "Claude-Bot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended"
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://viralfluxmedia.in/sitemap.xml",
  };
}
