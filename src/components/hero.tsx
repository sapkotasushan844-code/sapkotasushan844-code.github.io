import { ArrowRight, Mail, Phone } from "lucide-react";
import { glance, profile } from "@/lib/content";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Portrait } from "@/components/portrait";
import { ResumeLink } from "@/components/resume-link";
import { Rise } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="px-5 pb-6 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-16">
        <div>
          <Rise>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-glow">
              <span className="pulse-dot" aria-hidden />
              {profile.status}
            </p>
          </Rise>
          <Rise delay={0.08}>
            <h1
              id="hero-title"
              className="mt-5 font-display text-[clamp(3.15rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white"
            >
              {profile.firstName}
              <span className="block text-gradient">{profile.lastName}</span>
            </h1>
          </Rise>
          <Rise delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
              {profile.degree}
              <span className="mt-1 block text-base text-mute sm:text-lg">
                {profile.graduation} · {profile.school} · {profile.location}
              </span>
            </p>
          </Rise>
          <Rise delay={0.22}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mute">{profile.summary}</p>
          </Rise>
          <Rise delay={0.28}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ResumeLink />
              <a className="btn btn-ghost" href="#projects">
                View projects
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a className="quiet-link w-fit" href={`mailto:${profile.email}`}>
                <Mail className="size-4 shrink-0" aria-hidden />
                {profile.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a className="quiet-link" href={profile.phoneHref}>
                  <Phone className="size-4" aria-hidden />
                  {profile.phoneDisplay}
                </a>
                <a className="quiet-link" href={profile.linkedinHref} target="_blank" rel="noreferrer">
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Rise>
        </div>
        <Rise delay={0.18} className="w-full lg:justify-self-end">
          <Portrait />
        </Rise>
      </div>

      <dl className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
        {glance.map((item) => (
          <div key={item.label} className="bg-panel/80 px-5 py-5 backdrop-blur-xl">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">{item.label}</dt>
            <dd className="mt-2 font-display text-[1.65rem] leading-none text-white">{item.value}</dd>
            <p className="mt-2 text-sm leading-snug text-mute">{item.detail}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
