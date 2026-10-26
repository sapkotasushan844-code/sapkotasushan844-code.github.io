"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/content";

export function Portrait() {
  const [ok, setOk] = useState(true);

  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-cyan-400/15 blur-3xl" aria-hidden />
      <div className="frame-glow absolute -inset-px rounded-[1.7rem]" aria-hidden />
      <div className="relative rounded-[1.65rem] bg-ink p-3">
        <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-panel">
          <span className="absolute left-3 top-3 z-10 h-5 w-5 border-l border-t border-cyan-100/80" aria-hidden />
          <span className="absolute right-3 top-3 z-10 h-5 w-5 border-r border-t border-cyan-100/80" aria-hidden />
          <span className="absolute bottom-3 left-3 z-10 h-5 w-5 border-b border-l border-cyan-100/80" aria-hidden />
          <span className="absolute bottom-3 right-3 z-10 h-5 w-5 border-b border-r border-cyan-100/80" aria-hidden />
          {ok ? (
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt}
              width={1200}
              height={1500}
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
              onError={() => setOk(false)}
            />
          ) : (
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 px-8 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-glow">Portrait</p>
              <p className="font-display text-3xl text-white">Add a headshot</p>
              <p className="text-sm leading-relaxed text-mute">
                Save a photo as <span className="text-mist">public/sushan-sapkota.jpg</span> and it will replace this
                frame.
              </p>
            </div>
          )}
        </div>
        <figcaption className="flex items-end justify-between gap-4 px-2 pb-1 pt-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">Fig. 01 — Portrait</p>
            <p className="mt-1 font-display text-lg text-white">{profile.name}</p>
          </div>
          <p className="text-right text-xs leading-snug text-mute">{profile.location}</p>
        </figcaption>
      </div>
    </figure>
  );
}
