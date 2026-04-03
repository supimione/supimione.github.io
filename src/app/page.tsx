import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"));
const CursorGlow = dynamic(() => import("@/components/CursorGlow"));
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[60vh]" />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="min-h-[60vh]" />,
});
const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <div className="min-h-[60vh]" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[40vh]" />,
});
const DreamlytixSpotlight = dynamic(() => import("@/components/DreamlytixSpotlight"), {
  loading: () => <div className="min-h-[40vh]" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[40vh]" />,
});
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
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
    </>
  );
}
