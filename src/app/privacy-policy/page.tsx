import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official Privacy Policy for Viral Flux Media - Digital Marketing Agency in Dombivli, Maharashtra.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />
      <article className="pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4">
          Legal & Transparency · Effective April 2026
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 font-mono-label text-sm text-cream/80 leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">1. Who We Are</h2>
            <p>
              Viral Flux Media (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an independent digital marketing and creative video production agency headquartered at 203, Jaywant Niwas, Star Colony, Gandhi Nagar, Dombivli, Maharashtra 421201, India. We operate the website <Link href="/" className="text-lime hover:underline">viralfluxmedia.in</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">2. Information We Collect</h2>
            <p>
              We collect information that you directly provide when submitting inquiry forms, booking consultations, or contacting us via WhatsApp or email. This includes your name, business name, phone number, email address, website or social media profile links, and campaign objectives.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">3. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively to evaluate your brand&apos;s growth opportunities, prepare custom proposals and audits, communicate project deliverables, and execute marketing services. We do not sell, rent, or trade personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">4. Tracking & Analytics</h2>
            <p>
              Our website uses privacy-compliant Google Analytics (gtag.js) and Meta Pixel to analyze aggregate website traffic patterns, measure page performance, and optimize our advertising funnels. You can manage or disable cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-lime font-normal mb-3">5. Contact Information</h2>
            <p>
              For privacy-related inquiries or data deletion requests, contact us directly at <a href="mailto:viralfluxmedia@gmail.com" className="text-lime hover:underline">viralfluxmedia@gmail.com</a> or +91 8108181651.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
