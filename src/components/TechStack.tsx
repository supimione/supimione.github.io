"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiCypress,
  SiJest,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJira,
  SiFigma,
  SiPostman,
  SiWebpack,
} from "react-icons/si";
import { FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  name: string;
  icon: string;
  gradient: string;
  items: TechItem[];
}

const categories: Category[] = [
  {
    name: "Frontend",
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-400",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Kendo UI", icon: FaServer, color: "#FF6358" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    gradient: "from-purple-500 to-pink-400",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "REST APIs", icon: FaServer, color: "#06B6D4" },
    ],
  },
  {
    name: "Mobile",
    icon: "📱",
    gradient: "from-green-500 to-emerald-400",
    items: [
      { name: "React Native", icon: FaMobileAlt, color: "#61DAFB" },
    ],
  },
  {
    name: "Testing",
    icon: "🧪",
    gradient: "from-amber-500 to-orange-400",
    items: [
      { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    gradient: "from-slate-400 to-zinc-300",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
    ],
  },
  {
    name: "AI",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-400",
    items: [
      { name: "Claude AI", icon: FaRobot, color: "#D4A574" },
      { name: "Codex", icon: FaRobot, color: "#10A37F" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const activeCat = categories.find((c) => c.name === activeCategory)!;

  return (
    <section id="tech" className="relative py-28 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-blue-400 text-sm uppercase tracking-wider mb-4 text-center"
        >
          {">"} Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-14 max-w-lg mx-auto"
        >
          Technologies I work with daily to build scalable products
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.name
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300 glass"
              }`}
            >
              {activeCategory === cat.name && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.gradient} opacity-90`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {cat.icon} {cat.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {activeCat.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="group relative glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default overflow-hidden transition-all duration-300 hover:shadow-glow-sm"
            >
              {/* Hover gradient bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${item.color}10, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <item.icon
                  size={36}
                  className="transition-all duration-300 group-hover:drop-shadow-lg"
                  style={{ color: item.color }}
                />
              </div>

              <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.name}
              </span>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: item.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Total count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-gray-600 text-sm"
        >
          <span className="text-gradient font-semibold">{categories.reduce((acc, c) => acc + c.items.length, 0)}+</span>{" "}
          technologies across {categories.length} domains
        </motion.p>
      </div>
    </section>
  );
}
