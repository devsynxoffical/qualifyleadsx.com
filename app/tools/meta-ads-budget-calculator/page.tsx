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

const PATH = "/tools/meta-ads-budget-calculator";

const faqs = [
  {
    q: "How much should I spend on Facebook ads per month?",
    a: "Work backwards from the clients you want. With a 25% close rate, a 70% show rate and a $130 cost per booked call, 4 new clients need about 23 booked calls, or roughly $3,000 a month in ad spend. This calculator does that maths with your own numbers.",
  },
  {
    q: "Is a Facebook ads budget the same as a Meta ads budget?",
    a: "Yes. Meta Ads Manager runs Facebook, Instagram, Messenger and Audience Network from one budget, so a Facebook ads budget and a Meta ads budget are the same thing.",
  },
  {
    q: "Why does my close rate change the budget so much?",
    a: "Every client needs a certain number of held calls. Doubling your close rate from 15% to 30% halves the calls you need, which halves the ad budget. Qualification and follow-up often move the budget more than ad costs do.",
  },
  {
    q: "Should I add extra budget in Q4?",
    a: "Usually, yes. In our 2026 benchmarks tier-1 Meta CPMs run about $36.80 to $54.20 in October to December, against $18.40 to $24.80 in Q1, so the same results typically cost more in Q4.",
  },
  {
    q: "Does this include agency fees?",
    a: "No. The calculator only estimates ad spend, which is paid directly to Meta. Agency or media-buyer fees are separate.",
  },
  {
    q: "Where do the default numbers come from?",
    a: "From QualifiedLeadsX's 2026 benchmarks across managed Meta ad accounts: qualified booked calls for $3,000 to $25,000 offers usually cost $90 to $180, and setter-qualified calls close at 24% to 31% for $5,000 to $10,000 offers. Replace them with your own numbers when you have them.",
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

export default function MetaAdsBudgetCalculatorPage() {
  const [clients, setClients] = useState(4);
  const [closeRate, setCloseRate] = useState(25);
  const [showRate, setShowRate] = useState(70);
  const [costPerCall, setCostPerCall] = useState(130);
  const [offerPrice, setOfferPrice] = useState(5000);

  const heldCalls = closeRate > 0 ? clients / (closeRate / 100) : 0;
  const bookedCalls = showRate > 0 ? Math.ceil(heldCalls / (showRate / 100)) : 0;
  const monthly = bookedCalls * costPerCall;
  const daily = Math.round(monthly / 30.4);
  const revenue = clients * offerPrice;
  const roas = monthly > 0 ? revenue / monthly : 0;
  const costPerClient = clients > 0 ? Math.round(monthly / clients) : 0;
  const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Meta Ads Budget Calculator",
        url: `${site.url}${PATH}`,
        description: "Free calculator that works out the monthly and daily Meta (Facebook and Instagram) ad budget needed to reach a target number of new clients.",
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
      <BreadcrumbJsonLd items={[{ name: "Tools", url: "/tools" }, { name: "Meta Ads Budget Calculator", url: PATH }]} />
      <AnnouncementBar />
      <Nav />

      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">Free tool · no sign-up</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Free Meta Ads <span className="text-gradient-lime">Budget Calculator</span>
          </h1>
          <ShortAnswer>
            Your monthly Meta ads budget is the number of clients you want, divided by your close rate and show rate, multiplied by your cost per booked call. This free calculator does that maths from your own numbers and shows the Facebook and Instagram budget needed to reach your client target.
          </ShortAnswer>
          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed max-w-2xl mx-auto">
            Enter how many new clients you want, your close rate, show rate and cost per booked call. The calculator works backwards to the monthly and daily Facebook and Instagram ad budget you need.
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
              <Slider label="New clients wanted per month" value={clients} display={String(clients)} min={1} max={40} step={1} onChange={setClients} />
              <Slider label="Close rate on held calls (%)" value={closeRate} display={`${closeRate}%`} min={5} max={60} step={1} onChange={setCloseRate} />
              <Slider label="Show rate on booked calls (%)" value={showRate} display={`${showRate}%`} min={30} max={95} step={1} onChange={setShowRate} />
              <Slider label="Cost per booked call ($)" value={costPerCall} display={fmt(costPerCall)} min={20} max={400} step={5} onChange={setCostPerCall} />
              <Slider label="Average deal value ($)" value={offerPrice} display={fmt(offerPrice)} min={500} max={50000} step={250} onChange={setOfferPrice} />
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-lime/40 bg-ink p-6 sm:p-8" aria-live="polite">
              <h2 className="text-xl font-bold text-fog">Your Meta ads budget</h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Monthly ad budget</dt>
                  <dd className="font-mono text-3xl font-bold text-lime">{fmt(monthly)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Daily ad budget</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{fmt(daily)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Booked calls needed</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{bookedCalls}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Ad cost per new client</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{fmt(costPerClient)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-mist">Front-end ROAS</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{roas.toFixed(1)}x</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-mist leading-relaxed">
                To close {clients} {clients === 1 ? "client" : "clients"} a month you need about {bookedCalls} booked calls and {fmt(monthly)} in Meta ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="container-x max-w-3xl space-y-12 text-mist leading-relaxed">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">How to use the Meta ads budget calculator</h2>
            <ol className="mt-5 space-y-3 list-decimal pl-5">
              <li><strong className="text-fog">Set the clients you want each month.</strong> Use a number your team can actually deliver.</li>
              <li><strong className="text-fog">Enter your close rate.</strong> Deals won divided by calls held over the last 90 days, from your CRM.</li>
              <li><strong className="text-fog">Enter your show rate.</strong> Calls held divided by calls booked.</li>
              <li><strong className="text-fog">Enter your cost per booked call.</strong> If you have never run ads, keep the default from our <Link href="/benchmarks/cost-per-booked-call" className="text-lime underline underline-offset-2">cost per booked call benchmarks</Link>.</li>
              <li><strong className="text-fog">Read the budget.</strong> Monthly and daily spend, calls needed, cost per client and the return at your average deal value.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">What the results mean</h2>
            <p className="mt-4">The formula is simple: clients ÷ close rate ÷ show rate = booked calls, and booked calls × cost per booked call = monthly budget. A few things to keep in mind when you use the number:</p>
            <ul className="mt-4 space-y-3">
              {[
                "It is a starting point, not a cap. In the first two to four weeks Meta is still learning, and cost per booked call is usually higher than the benchmark.",
                "Small budgets struggle to exit the learning phase. If your budget buys only a handful of bookings a month, optimize for an earlier event such as a submitted application, and qualify after the lead comes in.",
                "Close rate moves the budget more than ad costs. Raising close rate from 15% to 30% halves the calls you need.",
                "Q4 costs more. Tier-1 CPMs run about $36.80 to $54.20 in Q4 against $18.40 to $24.80 in Q1, so add headroom for October to December.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-lime" /><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fog">How to lower the budget you need</h2>
            <ul className="mt-4 space-y-3">
              <li><strong className="text-fog">Budget too high for your margins?</strong> Raise close rate first with pre-call qualification. See <Link href="/appointment-setting" className="text-lime underline underline-offset-2">appointment setting</Link>.</li>
              <li><strong className="text-fog">Cost per booked call above $200?</strong> The funnel is usually the problem, not the ads. See <Link href="/vsl-funnels" className="text-lime underline underline-offset-2">VSL funnels</Link>.</li>
              <li><strong className="text-fog">Lots of bookings, few shows?</strong> Reply in under 5 minutes and send SMS and WhatsApp reminders. See <Link href="/speed-to-lead" className="text-lime underline underline-offset-2">speed to lead</Link> and the <Link href="/tools/show-rate-calculator" className="text-lime underline underline-offset-2">show rate calculator</Link>.</li>
              <li><strong className="text-fog">Not sure the numbers work at all?</strong> Check unit economics with the <Link href="/tools/ltv-cac-calculator" className="text-lime underline underline-offset-2">LTV to CAC calculator</Link> and the <Link href="/tools/roas-calculator" className="text-lime underline underline-offset-2">ROAS calculator</Link>.</li>
            </ul>
            <p className="mt-4">For the full picture on spend levels and auction costs, read <Link href="/blog/how-much-does-meta-ads-cost" className="text-lime underline underline-offset-2">how much Meta ads cost in 2026</Link>.</p>
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
        eyebrow="Want a second opinion?"
        title={
          <>
            Get your budget sanity-checked{" "}
            <em className="font-semibold not-italic text-lime">on a free strategy call.</em>
          </>
        }
      />
      <Footer />
    </main>
  );
}
