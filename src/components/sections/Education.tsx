import { GraduationCap, Rocket } from "lucide-react";
import { education, journey } from "@/data/timeline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Learning, in and out of class"
        description="My formal education, plus the hands-on learning path that shaped how I build today."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
          </Reveal>
          <Timeline items={education} />
        </div>

        <div>
          <Reveal>
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold">
              <Rocket className="h-6 w-6" />
              Learning journey
            </h3>
          </Reveal>
          <Timeline items={journey} />
        </div>
      </div>
    </Section>
  );
}