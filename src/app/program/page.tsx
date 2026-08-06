"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// Inline SVG Icon Helper Components
const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DownloadIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const SparklesIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function GrowthPartnerProgramPage() {
  return (
    <main className="relative bg-cream text-ink min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[-5%] flex justify-center">
          <div className="font-display text-[22vw] leading-none text-ink/[0.03] select-none">
            PARTNER
          </div>
        </div>

        <div className="mx-auto max-w-[1300px] px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs font-mono-label text-lime-800 font-semibold mb-6">
              <SparklesIcon className="w-3.5 h-3.5 text-lime-700" /> Viral Flux Media Growth Partner Program
            </div>

            <h1 className="font-display text-5xl md:text-8xl font-light leading-[0.92] max-w-5xl">
              Refer Businesses.<br />
              Earn <em className="text-lime not-italic">Attractive Rewards</em>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
              Do you know restaurants, cafés, salons, gyms, clinics, hotels, real estate companies, or local businesses looking to grow online? Refer them to Viral Flux Media and earn exciting commissions for every successful client.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://get.viralfluxmedia.in/contact"
                className="inline-flex items-center gap-3 rounded-full bg-lime text-ink px-8 py-4 font-mono-label font-bold text-sm hover:scale-105 transition-all shadow-lg hover:shadow-lime/30"
              >
                <span>Apply as Partner Now</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="/Viral_Flux_Partner_Program.pdf"
                download="Viral_Flux_Partner_Program.pdf"
                className="inline-flex items-center gap-3 rounded-full bg-ink text-cream px-8 py-4 font-mono-label text-sm hover:bg-cream hover:text-ink transition-colors border border-ink"
              >
                <DownloadIcon className="w-4 h-4 text-lime" />
                <span>Download Official Brochure PDF</span>
              </a>
            </div>

            {/* Quick Call Strip */}
            <div className="mt-12 p-6 rounded-2xl border border-ink/10 bg-paper/60 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-lime text-ink flex items-center justify-center font-bold shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-light">Have questions? Speak to our team</div>
                  <div className="text-xs text-muted-foreground">Direct Partner Support Hotline (India)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:8108181650"
                  className="px-5 py-2.5 rounded-full bg-ink text-cream font-mono-label text-xs hover:bg-lime hover:text-ink transition-all font-semibold"
                >
                  📞 8108181650
                </a>
                <a
                  href="tel:8108181651"
                  className="px-5 py-2.5 rounded-full bg-ink text-cream font-mono-label text-xs hover:bg-lime hover:text-ink transition-all font-semibold"
                >
                  📞 8108181651
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Become a Partner */}
      <section className="py-20 bg-paper/40 border-t border-ink/10">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="font-mono-label text-muted-foreground mb-4">— Eligibility</div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-12">
            Who Can Become a <em className="text-lime not-italic">Partner?</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
            ].map((cat, idx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, translateY: -3 }}
                className="p-5 rounded-2xl border border-ink/10 bg-cream flex flex-col justify-between h-32 hover:border-lime/60 transition-all shadow-sm"
              >
                <span className="font-mono-label text-[10px] text-muted-foreground">0{idx + 1}</span>
                <span className="font-sans font-semibold text-sm text-ink leading-snug">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Animated 3 Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="font-mono-label text-muted-foreground mb-4">— Simple 3-Step Process</div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-16">
            How It <em className="text-lime not-italic">Works.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 01",
                title: "Refer a Business",
                desc: "Share your unique referral link or introduce a business owner directly to our growth team.",
              },
              {
                step: "Step 02",
                title: "We Do the Work",
                desc: "Our team handles strategy, content creation, social media management, ads, and client onboarding.",
              },
              {
                step: "Step 03",
                title: "Earn Commission",
                desc: "Once the client signs the agreement and completes payment, your commission is instantly released.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-8 rounded-3xl border border-ink/10 bg-cream relative hover:shadow-xl transition-all"
              >
                <div className="font-display text-5xl text-lime italic font-light mb-6">{item.step}</div>
                <h3 className="font-display text-2xl font-light italic mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Grid */}
      <section className="py-24 bg-ink text-cream grain">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="font-mono-label text-lime/70 mb-4">— Full Service Suite</div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-16">
            Services We Offer to <em className="text-lime not-italic">Clients.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            ].map((service) => (
              <motion.div
                key={service}
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-5 rounded-2xl border border-cream/10 bg-paper/10 flex items-center gap-4 hover:border-lime/50 transition-all"
              >
                <div className="h-3 w-3 rounded-full bg-lime shrink-0" />
                <span className="font-sans font-medium text-sm text-cream">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Partner Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Why Choose Us */}
            <div>
              <div className="font-mono-label text-muted-foreground mb-4">— Agency Strengths</div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-8">
                Why Businesses Choose <em className="text-lime not-italic">Viral Flux Media</em>
              </h3>
              <div className="space-y-4">
                {[
                  "Creative & High-Quality Content",
                  "Dedicated Marketing & Strategy Team",
                  "AI-Powered Content Solutions",
                  "Monthly Growth & Performance Reports",
                  "Affordable Packages for Every Business",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-ink/10 bg-cream">
                    <CheckCircleIcon className="w-5 h-5 text-lime-700 shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Benefits */}
            <div>
              <div className="font-mono-label text-muted-foreground mb-4">— Growth Incentives</div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-8">
                Partner <em className="text-lime not-italic">Benefits</em>
              </h3>
              <div className="space-y-4">
                {[
                  "Attractive Commission on Every Successful Referral",
                  "Bonus Rewards for Long-Term Retained Clients",
                  "Unlimited Referral Opportunities — No Earning Caps",
                  "Dedicated Partner Support & Ready Marketing Materials",
                  "No Registration Fee • No Investment Required",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-lime/30 bg-lime/10">
                    <ShieldCheckIcon className="w-5 h-5 text-lime-800 shrink-0" />
                    <span className="font-semibold text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action & Interactive Call Bar */}
      <section className="bg-lime py-24 text-ink grain">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-display text-4xl md:text-7xl font-light leading-tight mb-6">
            Let&apos;s Grow <em className="italic">Together.</em>
          </h2>
          <p className="text-ink/80 max-w-xl mx-auto text-lg font-light mb-10">
            Help businesses build a powerful online presence while creating a new source of income for yourself.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://get.viralfluxmedia.in/contact"
              className="inline-flex items-center gap-3 rounded-full bg-ink text-cream px-10 py-5 font-mono-label hover:bg-cream hover:text-ink transition-colors font-semibold text-sm shadow-xl"
            >
              <span>Apply as Partner Now</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>

            <a
              href="tel:8108181650"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-5 font-mono-label text-sm font-bold hover:bg-ink hover:text-lime transition-all"
            >
              <PhoneIcon className="w-4 h-4" /> Call 8108181650
            </a>

            <a
              href="tel:8108181651"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-5 font-mono-label text-sm font-bold hover:bg-ink hover:text-lime transition-all"
            >
              <PhoneIcon className="w-4 h-4" /> Call 8108181651
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
