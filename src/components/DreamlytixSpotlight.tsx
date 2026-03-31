"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function DreamlytixSpotlight() {
  return (
    <section id="dreamlytix" className="relative py-24 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 md:p-12 glass border border-green-400/30 overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-600/5 pointer-events-none" />
          <div className="relative z-10">
            <span className="font-mono text-neon text-xs uppercase tracking-widest">
              Currently Building
            </span>
            <h3 className="text-4xl font-bold text-white mt-3 mb-4">
              Dreamlytix
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl">
              Transforming traditional schools into digitally empowered
              ecosystems through modern, scalable software solutions and SaaS
              products. Bridging the gap between education and technology.
            </p>
            <a
              href="https://dreamlytix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon text-neon font-semibold hover:shadow-neon transition-all duration-300"
            >
              Visit Dreamlytix <FiExternalLink />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
