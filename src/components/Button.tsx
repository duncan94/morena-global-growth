import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-white shadow-sm hover:bg-terracotta-deep focus-visible:outline-terracotta",
  secondary:
    "border border-forest/20 bg-white/80 text-forest hover:border-forest/40 hover:bg-white",
  ghost: "text-forest underline-offset-4 hover:underline",
  light:
    "border border-cream/40 bg-cream/10 text-cream hover:bg-cream/20",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
