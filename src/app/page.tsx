export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="font-heading text-5xl font-extrabold">
        <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
          Tasdid Ahmed Ahan
        </span>
      </h1>
      <p className="text-muted">Full-Stack Web Developer | CS Graduate</p>
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        Token check: surface, border, muted
      </div>
    </main>
  );
}