"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { highlights, aboutCards } from "@/data/about";

function CountUp({ target, suffix = "", started }: { target: number; suffix?: string; started: boolean }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!started || hasRun.current) return;
    hasRun.current = true;

    let current = 0;
    const step = Math.ceil(target / (1500 / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span className="text-gradient text-3xl font-extrabold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10 dot-grid"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-blue-400 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-12 text-center fade-up ${visible ? "visible" : ""}`}
        >
          {">"} About Me
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center fade-up-lg ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              I enjoy taking ideas from concept to <br />
              reality, building products that actually <br /> work and deliver
              value.
            </h3>
            <p className="text-gray-300 text-base sm:text-md leading-relaxed mb-4">
              Full-Stack Software Engineer focused on building scalable,
              high-performance web and mobile applications. Experienced in
              crafting seamless user experiences alongside robust backend
              architectures, ensuring reliability, efficiency, and
              maintainability across the entire stack.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              AI is an integral part of my development workflow. I leverage
              tools like <span className="text-blue-400">Claude Code</span>,{" "}
              <span className="text-blue-400">Codex</span>, and{" "}
              <span className="text-blue-400">Antigravity</span> to accelerate
              development, improve debugging, and streamline prototyping. I’m
              also actively exploring AI-powered user experiences and automation
              to build smarter, future-ready applications.
            </p>

            <div className="flex gap-6 sm:gap-8">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`text-center fade-up ${visible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <CountUp target={h.value} suffix={h.suffix} started={visible} />
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {aboutCards.map((card, i) => (
              <div
                key={card.title}
                className={`glass glass-hover rounded-xl p-5 transition-all duration-300 group fade-right ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{card.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
