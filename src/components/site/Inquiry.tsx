"use client";
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

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
              Drop a brief inside the device. We reply within one business day with a tailored plan.
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
              <Chip label="avg reply" value="< 24h" />
              <Chip label="onboarding" value="7 days" dark />
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
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", brandName: "", phone: "+91 ", email: "", goal: "Get Seen", note: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canContinue = () => {
    if (step === 0) {
      const isNameValid = form.name.trim().length > 0;
      const isBrandValid = form.brandName.trim().length > 0;
      const isPhoneValid = form.phone.replace(/[^0-9]/g, '').length > 4;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      return isNameValid && isBrandValid && isPhoneValid && isEmailValid;
    }
    return true;
  };

  const next = () => {
    if (canContinue()) setStep((s) => Math.min(s + 1, 2));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      setSent(true);
    } catch (e) {
      console.error(e);
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* App top bar */}
      <div className="flex items-center justify-between px-5 pt-8">
        <div className="font-mono-label text-[9px] text-ink"><Clock /></div>
        <div className="font-mono-label text-[9px] text-ink">vfm </div>
      </div>

      <div className="flex items-center justify-between px-5 pt-3">
        <div className="font-display text-xl italic leading-none">Project Brief</div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-[11px] font-bold text-ink">
          {sent ? "✓" : step + 1}
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-3 flex gap-1.5 px-5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= step ? "bg-ink" : "bg-ink/15"
            }`}
          />
        ))}
      </div>

      {/* Body */}
      <div className="relative mt-5 flex-1 overflow-hidden px-5">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex h-full flex-col items-center justify-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-2xl">
                ✓
              </div>
              <div className="mt-5 font-display text-2xl">Brief received</div>
              <p className="mt-2 px-4 text-xs text-muted-foreground">
                We&apos;ll be in touch within 24 hours with a custom proposal.
              </p>
            </motion.div>
          ) : step === 0 ? (
            <motion.div
              key="s0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <Field label="your name">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Maya Chen"
                  maxLength={80}
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-ink/30"
                />
              </Field>
              <Field label="brand name">
                <input
                  value={form.brandName}
                  onChange={(e) => setForm({ ...form, brandName: e.target.value })}
                  placeholder="Studio Flux"
                  maxLength={80}
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-ink/30"
                />
              </Field>
              <Field label="phone number">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^[\+0-9\s]*$/.test(val)) {
                      setForm({ ...form, phone: val });
                    }
                  }}
                  placeholder="+91 "
                  maxLength={20}
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-ink/30"
                />
              </Field>
              <Field label="email address">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="maya@example.com"
                  maxLength={100}
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-ink/30"
                />
              </Field>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div>
                <div className="font-mono-label mb-2 text-[9px] text-muted-foreground">
                  primary goal
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { v: "Get Seen", l: "Get Seen" },
                    { v: "Build Attention", l: "Build Attention" },
                    { v: "Drive Engagement", l: "Drive Engagement" },
                    { v: "Convert Audience", l: "Convert Audience" },
                  ].map((o) => (
                    <button
                      key={o.v}
                      onClick={() => setForm({ ...form, goal: o.v })}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors ${
                        form.goal === o.v
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/15 bg-paper text-ink hover:border-ink/40"
                      }`}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <Field label="tell us more">
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="A few lines about your brand, audience, and timing…"
                  rows={5}
                  maxLength={500}
                  className="w-full resize-none bg-transparent text-xs outline-none placeholder:text-ink/30"
                />
              </Field>
              <div className="font-mono-label text-[9px] text-muted-foreground">
                ↳ we read every brief personally
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer actions */}
      {!sent && (
        <div className="flex items-center justify-between gap-2 px-5 pb-6 pt-3">
          <button
            onClick={step === 0 ? onClose : back}
            className="rounded-full px-4 py-2 text-xs font-semibold text-ink/60 hover:text-ink transition-colors"
          >
            ← back
          </button>
          {step < 2 ? (
            <button
              onClick={next}
              disabled={!canContinue()}
              className="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-cream transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              continue →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={isSubmitting}
              className="rounded-full bg-lime px-5 py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "sending..." : "send brief ↗"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-xl border border-ink/10 bg-paper px-3.5 py-2.5 transition-colors focus-within:border-ink/40">
      <div className="font-mono-label mb-1 text-[9px] text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}
