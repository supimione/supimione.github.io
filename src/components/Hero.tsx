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
            className="font-mono text-lg md:text-xl text-neon"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Full-Stack Engineer &amp; Founder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Building scalable products &amp; transforming education through Dreamlytix
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-neon text-neon font-semibold hover:shadow-neon transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-green-400 text-darkBg font-semibold hover:bg-green-300 transition-all duration-300"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <a href="#about">
          <FiChevronDown className="text-neon animate-bounce-slow" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
