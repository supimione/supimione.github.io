import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Experience = dynamic(() => import("@/components/Experience"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Projects = dynamic(() => import("@/components/Projects"));
const DreamlytixSpotlight = dynamic(() => import("@/components/DreamlytixSpotlight"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <DreamlytixSpotlight />
      <Contact />
      <Footer />
    </main>
  );
}
