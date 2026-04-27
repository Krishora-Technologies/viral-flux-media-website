"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  useInView,
  useSpring,
  MotionValue,
} from "framer-motion";

const LIME = "#c8f542";

/* ─────────────────────────────────────────────────────────── */
/* Count-up hook                                              */
/* ─────────────────────────────────────────────────────────── */
function useCountUp(to: number, duration = 2.4, active = false, delay = 0) {
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => Math.round(n));
  useEffect(() => {
    if (!active) return;
    const c = animate(v, to, { duration, delay, ease: [0.22, 1, 0.36, 1] });
    return c.stop;
  }, [active, delay, duration]); // eslint-disable-line
  return rounded;
}

/* ─────────────────────────────────────────────────────────── */
/* Data — 7 cards                                             */
/* ─────────────────────────────────────────────────────────── */
const STATS = [
  { id: "s1", prefix: "+", num: 300, suffix: "%",  label: "Followers",              sub: "in 90 days",               tag: "01", accent: 0.95 },
  { id: "s2", prefix: "",  num: 5,   suffix: "M+", label: "Reel Reach",             sub: "in one campaign",           tag: "02", accent: 0.88 },
  { id: "s3", prefix: "",  num: 2,   suffix: "X",  label: "Engagement Growth",      sub: "across all platforms",      tag: "03", accent: 0.72 },
  { id: "s4", prefix: "",  num: 40,  suffix: "%",  label: "Increase in Leads",      sub: "within first quarter",      tag: "04", accent: 0.60 },
  { id: "s5", prefix: "",  num: 10,  suffix: "K+", label: "Monthly Reach Growth",   sub: "consistent every month",    tag: "05", accent: 0.82 },
  { id: "s6", prefix: "",  num: 70,  suffix: "%",  label: "Reel Watch Time",        sub: "increase in performance",   tag: "06", accent: 0.78 },
  { id: "s7", prefix: "",  num: 3,   suffix: "X",  label: "Content Saves & Shares", sub: "organic amplification",     tag: "07", accent: 0.66 },
];

/* ─────────────────────────────────────────────────────────── */
/* MiniBar — animates 0 → value when section is active        */
/* ─────────────────────────────────────────────────────────── */
function MiniBar({ width, active, delay = 0 }: { width: number; active: boolean; delay?: number }) {
  return (
    <div className="w-full h-1 rounded-full overflow-hidden bg-white/[0.06] mt-auto">
      <motion.div
        className="h-full rounded-full"
        initial={{ width: "0%" }}
        animate={active ? { width: `${width * 100}%` } : { width: "0%" }}
        transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: LIME }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/* Card                                                       */
/* ─────────────────────────────────────────────────────────── */
function Card({
  s,
  i,
  active: globalActive,
}: {
  s: (typeof STATS)[0];
  i: number;
  active: boolean;
}) {
  const [hasEntered, setHasEntered] = useState(false);
  const isTriggered = globalActive && hasEntered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setHasEntered(true)}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-shrink-0 flex flex-col snap-center w-[280px] md:w-[calc(25%-12px)]"
      style={{ minWidth: 260 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden px-6 py-7 md:px-7 md:py-8 flex flex-col h-full min-h-[260px]"
        style={{
          background: "oklch(0.18 0.01 60)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* top row: tag + arrow */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono-label text-cream/25 text-[10px]">
            {s.tag} / 07
          </span>
          <span
            className="text-cream/20 text-sm transition-all duration-500 group-hover:text-lime group-hover:translate-x-1"
          >
            →
          </span>
        </div>

        {/* metric */}
        <CountMetric prefix={s.prefix} num={s.num} suffix={s.suffix} active={isTriggered} delay={0.4} />

        {/* label */}
        <div className="font-display text-cream/95 text-lg md:text-xl font-light leading-snug mt-3">
          {s.label}
        </div>

        {/* sub */}
        <div className="font-mono-label text-cream/30 text-[10px] mt-1.5 mb-6">
          {s.sub}
        </div>

        {/* mini bar */}
        <MiniBar width={s.accent} active={isTriggered} delay={0.6} />

        {/* hover glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 0 1px ${LIME}30, 0 8px 32px ${LIME}0d` }}
        />
      </div>
    </motion.div>
  );
}

function CountMetric({ prefix, num, suffix, active, delay = 0 }: { prefix: string; num: number; suffix: string; active: boolean; delay?: number }) {
  const count = useCountUp(num, 1.6, active, delay);

  return (
    <motion.div
      className="font-display font-light leading-none"
      style={{
        fontSize: "clamp(2.6rem, 3.8vw, 3.8rem)",
        color: LIME,
        letterSpacing: "-0.04em",
        textShadow: `0 0 24px ${LIME}22`,
      }}
    >
      {prefix}
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/* Section — horizontal scroll, 4 cards visible                 */
/* ─────────────────────────────────────────────────────────── */
export function Work() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rowRef     = useRef<HTMLDivElement>(null);
  const clipRef    = useRef<HTMLDivElement>(null);

  const [wrapperHeight, setWrapperHeight] = useState("350vh");
  const x = useMotionValue(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionActive = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      if (p > 0.005 && !hasScrolled) {
        setHasScrolled(true);
      }
    });
  }, [scrollYProgress, hasScrolled]);

  useEffect(() => {
    if (isMobile) {
      setWrapperHeight("auto");
      return;
    }
    const measure = () => {
      if (!rowRef.current || !clipRef.current) return;
      const totalW   = rowRef.current.scrollWidth;
      const visibleW = clipRef.current.clientWidth;
      const maxX     = Math.max(0, totalW - visibleW);
      const extraPx  = Math.round(maxX * 2);
      setWrapperHeight(`calc(100vh + ${extraPx}px)`);
    };
    const t = setTimeout(measure, 200);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    return smoothProgress.on("change", (p) => {
      if (!rowRef.current || !clipRef.current) return;
      const totalW   = rowRef.current.scrollWidth;
      const visibleW = clipRef.current.clientWidth;
      const maxX     = Math.max(0, totalW - visibleW);
      x.set(-p * maxX);
    });
  }, [smoothProgress, x, isMobile]);

  const barWidth    = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const hintOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div
      ref={wrapperRef}
      id="work"
      className="relative bg-ink grain"
      style={{ height: wrapperHeight }}
    >
      <div ref={sectionRef} className={`flex flex-col justify-center text-cream ${isMobile ? "py-20" : "sticky top-0 h-screen overflow-hidden"}`}>
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-5">
              <div className="font-mono-label text-cream/50">— Impact Metrics</div>
              {isMobile && (
                <div className="text-lime animate-pulse flex items-center gap-3 font-mono-label text-[10px] uppercase tracking-widest">
                  drag <span className="text-3xl leading-none mb-1">→</span>
                </div>
              )}
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.93] text-cream">
              Results,{" "}
              <em className="not-italic" style={{ color: LIME }}>not</em>
              <br />promises.
            </h2>
          </div>

          {/* Scroll hint */}
          {!isMobile && (
            <motion.div
              style={{ opacity: hintOpacity }}
              className="absolute top-8 right-6 md:right-12 flex items-center gap-2 font-mono-label text-cream/35 text-[10px] pointer-events-none select-none"
            >
              scroll to explore
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}>
                ↓
              </motion.span>
            </motion.div>
          )}

          {/* Cards row — 4 visible, clipped on desktop, native drag on mobile */}
          <div ref={clipRef} className={isMobile ? "overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6" : "overflow-hidden"}>
            <motion.div ref={rowRef} className="flex gap-4 will-change-transform" style={{ x: isMobile ? 0 : x }}>
              {STATS.map((s, i) => (
                <Card key={s.id} s={s} i={i} active={hasScrolled} />
              ))}
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-px rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
            <motion.div className="h-full rounded-full" style={{ background: LIME, width: barWidth, boxShadow: `0 0 8px ${LIME}` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
