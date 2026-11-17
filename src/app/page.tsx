import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />

      {/* Temporary placeholder until the Projects phase */}
      <Section id="projects" alt>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Project case studies are coming soon."
        />
      </Section>

      <Contact />
    </main>
  );
}