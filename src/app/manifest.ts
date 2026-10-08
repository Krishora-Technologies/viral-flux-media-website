import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viral Flux Media",
    short_name: "Viral Flux Media",
    description: "Viral Flux Media is a results-driven social media marketing and digital growth agency specializing in cinematic content and viral growth for brands worldwide.",
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
        sizes: "1024x375",
        type: "image/png",
      },
    ],
  };
}
