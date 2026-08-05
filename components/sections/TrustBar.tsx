"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { trustMetrics } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TrustBar() {
  return (
    <section className="relative border-y border-line bg-ink/60">
      <div className="container-x">
        <Reveal y={24} stagger={0.08}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((m, i) => (
              <div
                key={m.label}
                className={cn(
                  "group relative flex flex-col gap-2 px-5 py-10 transition-colors duration-500 hover:bg-white/[0.02] sm:px-8",
                  i !== 0 && "border-l border-line"
                )}
              >
                <span className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="text-4xl font-semibold tracking-tight text-fog sm:text-5xl">
                  <Counter
                    value={m.value}
                    prefix={m.prefix ?? ""}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                  />
                </span>
                <span className="max-w-[12rem] text-sm leading-snug text-dim">{m.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
