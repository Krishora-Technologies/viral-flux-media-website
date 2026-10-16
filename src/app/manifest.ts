import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viral Flux Media - Digital Marketing Agency",
    short_name: "Viral Flux Media",
    description: "Viral Flux Media - Digital Marketing Agency is a results-driven social media marketing, 4K reel production, and paid ads agency based in Dombivli, Maharashtra.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0e",
    theme_color: "#c8f542",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
