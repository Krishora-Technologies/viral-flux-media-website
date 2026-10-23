"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer 
      className="bg-ink text-cream py-16 md:py-24 border-t border-cream/10"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Viral Flux Media - Digital Marketing Agency" />
      <meta itemProp="url" content="https://viralfluxmedia.in" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & NAP Details */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group mb-1">
              <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Viral Flux Media Logo"
                  width={88}
                  height={45}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]"
                />
              </div>
              <span className="font-display text-3xl text-cream group-hover:text-white transition-colors">
                Viral Flux Media<span className="text-lime">.</span>
              </span>
            </Link>
            <p className="font-mono-label text-cream/70 mt-3 text-sm leading-relaxed max-w-sm">
              Premier social media marketing & cinematic video production studio headquartered in Dombivli, serving brands across Kalyan, Thane, Mumbai, and worldwide.
            </p>

            {/* Structured NAP Address */}
            <div 
              className="mt-6 space-y-2 text-sm text-cream/70 font-mono-label"
              itemProp="address" 
              itemScope 
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-start gap-2">
                <span className="text-lime">📍</span>
                <div>
                  <span itemProp="streetAddress">203, Jaywant Niwas, Star Colony, Gandhi Nagar</span>,{" "}
                  <span itemProp="addressLocality">Dombivli</span>,{" "}
                  <span itemProp="addressRegion">Maharashtra</span> —{" "}
                  <span itemProp="postalCode">421201</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lime">🕒</span>
                <span className="text-cream/60 text-xs">Mon – Sat: 10:00 AM – 7:00 PM (Sunday Closed)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lime">📞</span>
                <div className="flex items-center gap-2">
                  <a href="tel:+918108181651" itemProp="telephone" className="hover:text-lime transition-colors">
                    +91 8108181651
                  </a>
                  <span>/</span>
                  <a href="tel:+918108181650" itemProp="telephone" className="hover:text-lime transition-colors">
                    +91 8108181650
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lime">✉️</span>
                <a 
                  href="mailto:viralfluxmedia@gmail.com" 
                  itemProp="email" 
                  className="hover:text-lime transition-colors"
                >
                  viralfluxmedia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lime">💬</span>
                <a 
                  href="https://wa.me/918108181650?text=Hi%20Viral%20Flux%20Media,%20I%20am%20interested%20in%20scaling%20my%20brand%20social%20media." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lime hover:underline font-semibold"
                >
                  Direct WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Socials & Profiles */}
            <div className="mt-6 flex items-center gap-4 text-xs font-mono-label text-cream/50">
              <a 
                href="https://instagram.com/viralfluxmedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-lime transition-colors"
              >
                Instagram ↗
              </a>
              <span>·</span>
              <a 
                href="https://www.linkedin.com/company/viral-flux-media-digital-marketing-agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-lime transition-colors"
              >
                LinkedIn ↗
              </a>
              <span>·</span>
              <a 
                href="https://maps.app.goo.gl/4JhZJxpZi2CPWz5z5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-lime transition-colors"
              >
                Google Maps ↗
              </a>
            </div>
          </div>

          {/* Solutions & Subpages */}
          <div className="md:col-span-3">
            <div className="font-mono-label text-cream/50 text-xs uppercase tracking-wider mb-4">
              Dedicated Solutions
            </div>
            <ul className="space-y-3 font-mono-label text-sm text-cream/80">
              <li>
                <Link 
                  href="/social-media-marketing-agency-dombivli" 
                  className="hover:text-lime transition-colors flex items-center gap-1.5"
                >
                  <span>Social Media Agency Dombivli</span>
                  <span className="text-lime text-xs">✦</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/video-production-reel-editing-dombivli" 
                  className="hover:text-lime transition-colors flex items-center gap-1.5"
                >
                  <span>Reels & Video Production</span>
                  <span className="text-lime text-xs">✦</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/performance-marketing-paid-ads" 
                  className="hover:text-lime transition-colors flex items-center gap-1.5"
                >
                  <span>Performance Marketing & Ads</span>
                  <span className="text-lime text-xs">✦</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="hover:text-lime transition-colors flex items-center gap-1.5"
                >
                  <span>Marketing Blog & Guides</span>
                  <span className="text-lime text-xs">✦</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/program" 
                  className="hover:text-lime transition-colors text-cream/60"
                >
                  Affiliate & Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Service Hubs */}
          <div className="md:col-span-2">
            <div className="font-mono-label text-cream/50 text-xs uppercase tracking-wider mb-4">
              Service Areas
            </div>
            <ul className="space-y-2.5 font-mono-label text-sm text-cream/70">
              <li>
                <Link href="/social-media-marketing-agency-dombivli" className="hover:text-lime transition-colors">
                  Dombivli (421201)
                </Link>
              </li>
              <li>
                <Link href="/social-media-marketing-agency-kalyan" className="hover:text-lime transition-colors">
                  Kalyan & Khadakpada
                </Link>
              </li>
              <li>
                <Link href="/social-media-marketing-agency-thane" className="hover:text-lime transition-colors">
                  Thane & Majiwada
                </Link>
              </li>
              <li>
                <Link href="/social-media-marketing-agency-mumbai" className="hover:text-lime transition-colors">
                  Mumbai MMR
                </Link>
              </li>
              <li>Navi Mumbai & Vashi</li>
              <li className="text-lime/90 font-medium pt-1">Global Remote Delivery</li>
            </ul>
          </div>

          {/* Embedded Google Map */}
          <div className="md:col-span-3">
            <div className="font-mono-label text-cream/50 text-xs uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Studio Location</span>
              <a 
                href="https://maps.app.goo.gl/4JhZJxpZi2CPWz5z5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lime text-xs hover:underline"
              >
                Directions ↗
              </a>
            </div>
            <div className="relative w-full h-[180px] rounded-xl overflow-hidden border border-cream/15 bg-cream/5">
              <iframe
                title="Viral Flux Media - Digital Marketing Agency Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7604171221165!2d73.0926722!3d19.2056639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84f88dbcd53f8bf3%3A0x3ba3e0bc4d790de8!2sViral%20Flux%20Media%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="font-mono-label text-[11px] text-cream/40 mt-2">
              203, Jaywant Niwas, Star Colony, Gandhi Nagar, Dombivli, Maharashtra 421201
            </p>
          </div>
        </div>

        {/* Bottom copyright & local disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cream/10 font-mono-label text-cream/40 text-xs">
          <span>© 2026 Viral Flux Media. All rights reserved. Registered in Dombivli, Maharashtra, India.</span>
          <span>Content that converts, engineered for attention.</span>
        </div>
      </div>
    </footer>
  );
}
