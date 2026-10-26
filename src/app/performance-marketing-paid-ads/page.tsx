import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Performance Marketing & Paid Ads Agency",
  description: "Stop wasting money boosting posts. Viral Flux Media is a performance marketing and paid ads agency in Dombivli & Thane running high-ROAS Meta ads, Google ads, and WhatsApp lead campaigns.",
  alternates: {
    canonical: "/performance-marketing-paid-ads",
  },
  keywords: [
    "Meta Ads Agency Dombivli",
    "Google Ads Agency Thane",
    "Performance Marketing Agency Kalyan",
    "Paid Advertising Agency Mumbai",
    "Facebook Ads Manager Dombivli",
    "Local Lead Generation Agency",
    "WhatsApp Ads Specialist",
    "Performance Marketing Agency Maharashtra",
  ],
  openGraph: {
    title: "Performance Marketing & Paid Ads Agency | Meta & Google Ads | Viral Flux Media - Digital Marketing Agency",
    description: "Data-driven Meta & Google ad funnels built for maximum ROAS. Serving brands in Dombivli, Thane, Mumbai and nationwide.",
    url: "https://viralfluxmedia.in/performance-marketing-paid-ads",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function PerformanceMarketingPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is running ads via Meta Ads Manager better than boosting posts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Boosting posts optimizes primarily for superficial likes and bot impressions. Ads Manager enables custom pixel conversion tracking (CAPI), hyper-local radius targeting (Dombivli, Kalyan, Thane, Mumbai), Lookalike audiences, and direct Click-to-WhatsApp funnels that bring actual paying customers."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize ad campaigns for local businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We structure campaigns with disciplined phased testing to allow Meta's machine learning algorithm to exit the learning phase efficiently and optimize for the lowest cost per qualified lead."
          }
        },
        {
          "@type": "Question",
          "name": "How does Click-to-WhatsApp advertising work for Indian buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a prospect clicks your Instagram Reel or Story ad, it opens a pre-filled WhatsApp chat directly with your sales team. This bypasses slow website landing pages and increases inquiry conversion rates by up to 3x."
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
          "name": "Performance Marketing & Paid Ads",
          "item": "https://viralfluxmedia.in/performance-marketing-paid-ads"
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
          Meta Ads · Google Ads · High-ROAS Funnel Engineering
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Performance Marketing & Paid Ads That Bring <em className="text-lime not-italic font-normal">Real Revenue</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Tired of spending thousands on Meta & Google Ads with zero tangible sales? We construct scientific paid acquisition funnels combining high-converting creative hooks with rigorous bid testing.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I'd%20like%20to%20audit%20my%20Paid%20Ads%20campaigns."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Request Paid Ads Audit →
          </a>
          <Link
            href="/#inquiry"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Calculate Projected ROAS
          </Link>
        </div>
      </section>

      {/* AI Answer Snippet & Conversion Architecture Block */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10 bg-white/[0.01]">
        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-lime/20 relative overflow-hidden">
          <div className="font-mono-label text-lime text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime" />
            Verified Answer &amp; Acquisition Architecture
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-light mb-4">
            How does Click-to-WhatsApp paid advertising generate leads for Indian businesses?
          </h2>
          <p className="font-mono-label text-sm md:text-base text-cream/90 leading-relaxed max-w-4xl">
            Click-to-WhatsApp paid advertising directs high-intent prospects from Meta feeds directly into an encrypted WhatsApp conversation with sales teams. Viral Flux Media pairs geo-targeted Facebook and Instagram ads with server-side CAPI tracking and automated CRM routing, eliminating slow landing page bounce rates and generating qualified customer conversations for local and regional Indian businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono-label text-cream/60 pt-4 border-t border-white/10">
            <span>✓ Platform: Meta Ads Manager &amp; Conversions API (CAPI)</span>
            <span>✓ Funnel: Direct-to-WhatsApp Frictionless Inquiries</span>
            <span>✓ Geotargeting: Dombivli, Kalyan, Thane, Mumbai &amp; All-India</span>
          </div>
        </div>
      </section>

      {/* Why Boosting Posts Is Burning Cash */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono-label text-lime text-xs uppercase tracking-wider block mb-3">
              The Boosting Trap
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
              Why hitting &ldquo;Boost Post&rdquo; is burning your marketing budget.
            </h2>
            <p className="text-cream/70 mt-6 text-base md:text-lg leading-relaxed">
              When you click &ldquo;Boost&rdquo; on Instagram, Meta optimizes for cheap likes and superficial impressions from bots or non-buyers. Real performance marketing requires Meta Ads Manager, custom conversions, server-side CAPI tracking, and dynamic retargeting.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-lime text-2xl font-mono">✕</span>
              <div>
                <h4 className="font-display text-lg text-cream">Amateur Boosting:</h4>
                <p className="font-mono-label text-xs text-cream/50 mt-1">Random likes from outside your service area, zero CRM integration, no pixel tracking, high cost per lead.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-white/10">
              <span className="text-lime text-2xl font-mono">✓</span>
              <div>
                <h4 className="font-display text-lg text-lime">Viral Flux Media Strategy:</h4>
                <p className="font-mono-label text-xs text-cream/80 mt-1">Hyper-local radius targeting (Dombivli, Kalyan, Thane, Mumbai), custom lookalikes, WhatsApp direct-click chat funnels, and rigorous A/B creative testing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels We Master */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Performance Channels We Scale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/30 transition-all">
            <div className="font-mono-label text-lime text-xs mb-3">01 / META ADS</div>
            <h3 className="font-display text-2xl text-cream mb-4">Instagram & Facebook Ads</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
              Story and Reel ads crafted with UGC (user-generated content) styles that look like native recommendations, driving conversion rates 3x higher than standard banner ads.
            </p>
            <div className="font-mono-label text-xs text-lime">ROAS Target: 3.5X – 6.0X</div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/30 transition-all">
            <div className="font-mono-label text-lime text-xs mb-3">02 / GOOGLE SEARCH & P-MAX</div>
            <h3 className="font-display text-2xl text-cream mb-4">High-Intent Google Ads</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
              Capture customers in Dombivli, Kalyan, and Mumbai the exact moment they search for your services with negative keyword scrubbing and high Quality Score ad copy.
            </p>
            <div className="font-mono-label text-xs text-lime">High Buyer Intent</div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/30 transition-all">
            <div className="font-mono-label text-lime text-xs mb-3">03 / WHATSAPP FUNNELS</div>
            <h3 className="font-display text-2xl text-cream mb-4">Click-to-WhatsApp Lead Gen</h3>
            <p className="font-mono-label text-xs text-cream/70 leading-relaxed mb-6">
              Direct Indian buyers straight from Instagram Reels into instant WhatsApp chats with automated qualification bots and instant sales team notification.
            </p>
            <div className="font-mono-label text-xs text-lime">Conversion Rate: 28%+</div>
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
            <span className="text-cream/70 text-[11px] block">Full-service studio headquarters & shoots</span>
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
            <p className="font-mono-label text-xs text-cream/70 mt-1">Read our technical breakdowns on local agency comparisons and reels strategy authored by our strategy team.</p>
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

      {/* Performance Marketing FAQs */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Performance Marketing FAQs
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Why is Meta Ads Manager superior to &ldquo;Boost Post&rdquo;?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Boosting optimizes for superficial vanity clicks. Ads Manager unlocks custom Conversions API tracking, negative radius geo-fencing, retargeting pools, and direct CRM integrations.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">How do Click-to-WhatsApp ads convert better in India?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Indian consumers prefer chatting over filling complex forms. Direct WhatsApp ad funnels take potential buyers straight into a 1-on-1 chat, resulting in 28%+ conversion rates.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">How do you report ad performance?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              You receive weekly live reporting dashboards tracking exact spend, cost-per-lead (CPL), Return on Ad Spend (ROAS), and verified store walk-ins or sales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <div className="p-12 rounded-3xl bg-lime text-ink">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Ready to stop guessing and start scaling?
          </h2>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Book a complimentary ad account review. We will identify the leaks in your current funnel within 24 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20Performance%20Marketing%20and%20Paid%20Ads."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-cream px-8 py-4 font-mono-label text-sm font-bold hover:bg-cream hover:text-ink transition-colors"
            >
              Connect on WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
