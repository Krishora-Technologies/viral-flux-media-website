import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12">
        <a href="/" className="font-display text-xl tracking-tight text-cream">
          Viral Flux<span className="text-lime">.</span>
        </a>
        <nav className="hidden gap-10 md:flex">
          {["Services", "Process", "Studio"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-mono-label text-cream hover:text-lime transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#inquiry" className="font-mono-label rounded-full border border-cream px-5 py-2 text-cream hover:bg-lime hover:text-ink hover:border-lime transition-colors">
          Let's talk →
        </a>
      </div>
    </motion.header>
  );
}
