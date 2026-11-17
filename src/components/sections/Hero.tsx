import Image from "next/image";
import { Download, Eye } from "lucide-react";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

const chips = [
  {
    label: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
    position: "-left-2 top-6 sm:-left-8",
    delay: "0s",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178c6]",
    position: "-right-2 top-1/3 sm:-right-8",
    delay: "1.5s",
  },
  {
    label: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47a248]",
    position: "-bottom-3 left-8 sm:left-12",
    delay: "3s",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[image:var(--gradient-primary)] opacity-10 blur-3xl dark:opacity-20" />
      <div className="pointer-events-none absolute -bottom-24 left-0 -z-10 hidden h-80 w-80 rounded-full bg-teal/10 blur-3xl dark:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* text column */}
        <div className="text-center lg:text-left">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-muted motion-reduce:animate-none">
            Hello, I’m
          </p>

          <h1 className="mt-3 animate-fade-up font-heading text-4xl font-extrabold leading-tight [animation-delay:100ms] motion-reduce:animate-none sm:text-5xl lg:text-6xl">
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 animate-fade-up font-heading text-lg font-semibold [animation-delay:200ms] motion-reduce:animate-none sm:text-xl">
            {profile.designation}
          </p>

          <p className="mx-auto mt-4 max-w-xl animate-fade-up text-base text-muted [animation-delay:300ms] motion-reduce:animate-none sm:text-lg lg:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:400ms] motion-reduce:animate-none lg:justify-start">
            <Button href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4" />
              View Resume
            </Button>
            <Button
              href={profile.resume}
              variant="outline"
              download="Tasdid-Ahmed-Ahan-CV.pdf"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-8 flex animate-fade-up justify-center [animation-delay:500ms] motion-reduce:animate-none lg:justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* photo column */}
        <div className="order-first flex justify-center lg:order-last">
          <div className="relative isolate">
            <div className="absolute -inset-6 -z-10 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl dark:opacity-25" />

            <div className="rounded-[2rem] bg-[image:var(--gradient-primary)] p-1">
              <div className="h-64 w-64 overflow-hidden rounded-[1.8rem] bg-surface sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={1254}
                  height={1254}
                  priority
                  sizes="(min-width: 1024px) 416px, (min-width: 640px) 320px, 256px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {chips.map(({ label, icon: Icon, color, position, delay }) => (
              <div
                key={label}
                style={{ animationDelay: delay }}
                className={`absolute ${position} flex animate-float items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur motion-reduce:animate-none`}
              >
                <Icon className={`h-4 w-4 ${color}`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}