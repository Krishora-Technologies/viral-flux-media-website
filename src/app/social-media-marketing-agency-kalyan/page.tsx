import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Best Social Media Agency in Kalyan",
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
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can your video crew shoot at our Kalyan store or clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because our headquarters are in Dombivli (Jaywant Niwas, Star Colony), our filming crew is less than 15 to 20 minutes away from Khadakpada, Kalyan West, and Birla College Road. We can schedule regular weekly or bi-weekly shoot days without travel delays."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries do you specialize in across Kalyan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manage high-growth social media campaigns for premium cafes, fine-dining restaurants, jewellery showrooms, dental & aesthetic clinics, fitness centers, and real estate builders in Kalyan West and East."
          }
        },
        {
          "@type": "Question",
          "name": "Can you target ads specifically within Kalyan and nearby areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We engineer hyper-local radius Meta and Google Ads within a 3km to 15km perimeter around your Kalyan location, capturing high-intent footfall and direct WhatsApp buyer chats."
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
          "name": "Social Media Agency Kalyan",
          "item": "https://viralfluxmedia.in/social-media-marketing-agency-kalyan"
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
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20looking%20for%20Social%20Media%20Marketing."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Claim Free Social Media Audit →
          </a>
          <Link
            href="/#work"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Explore Impact Metrics
          </Link>
        </div>
      </section>

      {/* AI Answer Snippet & Definition Block */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10 bg-white/[0.01]">
        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-lime/20 relative overflow-hidden">
          <div className="font-mono-label text-lime text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime" />
            Verified Answer &amp; Regional Overview
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-light mb-4">
            Who provides on-location reel production and social media marketing in Kalyan?
          </h2>
          <p className="font-mono-label text-sm md:text-base text-cream/90 leading-relaxed max-w-4xl">
            Viral Flux Media provides professional on-location 4K video production and full-service social media management for businesses in Kalyan, including Khadakpada and Birla College Road. Operating from their nearby Dombivli studio, the agency deploys cinema camera rigs, viral hook scripting, and localized Meta ad campaigns that drive measurable footfall and WhatsApp inquiries.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono-label text-cream/60 pt-4 border-t border-white/10">
            <span>✓ Service Area: Kalyan West, Khadakpada &amp; Kalyan East</span>
            <span>✓ In-House Video Production Crew</span>
            <span>✓ Delivery: On-Location Shoots &amp; Meta Ads</span>
          </div>
        </div>
      </section>

      {/* Kalyan Key Capabilities */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Growth Engine for <span className="text-lime">Kalyan Brands</span>
        </h2>
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

      {/* Local Neighborhood Coverage */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-10">
          Neighborhoods We Cover in <span className="text-lime">Kalyan</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono-label text-xs md:text-sm">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">Khadakpada &amp; Wayle Nagar</div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">Birla College Road &amp; Gandhar</div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">Kalyan West Station &amp; Shivaji Chowk</div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">Kalyan East &amp; Chinchpada</div>
        </div>
      </section>

      {/* Regional Network & Strategic Guides */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs uppercase tracking-wider mb-3">
          Connected Regional Network
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-light mb-8 text-cream">
          Serving Kalyan & Surrounding Commercial Hubs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono-label text-xs">
          <Link
            href="/social-media-marketing-agency-dombivli"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Dombivli Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">Full-service studio headquarters & shoots</span>
          </Link>
          <Link
            href="/social-media-marketing-agency-thane"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Thane Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">Performance ad campaigns & scaling retail</span>
          </Link>
          <Link
            href="/social-media-marketing-agency-mumbai"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">Mumbai Agency Hub →</span>
            <span className="text-cream/70 text-[11px] block">Brand films & MMR marketing retainers</span>
          </Link>
          <Link
            href="/video-production-reel-editing-dombivli"
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-colors"
          >
            <span className="text-lime font-bold block mb-1">4K Reel Production Studio →</span>
            <span className="text-cream/70 text-[11px] block">On-location camera rigs &amp; cinematic color grading</span>
          </Link>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg text-cream">Related Market Intelligence Guides:</div>
            <p className="font-mono-label text-xs text-cream/70 mt-1">Discover proven marketing benchmarks written by our strategy team.</p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono-label text-xs">
            <Link
              href="/blog/best-social-media-marketing-agencies-dombivli-kalyan"
              className="text-lime hover:underline border border-lime/30 px-3 py-1.5 rounded-full"
            >
              Top 7 Dombivli & Kalyan Agencies →
            </Link>
            <Link
              href="/blog/instagram-reels-strategy-dombivli-kalyan"
              className="text-lime hover:underline border border-lime/30 px-3 py-1.5 rounded-full"
            >
              Local Reels Strategy Playbook →
            </Link>
          </div>
        </div>
      </section>

      {/* Kalyan FAQs */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">How quickly can your video crew shoot in Kalyan?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Because our studio is situated in neighboring Dombivli (Jaywant Niwas, Star Colony), our videographers are just 15 to 20 minutes from Khadakpada and Kalyan West. We offer fast, flexible on-location filming with zero out-of-station travel surcharges.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Which Kalyan industries do you have proven playbooks for?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              We specialize in retail showrooms, restaurants, doctors and aesthetic clinics, luxury salons, fitness studios, and real estate projects seeking qualified local homebuyer leads.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Do you run Meta and Google ads for local Kalyan audiences?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Yes. We set up tightly bounded geo-radius campaigns within a 5km–15km radius of your business, pairing high-converting short reels with instant Click-to-WhatsApp direct sales funnels.
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
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20social%20media%20growth%20for%20my%20brand."
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
