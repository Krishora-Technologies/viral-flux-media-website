import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Kalyan | Viral Flux Media - Digital Marketing Agency",
  description: "Scale your business in Kalyan with high-retention Instagram reels, Meta ads, and performance digital marketing. Serving brands across Kalyan West, Kalyan East & Khadakpada.",
  alternates: {
    canonical: "/social-media-marketing-agency-kalyan",
  },
  keywords: [
    "Social Media Marketing Agency Kalyan",
    "Best Social Media Agency in Kalyan",
    "Digital Marketing Agency Kalyan West",
    "Reel Makers Kalyan",
    "Instagram Marketing Kalyan",
    "Meta Ads Agency Kalyan",
  ],
  openGraph: {
    title: "Best Social Media Marketing Agency in Kalyan | Viral Flux Media - Digital Marketing Agency",
    description: "Results-driven social media management, cinematic reel creation, and paid advertising campaigns in Kalyan.",
    url: "https://viralfluxmedia.in/social-media-marketing-agency-kalyan",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function SocialMediaAgencyKalyanPage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Kalyan West · Khadakpada · Kalyan East · Dombivli Hub
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Top Social Media Marketing Agency in <em className="text-lime not-italic font-normal">Kalyan</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Kalyan is home to booming retail, premium cafes, real estate, and healthcare practices. We bring 4K cinema cameras, viral hook scripting, and high-ROAS Meta ad funnels directly to your doorstep in Kalyan.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20looking%20for%20Social%20Media%20Marketing%20in%20Kalyan."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Claim Free Kalyan Brand Audit →
          </a>
          <Link
            href="/#work"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Explore Impact Metrics
          </Link>
        </div>
      </section>

      {/* Kalyan Key Capabilities */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">01 / LOCAL PRESENCE</div>
            <h3 className="font-display text-2xl text-cream mb-4">Minutes Away From Kalyan</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Located right next door at Jaywant Niwas, Star Colony, Gandhi Nagar, our production crew conducts regular shoot days in Khadakpada, Birla College Road, and Kalyan West.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">02 / VIRAL REEL HOOKS</div>
            <h3 className="font-display text-2xl text-cream mb-4">High-Retention Video</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              We engineer custom psychological hooks for Kalyan consumers that keep them watching past the 3-second threshold and clicking directly to chat with your sales team.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">03 / META & GOOGLE ADS</div>
            <h3 className="font-display text-2xl text-cream mb-4">Hyper-Local Radius Ads</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Target high-intent customers in Kalyan, Dombivli, and Ulhasnagar with Meta ads and Google Search campaigns that yield measurable store visits and WhatsApp leads.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <div className="p-12 rounded-3xl bg-lime text-ink">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Ready to scale your business in Kalyan?
          </h2>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Contact our production team for a 30-minute growth session or on-location shoot schedule.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20social%20media%20growth%20in%20Kalyan."
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
