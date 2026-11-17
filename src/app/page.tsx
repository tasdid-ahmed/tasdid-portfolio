import { Hero } from "@/components/sections/Hero";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";

const sections = ["about", "skills", "education", "projects", "contact"];

export default function Home() {
  return (
    <main>
      <Hero />

      {sections.map((id) => (
        <section
          key={id}
          id={id}
          className="flex min-h-[60vh] items-center justify-center border-t border-border px-4"
        >
          <div className="flex w-full min-w-0 flex-col items-center gap-8 max-w-7xl">
            <h2 className="font-heading text-3xl font-bold capitalize">{id}</h2>
            {id === "skills" && <SkillsMarquee />}
          </div>
        </section>
      ))}
    </main>
  );
}