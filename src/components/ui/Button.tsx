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
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}