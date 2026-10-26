import { projects } from "@/lib/content";
import { Hover, Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Projects() {
  return (
    <Section id="projects" labelId="projects-title">
      <Reveal>
        <SectionHeading
          id="projects-title"
          index="04"
          eyebrow="Projects"
          title="Project experience"
          lede="Cantilever beam testing and a four-person design project, both at Howard University."
        />
      </Reveal>
      <div className="mt-10 space-y-5">
        {projects.map((project, index) => (
          <Reveal key={project.index} delay={index * 0.06}>
            <Hover>
              <article className="glass p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-glow">
                      {project.index} / {project.when}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-tight text-white">{project.title}</h3>
                    <p className="mt-2 text-mute">
                      {[project.course, project.school].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(250px,0.95fr)]">
                  <ul className="space-y-4">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">{metric.label}</p>
                        <p className="mt-1 font-display text-xl leading-tight text-white">{metric.value}</p>
                        <p className="mt-1 text-xs leading-snug text-mute">{metric.note}</p>
                      </div>
                    ))}
                    {project.setup ? (
                      <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-mist sm:col-span-2">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-glow">
                          Setup
                        </span>
                        {project.setup}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            </Hover>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
