import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dombivli & Kalyan | Viral Flux Media - Digital Marketing Agency",
  description: "Looking for the best social media marketing agency in Dombivli? Viral Flux Media helps local brands, retail, real estate, and cafes in Dombivli & Kalyan scale with viral reels, Meta ads, and organic Instagram growth.",
  alternates: {
    canonical: "/social-media-marketing-agency-dombivli",
  },
  keywords: [
    "Social Media Marketing Agency in Dombivli",
    "Best Social Media Agency in Dombivli",
    "Social Media Agency Dombivli East",
    "Digital Marketing Agency Dombivli",
    "Social Media Marketing Kalyan",
    "Instagram Growth Agency Dombivli",
    "Reel Makers Dombivli",
    "Social Media Manager Dombivli",
  ],
  openGraph: {
    title: "Best Social Media Marketing Agency in Dombivli & Kalyan | Viral Flux Media - Digital Marketing Agency",
    description: "Scale your brand with viral reels, local audience targeting, and high-converting social media management in Dombivli & Kalyan.",
    url: "https://viralfluxmedia.in/social-media-marketing-agency-dombivli",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function SocialMediaAgencyDombivliPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why hire a local social media marketing agency in Dombivli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A local agency based in Dombivli understands the local consumer psychology, Marathi and Hindi regional trends, commuter timing along the central railway line, and local footfall drivers for retail, clinics, restaurants, and real estate."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas does Viral Flux Media cover from Dombivli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide on-site content shoots and full-service social media management across Gandhi Nagar, Star Colony, Dombivli East & West (421201), Kalyan, Thane, Navi Mumbai, and Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can my brand see results on Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our cinematic reels and hook testing framework typically generate viral reach spikes within the first 30 to 45 days, followed by continuous follower acquisition and customer inquiries."
        }
      }
    ]
  };

  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Dombivli East & West · Kalyan · Thane · Mumbai
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          The #1 Social Media Marketing Agency in <em className="text-lime not-italic font-normal">Dombivli</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          We transform local businesses in Dombivli and Kalyan into regional market leaders. From high-retention Instagram Reels to hyper-targeted Meta ad campaigns, we engineer organic attention that translates to revenue.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20looking%20for%20Social%20Media%20Marketing%20in%20Dombivli."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-transform"
          >
            Claim Free Social Media Audit →
          </a>
          <Link
            href="/#services"
            className="rounded-full border border-cream/20 text-cream px-8 py-4 font-mono-label text-sm hover:border-lime hover:text-lime transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 bg-white/[0.02] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-4xl md:text-5xl text-lime font-light">10M+</div>
            <div className="font-mono-label text-xs text-cream/50 mt-1 uppercase">Reel Views Generated</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-lime font-light">+300%</div>
            <div className="font-mono-label text-xs text-cream/50 mt-1 uppercase">Average Follower Growth</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-lime font-light">421201</div>
            <div className="font-mono-label text-xs text-cream/50 mt-1 uppercase">Dombivli Headquarters</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-lime font-light">40%+</div>
            <div className="font-mono-label text-xs text-cream/50 mt-1 uppercase">Direct Inquiries Increase</div>
          </div>
        </div>
      </section>

      {/* Why Local Brands in Dombivli Choose Us */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <span className="font-mono-label text-lime text-xs uppercase tracking-wider block mb-3">
              Hyper-Local Advantage
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Why generic Mumbai agencies fail in <em className="italic text-lime">Dombivli & Kalyan</em>.
            </h2>
            <p className="text-cream/70 mt-6 text-base md:text-lg leading-relaxed">
              Dombivli isn&apos;t Bandra. The audience responds to authenticity, cultural context, relatable humor, and localized value propositions. Having our production team right here in Dombivli gives your brand a massive speed and quality edge.
            </p>
          </div>

          <div className="md:col-span-7 space-y-8">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-lime/40 transition-colors">
              <div className="font-display text-2xl text-lime mb-2">01 / On-Location Reel Shoots</div>
              <p className="text-cream/80 text-sm md:text-base leading-relaxed">
                Our videographers come directly to your store, clinic, showroom, or office in Dombivli, Kalyan, or Thane. We bring cinema cameras, wireless mics, and lighting setups to capture authentic, high-definition content.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-lime/40 transition-colors">
              <div className="font-display text-2xl text-lime mb-2">02 / Local Influencer Network</div>
              <p className="text-cream/80 text-sm md:text-base leading-relaxed">
                We partner with verified micro-influencers and regional creators based in Dombivli, Kalyan, and Thane whose followers actually visit local establishments and purchase products.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-lime/40 transition-colors">
              <div className="font-display text-2xl text-lime mb-2">03 / Geo-Targeted Meta Ads</div>
              <p className="text-cream/80 text-sm md:text-base leading-relaxed">
                Zero ad spend wasted. We target potential buyers within a 3km to 15km radius of your Dombivli location, driving real footfall and qualified WhatsApp leads directly to your sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve in Dombivli */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Industries We Dominate in <span className="text-lime">Dombivli & Kalyan</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Real Estate Developers & Agents",
              desc: "Cinematic drone walkthroughs and targeted lead-gen ads for residential & commercial properties in Dombivli East & Kalyan.",
            },
            {
              title: "Doctors, Clinics & Hospitals",
              desc: "Doctor branding reels, patient testimonials, and health awareness campaigns that build trust and drive patient bookings.",
            },
            {
              title: "Restaurants, Cafés & Lounges",
              desc: "Mouth-watering viral food reels that pack your tables on weekends and make your cafe the talk of Dombivli.",
            },
            {
              title: "Retail Stores & Fashion Boutiques",
              desc: "Showcase new collections, festive offers, and ethnic wear with viral transition reels and customer transformation videos.",
            },
            {
              title: "Gyms, Fitness Studios & Trainers",
              desc: "High-energy workout edits, client transformations, and seasonal membership offer campaigns.",
            },
            {
              title: "Jewellery & Bridal Brands",
              desc: "Ultra-luxury macro video production capturing the sparkle of ornaments and driving high-ticket wedding inquiries.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-lime/30 transition-all">
              <h3 className="font-display text-xl text-cream font-medium mb-2">{item.title}</h3>
              <p className="font-mono-label text-xs text-cream/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-light mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Why hire a local agency in Dombivli?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              We are on the ground. When you have a sale, an event, or fresh inventory, our video production team can be at your Dombivli store in 20 minutes. No waiting for out-of-town agencies.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">What does your social media package include?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              Full end-to-end management: content strategy, scriptwriting, on-site filming, cinematic video editing, custom graphic design, daily posting, caption copywriting, hashtag strategy, and lead generation ad management.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display text-xl text-lime mb-2">Where is your office located?</h3>
            <p className="font-mono-label text-sm text-cream/70 leading-relaxed">
              We are based at 203, Jaywant Niwas, Star Colony, Gandhi Nagar, Dombivli, Maharashtra 421201. We meet clients both in-person across Dombivli, Kalyan, and Thane, or conduct virtual strategy consultations.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center p-12 rounded-3xl bg-lime text-ink">
          <h3 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Ready to make your brand the #1 choice in Dombivli?
          </h3>
          <p className="font-mono-label text-ink/80 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Book a complimentary 30-minute growth strategy session with our Dombivli studio team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20let's%20discuss%20social%20media%20marketing%20for%20my%20business%20in%20Dombivli."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-cream px-8 py-4 font-mono-label text-sm font-bold hover:bg-cream hover:text-ink transition-colors"
            >
              Chat on WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
