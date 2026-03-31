"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "7+ Years", desc: "Experience" },
  { label: "Founder", desc: "@ Dreamlytix" },
  { label: "AI-Powered", desc: "Workflow" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 z-10 dot-grid">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-mono text-neon text-sm uppercase tracking-wider mb-4">
              {">"} About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A passionate Software Engineer with 7+ years of experience
              building scalable, high-performance web &amp; mobile applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From frontend to backend to mobile — I handle the full picture.
              Alongside engineering, I&apos;m building Dreamlytix — transforming
              schools into digital ecosystems. I actively use AI tools like
              Claude, Codex, and Antigravity to enhance development through
              faster coding, debugging, and prototyping.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass border-l-2 border-neon rounded-lg p-5 hover:shadow-neon-sm transition-all duration-300"
              >
                <p className="text-white font-bold text-lg">{h.label}</p>
                <p className="text-gray-400 text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
