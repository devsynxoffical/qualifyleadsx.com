"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp, Sparkles, DollarSign, Calendar, Target, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export function AppointmentRoiCalculator() {
  const [dealSize, setDealSize] = useState<number>(5000); // $3k - $25k
  const [targetCalls, setTargetCalls] = useState<number>(35); // 15 - 75 calls
  const [closeRate, setCloseRate] = useState<number>(20); // 10% - 35%

  // Calculations
  const dealsClosed = Math.round((targetCalls * (closeRate / 100)) * 10) / 10;
  const estimatedRevenue = Math.round(dealsClosed * dealSize);
  const benchmarkCostPerCall = 140; // $140 blended CAC per qualified showed call
  const estimatedAcquisitionCost = Math.round(targetCalls * benchmarkCostPerCall);
  const netProfitGenerated = Math.max(0, estimatedRevenue - estimatedAcquisitionCost);
  const calculatedRoi = estimatedAcquisitionCost > 0 
    ? Math.round((netProfitGenerated / estimatedAcquisitionCost) * 100) 
    : 0;

  return (
    <section id="roi-calculator" className="relative py-20 sm:py-28 bg-ink border-t border-line overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-lime/[0.04] blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-3 px-3 py-1 rounded-full bg-lime/10 border border-lime/30">
            <Calculator className="w-3.5 h-3.5 text-lime" />
            <span>Interactive Pipeline Economics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.12]">
            Calculate Your Predicted <span className="text-lime">Monthly ROI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-normal">
            Adjust your high-ticket offer price, target booked appointments, and sales close rate to forecast net revenue and return on acquisition spend.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-line bg-panel p-6 sm:p-9 flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div className="space-y-8">
              {/* Slider 1: Average Deal Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-mist flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-lime" />
                    <span>Average Deal Size (LTV):</span>
                  </label>
                  <span className="font-mono text-lg sm:text-xl font-bold text-white bg-ink px-3 py-1 rounded-xl border border-line">
                    ${dealSize.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="25000"
                  step="500"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-lime focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-dim mt-2">
                  <span>$2,000 (Low-Ticket B2B)</span>
                  <span>$10,000</span>
                  <span>$25,000+ (Enterprise)</span>
                </div>
              </div>

              {/* Slider 2: Target Booked Appointments */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-mist flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-lime" />
                    <span>Target Qualified Calls / Month:</span>
                  </label>
                  <span className="font-mono text-lg sm:text-xl font-bold text-lime bg-ink px-3 py-1 rounded-xl border border-line">
                    {targetCalls} calls
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="75"
                  step="5"
                  value={targetCalls}
                  onChange={(e) => setTargetCalls(Number(e.target.value))}
                  className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-lime focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-dim mt-2">
                  <span>15 Calls/Mo</span>
                  <span>35 Calls/Mo</span>
                  <span>75 Calls/Mo (Max Capacity)</span>
                </div>
              </div>

              {/* Slider 3: Sales Call Close Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-mist flex items-center gap-2">
                    <Target className="w-4 h-4 text-lime" />
                    <span>Sales Close Rate:</span>
                  </label>
                  <span className="font-mono text-lg sm:text-xl font-bold text-white bg-ink px-3 py-1 rounded-xl border border-line">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-lime focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-dim mt-2">
                  <span>10% (Conservative)</span>
                  <span>20% (Target Benchmark)</span>
                  <span>35% (Elite Closer)</span>
                </div>
              </div>
            </div>

            {/* Benchmark footnote */}
            <div className="mt-8 pt-5 border-t border-line/60 flex items-center gap-2.5 text-xs text-dim font-mono">
              <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
              <span>Based on verified $90–$160 cost-per-call metrics across 125+ client accounts.</span>
            </div>
          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-lime/40 bg-gradient-to-b from-panel via-panel to-ink p-6 sm:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-lime/15 blur-3xl" />

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-lime font-bold">
                FORECASTED MONTHLY OUTPUT
              </span>

              {/* Big Revenue Stat */}
              <div className="mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-mist">
                  Gross Pipeline Revenue:
                </span>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-white mt-1 tracking-tight">
                  ${estimatedRevenue.toLocaleString()}
                  <span className="text-base font-normal text-dim font-sans"> /mo</span>
                </div>
              </div>

              {/* Secondary Stats Grid */}
              <div className="mt-6 pt-6 border-t border-line/60 space-y-3.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-mist">Estimated Closed Clients:</span>
                  <span className="text-white font-bold text-sm">~{dealsClosed} Deals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-mist">Estimated Acquisition Budget:</span>
                  <span className="text-mist">~${estimatedAcquisitionCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between border-t border-line/30 pt-3">
                  <span className="text-lime font-semibold">Net Profit Added:</span>
                  <span className="text-lime font-bold text-base">+${netProfitGenerated.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-mist">Predicted Acquisition ROI:</span>
                  <span className="text-white font-bold text-base">{calculatedRoi}%</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-line/60">
              <Link
                href={site.bookCallUrl}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-lime px-6 py-4 text-sm font-mono font-bold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(201,242,107,0.35)] hover:brightness-110 hover:shadow-[0_0_40px_rgba(201,242,107,0.5)] transition-all duration-300"
              >
                <span>Install This Pipeline</span>
                <ArrowRight className="w-4 h-4 text-ink transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="mt-2.5 text-center text-[10.5px] font-mono text-dim">
                Backed by our 90-day written revenue milestone guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

