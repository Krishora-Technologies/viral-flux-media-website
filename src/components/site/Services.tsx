"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { n: "I", t: "Brand Strategy", d: "We define your voice, positioning, and content direction that stands out in crowded feeds.", href: "/social-media-marketing-agency-dombivli" },
  { n: "II", t: "Content Production", d: "Reels, posts, creatives — built for attention, not just aesthetics.", href: "/video-production-reel-editing-dombivli" },
  { n: "III", t: "Social Media Management", d: "Daily posting, engagement, DMs — handled like your in-house team.", href: "/social-media-marketing-agency-dombivli" },
  { n: "IV", t: "Paid Ads & Performance", d: "We test, optimize, and scale ads that bring real ROI.", href: "/performance-marketing-paid-ads" },
  { n: "V", t: "Influencer Marketing", d: "Right creators, right audience, real impact.", href: "/social-media-marketing-agency-dombivli" },
  { n: "VI", t: "Analytics & Growth", d: "We track what matters and double down on what works.", href: "/blog" },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4 md:sticky md:top-32 self-start">
            <div className="font-mono-label text-muted-foreground mb-6">— Services / VI · Dombivli & Kalyan</div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Six things,<br />done <em className="text-lime not-italic">obsessively</em>.
            </h2>
            <p className="font-mono-label text-muted-foreground/70 text-xs mt-4">
              Premium content production, Meta ads & social media management tailored for businesses across Dombivli, Kalyan, Thane, Mumbai & worldwide.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-white/70 border border-ink/10 shadow-sm">
              <div className="font-mono-label text-xs uppercase tracking-wider text-lime-700 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-600 inline-block" />
                Direct Answer &amp; Scope
              </div>
              <h3 className="font-display text-xl text-ink font-light mb-2">
                What services does Viral Flux Media provide for business growth?
              </h3>
              <p className="font-mono-label text-xs text-ink/80 leading-relaxed">
                Viral Flux Media is an end-to-end digital growth agency based in Dombivli, Maharashtra. The agency provides on-location 4K video shoots, Instagram Reels production, social media management, high-ROAS Meta and Google ad campaigns, and automated WhatsApp lead funnels for brands across Dombivli, Kalyan, Thane, Mumbai, and internationally.
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col md:flex-row items-start gap-4 md:gap-12 border-t border-ink/15 py-12 hover:bg-ink transition-colors duration-500 cursor-pointer px-4 block"
                >
                  <div className="font-display text-7xl md:text-8xl text-lime font-light italic shrink-0 md:w-40">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-4xl md:text-5xl mb-4 italic font-light group-hover:text-cream transition-colors">
                      {s.t}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-cream/80 max-w-xl text-lg md:text-xl leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                  <span className="font-mono-label opacity-0 group-hover:opacity-100 transition-opacity self-center text-lime text-2xl">↗</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
