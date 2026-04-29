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
  metadataBase: new URL("https://www.viralfluxmedia.in"),
  alternates: {
    canonical: "/",
  },
  title: "Viral Flux Media | Social Media Marketing Agency & Digital Marketing Experts for Viral Growth",
  description: "Viral Flux Media is a results-driven social media marketing and digital marketing agency specializing in cinematic content, viral campaigns, and performance strategies. We help brands increase reach, engagement, and conversions through data-backed growth solutions.",
  keywords: ["Social Media Marketing", "Digital Marketing Agency", "Viral Growth", "Cinematic Content", "Viral Campaigns", "Performance Marketing", "Social Media Management", "Content Creation", "Brand Growth"],
  authors: [{ name: "Viral Flux Media" }],
  creator: "Viral Flux Media",
  publisher: "Viral Flux Media",
  openGraph: {
    title: "Viral Flux Media Social Media & Digital Marketing That Drives Viral Growth",
    description: "Beyond basic marketing. Viral Flux Media delivers high-impact social media and digital marketing with cinematic content, scroll-stopping creatives, and proven growth strategies that turn brands into attention magnets.",
    url: "https://www.viralfluxmedia.in",
    siteName: "Viral Flux Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Viral Flux Media - Social Growth, Engineered",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Flux Media Social Media & Digital Marketing That Drives Viral Growth",
    description: "Beyond basic marketing. Viral Flux Media delivers high-impact social media and digital marketing with cinematic content, scroll-stopping creatives, and proven growth strategies that turn brands into attention magnets.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Viral Flux Media",
                "url": "https://www.viralfluxmedia.in",
                "logo": "https://www.viralfluxmedia.in/og-image.jpg",
                "description": "Viral Flux Media is a results-driven social media marketing and digital marketing agency specializing in cinematic content, viral campaigns, and performance strategies.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Global"
                },
                "sameAs": [
                  "https://instagram.com/viralfluxmedia",
                  "https://linkedin.com/company/viralfluxmedia"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Social Media Marketing",
                "provider": {
                  "@type": "Organization",
                  "name": "Viral Flux Media"
                },
                "description": "High-impact social media and digital marketing with cinematic content and proven growth strategies.",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Social Media Marketing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cinematic Content Creation"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Viral Campaign Management"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Growth Strategies"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
      </head>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
