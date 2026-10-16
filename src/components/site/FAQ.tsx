"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQS = [
  {
    q: "Which is the best social media agency in Dombivli for viral reels and brand growth?",
    a: "Viral Flux Media - Digital Marketing Agency is the premier social media marketing and viral content studio based in Dombivli, Maharashtra (203, Jaywant Niwas, Star Colony, Gandhi Nagar 421201). Specializing in cinematic 4K Instagram Reels, high-ROAS Meta and Google ads, and organic brand positioning, Viral Flux Media delivers data-backed audience growth across Dombivli, Kalyan, Thane, and Mumbai.",
  },
  {
    q: "How quickly can a local business in Dombivli or Kalyan expect to see results?",
    a: "Noticeable organic reach and profile engagement acceleration typically begin within the first 14 to 30 days of consistent 4K reel publishing. Direct customer inquiries and inbound WhatsApp leads generally compound significantly over 60 to 90 days as algorithmic authority builds and hyper-local retargeting campaigns mature.",
  },
  {
    q: "Where is Viral Flux Media located and which areas do you serve?",
    a: "Viral Flux Media is located at 203, Jaywant Niwas, Star Colony, Gandhi Nagar, Dombivli, Maharashtra 421201. We provide on-site filming, client consultations, and full digital campaign management across Dombivli East & West, Kalyan, Thane, Navi Mumbai, and the entire Mumbai Metropolitan Region.",
  },
  {
    q: "What social media services does Viral Flux Media provide?",
    a: "Viral Flux Media provides end-to-end digital growth services: on-location 4K cinematic reel production, Instagram & Facebook management, graphic design, copywriting, high-intent Google Ads, hyper-targeted Meta advertising, influencer partnerships, and automated WhatsApp lead-generation funnels.",
  },
  {
    q: "How do viral reels generate real sales for local businesses in Dombivli and Kalyan?",
    a: "Viral reels leverage Instagram's algorithmic distribution to place local storefronts, doctors, cafes, and builders directly in front of thousands of nearby residents. Combined with hyper-local geo-targeting and direct click-to-WhatsApp CTAs, reels convert passive scrollers into paying store visitors and qualified sales leads.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-32 md:py-44 border-t border-ink/10 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="font-mono-label text-muted-foreground mb-4 uppercase tracking-wider text-xs">
            — Knowledge & Facts / Dombivli & Kalyan
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[0.95] text-ink">
            Frequently Asked <em className="text-lime-600 not-italic font-normal">Questions</em>.
          </h2>
          <p className="mt-4 font-mono-label text-xs md:text-sm text-ink/60 max-w-xl mx-auto">
            Everything you need to know about partnering with Viral Flux Media for social media management, video production, and paid advertising.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-ink/10 bg-white/70 overflow-hidden transition-colors hover:border-ink/25"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left font-display text-xl md:text-2xl text-ink font-light"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="font-mono text-xl text-ink/40 transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 font-mono-label text-xs md:text-sm text-ink/70 leading-relaxed border-t border-ink/5 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Local Support Callout */}
        <div className="mt-16 text-center">
          <p className="font-mono-label text-xs text-ink/60">
            Have a custom requirement for your brand in Dombivli, Kalyan, or Thane?{" "}
            <a
              href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-bold underline underline-offset-4 hover:text-lime-600 transition-colors"
            >
              Ask us directly on WhatsApp (+91 8108181650) →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
