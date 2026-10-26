import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  labelId,
  children,
  className,
}: {
  id: string;
  labelId: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className={cn("scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  lede,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-glow">
        {index} / {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {lede ? <p className="mt-4 text-base leading-relaxed text-mute">{lede}</p> : null}
    </div>
  );
}
