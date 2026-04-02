"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  colorIdx: number;
  alpha: number;
}

const COLORS = [
  "59, 130, 246",
  "139, 92, 246",
  "6, 182, 212",
];
const PARTICLE_COUNT = 40;
const CONNECTION_DIST = 150;
const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
const MOUSE_DIST = 200;
const TWO_PI = Math.PI * 2;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0;
    let mouseX = -1000, mouseY = -1000;
    let animFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      colorIdx: Math.floor(Math.random() * 3),
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Batch connection lines — single path, single stroke
      ctx.beginPath();
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECTION_DIST_SQ) {
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
          }
        }
      }
      ctx.stroke();

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_DIST * MOUSE_DIST && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = ((MOUSE_DIST - dist) / MOUSE_DIST) * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        // Simple dot — skip expensive radial gradients
        const color = COLORS[p.colorIdx];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, TWO_PI);
        ctx.fillStyle = `rgba(${color}, ${p.alpha + 0.2})`;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(animate);
    };
    animate();

    const onVisChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrame);
      } else {
        animFrame = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", onVisChange);

    const resizeObserver = new ResizeObserver(() => {
      const newH = document.documentElement.scrollHeight;
      if (Math.abs(newH - h) > 100) resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisChange);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-float" />
      </div>
    </>
  );
}
