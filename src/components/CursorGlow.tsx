"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const innerPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    let frame: number;
    const lerp = () => {
      // Outer glow - slower follow
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      }
      // Inner dot - faster follow
      innerPos.current.x += (target.current.x - innerPos.current.x) * 0.2;
      innerPos.current.y += (target.current.y - innerPos.current.y) * 0.2;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${innerPos.current.x - 4}px, ${innerPos.current.y - 4}px)`;
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
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50 opacity-80"
      />
    </>
  );
}
