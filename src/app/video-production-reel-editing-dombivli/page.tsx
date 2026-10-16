import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Reel Makers & Video Production in Dombivli & Kalyan | Viral Flux Media - Digital Marketing Agency",
  description: "Looking for cinematic reel makers and video production in Dombivli? Viral Flux Media produces viral Instagram reels, brand films, and product videos with 4K cinema gear for brands in Dombivli, Kalyan & Thane.",
  alternates: {
    canonical: "/video-production-reel-editing-dombivli",
  },
  keywords: [
    "Reel Makers in Dombivli",
    "Video Production in Dombivli",
    "Reel Editing Dombivli",
    "Video Production Kalyan",
    "Cinematic Video Shooting Dombivli",
    "Videographer Dombivli",
    "Product Video Shoot Kalyan",
    "Instagram Reel Editor Thane",
  ],
  openGraph: {
    title: "Reel Makers & Video Production in Dombivli & Kalyan | Viral Flux Media - Digital Marketing Agency",
    description: "High-end 4K video shoots, viral hooks, and Hollywood-grade sound design engineered to stop scrollers in Dombivli, Kalyan & Thane.",
    url: "https://viralfluxmedia.in/video-production-reel-editing-dombivli",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function VideoProductionDombivliPage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          4K Video Shoots · DaVinci Color Grading · Viral Hook Framework
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Cinematic Reel Makers & Video Production in <em className="text-lime not-italic font-normal">Dombivli</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Stop posting flat, amateur phone videos that get lost in the algorithm. We shoot, edit, and master scroll-stopping Instagram Reels and brand films right here in Dombivli, Kalyan, and Thane.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20want%20to%20book%20a%20Reel%20Shoot%20in%20Dombivli."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Book a Reel Shoot Session →
          </a>
          <Link
            href="/#work"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Watch Our Showreel
          </Link>
        </div>
      </section>

      {/* Video Production Pipeline */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-label text-lime text-xs uppercase tracking-wider block mb-3">
            Engineered For Attention
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            How we engineer <em className="text-lime italic">viral retention</em>.
          </h2>
          <p className="text-cream/70 text-base md:text-lg mt-4 font-light">
            An Instagram Reel doesn&apos;t go viral by accident. It succeeds because the first 1.5 seconds demand attention and the pacing never lets the viewer scroll away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">PHASE I</div>
            <h3 className="font-display text-2xl text-cream mb-4">Psychological Hooks</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              We script custom verbal and visual hooks designed for Dombivli and Indian digital audiences. We test curiosity gaps, contrarian statements, and high-impact visual patterns.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">PHASE II</div>
            <h3 className="font-display text-2xl text-cream mb-4">On-Location Cinema Shoots</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              We bring full studio production to your doorstep in Dombivli East, Dombivli West, Kalyan, or Thane. High-CRI lighting, multi-mic audio recording, and stabilized camera movement.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="font-mono-label text-lime text-xs mb-3">PHASE III</div>
            <h3 className="font-display text-2xl text-cream mb-4">Hollywood-Grade Post Production</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed">
              Dynamic rhythm-matched jump cuts, custom sound effects (SFX), animated subtitles with highlight keywords, and cinematic color grading in DaVinci Resolve.
            </p>
          </div>
        </div>
      </section>

      {/* Reel Formats We Produce */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Formats We Shoot for Brands in <span className="text-lime">Dombivli & Kalyan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="font-mono-label text-lime text-xs mb-2">FORMAT 01</div>
              <h3 className="font-display text-3xl text-cream mb-3">Talking-Head & Founder Authority Reels</h3>
              <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
                Position you, the business owner, doctor, or founder, as the indisputable authority in Dombivli. We provide teleprompters, studio lighting, and line coaching.
              </p>
            </div>
            <div className="font-mono-label text-[11px] text-lime">Ideal for: Doctors, Lawyers, Coaches, Real Estate Developers</div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="font-mono-label text-lime text-xs mb-2">FORMAT 02</div>
              <h3 className="font-display text-3xl text-cream mb-3">High-Energy Aesthetic & Transition Reels</h3>
              <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
                Fast-paced beat-matched transitions, speed ramps, and seamless invisible cuts that mesmerize viewers and rack up millions of views and saves.
              </p>
            </div>
            <div className="font-mono-label text-[11px] text-lime">Ideal for: Cafes, Restaurants, Salons, Boutiques, Gyms</div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="font-mono-label text-lime text-xs mb-2">FORMAT 03</div>
              <h3 className="font-display text-3xl text-cream mb-3">Cinematic Product Showcases & Macro Shoots</h3>
              <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
                Ultra-detailed macro lenses showcasing the texture, shine, and craftsmanship of your jewellery, apparel, electronics, or menu specials.
              </p>
            </div>
            <div className="font-mono-label text-[11px] text-lime">Ideal for: Jewellers, D2C Brands, Luxury Retail</div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="font-mono-label text-lime text-xs mb-2">FORMAT 04</div>
              <h3 className="font-display text-3xl text-cream mb-3">Real Estate Walkthroughs & Drone Perspectives</h3>
              <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
                FPV drone flights, smooth gimbal walkthroughs, and lifestyle showcasing that turn luxury flats into sold-out developments across Dombivli and Kalyan.
              </p>
            </div>
            <div className="font-mono-label text-[11px] text-lime">Ideal for: Property Developers, Brokers, Architects</div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <div className="p-12 rounded-3xl bg-lime text-ink">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Schedule a Shoot in Dombivli This Week
          </h2>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Our production crew is active across Dombivli, Kalyan, and Thane. We can film an entire month&apos;s worth of viral content in a single afternoon.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I'd%20like%20to%20schedule%20a%20Reel%20Production%20shoot%20in%20Dombivli."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-cream px-8 py-4 font-mono-label text-sm font-bold hover:bg-cream hover:text-ink transition-colors"
            >
              Check Shoot Availability on WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
