"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleInquiryScroll = () => {
    setMobileOpen(false);
    const inquirySection = document.getElementById("inquiry");
    if (inquirySection) {
      const rect = inquirySection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetScroll = (scrollTop + rect.top - window.innerHeight) + rect.height * 0.7;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const samePageLinks = [
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Studio", href: "/#studio" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3.5 md:px-12">
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 group">
          <div className="relative w-8 h-8 md:w-9 md:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Viral Flux Media Logo"
              width={74}
              height={38}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(217,70,239,0.35)]"
            />
          </div>
          <span className="font-display text-xl md:text-2xl tracking-tight text-cream group-hover:text-white transition-colors">
            Viral Flux Media<span className="text-lime">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex items-center">
          {samePageLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-label text-xs uppercase tracking-wider text-cream/70 hover:text-lime transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/program"
            className="font-mono-label text-xs uppercase tracking-wider text-lime hover:underline font-semibold flex items-center gap-1"
          >
            Partner Program ✦
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleInquiryScroll}
            className="hidden sm:inline-flex font-mono-label text-xs font-semibold rounded-full border border-lime/40 bg-lime/10 px-5 py-2 text-lime hover:bg-lime hover:text-ink transition-all"
          >
            Let&apos;s talk →
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-lg border border-white/15 bg-white/5 text-cream focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`block w-4 h-0.5 bg-cream transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`} />
            <span className={`block w-4 h-0.5 bg-cream transition-opacity duration-200 my-0.5 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-4 h-0.5 bg-cream transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#0e0e0e] px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              {samePageLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono-label text-sm uppercase tracking-wider text-cream/80 hover:text-lime transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/program"
                onClick={() => setMobileOpen(false)}
                className="font-mono-label text-sm uppercase tracking-wider text-lime font-bold flex items-center gap-1 pt-2 border-t border-white/10"
              >
                Partner Program ✦
              </Link>
              <div className="pt-2">
                <button
                  onClick={handleInquiryScroll}
                  className="w-full text-center font-mono-label text-xs font-semibold rounded-full bg-lime text-ink py-3 hover:bg-lime/90 transition-all"
                >
                  Let&apos;s talk →
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
