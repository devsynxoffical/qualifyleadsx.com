"use client";

import { type ReactNode, type MouseEventHandler } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "md" | "lg" | "xl";
  icon?: "arrow" | "up-right" | "none";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
};

const variants: Record<string, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-soft shadow-[0_0_40px_-12px_var(--color-lime)] group-hover:shadow-[0_0_60px_-10px_var(--color-lime)]",
  outline: "border border-line-strong text-fog hover:border-lime/60 hover:text-lime bg-white/[0.02]",
  ghost: "text-fog hover:text-lime",
  dark: "bg-ink text-fog border border-line hover:border-lime/50",
};

const sizes: Record<string, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
  xl: "px-10 py-5 text-[1rem] sm:px-12",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  icon = "arrow",
  className,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 ease-out",
    variants[variant],
    sizes[size],
    className
  );

  const Icon = icon === "up-right" ? ArrowUpRight : ArrowRight;

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        <span>{children}</span>
        {icon !== "none" && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2.5} />
        )}
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 translate-y-full rounded-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-y-0" />
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <a
          href={href}
          className={cls}
          aria-label={ariaLabel}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
        {inner}
      </button>
    </Magnetic>
  );
}
