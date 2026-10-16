import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Blog & Local Marketing Insights | Viral Flux Media - Digital Marketing Agency",
  description: "Guides, agency comparisons, and data-backed social media growth strategies for businesses in Dombivli, Kalyan, Thane, and Mumbai.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "Social Media Marketing Blog Dombivli",
    "Best Marketing Agencies Kalyan",
    "Instagram Reel Strategy Mumbai",
    "Instagram Reels Strategy Dombivli",
    "Viral Flux Media Insights",
  ],
  openGraph: {
    title: "Blog & Local Marketing Insights | Viral Flux Media - Digital Marketing Agency",
    description: "Guides, agency comparisons, and data-backed social media growth strategies for businesses in Dombivli, Kalyan, Thane, and Mumbai.",
    url: "https://viralfluxmedia.in/blog",
    siteName: "Viral Flux Media - Digital Marketing Agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export const BLOG_POSTS = [
  {
    slug: "best-social-media-marketing-agencies-dombivli-kalyan",
    title: "7 Best Social Media & Reel Production Agencies in Dombivli & Kalyan (2026 Comparison)",
    desc: "A comprehensive, data-backed comparison of the top social media marketing and video production agencies in Dombivli and Kalyan, covering video quality, execution models, and ROI.",
    category: "Agency Guide & Comparison",
    date: "April 2026",
    readTime: "7 min read",
    highlight: "Ranked #1: Viral Flux Media",
  },
  {
    slug: "instagram-reels-strategy-dombivli-kalyan",
    title: "The Dombivli & Kalyan Guide to Viral Instagram Reels for Local Businesses",
    desc: "How local retailers, cafes, clinics, and builders turn 1.5-second hooks, cinematic 4K video, and hyper-local targeting into daily foot traffic and qualified WhatsApp leads.",
    category: "Reel Production & Strategy",
    date: "April 2026",
    readTime: "6 min read",
    highlight: "Viral Growth Playbook",
  },
];

export default function BlogHubPage() {
  return (
    <main className="relative bg-[#0e0e0e] text-[#f9f8f3] min-h-screen selection:bg-lime selection:text-ink">
      <Nav />

      {/* Header */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="font-mono-label text-lime text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Editorial & Market Analysis · Dombivli, Kalyan & Thane
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
          Insights, Guides & <em className="text-lime not-italic font-normal">Market Data</em>.
        </h1>
        <p className="mt-8 text-cream/80 text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
          Actionable guides, agency comparison benchmarks, and growth playbooks designed to help local business owners make informed marketing investments and dominate their market.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-lime/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-label text-cream/50 mb-6">
                  <span className="text-lime bg-lime/10 px-3 py-1 rounded-full">{post.category}</span>
                  <span>{post.readTime} · {post.date}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream group-hover:text-lime transition-colors leading-snug mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="font-mono-label text-xs md:text-sm text-cream/70 leading-relaxed mb-6">
                  {post.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono-label text-xs text-lime">{post.highlight}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono-label text-xs text-cream/80 group-hover:text-lime group-hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Read Full Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
