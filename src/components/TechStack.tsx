"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { categories } from "@/data/techstack";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const { ref, visible } = useInView();

  const activeCat = categories.find((c) => c.name === activeCategory)!;

  return (
    <section
      id="tech"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-mono text-blue-400 text-xs sm:text-sm uppercase tracking-wider mb-4 text-center fade-up ${visible ? "visible" : ""}`}
        >
          {">"} Tech Stack
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-base text-center mb-10 sm:mb-14 max-w-4xl mx-auto fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          Technologies I consistently use to design, develop, and scale
          high-quality products, focusing on performance, reliability, and user
          experience.
        </p>

        {/* Category tabs — layoutId needs framer-motion */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative px-10 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat.name
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300 glass"
              }`}
            >
              {activeCategory === cat.name && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className={`absolute inset-0 rounded-full bg-linear-to-r ${cat.gradient} opacity-90`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {cat.icon} {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Tech grid — CSS transitions instead of framer */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {activeCat.items.map((item, i) => (
            <div
              key={item.name}
              className={`group relative glass rounded-xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 cursor-default overflow-hidden transition-all duration-300 hover:shadow-glow-sm hover:scale-105 hover:-translate-y-1 fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
            >
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

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: item.color }}
              />
            </div>
          ))}
        </div>

        <p
          className={`text-center mt-10 text-gray-600 text-sm fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <span className="text-gradient font-semibold">
            {categories.reduce((acc, c) => acc + c.items.length, 0)}+
          </span>{" "}
          technologies across {categories.length} domains
        </p>
      </div>
    </section>
  );
}
