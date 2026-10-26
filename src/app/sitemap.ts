import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viralfluxmedia.in";
  const releaseDate = new Date("2026-04-26");
  const blog1Date = new Date("2026-04-16");
  const blog2Date = new Date("2026-04-16");

  return [
    {
      url: baseUrl,
      lastModified: releaseDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/social-media-marketing-agency-dombivli`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/video-production-reel-editing-dombivli`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/performance-marketing-paid-ads`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-marketing-agency-kalyan`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/social-media-marketing-agency-thane`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/social-media-marketing-agency-mumbai`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: releaseDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-social-media-marketing-agencies-dombivli-kalyan`,
      lastModified: blog1Date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-reels-strategy-dombivli-kalyan`,
      lastModified: blog2Date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/program`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: releaseDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: releaseDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
