import { focusAreas, profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function About() {
  return (
    <Section id="about" labelId="about-title">
      <Reveal>
        <SectionHeading id="about-title" index="01" eyebrow="About" title="Objective" />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)]">
        <Reveal>
          <blockquote className="glass relative h-full p-7 sm:p-9">
            <p className="font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-[1.7rem]">
              {profile.objective}
            </p>
            <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
              {profile.name} · {profile.school}
            </footer>
          </blockquote>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass h-full p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-glow">Academic focus</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">Named in the objective.</p>
            <ol className="mt-4 divide-y divide-white/10">
              {focusAreas.map((area, index) => (
                <li key={area} className="flex items-center gap-4 py-3">
                  <span className="w-8 font-mono text-xs text-glow">0{index + 1}</span>
                  <span className="text-mist">{area}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
