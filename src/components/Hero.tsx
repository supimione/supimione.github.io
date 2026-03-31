"use client";

import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10"
    >
      <div className="max-w-3xl">
        <div className="mb-6">
          <TypingAnimation
            text="> Hey, I'm Supratim Das"
            speed={60}
            className="font-mono text-lg md:text-xl text-accent"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-gradient">Full-Stack Engineer</span>
          <br />
          <span className="text-white">&amp; Founder</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable products &amp; transforming education through{" "}
          <span className="text-blue-400">Dreamlytix</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-blue-500/40 text-blue-400 font-semibold hover:border-blue-400 hover:shadow-glow-sm btn-glow transition-all duration-300"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <a href="#about">
          <FiChevronDown className="text-blue-400 animate-bounce-slow" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
