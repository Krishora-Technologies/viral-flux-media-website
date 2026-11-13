"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Clarity } from "@/components/analytics/MicrosoftClarity";

/**
 * InquirySection — phone descends from the hero with a slow 3D spin,
 * lands centered, then "boots" the Viral Flux Media app which contains
 * an inquiry form. Pure scroll-driven choreography.
 *
 * Scroll timeline (over ~220vh):
 *   0.00 – 0.45  : phone falls from above, spinning on Y axis, scaling up
 *   0.45 – 0.60  : phone settles, lock-screen / boot frame
 *   0.60 – 0.75  : VFM app fades in over the lock screen
 *   0.75 – 1.00  : phone stays sticky, form is interactive
 */
export function Inquiry() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.6 });

  // Phone choreography
  const phoneY = useTransform(p, [0, 0.35, 1], ["-55vh", "0vh", "0vh"]);
  const phoneRotateY = useTransform(p, [0, 0.35, 1], [540, 0, 0]); // 1.5 spins
  const phoneRotateZ = useTransform(p, [0, 0.35, 1], [-25, 0, 0]);
  const phoneScale = useTransform(p, [0, 0.2, 0.35, 1], [0.55, 0.7, 1, 1]);


  // Boot / app crossfade
  const lockOpacity = useTransform(p, [0.4, 0.55], [1, 0]);
  const appOpacity = useTransform(p, [0.5, 0.65], [0, 1]);
  const appScale = useTransform(p, [0.5, 0.65], [1.04, 1]);
  const bootRingRotate = useTransform(p, [0.35, 0.55], [0, 360]);
  // Once boot completes, release pointer events so inputs are clickable
  const lockPointer = useTransform<number, "auto" | "none">(p, (v) => (v > 0.58 ? "none" : "auto"));
  const appPointer = useTransform<number, "auto" | "none">(p, (v) => (v > 0.58 ? "auto" : "none"));

  // Side copy parallax
  const copyLeftY = useTransform(p, [0.4, 1], [60, 0]);
  const copyLeftOpacity = useTransform(p, [0.4, 0.65], [0, 1]);
  const copyRightY = useTransform(p, [0.45, 1], [80, 0]);
  const copyRightOpacity = useTransform(p, [0.45, 0.7], [0, 1]);
  const bgMarkOpacity = useTransform(p, [0.2, 0.6], [0, 1]);

  return (
    <section
      id="inquiry"
      ref={sectionRef}
      className="relative bg-cream h-[150vh] md:h-[260vh]"
      style={{ position: "relative" }}
      aria-label="Start an inquiry"
    >
      {/* Background mark */}
      <div className="pointer-events-none sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ opacity: bgMarkOpacity }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <div className="font-display text-[22vw] leading-none text-ink/[0.035] select-none">
            inquire
          </div>
        </motion.div>

        <div className="relative mx-auto grid h-full w-full max-w-[1500px] grid-cols-1 items-start md:items-center pt-16 md:pt-0 gap-4 md:gap-10 px-6 md:grid-cols-12 md:px-12">
          {/* Left column: heading */}
          <motion.div
            style={{ y: copyLeftY, opacity: copyLeftOpacity }}
            className="col-span-1 md:col-span-3 z-10"
          >
            <div className="font-mono-label mb-5 flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-8 bg-ink/40" /> 03 — start
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[0.95]">
              Tell us<br />
              what&apos;s <em className="not-italic text-lime">next.</em>
            </h2>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              Direct WhatsApp inquiry inside the device. No forms — customize your brief and chat directly with our studio founders.
            </p>
          </motion.div>

          {/* Center: phone */}
          <div className="col-span-1 flex justify-center md:col-span-6 mt-0 md:mt-0" style={{ perspective: 1600 }}>
            <div className="scale-[0.5] sm:scale-[0.6] md:scale-100 origin-top">
              <motion.div
                style={{
                  y: phoneY,
                  rotateY: phoneRotateY,
                  rotateZ: phoneRotateZ,
                  scale: phoneScale,
                  willChange: "transform",
                }}
                className="relative rounded-[48px] bg-ink p-3 shadow-2xl shadow-black/40"
              >
              <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[36px] bg-cream">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 z-40 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

                {/* Lock / boot screen — fades out, then must release pointer events */}
                <motion.div
                  style={{ opacity: lockOpacity, pointerEvents: lockPointer }}
                  className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-ink text-cream"
                >
                  <motion.div
                    style={{ rotate: bootRingRotate }}
                    className="relative h-20 w-20 rounded-full border border-cream/20"
                  >
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime" />
                  </motion.div>
                  <div className="mt-8 font-display text-3xl italic">vfm</div>
                  <div className="font-mono-label mt-2 text-cream/60">booting studio</div>
                </motion.div>

                {/* App interface — sits above lock once booted so inputs receive clicks */}
                <motion.div
                  style={{ opacity: appOpacity, scale: appScale, pointerEvents: appPointer }}
                  className="absolute inset-0 z-40 flex flex-col bg-cream"
                >
                  <AppInterface />
                </motion.div>
              </div>

              {/* Side button hints (3D-ish) */}
              <div className="absolute -left-[3px] top-32 h-14 w-[3px] rounded-l bg-ink/80" />
              <div className="absolute -right-[3px] top-40 h-20 w-[3px] rounded-r bg-ink/80" />
            </motion.div>
            </div>
          </div>

          {/* Right column: floating chips */}
          <motion.div
            style={{ y: copyRightY, opacity: copyRightOpacity }}
            className="hidden md:col-span-3 md:block"
          >
            <div className="space-y-3">
              <Chip label="direct line" value="WhatsApp" dark />
              <Chip label="avg reply" value="< 15 min" />
              <Chip label="number" value="+91 81081 81651" />
              <div className="font-mono-label mt-6 text-muted-foreground">
                ↳ trusted by 40+ brands across fashion, music & tech
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Chip({ label, value, dark }: { label: string; value: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-baseline justify-between rounded-full px-5 py-3 ${
        dark ? "bg-ink text-cream" : "bg-paper text-ink"
      }`}
    >
      <span className="font-mono-label opacity-70">{label}</span>
      <span className="font-display text-lg">{value}</span>
    </div>
  );
}

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      setTime(`${h}:${m < 10 ? "0" + m : m}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return <>{time || "9:41"}</>;
}

export function AppInterface({ onClose }: { onClose?: () => void }) {
  const customMessage = "Hey Viral Flux Media! I want to grow my brand / business. Let's connect!";
  const whatsappUrl = `https://wa.me/918108181651?text=${encodeURIComponent(customMessage)}`;

  const handleOpenWhatsApp = () => {
    try {
      Clarity.event("whatsapp_inquiry_clicked");
    } catch {
      // ignore
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex h-full flex-col justify-between p-6 pt-10 text-ink select-none">
      {/* Top status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono-label text-[10px] text-ink/70">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-700">Online Now</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-label text-[10px] text-ink/50"><Clock /></span>
          {onClose && (
            <button 
              onClick={onClose}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-ink/10 text-xs font-bold text-ink hover:bg-ink/20 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Middle: Clean Info & Aesthetic Screen */}
      <div className="my-auto flex flex-col items-center text-center px-2">
        {/* Studio Badge */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-cream shadow-xl mb-5">
          <span className="font-display text-2xl italic text-lime">vfm.</span>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
        </div>

        <h3 className="font-display text-2xl font-light italic leading-tight text-ink">
          Direct Studio Chat
        </h3>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[220px]">
          Skip the forms. Message our founders directly on WhatsApp to discuss reels, growth &amp; pricing.
        </p>

        {/* Minimal Info Badges */}
        <div className="mt-5 flex flex-col gap-2 w-full max-w-[240px]">
          <div className="flex items-center gap-2.5 rounded-xl bg-paper px-3 py-2 text-left border border-ink/5">
            <span className="text-base">⚡</span>
            <div className="text-[11px] leading-tight">
              <span className="font-semibold text-ink block">Instant Response</span>
              <span className="text-muted-foreground text-[10px]">Under 15 minutes</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl bg-paper px-3 py-2 text-left border border-ink/5">
            <span className="text-base">🎬</span>
            <div className="text-[11px] leading-tight">
              <span className="font-semibold text-ink block">Custom Proposals</span>
              <span className="text-muted-foreground text-[10px]">4K Reels, Ads &amp; Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Action */}
      <div className="pb-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenWhatsApp}
          className="group relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-5 font-semibold text-sm shadow-xl shadow-[#25D366]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Chat on WhatsApp</span>
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </a>
        <div className="mt-2 text-center font-mono-label text-[10px] text-muted-foreground">
          Direct line: <span className="font-semibold text-ink">+91 81081 81651</span>
        </div>
      </div>
    </div>
  );
}
