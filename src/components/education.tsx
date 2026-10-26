import { MapPin } from "lucide-react";
import { education } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Education() {
  return (
    <Section id="education" labelId="education-title">
      <Reveal>
        <SectionHeading
          id="education-title"
          index="02"
          eyebrow="Education"
          title="Academic path"
          lede="Current degree work at Howard University, with earlier engineering study at the College of Southern Maryland and Idaho State University."
        />
      </Reveal>
      <div className="relative mt-12">
        <div
          className="absolute bottom-3 left-[7px] top-3 hidden w-px bg-gradient-to-b from-cyan-300/80 via-blue-400/30 to-violet-400/10 sm:block"
          aria-hidden
        />
        <ol className="space-y-5">
          {education.map((item, index) => (
            <li key={item.school} className="relative sm:pl-10">
              <span
                className="absolute left-0 top-7 hidden size-3.5 rounded-full border border-cyan-100 bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)] sm:block"
                aria-hidden
              />
              <Reveal delay={index * 0.06}>
                <article className="glass p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-glow">{item.status}</p>
                      <h3 className="mt-2 font-display text-2xl text-white">{item.school}</h3>
                      <p className="mt-1 text-mist">{item.credential}</p>
                    </div>
                    <p className="inline-flex items-center gap-1.5 text-sm text-mute">
                      <MapPin className="size-4 text-glow" aria-hidden />
                      {item.location}
                    </p>
                  </div>
                  {item.gpa || item.honors ? (
                    <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                      {item.gpa ? (
                        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">GPA</dt>
                          <dd className="mt-1 font-display text-2xl text-white">{item.gpa}</dd>
                        </div>
                      ) : null}
                      {item.honors ? (
                        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Honors</dt>
                          <dd className="mt-1 text-sm leading-snug text-mist">{item.honors}</dd>
                        </div>
                      ) : null}
                    </dl>
                  ) : null}
                  {item.coursework.length > 0 ? (
                    <div className="mt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Relevant coursework</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <li key={course} className="chip">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-5 text-sm text-mute sm:pl-10">
        The 4.0 GPA and Dean&apos;s List are listed for the College of Southern Maryland.
      </p>
    </Section>
  );
}
