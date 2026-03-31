"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function DreamlytixSpotlight() {
  return (
    <section id="dreamlytix" className="relative py-28 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden gradient-border"
          style={{ background: "rgba(6, 6, 17, 0.8)" }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block font-mono text-blue-400 text-xs uppercase tracking-widest mb-4"
            >
              Currently Building
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gradient mb-5">
              Dreamlytix
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Transforming traditional schools into digitally empowered
              ecosystems through modern, scalable software solutions and SaaS
              products. Bridging the gap between education and technology.
            </p>
            <a
              href="https://dreamlytix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-glow transition-all duration-300"
            >
              Visit Dreamlytix
              <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
