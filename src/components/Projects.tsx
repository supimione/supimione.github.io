"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A scalable SaaS platform with real-time data sync, role-based access, and a modern dashboard UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Project Beta",
    description:
      "Cross-platform mobile app for managing daily workflows with offline-first architecture.",
    tech: ["React Native", "Redux", "TypeScript", "REST APIs"],
    link: "#",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Project Gamma",
    description:
      "AI-powered automation tool that streamlines repetitive development tasks and code reviews.",
    tech: ["Next.js", "Claude AI", "PostgreSQL", "NestJS"],
    link: "#",
    gradient: "from-blue-500/20 to-purple-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-blue-400 text-sm uppercase tracking-wider mb-4 text-center"
        >
          {">"} Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-12 max-w-lg mx-auto"
        >
          A selection of things I&apos;ve built
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative glass rounded-xl p-6 group cursor-pointer transition-all duration-500 hover:shadow-glow-sm overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-xl group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <FiArrowUpRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
