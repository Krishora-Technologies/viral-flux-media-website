"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { AppInterface } from "./Inquiry";
import avatarBefore from "@/assets/avatar-before.jpg";
import avatarAfter from "@/assets/avatar-after.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";

const posts = [post1, post2, post3, post4, post5, post6, post1, post2, post3, post4, post5, post6];

export function BioOptimization() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.6 });
  
  const [showApp, setShowApp] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [showPower, setShowPower] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    if (!isFollowed) {
      setShowPower(true);
      setTimeout(() => setShowPower(false), 2500);
    }
  };

  // Phone choreography
  const phoneY = useTransform(p, [0, 0.3, 1], ["20vh", "0vh", "0vh"]);
  const phoneRotateY = useTransform(p, [0, 0.4, 0.8, 1], [30, 0, 0, -10]);
  const phoneRotateZ = useTransform(p, [0, 0.4, 0.8, 1], [5, 0, 0, -2]);
  
  // Scanning line effect (reveals the "New Bio" from top to bottom)
  // clip-path: inset(0 0 <bottom-percent> 0)
  // When percent is 100%, new bio is fully hidden. When 0%, new bio is fully shown.
  // We map it such that 0 to 0.4 is pre-scan, 0.4 to 0.7 is scan
  const scanProgress = useTransform(p, [0.4, 0.75], [100, 0]);
  const scanLineOpacity = useTransform(p, [0.35, 0.4, 0.75, 0.8], [0, 1, 1, 0]);
  const scanLineY = useTransform(p, [0.4, 0.75], ["0%", "100%"]);

  // Side copy parallax
  const copyLeftY = useTransform(p, [0.2, 0.5], [60, 0]);
  const copyLeftOpacity = useTransform(p, [0.2, 0.5], [0, 1]);

  const clipPath = useTransform(scanProgress, (val) => `inset(0 0 ${val}% 0)`);
  const bgMarkOpacity = useTransform(p, [0.2, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream h-[150vh] md:h-[250vh]"
      style={{ position: "relative" }}
      aria-label="Profile Optimization"
    >
      <div className="pointer-events-none sticky top-0 h-screen w-full overflow-hidden">
        {/* Background mark */}
        <motion.div
          style={{ opacity: bgMarkOpacity }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <div className="font-display text-[20vw] leading-none text-ink/[0.035] select-none">
            optimize
          </div>
        </motion.div>

        <div className="relative mx-auto grid h-full w-full max-w-[1500px] grid-cols-1 items-start md:items-center pt-16 md:pt-0 gap-4 md:gap-10 px-6 md:grid-cols-12 md:px-12">
          {/* Left column: heading */}
          <motion.div
            style={{ y: copyLeftY, opacity: copyLeftOpacity }}
            className="col-span-1 md:col-span-4 z-10"
          >
            <div className="font-mono-label mb-5 flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-8 bg-ink/40" /> 02 — transformation
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[0.95]">
              Stop posting.<br />
              <span className="whitespace-nowrap">Start <em className="not-italic text-lime">Dominating.</em></span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
Your profile is more than content, it’s perception.
We eliminate noise, craft positioning, and build a system that turns attention into trust, and trust into growth.            </p>
          </motion.div>

          {/* Center: phone */}
          <div className="col-span-1 flex justify-center md:col-span-8 mt-0 md:mt-0" style={{ perspective: 1600 }}>
            <div className="scale-[0.5] sm:scale-[0.6] md:scale-100 origin-top">
              <motion.div
                style={{
                  y: phoneY,
                  rotateY: phoneRotateY,
                  rotateZ: phoneRotateZ,
                  willChange: "transform",
                }}
                className="relative rounded-[48px] bg-ink p-3 shadow-2xl shadow-black/40 pointer-events-auto"
              >
              <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[36px] bg-white">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 z-50 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

                {/* --- Old Bio (Background) --- */}
                <div className="absolute inset-0 bg-[#f8f9fa] pt-12">
                  <OldBio />
                </div>

                {/* --- New Bio (Foreground, revealed by clip-path) --- */}
                <motion.div
                  className="absolute inset-0 z-10 bg-cream pt-12 text-ink"
                  style={{ clipPath }}
                >
                  <AnimatePresence mode="wait">
                    {showApp ? (
                      <motion.div
                        key="app"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="h-full bg-cream pointer-events-auto"
                      >
                        <div className="absolute top-8 right-6 z-50">
                          <button 
                            onClick={() => setShowApp(false)}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/5 text-xs font-bold text-ink/40 pointer-events-auto"
                          >
                            ×
                          </button>
                        </div>
                        <AppInterface onClose={() => setShowApp(false)} />
                      </motion.div>
                    ) : (
                      <NewBio 
                        onFollow={handleFollow} 
                        isFollowed={isFollowed} 
                        onInquiry={() => setShowApp(true)} 
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* --- Power Message Overlay --- */}
                <AnimatePresence>
                  {showPower && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.1, y: -20 }}
                      className="pointer-events-none absolute inset-x-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center justify-center px-6 text-center"
                    >
                      <div className="rounded-2xl bg-ink/90 p-6 shadow-[0_0_40px_rgba(163,255,0,0.4)] backdrop-blur-md">
                        <div className="font-display text-2xl italic text-lime drop-shadow-[0_0_10px_rgba(163,255,0,0.6)]">
                          Power of<br />Viral Flux Media
                        </div>
                        <div className="mt-2 font-mono-label text-[9px] uppercase tracking-widest text-cream/60">
                          Engines engaged
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* --- Scanning Laser Line --- */}
                <motion.div
                  className="absolute left-0 right-0 z-20 h-1 bg-lime shadow-[0_0_15px_3px_rgba(163,230,53,0.5)]"
                  style={{
                    top: scanLineY,
                    opacity: scanLineOpacity,
                  }}
                />
              </div>

              {/* Side button hints (3D-ish) */}
              <div className="absolute -left-[3px] top-32 h-14 w-[3px] rounded-l bg-ink/80" />
              <div className="absolute -right-[3px] top-40 h-20 w-[3px] rounded-r bg-ink/80" />
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OldBio() {
  return (
    <div className="flex h-full flex-col px-5 text-gray-800">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <span className="text-xl font-bold">jane_doe_official</span>
        <div className="flex gap-4">
          <div className="w-5 h-5 bg-gray-300 rounded-sm" />
          <div className="w-5 h-5 bg-gray-300 rounded-sm" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden bg-gray-300">
          <Image src={avatarBefore} alt="Avatar" className="object-cover" fill sizes="64px" />
        </div>
        <div className="flex flex-1 justify-around text-center text-sm">
          <div>
            <div className="font-bold">124</div>
            <div className="text-xs text-gray-500">posts</div>
          </div>
          <div>
            <div className="font-bold">2.4K</div>
            <div className="text-xs text-gray-500">followers</div>
          </div>
          <div>
            <div className="font-bold">450</div>
            <div className="text-xs text-gray-500">following</div>
          </div>
        </div>
      </div>

      {/* Bio Text */}
      <div className="mb-4 text-sm leading-tight">
        <div className="font-bold mb-1">Jane Doe ✨</div>
        <div className="text-gray-500 mb-1">Digital Creator</div>
        <div>Just a girl living her best life 🌸</div>
        <div>Coffee addict ☕️ | Traveler ✈️</div>
        <div>Dm for collabs! 💌</div>
        <div className="text-blue-500 mt-1">linktr.ee/janedoeofficial</div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-6">
        <div className="flex-1 rounded-md bg-gray-200 py-1.5 text-center text-sm font-semibold">
          Following
        </div>
        <div className="flex-1 rounded-md bg-gray-200 py-1.5 text-center text-sm font-semibold">
          Message
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1">
        {posts.map((img, i) => (
          <div key={i} className="relative aspect-square bg-gray-200 overflow-hidden">
            <Image src={img} alt="" className="object-cover opacity-80" fill sizes="(max-width: 768px) 33vw, 150px" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NewBio({ 
  onFollow, 
  isFollowed, 
  onInquiry 
}: { 
  onFollow: () => void; 
  isFollowed: boolean; 
  onInquiry: () => void; 
}) {
  return (
    <div className="flex h-full flex-col px-5 pointer-events-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <span className="text-xl font-bold font-display tracking-tight text-ink">JANEDOE</span>
        <div className="flex gap-4">
          <div className="w-5 h-5 rounded-sm border border-ink/20 flex items-center justify-center">
             <div className="w-3 h-[2px] bg-ink"/>
          </div>
          <div className="w-5 h-5 rounded-sm border border-ink/20 flex flex-col gap-[3px] items-center justify-center">
             <div className="w-3 h-[2px] bg-ink"/>
             <div className="w-3 h-[2px] bg-ink"/>
             <div className="w-3 h-[2px] bg-ink"/>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-5 mb-5">
        <div className="h-20 w-20 shrink-0 rounded-full border border-lime p-1">
           <div className="relative h-full w-full rounded-full overflow-hidden bg-ink/10">
             <Image src={avatarAfter} alt="Avatar" className="object-cover" fill sizes="80px" />
           </div>
        </div>
        <div className="flex flex-1 justify-around text-center text-sm text-ink">
          <div>
            <div className="font-bold text-lg">1.2M</div>
            <div className="text-[10px] uppercase tracking-widest text-ink/50">Followers</div>
          </div>
          <div>
            <div className="font-bold text-lg">45M</div>
            <div className="text-[10px] uppercase tracking-widest text-ink/50">Likes</div>
          </div>
        </div>
      </div>

      {/* Bio Text */}
      <div className="mb-5 text-sm leading-snug">
        <div className="font-display font-medium text-lime mb-1 text-base">Jane Doe</div>
        <div className="text-ink/60 mb-2 text-xs uppercase tracking-wider font-mono-label">Creative Director</div>
        <div className="text-ink/90">Building the aesthetics of tomorrow.</div>
        <div className="text-ink/90">Curating premium digital experiences.</div>
        <div className="mt-3 inline-block rounded-full bg-lime/20 px-3 py-1 text-xs text-lime font-mono-label">
          vfm.link/jane
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={onFollow}
          className={`flex-1 rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${
            isFollowed ? "bg-ink text-cream" : "bg-lime text-ink"
          }`}
        >
          {isFollowed ? "Following" : "Follow"}
        </button>
        <button 
          onClick={onInquiry}
          className="flex-1 rounded-xl bg-ink/5 py-2.5 text-center text-sm font-semibold border border-ink/10 transition-colors hover:bg-ink/10 text-ink"
        >
          Inquire
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {posts.map((img, i) => (
          <div key={i} className="aspect-[4/5] bg-ink/5 relative overflow-hidden group">
            <Image src={img} alt="" className="object-cover transition-transform duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 33vw, 150px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
