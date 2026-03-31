# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark futuristic single-page portfolio with neon green accents, particle background, cursor glow trail, typing animations, and scroll-triggered reveals.

**Architecture:** Single-page Next.js app with section components. Canvas-based particle system and CSS cursor glow as global overlays. Framer Motion for all scroll/entry animations. Tailwind for styling with custom neon green theme colors.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, React Icons, existing Aceternity UI navbar.

---

### Task 1: Update Tailwind Config and Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update tailwind.config.ts with neon green theme**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: "#4ade80",
        darkBg: "#0a0a0a",
        darkSurface: "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        mono: ["'Fira Code'", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(74,222,128,0.5)",
        "neon-sm": "0 0 10px rgba(74,222,128,0.3)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Update globals.css with base dark styles and scan-line overlay**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-darkBg text-white font-sans;
    position: relative;
  }
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.08) 2px,
      rgba(0, 0, 0, 0.08) 3px
    );
    pointer-events: none;
    z-index: 100;
  }
}

@layer utilities {
  .text-neon {
    color: #4ade80;
    text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
  }
  .border-neon-glow {
    border-color: rgba(74, 222, 128, 0.3);
  }
  .border-neon-glow-hover:hover {
    border-color: #4ade80;
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
  }
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
  .dot-grid {
    background-image: radial-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "feat: update tailwind config and global styles for cyberpunk theme"
```

---

### Task 2: Create ParticleBackground Component

**Files:**
- Create: `src/components/ParticleBackground.tsx`

- [ ] **Step 1: Create particle canvas component**

```tsx
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const count = 80;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      particlesRef.current.forEach((p) => {
        // Repel from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${0.3 + p.size * 0.15})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Pause on tab blur
    const onVisChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrameRef.current);
      } else {
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisChange);

    // Resize canvas when page height changes
    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisChange);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ParticleBackground.tsx
git commit -m "feat: add particle background canvas component"
```

---

### Task 3: Create CursorGlow Component

**Files:**
- Create: `src/components/CursorGlow.tsx`

- [ ] **Step 1: Create cursor glow component**

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    let frame: number;
    const lerp = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)`;
      }
      frame = requestAnimationFrame(lerp);
    };
    lerp();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-green-400 opacity-50 blur-xl pointer-events-none z-50"
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CursorGlow.tsx
git commit -m "feat: add cursor glow trail component"
```

---

### Task 4: Create TypingAnimation Component

**Files:**
- Create: `src/components/TypingAnimation.tsx`

- [ ] **Step 1: Create typing animation component**

```tsx
"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  speed = 80,
  className = "",
  onComplete,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TypingAnimation.tsx
git commit -m "feat: add typing animation component with blinking cursor"
```

---

### Task 5: Create Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```tsx
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
          Full-Stack Engineer & Founder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Building scalable products & transforming education through Dreamlytix
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add hero section with typing animation and CTAs"
```

---

### Task 6: Create About Section

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Create About component**

```tsx
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
              building scalable, high-performance web & mobile applications.
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add about section with highlight cards"
```

---

### Task 7: Create TechStack Section

**Files:**
- Create: `src/components/TechStack.tsx`

- [ ] **Step 1: Create TechStack component**

```tsx
"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Kendo UI"],
  },
  {
    name: "Backend",
    items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Mobile",
    items: ["React Native"],
  },
  {
    name: "Testing",
    items: ["Cypress", "Jest"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Figma", "Postman", "Webpack"],
  },
  {
    name: "AI",
    items: ["Claude AI", "Codex"],
  },
];

export default function TechStack() {
  let globalIndex = 0;

  return (
    <section id="tech" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon text-sm uppercase tracking-wider mb-12 text-center"
        >
          {">"} Tech Stack
        </motion.h2>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-mono text-neon text-xs uppercase tracking-widest mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => {
                  const idx = globalIndex++;
                  return (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 text-sm font-medium hover:border-green-400 hover:shadow-neon-sm transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TechStack.tsx
git commit -m "feat: add tech stack section with staggered badge animations"
```

---

### Task 8: Create Projects Section

**Files:**
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Create Projects component with placeholder cards**

```tsx
"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A scalable SaaS platform with real-time data sync, role-based access, and a modern dashboard UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Beta",
    description:
      "Cross-platform mobile app for managing daily workflows with offline-first architecture.",
    tech: ["React Native", "Redux", "TypeScript", "REST APIs"],
    link: "#",
  },
  {
    title: "Project Gamma",
    description:
      "AI-powered automation tool that streamlines repetitive development tasks and code reviews.",
    tech: ["Next.js", "Claude AI", "PostgreSQL", "NestJS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon text-sm uppercase tracking-wider mb-12 text-center"
        >
          {">"} Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass border border-green-400/20 rounded-xl p-6 hover:border-green-400/60 hover:shadow-neon-sm hover:scale-[1.02] transition-all duration-300 group"
            >
              <h3 className="text-white font-bold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-green-400/20 text-green-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-neon text-sm font-medium group-hover:gap-2 transition-all duration-300"
              >
                View Project <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add projects section with placeholder cards"
```

---

### Task 9: Create DreamlytixSpotlight Section

**Files:**
- Create: `src/components/DreamlytixSpotlight.tsx`

- [ ] **Step 1: Create Dreamlytix spotlight component**

```tsx
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
          {/* Gradient border glow effect */}
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/DreamlytixSpotlight.tsx
git commit -m "feat: add Dreamlytix spotlight section"
```

---

### Task 10: Create Contact Section and Update Footer

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Create Contact component**

```tsx
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
          discussing tech & AI — I&apos;m always open to meaningful
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
```

- [ ] **Step 2: Update Footer component**

Replace entire `src/components/Footer.tsx` with:

```tsx
export default function Footer() {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 w-full px-6 md:px-20 py-8 border-t border-green-400/20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-500">
          &copy; 2026 Supratim Das. All Rights Reserved.
        </span>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-gray-500 hover:text-neon transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx src/components/Footer.tsx
git commit -m "feat: add contact section and update footer for single-page layout"
```

---

### Task 11: Update Navbar for Anchor Navigation

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Update Navbar to use anchor links**

Replace entire `src/components/Navbar.tsx` with:

```tsx
"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Dreamlytix", href: "#dreamlytix" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-md mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={item.label}
            />
          </a>
        ))}
      </Menu>
    </div>
  );
}
```

- [ ] **Step 2: Update navbar-menu.tsx styles for dark cyberpunk theme**

In `src/components/ui/navbar-menu.tsx`, update the `Menu` component's nav className from:

```
"relative rounded-full bg-white/90 text-sm text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 flex justify-center space-x-4 px-3 py-3"
```

to:

```
"relative rounded-full bg-black/80 text-sm text-zinc-200 shadow-lg shadow-green-400/5 ring-1 ring-green-400/20 backdrop-blur flex justify-center space-x-4 px-3 py-3"
```

And update the `MenuItem` motion.p className from:

```
"cursor-pointer text-black hover:opacity-[0.9] text-sm dark:text-white px-2"
```

to:

```
"cursor-pointer text-zinc-300 hover:text-green-400 text-sm px-2 transition-colors"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx src/components/ui/navbar-menu.tsx
git commit -m "feat: update navbar to anchor navigation with cyberpunk styling"
```

---

### Task 12: Wire Everything Together in Layout and Page

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update layout.tsx**

Replace entire `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Supratim Das - Full-Stack Engineer & Founder",
  description:
    "Full-Stack Software Engineer with 7+ years of experience. Founder of Dreamlytix. Building scalable, high-performance web & mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-darkBg text-white overflow-x-hidden">
        <ParticleBackground />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update page.tsx**

Replace entire `src/app/page.tsx` with:

```tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import DreamlytixSpotlight from "@/components/DreamlytixSpotlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <DreamlytixSpotlight />
      <Contact />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: wire all sections into single-page layout"
```

---

### Task 13: Verify and Fix

- [ ] **Step 1: Run dev server and check for errors**

```bash
npm run dev
```

- [ ] **Step 2: Run build to catch type errors**

```bash
npm run build
```

- [ ] **Step 3: Fix any errors found**

- [ ] **Step 4: Final commit if fixes were needed**

```bash
git add -A
git commit -m "fix: resolve build issues from portfolio redesign"
```
