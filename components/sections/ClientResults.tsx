"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight, Quote, TrendingUp, BadgeCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { caseStudies, resultStats, type CaseStudy } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const industries = ["All", ...Array.from(new Set(caseStudies.map((c) => c.niche)))];

function MiniChart({ color }: { color: string }) {
  const bars = [34, 48, 40, 58, 66, 52, 78, 92];
  return (
    <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
      {bars.map((b, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full origin-bottom rounded-sm"
          style={{ height: `${b}%`, backgroundColor: color, opacity: 0.25 + (i / bars.length) * 0.6 }}
        />
      ))}
    </div>
  );
}

function ClientAvatar({ study }: { study: CaseStudy }) {
  if (study.photo) {
    return (
      <span className="relative block h-14 w-14 overflow-hidden rounded-2xl border border-line-strong">
        <Image
          src={study.photo}
          alt={`${study.name} — client result`}
          fill
          sizes="56px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </span>
    );
  }
  return (
    <span
      className="flex h-14 w-14 items-center justify-center rounded-2xl font-mono text-sm font-bold"
      style={{ color: "#0a0c0f", backgroundColor: study.color }}
    >
      {study.initials}
    </span>
  );
}

function CaseCard({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: (s: CaseStudy) => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-panel transition-colors duration-500 hover:border-line-strong"
      data-cursor="view"
    >
      <button
        type="button"
        onClick={() => onOpen(study)}
        className="block w-full text-left"
        aria-label={`Open case study: ${study.name}`}
      >
        {/* header */}
        <div className="relative overflow-hidden border-b border-line p-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14] transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `radial-gradient(120% 120% at 0% 0%, ${study.color}, transparent 60%)`,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div className="flex items-center gap-3">
              <ClientAvatar study={study} />
              <div>
                <p className="text-sm font-semibold text-fog">{study.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                  {study.role} · {study.niche}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fog" />
          </div>
          <div className="relative mt-5">
            <MiniChart color={study.color} />
          </div>
        </div>

        {/* body */}
        <div className="p-6">
          <p className="text-2xl font-bold tracking-tight" style={{ color: study.color }}>
            {study.result}
          </p>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-mist">{study.highlight}</p>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <div className="flex items-center gap-1.5 text-xs text-dim">
              <TrendingUp className="h-3.5 w-3.5" />
              {study.costPerAppt} / booked appt
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
              View story
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function Lightbox({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${study.name} case study`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/85 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close case study"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[1.8rem] border border-line-strong bg-panel shadow-soft"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-25"
          style={{ background: `radial-gradient(90% 100% at 20% 0%, ${study.color}, transparent 70%)` }}
        />
        <div className="relative grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:p-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="block">
                <ClientAvatar study={study} />
              </span>
              <div>
                <p className="text-base font-semibold text-fog">{study.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-dim">
                  {study.role} · {study.niche}
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3">
              <Quote className="mt-1 h-6 w-6 shrink-0" style={{ color: study.color }} />
              <p className="text-pretty text-lg leading-relaxed text-fog sm:text-xl">
                {study.testimonial}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-line bg-ink/50 p-4">
                  <p className="font-mono text-xl font-bold" style={{ color: study.color }}>
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-dim">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-line bg-ink/50 px-7 py-5 sm:px-10">
          <p className="text-xs text-dim">
            <BadgeCheck className="mr-1.5 inline h-4 w-4 text-lime" />
            Verified result · <span className="text-fog">{study.period}</span>
          </p>
          <Button
            href={site.bookCallUrl}
            size="md"
            icon="up-right"
            ariaLabel="Book your free strategy call"
          >
            Get results like this
          </Button>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-mist transition-colors hover:text-fog"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function ClientResults() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((c) => c.niche === filter)),
    [filter]
  );

  return (
    <Section id="results" className="bg-ink">
      <SectionHeading
        eyebrow="Real client results"
        title={
          <>
            Proof, not promises.{" "}
            <em className="font-semibold not-italic text-lime">$100K+ months.</em>
          </>
        }
        subtitle="The same QualifiedLeadsX™ system — different niches, different founders, same outcome: qualified sales calls and signed high-ticket clients."
      />

      {/* KPI strip */}
      <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {resultStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-2 bg-panel px-6 py-8">
              <span className="text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
                <Counter value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </span>
              <span className="text-xs leading-snug text-dim sm:text-sm">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Filters */}
      <Reveal>
        <div
          className="mb-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter results by industry"
        >
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              role="tab"
              aria-selected={filter === ind}
              onClick={() => setFilter(ind)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === ind
                  ? "border-lime bg-lime text-ink"
                  : "border-line text-mist hover:border-line-strong hover:text-fog"
              )}
            >
              {ind}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((s) => (
            <CaseCard key={s.name} study={s} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && <Lightbox study={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
}
