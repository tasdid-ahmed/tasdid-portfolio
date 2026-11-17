import { aboutParagraphs, hobbies } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="A little about who I am"
        description="My story so far, what I enjoy building, and what I like doing away from the keyboard."
      />

      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {aboutParagraphs.map((text, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <h3 className="font-heading text-lg font-bold">Beyond code</h3>
          </Reveal>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {hobbies.map(({ title, text, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-heading font-bold">{title}</h4>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}