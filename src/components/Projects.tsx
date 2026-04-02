"use client";

import { useInView } from "@/hooks/useInView";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Dreamlytix",
    description:
      "India's ed-tech development agency building custom websites, admin panels, and mobile apps for schools, gyms, and growing businesses — 150+ institutions digitized.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    link: "https://www.dreamlytix.com/",
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "Novacoat",
    description:
      "Professional painting contractor based in West Bengal, offering expert residential and commercial painting services with quality finishes and reliable workmanship.",
    tech: ["Next.js", "Tailwind CSS", "NodeJS", "MongoDB"],
    link: "https://www.novacoat.co.in/",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "Khabarwala",
    description:
      "India's ground-rooted Bengali news portal covering politics, technology, entertainment, and local stories — from every village to Delhi, in English and বাংলা.",
    tech: ["Next.js", "Tailwind CSS", "NodeJS", "MongoDB", "Redux", "Vercel"],
    link: "https://khabarwala-news-portal.vercel.app/",
    gradient: "from-orange-500/20 to-red-500/10",
  },
];

export default function Projects() {
  const { ref, visible } = useInView();

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-mono text-blue-400 text-xs sm:text-sm uppercase tracking-wider mb-4 text-center fade-up ${visible ? "visible" : ""}`}
        >
          {">"} Projects
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-lg mx-auto fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          A selection of things I&apos;ve built
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`relative glass rounded-xl p-4 sm:p-6 group cursor-pointer transition-all duration-500 hover:shadow-glow-sm hover:-translate-y-2 overflow-hidden fade-up-lg ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <FiArrowUpRight
                    className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    size={20}
                    onClick={() => window.open(project.link, "_blank")}
                  />
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
