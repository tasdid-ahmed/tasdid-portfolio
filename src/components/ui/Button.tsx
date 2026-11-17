import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5";

const variants = {
  primary:
    "bg-[image:var(--gradient-primary)] text-white shadow-lg shadow-pink-500/25 hover:shadow-xl",
  outline: "border border-border bg-surface text-foreground hover:shadow-md",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  // Paths that start with "/" and have no file extension are pages; anything else
  // (files like .pdf, external URLs) is a plain link.
  const isPage = href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

  if (isPage) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}