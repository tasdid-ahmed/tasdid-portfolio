import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:text-foreground hover:shadow-md"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}