import { motion } from "framer-motion";

const services = [
  { n: "01", t: "Brand Strategy", d: "Positioning, voice, visual systems built to outlast the algorithm." },
  { n: "02", t: "Content Studio", d: "In-house production. Stills, motion, edit. Shot weekly, never stale." },
  { n: "03", t: "Community", d: "DMs, comments, crisis. Real humans, on brand, around the clock." },
  { n: "04", t: "Paid & Performance", d: "Creative-led media. We test 40 hooks before you finish your coffee." },
  { n: "05", t: "Talent & Influencer", d: "Curated partnerships, measured by audience, not vanity." },
  { n: "06", t: "Analytics", d: "Bi-weekly reports that actually say something. No screenshot dumps." },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4 md:sticky md:top-32 self-start">
            <div className="font-mono-label text-muted-foreground mb-6">— Services / 006</div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Six things,<br />done <em className="text-lime not-italic">obsessively</em>.
            </h2>
          </div>
          <div className="md:col-span-8">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group flex items-start gap-6 border-t border-ink/15 py-8 hover:bg-ink hover:text-cream transition-colors duration-500 cursor-pointer px-2"
              >
                <span className="font-mono-label text-muted-foreground group-hover:text-lime mt-2 shrink-0">{s.n}</span>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl mb-2 italic font-light">{s.t}</h3>
                  <p className="text-muted-foreground group-hover:text-cream/80 max-w-lg">{s.d}</p>
                </div>
                <span className="font-mono-label opacity-0 group-hover:opacity-100 transition-opacity self-center">↗</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
