"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, animate } from "framer-motion";

interface LaunchExperienceProps {
  children: React.ReactNode;
}

export const LaunchExperience = ({ children }: LaunchExperienceProps) => {
  const [isRevealedState, setIsRevealedState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation controls
  const leftPanelControls = useAnimation();
  const rightPanelControls = useAnimation();
  const sealControls = useAnimation();
  const sealRingControls = useAnimation();
  const overlayControls = useAnimation();
  const contentControls = useAnimation();

  // Premium cinematic easing
  const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const swiftEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  useEffect(() => {
    // Lock scroll initially
    document.body.style.overflow = "hidden";
    
    // Ensure scroll starts at top
    window.scrollTo(0, 0);

    const sequence = async () => {
      // 1. Initial pause for suspense
      await new Promise((resolve) => setTimeout(resolve, 800));

      // 2. Seal interaction (the "unlock")
      sealRingControls.start({
        rotate: 180,
        scale: 1.1,
        transition: { duration: 1.2, ease: cinematicEase }
      });

      await new Promise((resolve) => setTimeout(resolve, 600));

      sealControls.start({
        scale: 0.8,
        opacity: 0,
        filter: "blur(4px)",
        transition: { duration: 0.8, ease: swiftEase }
      });

      await new Promise((resolve) => setTimeout(resolve, 400));

      // 3. The Ribbon/Panel Glide (Opening the curtain)
      leftPanelControls.start({
        x: "-100%",
        transition: { duration: 1.6, ease: cinematicEase }
      });
      
      rightPanelControls.start({
        x: "100%",
        transition: { duration: 1.6, ease: cinematicEase }
      });

      // Simultaneously, the content gently zooms out into place, removing blur
      contentControls.start({
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 1.8, ease: cinematicEase, delay: 0.1 }
      });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      // 4. Fade out the overlay container for cleanup
      overlayControls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: "linear" }
      });

      await new Promise((resolve) => setTimeout(resolve, 800));

      // Cleanup overlay state
      setIsRevealedState(true);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.scrollBehavior = "auto";
      
      // 5. Cinematic Auto-Scroll
      setTimeout(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        // If content is taller than screen, perform the scroll
        if (maxScroll > 0) {
          const scrollControls = animate(0, maxScroll, {
            duration: 40,
            ease: "linear",
            onUpdate: (latest) => window.scrollTo(0, latest),
            onComplete: () => { document.documentElement.style.scrollBehavior = ""; }
          });

          // Elegant interruption mechanism
          const interruptScroll = () => {
            scrollControls.stop();
            document.documentElement.style.scrollBehavior = "";
          };

          // Listen for any user intent to take control
          window.addEventListener("wheel", interruptScroll, { once: true });
          window.addEventListener("touchstart", interruptScroll, { once: true });
          window.addEventListener("mousedown", interruptScroll, { once: true });
          window.addEventListener("keydown", interruptScroll, { once: true });
        }
      }, 100);
    };

    sequence();
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
    };
  }, [
    leftPanelControls,
    rightPanelControls,
    sealControls,
    sealRingControls,
    overlayControls,
    contentControls
  ]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Main Content */}
      <div className={!isRevealedState ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>

      {/* The Launch Overlay */}
      {!isRevealedState && (
        <motion.div 
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
          animate={overlayControls}
        >
          {/* Left Ribbon Panel */}
          <motion.div 
            initial={{ x: "0%" }} 
            animate={leftPanelControls} 
            className="absolute left-0 top-0 w-1/2 h-full bg-[#050505] border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.8)] z-10 flex justify-end items-center"
          >
            {/* Subtle light leak on the edge */}
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Right Ribbon Panel */}
          <motion.div 
            initial={{ x: "0%" }} 
            animate={rightPanelControls} 
            className="absolute right-0 top-0 w-1/2 h-full bg-[#050505] border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] z-10 flex justify-start items-center"
          >
             <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Central Seal Mechanism */}
          <motion.div 
            className="absolute z-20 flex items-center justify-center"
            animate={sealControls}
          >
            {/* Outer Ring */}
            <motion.div 
              className="absolute w-24 h-24 rounded-full border border-white/20 border-t-white/80"
              animate={sealRingControls}
              style={{ boxShadow: "0 0 40px rgba(255,255,255,0.05)" }}
            />
            {/* Inner Core */}
            <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
              {/* Minimalist Logo Mark or Dot */}
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
            
            {/* Subtle glow behind seal */}
            <div className="absolute w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
