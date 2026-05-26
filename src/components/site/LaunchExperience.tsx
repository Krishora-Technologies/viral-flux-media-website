"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface LaunchExperienceProps {
  children: React.ReactNode;
}

export const LaunchExperience = ({ children }: LaunchExperienceProps) => {
  const [isRevealedState, setIsRevealedState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation controls
  const overlayControls = useAnimation();
  const contentControls = useAnimation();

  // Cinematic easing
  const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !hasStarted) {
        setHasStarted(true);
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.7; // keeping the cinematic speed
          videoRef.current.play();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasStarted]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const video = videoRef.current;
    if (!video) return;


    const handleVideoEnd = async () => {
      // Ribbon has fully untied — now reveal the website

      // Fade out the overlay (video + cream background)
      overlayControls.start({
        opacity: 0,
        transition: { duration: 1.0, ease: cinematicEase }
      });

      // Content zooms into place from blur
      contentControls.start({
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 1.4, ease: cinematicEase }
      });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Cleanup & start auto-scroll
      setIsRevealedState(true);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.scrollBehavior = "auto";

      setTimeout(() => {
        let isScrolling = true;
        const pixelsPerFrame = 4;

        const scrollStep = () => {
          if (!isScrolling) return;

          const currentMaxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          if (window.scrollY < currentMaxScroll - 2) {
            window.scrollBy(0, pixelsPerFrame);
            requestAnimationFrame(scrollStep);
          } else {
            document.documentElement.style.scrollBehavior = "";
          }
        };

        requestAnimationFrame(scrollStep);

        const interruptScroll = () => {
          isScrolling = false;
          document.documentElement.style.scrollBehavior = "";
        };

        window.addEventListener("wheel", interruptScroll, { once: true, passive: true });
        window.addEventListener("touchstart", interruptScroll, { once: true, passive: true });
        window.addEventListener("mousedown", interruptScroll, { once: true, passive: true });
        window.addEventListener("keydown", interruptScroll, { once: true, passive: true });
      }, 300);
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
    };
  }, [overlayControls, contentControls, cinematicEase]);

  return (
    <div ref={containerRef} className="relative w-full bg-cream">
      {/* Website Content — starts blurred and zoomed, revealed after ribbon unties */}
      <motion.div
        className={!isRevealedState ? "h-screen overflow-hidden" : ""}
        initial={{ scale: 1.05, filter: "blur(8px)", opacity: 0 }}
        animate={contentControls}
      >
        {children}
      </motion.div>

      {/* The Ribbon Reveal Overlay */}
      {!isRevealedState && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-cream"
          animate={overlayControls}
        >
          {/* Ribbon Video — mix-blend-mode:multiply removes white background */}
          <video
            ref={videoRef}
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "multiply" }}
          >
            <source src="/Ribbon-withbg.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </div>
  );
};
