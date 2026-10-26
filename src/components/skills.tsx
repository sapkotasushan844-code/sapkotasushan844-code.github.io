import { Cog, FlaskConical, PenTool, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/content";
import { Hover, Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const icons: Record<(typeof skillGroups)[number]["id"], LucideIcon> = {
  software: PenTool,
  manufacturing: Cog,
  analysis: FlaskConical,
  technical: Wrench,
};

export function Skills() {
  return (
    <Section id="skills" labelId="skills-title">
      <Reveal>
        <SectionHeading
          id="skills-title"
          index="03"
          eyebrow="Skills"
          title="Technical skills"
          lede="Design software, manufacturing and robotics, engineering analysis, and hands-on technical work."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.id];
          return (
            <Reveal key={group.id} delay={index * 0.05}>
              <Hover className="h-full">
                <article className="glass h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-glow">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl text-white">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Hover>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
