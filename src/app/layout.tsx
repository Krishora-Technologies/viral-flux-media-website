import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { CustomCursor } from "@/components/site/CustomCursor";

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
    canonical: "https://www.viralfluxmedia.in",
  },
  title: "Viral Flux Media | Social Media & Viral Growth Agency",
  description: "Viral Flux Media is a results-driven social media and digital marketing agency delivering cinematic content, viral campaigns, and rapid brand growth.",
  keywords: [
    "Social Media Marketing",
    "Digital Marketing Agency",
    "Viral Growth",
    "Cinematic Content",
    "Viral Campaigns",
    "Performance Marketing",
    "Social Media Management",
    "Content Creation",
    "Brand Growth",
    "Viral Flux Media",
    "Viralfluxmedia",
    "ViralFlux Media",
    "Social Media Agency India",
    "Digital Marketing Agency US",
    "Viral Marketing Agency UK"
  ],
  authors: [{ name: "Viral Flux Media" }],
  creator: "Viral Flux Media",
  publisher: "Viral Flux Media",
  openGraph: {
    title: "Viral Flux Media | Social Media & Viral Growth Agency",
    description: "High-impact social media marketing, cinematic content, and viral growth strategies that make brands impossible to ignore.",
    url: "https://www.viralfluxmedia.in",
    siteName: "Viral Flux Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viral Flux Media - We Make Brands Impossible to Ignore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Flux Media | Social Media & Viral Growth Agency",
    description: "High-impact social media marketing, cinematic content, and viral growth strategies that make brands impossible to ignore.",
    images: ["/og-image.png"],
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
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1323541476602549');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1323541476602549&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "ProfessionalService"],
                "name": "Viral Flux Media",
                "url": "https://www.viralfluxmedia.in",
                "email": "viralfluxmedia@gmail.com",
                "logo": "https://www.viralfluxmedia.in/og-image.png",
                "description": "Viral Flux Media is a results-driven social media marketing and digital growth agency specializing in cinematic content, viral campaigns, and performance strategies for brands worldwide.",
                "disambiguatingDescription": "Viral Flux Media is an independent creative social media and performance marketing agency. It is not affiliated with any online earning platform, task-based scheme, or viralflux.com.ng.",
                "areaServed": "Worldwide",
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
                "description": "High-impact social media and digital marketing with cinematic content and proven growth strategies for brands worldwide.",
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
        <link rel="llms" href="/llms.txt" />
        <link rel="ai" href="/ai.txt" />
      </head>
      <body className="antialiased relative cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
