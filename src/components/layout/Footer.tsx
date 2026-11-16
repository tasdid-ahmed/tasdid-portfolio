import Link from "next/link";
import { navLinks, profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-extrabold">
            {profile.shortName}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              .
            </span>
          </p>
          <p className="mt-1 text-sm text-muted">{profile.designation}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks />
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted">
        © {year} {profile.name}. Built with Next.js, TypeScript and Tailwind CSS.
      </div>
    </footer>
  );
}