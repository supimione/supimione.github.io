"use client";

import Image from "next/image";
import { motion } from "motion/react";
import profileImg from "@/images/profile.jpeg";
import TypingAnimation from "./TypingAnimation";
import { FiChevronDown, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10"
    >
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-blue-500/40 shadow-lg shadow-blue-500/20">
            <Image
              src={profileImg}
              alt="Supratim Das - Full-Stack Software Engineer"
              fill
              className="object-cover"
              priority
              placeholder="blur"
            />
          </div>
        </motion.div>

        <div className="mb-6">
          <TypingAnimation
            text="> Hey, I'm Supratim Das"
            speed={60}
            className="font-mono text-base md:text-lg text-accent"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-gradient">Full-Stack Engineer</span>
          <br />
          <span className="text-white">&amp; Founder</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="text-base text-gray-400 mb-8 sm:mb-10 md:mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          7+ years transforming ideas into scalable digital products,
          specializing in pixel-perfect UI and high-performance backend
          development. Currently driving digital transformation for businesses
          through <span className="text-blue-400">Dreamlytix</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="flex gap-3 sm:gap-5 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 text-sm sm:text-base md:text-xs rounded-full border border-blue-500/40 text-blue-400 font-semibold hover:border-blue-400 hover:shadow-glow-sm btn-glow transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="/Supratim_Das_CV.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-8 py-3 text-sm sm:text-base md:text-xs  rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              <FiDownload size={16} />
              Download CV
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm sm:text-base md:text-xs rounded-full border border-blue-500/40 text-blue-400 font-semibold hover:border-blue-400 hover:shadow-glow-sm btn-glow transition-all duration-300"
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
          <FiChevronDown
            className="text-blue-400 animate-bounce-slow"
            size={30}
          />
        </a>
      </motion.div>
    </section>
  );
}
