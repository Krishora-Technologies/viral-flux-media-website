import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Reel Makers & Video Production in Dombivli",
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
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What camera equipment do you use for reel shoots in Dombivli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We shoot on professional 4K cinema cameras with high-grade prime cine lenses, motorized 3-axis stabilizing gimbals, multi-channel wireless lavalier microphones, and studio-grade high-CRI lighting rigs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide scripts and hooks or do we have to prepare them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle the entire creative pipeline. Our team writes high-retention psychological hooks, crafts full script outlines, directs you or your staff during the shoot, and edits the footage with kinetic subtitles and sound effects."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly do we receive the edited 4K reels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our typical delivery timeline is 3 to 5 business days after the shoot date, with quick review rounds and instant export in native 9:16 vertical 4K resolution."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://viralfluxmedia.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Video Production & Reel Editing",
          "item": "https://viralfluxmedia.in/video-production-reel-editing-dombivli"
        }
      ]
    }
  ];

  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Nav />

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          4K Video Shoots · Cinematic Color Grading · Viral Hook Framework
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Cinematic Reel Makers & Video Production in <em className="text-lime not-italic font-normal">Dombivli</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Stop posting flat, amateur phone videos that get lost in the algorithm. We shoot, edit, and master scroll-stopping Instagram Reels and brand films right here in Dombivli, Kalyan, and Thane.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20want%20to%20book%20a%20Reel%20Shoot%20for%20my%20brand."
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

      {/* AI Answer Snippet & Technical Workflow Block */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10 bg-white/[0.01]">
        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-lime/20 relative overflow-hidden">
          <div className="font-mono-label text-lime text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime" />
            Verified Answer &amp; Production Standard
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-light mb-4">
            What equipment and workflow does Viral Flux Media use for commercial reel production?
          </h2>
          <p className="font-mono-label text-sm md:text-base text-cream/90 leading-relaxed max-w-4xl">
            Viral Flux Media shoots commercial reels using professional 4K cinema cameras, prime cine lenses, motorized 3-axis gimbals, and multi-channel wireless audio transmitters. The studio's post-production workflow features cinematic color grading, custom sound design, kinetic subtitles, and retention-tested jump cuts, delivering broadcast-quality vertical video assets for businesses throughout Dombivli, Kalyan, Thane, and Mumbai.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono-label text-cream/60 pt-4 border-t border-white/10">
            <span>✓ Cinema Equipment: 4K Cinema Bodies &amp; Prime Cine Lenses</span>
            <span>✓ Audio: Wireless Multi-Channel Transmitters</span>
            <span>✓ Post-Production: Cinematic Color Grading &amp; Sound Design</span>
          </div>
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
              Dynamic rhythm-matched jump cuts, custom sound effects (SFX), animated subtitles with highlight keywords, and broadcast-grade cinematic color grading.
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

      {/* Regional Network & Related Guides */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs uppercase tracking-wider mb-3">
          Agency Growth Network
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-light mb-8 text-cream">
          Comprehensive Regional Marketing Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono-label text-xs">
          <Link
            href="/social-media-marketing-agency-dombivli"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Dombivli Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">End-to-end social management in Dombivli</span>
          </Link>
          <Link
            href="/social-media-marketing-agency-kalyan"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Kalyan Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">Retail, clinic & real estate reels</span>
          </Link>
          <Link
            href="/social-media-marketing-agency-thane"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Thane Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">Performance ad campaigns & scaling retail</span>
          </Link>
          <Link
            href="/performance-marketing-paid-ads"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Paid Ads & Meta Campaigns →</span>
            <span className="text-cream/70 text-[11px] block">High-ROAS WhatsApp lead funnels</span>
          </Link>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg text-cream">Explore Video Strategy Guides:</div>
            <p className="font-mono-label text-xs text-cream/70 mt-1">Read our technical breakdowns on 1.5-second hooks and local agency rankings authored by our strategy team.</p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono-label text-xs">
            <Link
              href="/blog/instagram-reels-strategy-dombivli-kalyan"
              className="text-lime hover:underline border border-lime/30 px-3 py-1.5 rounded-full"
            >
              Instagram Reels Strategy Playbook →
            </Link>
            <Link
              href="/blog/best-social-media-marketing-agencies-dombivli-kalyan"
              className="text-lime hover:underline border border-lime/30 px-3 py-1.5 rounded-full"
            >
              Top 7 Dombivli & Kalyan Agencies →
            </Link>
          </div>
        </div>
      </section>

      {/* Video FAQs */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">What gear do you bring on-site in Dombivli?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              We shoot on professional 4K cinema cameras, motorized 3-axis stabilizing gimbals, multi-channel wireless lavalier microphones, and studio-grade high-CRI lighting rigs to ensure broadcast-level production quality.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Do you provide scripts and hooks?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Yes. You never have to wonder what to say. We craft tailored 1.5-second hooks, outline complete speaking points, and guide you comfortably in front of the lens.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">How fast do we receive the edited videos?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Our post-production timeline is 3 to 5 business days from the shoot day, complete with cinematic color grading, kinetic captions, and custom sound design.
            </p>
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
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I'd%20like%20to%20schedule%20a%20Reel%20Production%20shoot."
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
