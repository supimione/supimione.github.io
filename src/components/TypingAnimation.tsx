"use client";

import { useEffect, useRef, useState } from "react";

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
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onCompleteRef.current?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  );
}
