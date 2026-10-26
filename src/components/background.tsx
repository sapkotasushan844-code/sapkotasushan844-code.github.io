"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = spot.current;
    if (!node) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      node.style.setProperty("--mx", `${event.clientX}px`);
      node.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-ink" />
      <div className="orb -left-40 -top-32 bg-blue-600/30" />
      <div className="orb orb-b -right-40 top-24 bg-violet-600/25" />
      <div className="orb orb-c bottom-[-12rem] left-1/4 bg-cyan-400/15" />
      <div className="blueprint absolute inset-0" />
      <div ref={spot} className="spotlight absolute inset-0" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
