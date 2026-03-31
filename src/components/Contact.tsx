"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/supimione/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/supimione/", label: "Instagram" },
  { icon: FaGithub, href: "https://github.com/supimione", label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-blue-400 text-sm uppercase tracking-wider mb-4"
        >
          {">"} Let&apos;s Connect
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Got an idea? <span className="text-gradient">Let&apos;s talk.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-10 leading-relaxed"
        >
          Whether it&apos;s building products, collaborating on ideas, or
          discussing tech &amp; AI — I&apos;m always open to meaningful
          conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="mailto:supimione@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glass-hover text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            <FiMail size={16} /> supimione@gmail.com
          </a>
          <a
            href="tel:+919933606242"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glass-hover text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            <FiPhone size={16} /> +91 9933606242
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:shadow-glow-sm transition-all duration-300"
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
