const sections = ["about", "skills", "education", "projects", "contact"];

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 pt-16 text-center"
      >
        <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Tasdid Ahmed Ahan
          </span>
        </h1>
        <p className="text-muted">Full-Stack Web Developer | CS Graduate</p>
      </section>

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