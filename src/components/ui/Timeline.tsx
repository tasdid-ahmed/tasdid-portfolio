import type { TimelineItem } from "@/data/timeline";
import { Reveal } from "./Reveal";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      {items.map((item, i) => (
        <li key={item.title} className="relative">
          <span className="absolute -left-10 top-6 h-4 w-4 rounded-full border-4 border-background bg-[image:var(--gradient-primary)]" />
          <Reveal delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <span className="inline-block rounded-full bg-muted/10 px-3 py-1 text-xs font-semibold text-muted">
                {item.period}
              </span>
              <h4 className="mt-3 font-heading text-lg font-bold">{item.title}</h4>
              <p className="text-sm font-medium text-muted">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}