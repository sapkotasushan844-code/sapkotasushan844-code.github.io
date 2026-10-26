import { Cpu, Languages, Medal, Tent, Wrench } from "lucide-react";
import { interests, languages } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const interestIcons = [Cpu, Wrench, Tent, Medal];

export function Additional() {
  return (
    <Section id="more" labelId="more-title">
      <Reveal>
        <SectionHeading id="more-title" index="06" eyebrow="More" title="Languages and interests" />
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <article className="glass h-full p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-glow">
                <Languages className="size-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl text-white">Languages</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <span className="text-mist">{language.name}</span>
                  <span className="text-right text-sm text-mute">{language.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="glass h-full p-6 sm:p-7">
            <h3 className="font-display text-xl text-white">Interests</h3>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {interests.map((interest, index) => {
                const Icon = interestIcons[index] ?? Cpu;
                return (
                  <li key={interest} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                    <Icon className="size-5 text-glow" aria-hidden />
                    <p className="mt-3 text-sm leading-snug text-mist">{interest}</p>
                  </li>
                );
              })}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
