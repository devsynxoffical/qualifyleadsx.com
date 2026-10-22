"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqs, faqCategories } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function FaqItem({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Reveal delay={Math.min(index * 0.03, 0.25)} y={16}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-all duration-300",
          open
            ? "border-lime/40 bg-panel shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(201,242,107,0.12)]"
            : "border-line bg-panel/60 hover:border-lime/40 hover:bg-panel"
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 cursor-pointer"
        >
          <span className="flex items-center gap-4">
            <span className="hidden font-mono text-xs font-bold text-lime sm:inline">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "text-[1rem] font-semibold tracking-tight transition-colors sm:text-lg",
                open ? "text-fog" : "text-mist hover:text-fog"
              )}
            >
              {q}
            </span>
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              open
                ? "rotate-180 border-lime bg-lime text-ink shadow-[0_0_15px_rgba(201,242,107,0.4)]"
                : "border-line text-mist hover:border-lime/40 hover:text-lime"
            )}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
        <div
          id={`faq-panel-${index}`}
          role="region"
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 sm:px-8 sm:pl-16">
              <div className="border-t border-line/50 pt-4">
                <p className="text-sm sm:text-base leading-relaxed text-mist">
                  {a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const inCategory = category === "All" || f.category === category;
      const inQuery =
        !q ||
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [category, query]);

  return (
    <Section id="faq" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* Ambient background lime glow matching site theme */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full bg-lime/[0.06] blur-[150px]" />

      <SectionHeading
        eyebrow="Questions, answered"
        title={
          <>
            Lead generation agency{" "}
            <em className="font-semibold not-italic text-lime">FAQ.</em>
          </>
        }
        subtitle="Straight answers - no fine print, no runaround. If your question isn't here, book a call and ask us directly."
      />

      {/* Controls */}
      <Reveal>
        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search FAQ"
              className="w-full rounded-full border border-line-strong bg-panel/80 py-3 pl-11 pr-4 text-sm text-fog placeholder:text-dim transition-all focus:border-lime/60 focus:outline-none focus:ring-1 focus:ring-lime/30"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter FAQ by category">
            {faqCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => {
                  setCategory(c);
                  setActive(null);
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-mono font-medium transition-all duration-300 cursor-pointer",
                  category === c
                    ? "border-lime bg-lime text-ink font-bold shadow-[0_0_20px_rgba(201,242,107,0.35)] scale-105"
                    : "border-line bg-panel/80 text-mist hover:border-lime/40 hover:text-fog"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Accordion List */}
      <div className="mx-auto max-w-3xl space-y-3.5">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-mist">
            No results for “{query}”. Try a different search.
          </p>
        ) : (
          filtered.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              index={i}
              open={active === i}
              onToggle={() => setActive(active === i ? null : i)}
            />
          ))
        )}
      </div>

      {/* Bottom CTA Callout */}
      <Reveal delay={0.2}>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-dim font-bold">
            Still have questions?
          </p>
          <Button
            href={site.bookCallUrl}
            variant="primary"
            size="lg"
            icon="up-right"
            ariaLabel="Ask us on a free strategy call"
            className="shadow-[0_0_35px_rgba(201,242,107,0.3)]"
          >
            Ask us on a free strategy call
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
