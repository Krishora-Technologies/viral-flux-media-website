import { motion } from "framer-motion";
import p1 from "@/assets/post-2.jpg";
import p2 from "@/assets/post-6.jpg";
import p3 from "@/assets/post-3.jpg";

const cases = [
  { brand: "Maison Lune", category: "Fashion", growth: "+412%", img: p1, tag: "Followers, 6 months" },
  { brand: "North Atlas", category: "Travel", growth: "8.2M", img: p2, tag: "Reach, single campaign" },
  { brand: "Forma Studio", category: "Product", growth: "+19%", img: p3, tag: "Conversion uplift" },
];

export function Work() {
  return (
    <section id="work" className="bg-ink text-cream py-32 md:py-48 grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-20">
          <div>
            <div className="font-mono-label text-cream/60 mb-6">— Selected work</div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Receipts, <em className="text-lime not-italic">not</em><br />promises.
            </h2>
          </div>
          <a href="#" className="hidden md:inline font-mono-label text-cream/60 hover:text-lime">All case studies →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {cases.map((c, i) => (
            <motion.a
              key={c.brand}
              href="#"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-5">
                <img src={c.img} alt={c.brand} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-4 left-4 font-mono-label bg-cream text-ink rounded-full px-3 py-1">{c.category}</div>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl italic font-light">{c.brand}</h3>
                <span className="font-display text-4xl text-lime">{c.growth}</span>
              </div>
              <div className="font-mono-label text-cream/50 mt-1">{c.tag}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
