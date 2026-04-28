import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Inquiry } from "@/components/site/Inquiry";
import { BioOptimization } from "@/components/site/BioOptimization";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="relative bg-cream text-ink">
      <Nav />
      <Hero />
      <BioOptimization />
      <Inquiry />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
