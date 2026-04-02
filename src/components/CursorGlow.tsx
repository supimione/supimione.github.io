"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices — no cursor to follow
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let posX = 0, posY = 0;
    let innerX = 0, innerY = 0;
    let targetX = 0, targetY = 0;
    let frame = 0;
    let running = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!running) {
        running = true;
        frame = requestAnimationFrame(lerp);
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const lerp = () => {
      posX += (targetX - posX) * 0.08;
      posY += (targetY - posY) * 0.08;
      innerX += (targetX - innerX) * 0.2;
      innerY += (targetY - innerY) * 0.2;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${posX - 20}px, ${posY - 20}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${innerX - 4}px, ${innerY - 4}px, 0)`;
      }

      // Stop loop when close enough to target
      const dx = targetX - posX;
      const dy = targetY - posY;
      if (dx * dx + dy * dy > 0.1) {
        frame = requestAnimationFrame(lerp);
      } else {
        running = false;
      }
    };

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div ref={innerRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50 opacity-80 will-change-transform" />
    </>
  );
}
