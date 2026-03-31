"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-gradient text-3xl font-extrabold">
      {count}{suffix}
    </span>
  );
}

const highlights = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Tech Stack Tools" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 z-10 dot-grid">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-blue-400 text-sm uppercase tracking-wider mb-12 text-center"
        >
          {">"} About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A passionate Software Engineer with 7+ years of experience
              building scalable, high-performance web &amp; mobile applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              From frontend to backend to mobile — I handle the full picture.
              Alongside engineering, I&apos;m building{" "}
              <span className="text-blue-400">Dreamlytix</span> — transforming
              schools into digital ecosystems. I actively use AI tools like
              Claude, Codex, and Antigravity to enhance development through
              faster coding, debugging, and prototyping.
            </p>
            <div className="flex gap-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <CountUp target={h.value} suffix={h.suffix} />
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: "🚀", title: "Founder @ Dreamlytix", desc: "Transforming schools into digital ecosystems" },
              { icon: "🤖", title: "AI-Powered Workflow", desc: "Claude, Codex & AI tools in daily development" },
              { icon: "💡", title: "Full-Stack Builder", desc: "Frontend, backend, mobile — end to end" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass glass-hover rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{card.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
