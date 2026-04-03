"use client";

import { useInView } from "@/hooks/useInView";

export default function InViewSection({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useInView();

  return (
    <section id={id} className={className} ref={ref} data-visible={visible ? "" : undefined}>
      {children}
    </section>
  );
}
