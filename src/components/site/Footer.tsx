"use client";

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="font-display text-3xl">Viral Flux Media<span className="text-lime">.</span></div>
            <p className="font-mono-label text-cream/50 mt-4 leading-relaxed">
              Social media studio<br />Content · Influencer · Strategy
            </p>
            <div className="mt-4">
              <a href="mailto:viralfluxmedia@gmail.com" className="font-mono-label text-sm text-cream/70 hover:text-lime transition-colors">
                viralfluxmedia@gmail.com
              </a>
            </div>
          </div>
          {[
            { h: "Studio", l: ["About", "Careers", "Press"] },
            { h: "Follow", l: ["Instagram", "TikTok", "LinkedIn"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="font-mono-label text-cream/50 mb-4">{c.h}</div>
              <ul className="space-y-2">
                {c.l.map((x) => <li key={x}><a href="#" className="hover:text-lime">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-cream/10 font-mono-label text-cream/40">
          <span>© 2026 Viral Flux Media</span>
          <span>Content that converts, not just looks good.</span>
        </div>
      </div>
    </footer>
  );
}
