import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap" 
});

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-display",
  display: "swap" 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap" 
});

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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
