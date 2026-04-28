import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viral Flux Media — Social growth, engineered.",
  description: "Award-winning social media management. We turn quiet feeds into cultural moments.",
  authors: [{ name: "Viral Flux Media" }],
  openGraph: {
    title: "Viral Flux Media — Social growth, engineered.",
    description: "Award-winning social media management. We turn quiet feeds into cultural moments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
