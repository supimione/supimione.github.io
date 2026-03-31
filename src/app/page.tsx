import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import DreamlytixSpotlight from "@/components/DreamlytixSpotlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <DreamlytixSpotlight />
      <Contact />
      <Footer />
    </main>
  );
}
