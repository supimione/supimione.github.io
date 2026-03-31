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
    <section id="contact" className="relative py-24 px-6 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon text-sm uppercase tracking-wider mb-6"
        >
          {">"} Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-8 leading-relaxed"
        >
          Whether it&apos;s building products, collaborating on ideas, or
          discussing tech &amp; AI — I&apos;m always open to meaningful
          conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="mailto:supimione@gmail.com"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-neon transition-colors"
          >
            <FiMail /> supimione@gmail.com
          </a>
          <span className="hidden sm:block text-gray-600">|</span>
          <a
            href="tel:+919933606242"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-neon transition-colors"
          >
            <FiPhone /> +91 9933606242
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-full border border-green-400/30 flex items-center justify-center text-green-400 hover:border-green-400 hover:shadow-neon-sm transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
