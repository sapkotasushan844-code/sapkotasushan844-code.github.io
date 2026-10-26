import Link from "next/link";
import { ResumeLink } from "@/components/resume-link";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-6 pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-glow">404</p>
      <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">That page does not exist.</h1>
      <p className="mt-4 text-base leading-relaxed text-mute">
        The address does not match a section of this portfolio. Head back, or download the resume.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link className="btn btn-primary" href="/">
          Back home
        </Link>
        <ResumeLink variant="ghost" />
      </div>
    </main>
  );
}
