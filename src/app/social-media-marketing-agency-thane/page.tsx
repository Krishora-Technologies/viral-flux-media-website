import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Thane | Viral Flux Media - Digital Marketing Agency",
  description: "High-impact social media marketing, viral reels, and performance ads for businesses in Thane, Majiwada, Ghodbunder Road, and Wagle Estate.",
  alternates: {
    canonical: "/social-media-marketing-agency-thane",
  },
  keywords: [
    "Social Media Marketing Agency Thane",
    "Best Social Media Agency in Thane",
    "Digital Marketing Agency Thane West",
    "Reel Makers Thane",
    "Meta Ads Agency Thane",
    "Performance Marketing Thane",
  ],
  openGraph: {
    title: "Best Social Media Marketing Agency in Thane | Viral Flux Media - Digital Marketing Agency",
    description: "Cinematic video production, viral hooks, and high-ROAS Meta ads tailored for high-growth brands in Thane.",
    url: "https://viralfluxmedia.in/social-media-marketing-agency-thane",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function SocialMediaAgencyThanePage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Thane West · Majiwada · Ghodbunder Road · Wagle Estate
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Premier Social Media Marketing Agency in <em className="text-lime not-italic font-normal">Thane</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Thane is one of Maharashtra&apos;s fastest-expanding commercial hubs. We help premium retail, D2C brands, luxury dining, and real estate developers in Thane dominate feeds with cinematic video storytelling and data-backed paid acquisition funnels.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20looking%20for%20Social%20Media%20Marketing%20in%20Thane."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Claim Free Thane Brand Audit →
          </a>
          <Link
            href="/video-production-reel-editing-dombivli"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Explore Cinema Video Shoots
          </Link>
        </div>
      </section>

      {/* Thane Pillars */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">01 / CINEMATIC REELS</div>
            <h3 className="font-display text-2xl text-cream mb-4">4K On-Site Shoots in Thane</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              We bring full cinema equipment to your showroom, restaurant, or clinic in Thane. From Ghodbunder to Majiwada, our crew films premium content that elevates your brand perception.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">02 / REAL ESTATE & LUXURY</div>
            <h3 className="font-display text-2xl text-cream mb-4">High-Ticket Lead Generation</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Thane&apos;s real estate and luxury retail markets demand sophisticated visual hooks. We construct FPV drone shoots, property walkthroughs, and Meta lead funnels that generate high-net-worth buyers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">03 / ROAS PERFORMANCE</div>
            <h3 className="font-display text-2xl text-cream mb-4">Meta & Google Ad Mastery</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Target Thane residents with pinpoint demographic and radius accuracy. We optimize your ad spend for verified WhatsApp inquiries and retail walk-ins, not empty vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <div className="p-12 rounded-3xl bg-lime text-ink">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Scale your brand in Thane with Viral Flux Media
          </h2>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Book a 30-minute growth strategy session with our creative director today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20social%20media%20growth%20in%20Thane."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-cream px-8 py-4 font-mono-label text-sm font-bold hover:bg-cream hover:text-ink transition-colors"
            >
              Chat on WhatsApp (+91 8108181650) 💬
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
