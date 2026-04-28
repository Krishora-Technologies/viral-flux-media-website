"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "I", t: "Research", d: "We deeply analyze your brand, audience, and competitors." },
  { n: "II", t: "Strategy", d: "Content pillars, posting plan, hooks, and messaging." },
  { n: "III", t: "Execution", d: "High-quality reels, posts, and daily engagement." },
  { n: "IV", t: "Scale", d: "We track performance and scale what’s working." },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section ref={ref} id="process" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="text-center mb-24">
          <div className="font-mono-label text-muted-foreground mb-6">in — How we work</div>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
            Four moves.<br /><em className="text-lime not-italic">Repeated</em> till you win.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-ink/15 -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-lime -translate-x-1/2"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.7 }}
              className={`relative flex gap-8 mb-20 md:mb-32 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
            >
              <div className="md:w-1/2 md:px-12 pl-20 md:pl-0">
                <div className="font-display text-7xl md:text-8xl text-lime font-light italic mb-3">{s.n}</div>
                <h3 className="font-display text-3xl md:text-4xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground max-w-md md:inline-block">{s.d}</p>
              </div>
              <div className="absolute left-8 md:left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-ink ring-4 ring-cream" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
