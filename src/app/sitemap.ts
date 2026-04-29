import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.viralfluxmedia.in";

  // In a real app, you might fetch dynamic routes from an API or CMS
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more routes as needed
  ];
}
