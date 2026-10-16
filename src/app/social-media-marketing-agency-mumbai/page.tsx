import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency Mumbai | Viral Content & Ads | Viral Flux Media - Digital Marketing Agency",
  description: "Viral Flux Media - Digital Marketing Agency is a performance-driven social media and viral growth agency in the Mumbai Metropolitan Region. Specializing in cinematic 4K reels, Meta ads, and rapid brand scaling.",
  alternates: {
    canonical: "/social-media-marketing-agency-mumbai",
  },
  keywords: [
    "Social Media Marketing Agency Mumbai",
    "Best Social Media Agency in Mumbai",
    "Viral Reels Production Mumbai",
    "Performance Marketing Agency Mumbai",
    "Digital Marketing Agency Mumbai MMR",
    "Instagram Growth Agency Mumbai",
  ],
  openGraph: {
    title: "Social Media Marketing Agency Mumbai | Viral Content & Ads | Viral Flux Media - Digital Marketing Agency",
    description: "Cinematic reels, performance advertising, and viral brand growth across the Mumbai Metropolitan Region.",
    url: "https://viralfluxmedia.in/social-media-marketing-agency-mumbai",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function SocialMediaAgencyMumbaiPage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Mumbai MMR · South Mumbai · Western Suburbs · Central Mumbai
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Social Media Marketing That Cuts Through <em className="text-lime not-italic font-normal">Mumbai</em> Noise.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Mumbai feeds are the most competitive attention marketplace in the country. We don&apos;t post generic corporate filler. We produce cinematic, hook-heavy video assets that stop scrollers and build cultural influence for ambitious Mumbai brands.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20looking%20for%20Social%20Media%20Marketing%20in%20Mumbai."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Claim Free Mumbai Brand Audit →
          </a>
          <Link
            href="/performance-marketing-paid-ads"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Explore Performance Ad Funnels
          </Link>
        </div>
      </section>

      {/* Mumbai Capabilities */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">01 / ATTENTION ENGINEERING</div>
            <h3 className="font-display text-2xl text-cream mb-4">Hooks That Win Mumbai</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Mumbai audiences scroll with lightning speed. Our editing methodology pairs rhythm-matched sound design, animated kinetic subtitles, and strong visual triggers that maximize watch time.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">02 / END-TO-END PRODUCTION</div>
            <h3 className="font-display text-2xl text-cream mb-4">On-Location Cinema Shoots</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              From corporate offices in BKC and Lower Parel to boutique restaurants and luxury showrooms, our cinema crew films high-definition content directly at your facilities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">03 / PERFORMANCE AD ARCHITECTURE</div>
            <h3 className="font-display text-2xl text-cream mb-4">Meta & Google Acquisition</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Scale revenue across Mumbai with custom conversion funnels, retargeting pools, and direct WhatsApp lead workflows that deliver measurable return on advertising spend.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <div className="p-12 rounded-3xl bg-lime text-ink">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Ready to turn your brand into a Mumbai content machine?
          </h2>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Speak directly with our growth strategists about custom monthly retainers and shoot schedules.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20social%20media%20marketing%20in%20Mumbai."
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
