import { Hero } from "@/components/sections/Hero";

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
          <h2 className="font-heading text-3xl font-bold capitalize">{id}</h2>
        </section>
      ))}
    </main>
  );
}