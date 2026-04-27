const items = ["Strategy", "✦", "Content", "✦", "Community", "✦", "Paid Social", "✦", "Influencer", "✦", "Production", "✦"];

export function Marquee() {
  return (
    <section className="border-y border-ink/10 bg-ink py-8 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl text-cream px-8 italic font-light">
            {it === "✦" ? <span className="text-lime not-italic">✦</span> : it}
          </span>
        ))}
      </div>
    </section>
  );
}
