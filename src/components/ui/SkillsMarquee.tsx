import { skillCategories } from "@/data/skills";

const allSkills = skillCategories.flatMap((category) => category.skills);

export function SkillsMarquee() {
  return (
    <div className="relative w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {allSkills.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-3 shadow-sm"
              >
                <Icon className="h-6 w-6" style={{ color }} />
                <span className="text-sm font-semibold">{name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}