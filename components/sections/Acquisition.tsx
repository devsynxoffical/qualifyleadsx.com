"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { acquisitionSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

function StepCard({
  step,
  index,
  side,
}: {
  step: (typeof acquisitionSteps)[number];
  index: number;
  side: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;

  return (
    <div
      className={cn(
        "relative lg:w-1/2",
        side === "left"
          ? "lg:pr-14 lg:text-right"
          : "lg:ml-auto lg:pl-14"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "group relative block w-full overflow-hidden rounded-3xl border bg-panel p-6 text-left transition-all duration-500 sm:p-8",
          open ? "border-lime/40" : "border-line hover:border-line-strong",
          side === "left" && "lg:text-right"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -top-20 h-44 w-44 rounded-full bg-lime/[0.06] blur-3xl transition-opacity duration-500",
            side === "left" ? "right-0" : "left-0",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        <div className={cn("relative flex items-center gap-4", side === "left" && "lg:flex-row-reverse")}>
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-rotate-6",
              open ? "border-lime bg-lime text-ink" : "border-lime/25 bg-lime/[0.07] text-lime"
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
            Step {String(index + 1).padStart(2, "0")} · {step.short}
          </span>
        </div>

        <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-fog sm:text-2xl">
          {step.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-mist sm:text-base">{step.body}</p>

        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <ul
              className={cn(
                "flex flex-wrap gap-2 pt-1",
                side === "left" && "lg:justify-end"
              )}
            >
              {step.detail.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-line bg-ink/60 px-3.5 py-1.5 text-xs text-mist"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span
          className={cn(
            "relative mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-lime/80",
            side === "left" && "lg:flex-row-reverse"
          )}
        >
          {open ? "Hide details" : "See what's included"}
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
          />
        </span>
      </button>
    </div>
  );
}

export function Acquisition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      if (progressRef.current) progressRef.current.style.transform = "scaleY(1)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".step-item"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: EASE.outExpo,
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        }
      );

      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: el,
            start: "top 55%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="process">
      <SectionHeading
        eyebrow="The 8-step system"
        title={
          <>
            How qualified calls get{" "}
            <em className="font-semibold not-italic text-lime">on your calendar.</em>
          </>
        }
        subtitle="A complete client acquisition machine — installed, automated and reporting in one connected system."
      />

      <div ref={sectionRef} className="relative">
        {/* center line */}
        <div
          ref={lineRef}
          className="absolute left-[1.15rem] top-0 h-full w-px bg-line lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />
        <div
          ref={progressRef}
          className="absolute left-[1.15rem] top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-lime via-mint to-violet lg:left-1/2 lg:-translate-x-1/2"
          style={{ boxShadow: "0 0 20px 0 rgba(201,242,107,0.5)" }}
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-10 lg:gap-16">
          {acquisitionSteps.map((step, i) => (
            <li key={step.title} className="step-item relative">
              {/* node */}
              <span className="absolute left-[1.15rem] top-8 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center lg:left-1/2">
                <span className="absolute inset-0 rounded-full border border-lime/50 bg-ink" />
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              </span>

              <div className="pl-10 lg:pl-0">
                <StepCard step={step} index={i} side={i % 2 === 0 ? "left" : "right"} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
