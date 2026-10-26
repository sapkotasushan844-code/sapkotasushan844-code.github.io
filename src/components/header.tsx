"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, resume } from "@/lib/content";
import { cn } from "@/lib/cn";
import { ResumeLink } from "@/components/resume-link";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "";
      for (const item of nav) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-16 transition-colors duration-300",
          scrolled || open ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent",
        )}
      />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 to-violet-300 font-display text-sm font-bold text-ink">
            SS
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold text-white">Sushan Sapkota</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-mute sm:block">
              Mechanical Engineering
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link"
              data-active={active === item.id}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ResumeLink className="hidden sm:inline-flex" />
          <a
            href={resume.href}
            download={resume.filename}
            className="grid size-11 place-items-center rounded-full border border-white/10 text-white sm:hidden"
            aria-label="Download resume"
          >
            <Download className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/10 text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {scrolled || open ? (
        <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      ) : null}

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink/95 px-6 py-6 backdrop-blur-xl xl:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {nav.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-glow">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-6 max-w-6xl">
            <ResumeLink />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
