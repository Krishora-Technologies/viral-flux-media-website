import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viral Flux Media",
    short_name: "Viral Flux Media",
    description: "Viral Flux Media is a results-driven social media marketing and digital marketing agency specializing in cinematic content and viral growth.",
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
        src: "/og-image.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
      }
    ],
  };
}
