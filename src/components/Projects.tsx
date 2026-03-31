"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A scalable SaaS platform with real-time data sync, role-based access, and a modern dashboard UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Beta",
    description:
      "Cross-platform mobile app for managing daily workflows with offline-first architecture.",
    tech: ["React Native", "Redux", "TypeScript", "REST APIs"],
    link: "#",
  },
  {
    title: "Project Gamma",
    description:
      "AI-powered automation tool that streamlines repetitive development tasks and code reviews.",
    tech: ["Next.js", "Claude AI", "PostgreSQL", "NestJS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon text-sm uppercase tracking-wider mb-12 text-center"
        >
          {">"} Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass border border-green-400/20 rounded-xl p-6 hover:border-green-400/60 hover:shadow-neon-sm hover:scale-[1.02] transition-all duration-300 group"
            >
              <h3 className="text-white font-bold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-green-400/20 text-green-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-neon text-sm font-medium group-hover:gap-2 transition-all duration-300"
              >
                View Project <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
