import { Briefcase, Building } from "lucide-react";
import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const icons = [Briefcase, Building];

export function Experience() {
  return (
    <Section id="experience" labelId="experience-title">
      <Reveal>
        <SectionHeading
          id="experience-title"
          index="05"
          eyebrow="Experience"
          title="Professional experience"
          lede="Work in Waldorf, Maryland and Pocatello, Idaho."
        />
      </Reveal>
      <ol className="mt-10 space-y-4">
        {experience.map((job, index) => {
          const Icon = icons[index] ?? Briefcase;
          return (
            <li key={`${job.role}-${job.dates}`}>
              <Reveal delay={index * 0.06}>
                <article className="glass p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-glow">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-white">{job.role}</h3>
                        <p className="mt-1 text-mist">
                          {job.employer} · {job.location}
                        </p>
                      </div>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-glow">{job.dates}</p>
                  </div>
                  <ul className="mt-5 space-y-3 sm:pl-[3.75rem]">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
