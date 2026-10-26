"use client";

import { profile } from "@/lib/content";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="content" className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-6 pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-glow">Error</p>
      <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">This view did not load.</h1>
      <p className="mt-4 text-base leading-relaxed text-mute">
        Try the page again, or email {profile.name} directly at {profile.email}.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" className="btn btn-primary" onClick={() => reset()}>
          Try again
        </button>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
          Email {profile.firstName}
        </a>
      </div>
    </main>
  );
}
