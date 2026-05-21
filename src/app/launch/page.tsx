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
import { LaunchExperience } from "@/components/site/LaunchExperience";

export default function LaunchPage() {
  return (
    <LaunchExperience>
      <main className="relative bg-cream text-ink" style={{ position: "relative" }}>
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
    </LaunchExperience>
  );
}
