"use client";

import { useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { FiMail, FiPhone } from "react-icons/fi";
import { socials } from "@/data/socials";

// Obfuscated to prevent scraping by bots
const EMAIL_PARTS = ["supimione", "gmail.com"];
const PHONE_PARTS = ["+91", "9933606242"];
const getEmail = () => EMAIL_PARTS.join("@");
const getPhone = () => PHONE_PARTS.join(" ");

export default function Contact() {
  const { ref, visible } = useInView();

  const handleEmailClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmail()}`;
  }, []);

  const handlePhoneClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `tel:${PHONE_PARTS[0]}${PHONE_PARTS[1]}`;
  }, []);

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`font-mono text-blue-400 text-xs sm:text-sm uppercase tracking-wider mb-4 fade-up ${visible ? "visible" : ""}`}
        >
          {">"} Let&apos;s Connect
        </h2>
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          Have an idea? <br />
          <span className="text-gradient">Let&apos;s build it together.</span>
        </h3>

        <p
          className={`text-gray-400 text-base mb-8 sm:mb-10 md:mb-8 leading-relaxed fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          Whether it&apos;s product development, consulting, collaborating on
          ideas, or just a conversation about tech &amp; AI — I&apos;m always
          open to connecting with people who value innovation and impact.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="#contact"
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm glass glass-hover text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            <FiMail size={16} /> {getEmail()}
          </a>
          <a
            href="#contact"
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full glass glass-hover text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            <FiPhone size={16} /> {getPhone()}
          </a>
        </div>

        <div
          className={`flex gap-4 justify-center fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:shadow-glow-sm hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
