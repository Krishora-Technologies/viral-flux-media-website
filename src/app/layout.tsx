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
  metadataBase: new URL("https://viralfluxmedia.in"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Viral Flux Media - Digital Marketing Agency | Dombivli, Kalyan & Thane",
    template: "%s | Viral Flux Media - Digital Marketing Agency",
  },
  description: "Viral Flux Media - Digital Marketing Agency is a premier performance and viral content studio in Dombivli (Thane), specializing in 4K Instagram reels, paid Meta & Google ads, and brand growth.",
  keywords: [
    "Viral Flux Media - Digital Marketing Agency",
    "Best Social Media Agency in Dombivli",
    "Social Media Marketing Dombivli",
    "Digital Marketing Agency Dombivli",
    "Social Media Agency in Dombivli",
    "Reel Makers Dombivli",
    "Video Production Dombivli",
    "Social Media Agency Kalyan",
    "Digital Marketing Agency Kalyan",
    "Social Media Agency Thane",
    "Social Media Marketing Mumbai",
    "Social Media Marketing Maharashtra",
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
    "ViralFlux Media"
  ],
  authors: [{ name: "Viral Flux Media - Digital Marketing Agency" }],
  creator: "Viral Flux Media - Digital Marketing Agency",
  publisher: "Viral Flux Media - Digital Marketing Agency",
  openGraph: {
    title: "Viral Flux Media - Digital Marketing Agency | Dombivli, Kalyan & Thane",
    description: "Viral Flux Media - Digital Marketing Agency is a premier performance and viral content studio in Dombivli (Thane), specializing in 4K Instagram reels, paid Meta & Google ads, and brand growth.",
    url: "https://viralfluxmedia.in",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viral Flux Media - Digital Marketing Agency in Dombivli",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Flux Media - Digital Marketing Agency | Dombivli, Kalyan & Thane",
    description: "Viral Flux Media - Digital Marketing Agency is a premier performance and viral content studio in Dombivli (Thane), specializing in 4K Instagram reels, paid Meta & Google ads, and brand growth.",
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DRGBJNP69Z" />
        <script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DRGBJNP69Z');
            `,
          }}
        />
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
                "@type": ["LocalBusiness", "ProfessionalService"],
                "name": "Viral Flux Media - Digital Marketing Agency",
                "alternateName": "Viral Flux Media",
                "url": "https://viralfluxmedia.in",
                "email": "viralfluxmedia@gmail.com",
                "telephone": "+918108181651",
                "logo": "https://viralfluxmedia.in/og-image.png",
                "image": "https://viralfluxmedia.in/og-image.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "203, Jaywant Niwas, Star Colony, Gandhi Nagar",
                  "addressLocality": "Dombivli",
                  "addressRegion": "Maharashtra",
                  "postalCode": "421201",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.2056589,
                  "longitude": 73.0952471
                },
                "hasMap": "https://maps.app.goo.gl/4JhZJxpZi2CPWz5z5",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "19:00"
                  }
                ],
                "description": "Viral Flux Media is a results-driven social media marketing and digital marketing agency in Dombivli (Thane), specializing in cinematic content, viral campaigns, 4K Instagram reels, and Meta ads.",
                "disambiguatingDescription": "Viral Flux Media is an independent marketing agency located at 203, Jaywant Niwas, Star Colony, Gandhi Nagar, Dombivli, Maharashtra 421201. It is not affiliated with any online earning platform, task-based scheme, viralflux.com.ng, or Up Flux Media.",
                "areaServed": [
                  { "@type": "City", "name": "Dombivli" },
                  { "@type": "City", "name": "Kalyan" },
                  { "@type": "City", "name": "Thane" },
                  { "@type": "City", "name": "Mumbai" },
                  { "@type": "AdministrativeArea", "name": "Maharashtra" },
                  { "@type": "Country", "name": "India" }
                ],
                "sameAs": [
                  "https://instagram.com/viralfluxmedia",
                  "https://www.linkedin.com/company/viral-flux-media-digital-marketing-agency/",
                  "https://maps.app.goo.gl/4JhZJxpZi2CPWz5z5"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Social Media Marketing Agency",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Viral Flux Media"
                },
                "description": "Results-driven social media management, cinematic reel creation, and paid advertising campaigns in Dombivli, Kalyan, Thane, and Mumbai.",
                "areaServed": ["Dombivli", "Kalyan", "Thane", "Mumbai", "Maharashtra", "Worldwide"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Agency Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Marketing in Dombivli"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Reels & Video Production"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Marketing & Paid Ads"
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
