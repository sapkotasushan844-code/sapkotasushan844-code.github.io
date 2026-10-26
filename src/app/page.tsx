import { About } from "@/components/about";
import { Additional } from "@/components/additional";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <main id="content" className="overflow-x-clip">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Additional />
      <Contact />
    </main>
  );
}
