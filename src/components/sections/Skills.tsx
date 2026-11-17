import { skillCategories, type SkillLevel } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";

const filledDots: Record<SkillLevel, number> = {
  Strong: 3,
  Working: 2,
  Familiar: 1,
};

function LevelDots({ level }: { level: SkillLevel }) {
  return (
    <span
      role="img"
      aria-label={`${level} level`}
      title={level}
      className="flex items-center gap-1"
    >
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`h-2 w-2 rounded-full ${
            dot <= filledDots[level]
              ? "bg-[image:var(--gradient-primary)]"
              : "bg-muted/30"
          }`}
        />
      ))}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        description="The technologies I use, grouped by area, with an honest sense of how deep I am in each."
      />

      <Reveal>
        <SkillsMarquee />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.08} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold">{category.title}</h3>
              <ul className="mt-4 space-y-3">
                {category.skills.map(({ name, icon: Icon, color, level }) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-3 text-sm font-medium">
                      <Icon className="h-5 w-5 shrink-0" style={{ color }} />
                      {name}
                    </span>
                    <LevelDots level={level} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          <span className="flex items-center gap-2">
            <LevelDots level="Strong" /> Strong: my go-to tools
          </span>
          <span className="flex items-center gap-2">
            <LevelDots level="Working" /> Working: used in real projects
          </span>
          <span className="flex items-center gap-2">
            <LevelDots level="Familiar" /> Familiar: used it, still growing
          </span>
        </div>
      </Reveal>
    </Section>
  );
}