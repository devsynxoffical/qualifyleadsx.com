"use client";

import { useState } from "react";
import { ShortAnswer } from "@/components/seo/ShortAnswer";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { Calculator, CheckCircle2 } from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

const PATH = "/tools/meta-ads-bid-strategy-calculator";

const faqs = [
  {
    q: "What is a bid strategy calculator?",
    a: "A bid strategy calculator turns your business numbers (deal value, margin, close rate and show rate) into the bid settings to use in Meta Ads Manager: the most you can pay per client, per booked call and per lead, the cost cap to enter, and which bid strategy fits your budget.",
  },
  {
    q: "Should I use cost cap or highest volume on Meta?",
    a: "Start with highest volume (Meta's lowest-cost strategy) while you find winning ads, because it gives the algorithm room to learn. Move to cost cap when an ad set is producing results and you want to scale without your cost per result drifting above what you can afford.",
  },
  {
    q: "How do I set a cost cap on Meta?",
    a: "Choose cost per result goal (cost cap) in the ad set's bid strategy and enter the target cost per optimization event, for example per lead or per booked call. This calculator gives you a value based on your margins; set it near your target, not your break-even, so there is profit left.",
  },
  {
    q: "Why does budget matter for bid strategy?",
    a: "Meta's learning phase needs roughly 50 optimization events per ad set per week. If your daily budget divided by your cost per event can't reach that, a tight cost cap or bid cap will starve delivery. Optimize for an earlier event (such as a lead) or raise the budget first.",
  },
  {
    q: "What is the difference between a bid cap and a cost cap?",
    a: "A cost cap controls your average cost per result and lets individual auctions go higher. A bid cap limits the maximum bid in every auction, which gives tighter control but usually much less delivery. Most high-ticket lead generation accounts start with cost cap.",
  },
];

function Slider({ label, value, display, min, max, step, onChange }: { label: string; value: number; display: string; min: number; max: number; step: number; onChange: (n: number) => void }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <div className="flex justify-between text-sm mb-2 font-mono">
        <label htmlFor={id} className="text-mist">{label}</label>
        <span className="text-lime font-bold">{display}</span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-lime cursor-pointer" />
    </div>
  );
}

export default function MetaAdsBidStrategyCalculatorPage() {
  const [dealValue, setDealValue] = useState(5000);
  const [margin, setMargin] = useState(70);
  const [profitShare, setProfitShare] = useState(30);
  const [closeRate, setCloseRate] = useState(25);
  const [showRate, setShowRate] = useState(70);
  const [bookRate, setBookRate] = useState(20);
  const [dailyBudget, setDailyBudget] = useState(150);

  const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
  const grossProfit = dealValue * (margin / 100);
  const breakEvenClient = grossProfit;
  const targetClient = grossProfit * (profitShare / 100);
  const perBooked = targetClient * (closeRate / 100) * (showRate / 100);
  const perLead = perBooked * (bookRate / 100);
  const breakEvenBooked = breakEvenClient * (closeRate / 100) * (showRate / 100);
  const weeklyLeads = perLead > 0 ? (dailyBudget * 7) / perLead : 0;
  const weeklyBooked = perBooked > 0 ? (dailyBudget * 7) / perBooked : 0;
  const optimizeFor = weeklyBooked >= 50 ? "booked call" : weeklyLeads >= 50 ? "lead" : "lead (budget is below the learning threshold)";
  const strategy =
    weeklyLeads < 50
      ? "Highest volume (lowest cost). Your budget can't reach about 50 results a week at your target cost, so a cost cap would limit delivery. Raise budget or accept a higher cost while learning."
      : weeklyLeads < 100
        ? "Highest volume to find winners, then cost cap on the winning ad sets."
        : "Cost cap at the target below, so you can scale budget without cost per result drifting up.";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Meta Ads Bid Strategy Calculator",
        url: `${site.url}${PATH}`,
        description: "Free calculator that turns deal value, margin, close rate and show rate into Meta ads cost cap values and a bid strategy recommendation.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbJsonLd items={[{ name: "Tools", url: "/tools" }, { name: "Meta Ads Bid Strategy Calculator", url: PATH }]} />
      <AnnouncementBar />
      <Nav />

      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">Free tool · no sign-up</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Meta Ads <span className="text-gradient-lime">Bid Strategy Calculator</span>
          </h1>
          <ShortAnswer>
            A cost cap tells Meta the most you want to pay per result. This calculator works it out from your offer price, margin, show rate and close rate, gives a target and break-even cost per client, and recommends lowest cost, cost cap or bid cap based on Meta&apos;s learning threshold of about 50 conversions a week.
          </ShortAnswer>
          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed max-w-2xl mx-auto">
            Turn your deal value, margin, close rate and show rate into the cost cap to enter in Meta Ads Manager, and see which bid strategy your budget can support.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-t border-line bg-panel/30">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6 rounded-2xl border border-line bg-ink/80 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-fog flex items-center gap-2">
                <Calculator className="h-5 w-5 text-lime" />
                Your numbers
              </h2>
              <Slider label="Average deal value ($)" value={dealValue} display={fmt(dealValue)} min={500} max={50000} step={250} onChange={setDealValue} />
              <Slider label="Gross margin (%)" value={margin} display={`${margin}%`} min={10} max={95} step={1} onChange={setMargin} />
              <Slider label="Share of profit you will spend on ads (%)" value={profitShare} display={`${profitShare}%`} min={5} max={90} step={1} onChange={setProfitShare} />
              <Slider label="Close rate on held calls (%)" value={closeRate} display={`${closeRate}%`} min={5} max={60} step={1} onChange={setCloseRate} />
              <Slider label="Show rate on booked calls (%)" value={showRate} display={`${showRate}%`} min={30} max={95} step={1} onChange={setShowRate} />
              <Slider label="Leads that book a call (%)" value={bookRate} display={`${bookRate}%`} min={2} max={80} step={1} onChange={setBookRate} />
              <Slider label="Daily budget per ad set ($)" value={dailyBudget} display={fmt(dailyBudget)} min={20} max={2000} step={10} onChange={setDailyBudget} />
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-lime/40 bg-ink p-6 sm:p-8" aria-live="polite">
              <h2 className="text-xl font-bold text-fog">Your bid settings</h2>
              <dl className="mt-6 space-y-4">
                {[
                  ["Cost cap per lead", fmt(perLead), true],
                  ["Cost cap per booked call", fmt(perBooked), false],
                  ["Target cost per client", fmt(targetClient), false],
                  ["Break-even cost per client", fmt(breakEvenClient), false],
                  ["Break-even cost per booked call", fmt(breakEvenBooked), false],
                ].map(([k, v, big]) => (
                  <div key={k as string} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-sm text-mist">{k}</dt>
                    <dd className={`font-mono font-bold ${big ? "text-3xl text-lime" : "text-xl text-fog"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 space-y-3 text-sm leading-relaxed">
                <p className="text-fog"><strong className="text-lime">Optimize for:</strong> {optimizeFor}</p>
                <p className="text-mist"><strong className="text-fog">Bid strategy:</strong> {strategy}</p>
                <p className="text-mist">At this budget: about {Math.round(weeklyLeads)} leads and {Math.round(weeklyBooked)} booked calls a week at target cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="container-x max-w-3xl space-y-12 text-mist leading-relaxed">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">How the bid strategy calculator works</h2>
            <ol className="mt-5 space-y-3 list-decimal pl-5">
              <li><strong className="text-fog">Gross profit per client</strong> = deal value × margin. That is your break-even cost per client.</li>
              <li><strong className="text-fog">Target cost per client</strong> = gross profit × the share you are willing to spend on ads.</li>
              <li><strong className="text-fog">Cost cap per booked call</strong> = target cost per client × close rate × show rate.</li>
              <li><strong className="text-fog">Cost cap per lead</strong> = cost cap per booked call × the share of leads that book.</li>
              <li><strong className="text-fog">Strategy</strong> compares your weekly budget with Meta&apos;s learning threshold of about 50 optimization events per ad set per week.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">Which Meta bid strategy to use</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Highest volume (lowest cost): Meta spends your budget to get as many results as possible. Best while testing creative or when budget is tight.",
                "Cost per result goal (cost cap): Meta aims to keep your average cost per result near the value you set. Best for scaling ad sets that already work.",
                "Bid cap: limits the bid in every auction. Tightest control, usually least delivery. Use only when you know your auction economics well.",
                "ROAS goal: aims for a return on ad spend. Needs purchase values passed back to Meta, so it rarely fits call-booking funnels.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-lime" /><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">Related tools</h2>
            <p className="mt-4">
              Plan total spend with the <Link href="/tools/meta-ads-budget-calculator" className="text-lime underline underline-offset-2">Meta ads budget calculator</Link>, check what a booked call is worth with the <Link href="/tools/cost-per-booked-call-calculator" className="text-lime underline underline-offset-2">cost per booked call calculator</Link>, and compare against <Link href="/benchmarks/cost-per-booked-call" className="text-lime underline underline-offset-2">cost per booked call benchmarks</Link>. Want the bidding handled for you? See our <Link href="/meta-ads-agency" className="text-lime underline underline-offset-2">Meta ads agency</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-line bg-panel p-6">
                  <h3 className="text-lg font-semibold text-fog">{f.q}</h3>
                  <p className="mt-2 text-sm sm:text-base">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProofStack variant="compact" />
      <CTABanner
        eyebrow="Want it done for you?"
        title={
          <>
            Get your bidding and budget set up{" "}
            <em className="font-semibold not-italic text-lime">on a free strategy call.</em>
          </>
        }
      />
      <Footer />
    </main>
  );
}
