type SectionProps = {
  id: string;
  alt?: boolean;
  children: React.ReactNode;
};

export function Section({ id, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${alt ? "border-y border-border bg-surface/50" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}