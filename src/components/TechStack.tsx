"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Kendo UI"],
  },
  {
    name: "Backend",
    items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Mobile",
    items: ["React Native"],
  },
  {
    name: "Testing",
    items: ["Cypress", "Jest"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Figma", "Postman", "Webpack"],
  },
  {
    name: "AI",
    items: ["Claude AI", "Codex"],
  },
];

export default function TechStack() {
  let globalIndex = 0;

  return (
    <section id="tech" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon text-sm uppercase tracking-wider mb-12 text-center"
        >
          {">"} Tech Stack
        </motion.h2>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-mono text-neon text-xs uppercase tracking-widest mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => {
                  const idx = globalIndex++;
                  return (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 text-sm font-medium hover:border-green-400 hover:shadow-neon-sm transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
