import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

const variants = {
  primary: "bg-cyan text-abyss hover:bg-cyan-deep hover:text-surface-white",
  outline:
    "border border-ocean text-surface-white hover:border-cyan hover:text-cyan hover:glow-text",
  ghost: "glow-text text-cyan hover:text-cyan-deep px-0 py-0",
} as const;

type Variant = keyof typeof variants;

export function CtaLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}

export function ctaClasses(variant: Variant = "primary") {
  return cn(base, variants[variant]);
}
