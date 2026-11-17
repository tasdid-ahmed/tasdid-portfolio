import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl">
        <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}