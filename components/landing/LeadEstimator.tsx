"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calculator } from "lucide-react";
import { gaEvent } from "@/lib/ga";

type Props = {
  /** Lowest and highest cost per lead from the campaigns published on the page. */
  cplLow: number;
  cplHigh: number;
  unit: string; // "roofing leads"
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  sourceNote: string;
};

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

/**
 * Budget slider that turns a monthly ad budget into a lead range using only the
 * lowest and highest cost per lead published on the page. It is an estimate
 * from past campaigns, not a quote or a guarantee, and says so.
 */
export function LeadEstimator({ cplLow, cplHigh, unit, min = 1000, max = 30000, step = 500, initial = 5000, sourceNote }: Props) {
  const id = useId();
  const [budget, setBudget] = useState(initial);
  const [touched, setTouched] = useState(false);
  const low = Math.floor(budget / cplHigh);
  const high = Math.floor(budget / cplLow);
  const pct = ((budget - min) / (max - min)) * 100;

  return (
    <div className="panel-glass rounded-3xl p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">Lead estimator</p>
          <p className="text-sm text-mist">Move the slider to your monthly ad budget</p>
        </div>
      </div>

      <label htmlFor={id} className="mt-7 flex items-baseline justify-between gap-4">
        <span className="text-sm text-mist">Monthly ad spend</span>
        <span className="font-mono text-3xl font-bold text-fog">{usd(budget)}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={budget}
        onChange={(e) => {
          setBudget(Number(e.target.value));
          if (!touched) {
            setTouched(true);
            gaEvent("tool_used", { tool: "lead_estimator", unit });
          }
        }}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-lime"
        style={{ background: `linear-gradient(90deg, var(--color-lime) ${pct}%, var(--color-line-strong) ${pct}%)` }}
      />
      <div className="mt-2 flex justify-between font-mono text-[11px] text-dim">
        <span>{usd(min)}</span>
        <span>{usd(max)}</span>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line bg-ink/60 p-4">
          <p className="text-xs text-mist">At our highest published CPL ({usd(cplHigh)})</p>
          <p className="mt-1 font-mono text-2xl font-bold text-fog">{low.toLocaleString("en-US")}</p>
          <p className="text-xs text-dim">{unit} / month</p>
        </div>
        <div className="rounded-2xl border border-lime/30 bg-lime/[0.06] p-4">
          <p className="text-xs text-mist">At our lowest published CPL ({`$${cplLow.toFixed(2)}`})</p>
          <p className="mt-1 font-mono text-2xl font-bold text-lime">{high.toLocaleString("en-US")}</p>
          <p className="text-xs text-dim">{unit} / month</p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-dim">{sourceNote} An estimate from past campaigns, not a quote or a guarantee. Results depend on market, offer, verification and budget.</p>

      <Link
        href="#get-leads"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink transition-shadow hover:shadow-[0_0_40px_-8px_var(--color-lime)]"
      >
        Get a plan for {usd(budget)}/month
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
