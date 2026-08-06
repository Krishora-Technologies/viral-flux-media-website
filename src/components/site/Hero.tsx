"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { Phone } from "./Phone";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [mode, setMode] = useState<"idle" | "grow" | "viral">("idle");
  const manualProgress = useMotionValue(0);

  // Combine scroll + manual click. Click drives to 1, scroll keeps it lively.
  const scrollSmoothed = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const combined = useTransform([scrollSmoothed, manualProgress], (v) => {
    const arr = v as number[];
    return Math.max(arr[0], arr[1]);
  });

  const handleClick = (m: "grow" | "viral") => {
    setMode(m);
    // animate manual progress to 1
    const start = performance.now();
    const startVal = manualProgress.get();
    const animate = (t: number) => {
      const elapsed = (t - start) / 1400;
      const eased = 1 - Math.pow(1 - Math.min(elapsed, 1), 3);
      manualProgress.set(startVal + (1 - startVal) * eased);
      if (elapsed < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const phoneRotate = useTransform(combined, [0, 1], [-3, 0]);
  const phoneScale = useTransform(combined, [0, 1], [0.95, 1.02]);
  const bgMarkY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={sectionRef} className="relative h-[150vh] md:h-[260vh]" style={{ position: "relative" }}>
      <div className="sticky top-0 flex h-screen items-start md:items-center pt-20 md:pt-0 overflow-hidden">
        {/* Background mark */}
        <motion.div
          style={{ y: bgMarkY }}
          className="pointer-events-none absolute inset-x-0 top-[-10%] flex justify-center"
        >
          <div className="font-display text-[28vw] leading-none text-ink/[0.04] select-none">FLUX</div>
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start md:items-center gap-4 md:gap-8 px-6 md:grid-cols-12 md:px-12">
          {/* Left copy */}
          <motion.div style={{ y: titleY }} className="md:col-span-5 z-10 pt-4 md:pt-0">
            <div className="font-mono-label mb-3 md:mb-6 flex items-center gap-3 text-muted-foreground text-xs md:text-sm">
              <span className="h-px w-8 bg-ink/40" /> We turn content into viral moments.
            </div>
            <h1 className="font-display text-5xl md:text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.92]">
              Silent feeds<br />
              into <em className="text-lime not-italic">viral</em><br />
              <span className="italic">moments.</span>
            </h1>
            <p className="mt-4 md:mt-8 max-w-md text-sm md:text-lg text-muted-foreground">
                Viral Flux Media is a performance-driven social media studio. We turn brands into content machines that people can’t ignore.
            </p>

            <div className="mt-5 md:mt-10 flex flex-wrap gap-3">
              <a href="https://get.viralfluxmedia.in/">
                <ActionButton 
                  active={mode === "viral"} 
                  onClick={() => {
                    handleClick("viral");
                  }} 
                  label="Partner Program" 
                  sub="earn up to 15%" 
                  variant="lime" 
                />
              </a>
              <ActionButton 
                active={mode === "grow"} 
                onClick={() => {
                  handleClick("grow");
                  const inquirySection = document.getElementById("inquiry");
                  if (inquirySection) {
                    const rect = inquirySection.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetScroll = (scrollTop + rect.top - window.innerHeight) + rect.height * 0.7;
                    
                    window.scrollTo({
                      top: targetScroll,
                      behavior: "smooth"
                    });
                  }
                }} 
                label="Grow Brand" 
                sub="organic content engine" 
                variant="dark" 
              />
            </div>
          </motion.div>

          {/* Phone */}
          <div className="md:col-span-7 flex justify-center mt-0 md:mt-0">
            <div className="scale-[0.45] sm:scale-[0.6] md:scale-100 origin-top">
              <motion.div style={{ rotate: phoneRotate, scale: phoneScale }}>
                <Phone progress={combined as any} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-label text-muted-foreground"
        >
          ↓ scroll to transform
        </motion.div>
      </div>
    </section>
  );
}

function ActionButton({
  label,
  sub,
  active,
  onClick,
  variant = "lime",
}: {
  label: string;
  sub: string;
  active: boolean;
  onClick: () => void;
  variant?: "lime" | "dark";
}) {
  const base = variant === "lime" ? "bg-lime text-ink" : "bg-ink text-cream";
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative overflow-hidden rounded-full px-7 py-4 transition-shadow ${base} ${active ? "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-left">
          <div className="font-display text-lg leading-none">{label}</div>
          <div className="font-mono-label opacity-70 text-[9px] mt-1">{sub}</div>
        </div>
        <span className="text-xl">→</span>
      </div>
      {active && (
        <motion.div
          layoutId="active-pulse"
          className="absolute inset-0 -z-10 rounded-full ring-2 ring-current"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0], scale: [1, 1.4, 1.6] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
