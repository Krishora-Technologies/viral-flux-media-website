import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="bg-lime py-32 md:py-48 grain overflow-hidden relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-ink/10"
      />
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center relative">
        <div className="font-mono-label text-ink/60 mb-8">— Ready when you are</div>
        <h2 className="font-display text-[clamp(3rem,9vw,9rem)] font-light leading-[0.9] text-ink">
          Let's build<br />
          <em className="italic">something</em><br />
          people can't<br />
          <span className="underline decoration-2 underline-offset-[0.15em]">scroll past.</span>
        </h2>
        <p className="mt-10 text-ink/60 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-snug">
          Ready to grow your brand on social media?<br />
          Let’s start your journey today.
        </p>
        <a
          href="mailto:hello@viralflux.co"
          className="inline-flex items-center gap-3 mt-16 rounded-full bg-ink text-cream px-10 py-6 font-mono-label hover:bg-cream hover:text-ink transition-colors"
        >
          hello@viralflux.co <span className="text-xl">↗</span>
        </a>
      </div>
    </section>
  );
}
