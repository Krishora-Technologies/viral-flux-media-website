"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export default function GrowthPartnerProgramPage() {
  return (
    <main className="relative bg-[#0f1011] text-ink min-h-screen pt-28 pb-20 selection:bg-lime selection:text-ink">
      <Nav />

      {/* Top Floating Action Bar */}
      <div className="mx-auto max-w-[900px] px-4 mb-8">
        <div className="bg-[#1a1c1e] text-[#f9f8f3] p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-lime animate-pulse" />
            <div>
              <div className="font-mono-label text-xs text-lime font-bold">Official Document</div>
              <div className="font-display text-base font-light">Viral Flux Media — Growth Partner Program</div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/Viral_Flux_Partner_Program.pdf"
              download="Viral_Flux_Partner_Program.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-lime text-[#0f1011] px-5 py-2.5 font-mono-label text-xs font-bold hover:scale-105 transition-transform"
            >
              📥 Download PDF
            </a>
            <a
              href="https://get.viralfluxmedia.in/contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-5 py-2.5 font-mono-label text-xs hover:bg-white hover:text-[#0f1011] transition-colors"
            >
              Apply as Partner →
            </a>
          </div>
        </div>
      </div>

      {/* PDF Container (Exact Match to Document) */}
      <div className="mx-auto max-w-[850px] px-4 space-y-12">
        {/* PAGE 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f9f8f3] text-[#0f1011] p-8 md:p-14 rounded-3xl border border-black/10 shadow-2xl space-y-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b-2 border-[#0f1011] pb-5">
            <Link href="/" className="font-display text-3xl font-normal tracking-tight text-[#0f1011]">
              Viral Flux Media<span className="text-[#7ca804]">.</span>
            </Link>
            <span className="bg-[#c8f542] text-[#0f1011] font-mono-label text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Growth Partner Program
            </span>
          </div>

          {/* Hero Box */}
          <div className="bg-[#0f1011] text-[#f9f8f3] p-8 rounded-2xl space-y-4">
            <div className="font-mono-label text-xs text-[#c8f542] font-bold tracking-widest uppercase">
              Official Referral Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Refer Businesses.<br />
              Earn <em className="text-[#c8f542] not-italic italic">Attractive Rewards</em>.
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl font-light">
              Do you know restaurants, cafés, salons, gyms, clinics, hotels, real estate companies, or local businesses looking to grow online? Refer them to Viral Flux Media and earn exciting commissions for every successful client.
            </p>
            <div className="bg-[#c8f542]/10 border border-[#c8f542]/30 text-[#c8f542] p-3.5 rounded-xl font-mono-label text-xs font-medium">
              ⚡ Turn Your Network Into Income! No Registration Fee • No Investment Required.
            </div>
          </div>

          {/* Who Can Become a Partner */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
              <span>— 01</span>
              <h2 className="font-display text-2xl font-normal text-[#0f1011] lowercase first-letter:capitalize">
                Who Can Become a Partner?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Instagram Influencers",
                "Food Bloggers",
                "YouTubers",
                "Local News Pages",
                "Content Creators",
                "Freelancers",
                "Marketing Professionals",
                "Business Owners",
                "Students",
                "Anyone with a Business Network",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-black/10 font-sans text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-[#c8f542] border border-[#0f1011] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
              <span>— 02</span>
              <h2 className="font-display text-2xl font-normal text-[#0f1011] lowercase first-letter:capitalize">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: "Step 1",
                  title: "Convince & Refer",
                  desc: "Pitch the vision and convince interested business owners, then connect them directly with our growth team.",
                },
                {
                  step: "Step 2",
                  title: "We Finalize & Execute",
                  desc: "Our team handles proposals, contract signing, content creation, social media management, ads, and full campaign execution.",
                },
                {
                  step: "Step 3",
                  title: "Earn Commission",
                  desc: "Once the client signs the agreement and completes payment, your commission is instantly released.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-white p-5 rounded-2xl border border-black/10 space-y-2">
                  <div className="font-display text-2xl text-[#8bb308] italic font-light">{s.step}</div>
                  <div className="font-sans font-bold text-sm text-[#0f1011]">{s.title}</div>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PAGE 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#f9f8f3] text-[#0f1011] p-8 md:p-14 rounded-3xl border border-black/10 shadow-2xl space-y-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b-2 border-[#0f1011] pb-5">
            <Link href="/" className="font-display text-3xl font-normal tracking-tight text-[#0f1011]">
              Viral Flux Media<span className="text-[#7ca804]">.</span>
            </Link>
            <span className="bg-[#c8f542] text-[#0f1011] font-mono-label text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Services & Partner Benefits
            </span>
          </div>

          {/* Services We Offer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
              <span>— 03</span>
              <h2 className="font-display text-2xl font-normal text-[#0f1011]">
                Services We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Social Media Management",
                "Instagram & Facebook Growth",
                "Professional Reels & Video Editing",
                "Graphic Design & Motion Graphics",
                "AI Content Creation",
                "Meta Ads (Facebook & Instagram)",
                "Personal Branding",
                "Website Development",
                "WhatsApp Marketing",
                "Political Campaign Management",
              ].map((serv) => (
                <div key={serv} className="bg-[#0f1011] text-[#f9f8f3] p-3.5 rounded-xl font-sans text-xs font-medium flex items-center gap-2">
                  <span className="text-[#c8f542] font-bold">✦</span>
                  <span>{serv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid: Why Choose Us & Partner Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Why Businesses Choose Us */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
                <span>— 04</span>
                <h3 className="font-display text-xl font-normal text-[#0f1011]">
                  Why Businesses Choose Us
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  "Creative & High-Quality Content",
                  "Dedicated Marketing Team",
                  "AI-Powered Content Solutions",
                  "Monthly Growth & Performance Reports",
                  "Affordable Packages for Every Business",
                ].map((reason) => (
                  <div key={reason} className="bg-white p-3.5 rounded-xl border border-black/10 text-xs font-semibold flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
                <span>— 05</span>
                <h3 className="font-display text-xl font-normal text-[#0f1011]">
                  Partner Benefits
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Attractive Commission on every successful referral.",
                  "Bonus Rewards for long-term retained clients.",
                  "Unlimited Opportunities with no earning caps.",
                  "Dedicated Support & ready marketing materials.",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-xs leading-relaxed">
                    <span className="h-5 w-5 rounded-full bg-[#c8f542] text-[#0f1011] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-label text-xs text-muted-foreground uppercase">
              <span>— 06</span>
              <h3 className="font-display text-xl font-normal text-[#0f1011]">
                Terms & Conditions
              </h3>
            </div>
            <div className="bg-[#0f1011] text-[#f9f8f3]/90 p-5 rounded-2xl font-sans text-xs leading-relaxed space-y-1.5">
              <div>• Commission is paid only after the client&apos;s first successful payment.</div>
              <div>• The referred business must be a new client of Viral Flux Media.</div>
              <div>• There is no limit to the number of referrals you can make.</div>
            </div>
          </div>

          {/* Contact Footer Banner */}
          <div className="bg-[#0f1011] text-[#f9f8f3] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-2xl font-light text-[#c8f542]">Let&apos;s Grow Together!</h4>
            </div>

            <div className="bg-[#c8f542] text-[#0f1011] p-3.5 px-6 rounded-xl font-mono-label font-bold text-sm text-center">
              <div>📞 Contact Us</div>
              <div className="flex gap-2 justify-center mt-1">
                <a href="tel:8108181650" className="hover:underline">8108181650</a>
                <span>/</span>
                <a href="tel:8108181651" className="hover:underline">8108181651</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
