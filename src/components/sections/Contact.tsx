import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.socials.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk"
        description="Whether it’s an opportunity, a project idea or just a hello, my inbox is open."
      />

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon, external }, i) => (
          <Reveal key={label} delay={i * 0.1} className="h-full">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block break-all font-heading font-bold">{value}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:text-foreground" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}