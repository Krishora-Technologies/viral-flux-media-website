import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and client engagement standards for Viral Flux Media - Digital Marketing Agency in Dombivli, Maharashtra.",
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />
      <article className="pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4">
          Client Agreement & Standards · Effective April 2026
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8 font-mono-label text-sm text-cream/80 leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">1. Scope of Services</h2>
            <p>
              Viral Flux Media provides professional social media management, cinematic on-location video production, paid advertising management (Meta and Google Ads), and brand consulting services. All project scopes, deliverables, timelines, and commercial terms are formalized in mutual service contracts prior to kickoff.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">2. Disambiguation & Non-Affiliation</h2>
            <p>
              Viral Flux Media is strictly an independent B2B marketing and content production agency located in Dombivli, Maharashtra, India. We do not operate any online earning platform, task-based reward program, investment scheme, or pyramid network. We have no affiliation with &ldquo;viralflux.com.ng&rdquo; or any foreign earning schemes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">3. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, clients retain full ownership of the final video assets, advertising graphics, and copy produced for their brand campaigns, subject to mutual agreement on raw footage and project files.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">4. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Maharashtra, India. Any disputes arising in connection with services shall be subject to the exclusive jurisdiction of the courts in Kalyan/Thane, Maharashtra.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
