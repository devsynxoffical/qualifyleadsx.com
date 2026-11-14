"use client";

import { useState } from "react";
import Link from "next/link";
import { ShortAnswer } from "@/components/seo/ShortAnswer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";
import { site } from "@/lib/site";
import { Calculator, CheckCircle2 } from "lucide-react";

const PATH = "/tools/lead-conversion-rate-calculator";

// Benchmarks published on this site (sources linked on the page).
const SHOW_RATE_BENCHMARK = 58.2; // /benchmarks/show-rate: cross-industry average with email-only confirmations
const CLOSE_RATE_BENCHMARK = 24; // low end of 24-31% for $5K-$10K offers, setter-qualified calls

const faqs = [
  {
    q: "How do you calculate lead conversion rate?",
    a: "Divide the number of leads that became paying clients by the total number of leads in the same period, then multiply by 100. For example, 12 clients from 400 leads is a 3% lead-to-client conversion rate. This calculator also splits that rate into each stage: lead to booked call, booked to held call, and held call to client.",
  },
  {
    q: "What is a good lead to client conversion rate?",
    a: "It depends on how qualified the leads are and on the price. For high-ticket offers sold on a call, it is more useful to check each stage: show rate (the cross-industry average with email-only confirmations is 58.2%) and close rate on held calls (24% to 31% for $5,000 to $10,000 offers in our benchmarks).",
  },
  {
    q: "Why measure each stage instead of the overall rate?",
    a: "Because each stage has a different fix. A low booking rate points to slow follow-up or a weak offer, a low show rate to missing confirmations and reminders, and a low close rate to poor qualification or sales process. The overall rate alone hides where the leads are lost.",
  },
  {
    q: "What is revenue per lead?",
    a: "Total revenue from new clients divided by the number of leads. It tells you the most you can pay per lead and still break even, before delivery costs, which makes it the number to compare with your cost per lead.",
  },
  {
    q: "Which numbers should I enter?",
    a: "Use one calendar month from your CRM: all new leads, the calls booked from those leads, the calls that actually happened, and the deals won. Use the same month for every stage so the rates line up.",
  },
];

function NumberField({ label, value, onChange, prefix }: { label: string; value: number; onChange: (n: number) => void; prefix?: string }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-sm text-mist">{label}</label>
      <div className="flex items-center rounded-xl border border-line bg-panel px-4 focus-within:border-lime/50">
        {prefix && <span className="mr-1 font-mono text-mist">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent py-3 font-mono text-lg font-bold text-fog outline-none"
        />
      </div>
    </div>
  );
}

export default function LeadConversionRateCalculatorPage() {
  const [leads, setLeads] = useState(400);
  const [booked, setBooked] = useState(80);
  const [held, setHeld] = useState(52);
  const [won, setWon] = useState(12);
  const [dealValue, setDealValue] = useState(5000);

  const b = Math.min(booked, leads);
  const h = Math.min(held, b);
  const w = Math.min(won, h);
  const pct = (a: number, z: number) => (z > 0 ? (a / z) * 100 : 0);
  const bookRate = pct(b, leads);
  const showRate = pct(h, b);
  const closeRate = pct(w, h);
  const leadToClient = pct(w, leads);
  const revenue = w * dealValue;
  const revenuePerLead = leads > 0 ? revenue / leads : 0;
  const leadsPerClient = w > 0 ? leads / w : 0;
  const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
  const p1 = (n: number) => `${n.toFixed(1)}%`;

  let weakest: { stage: string; text: string; href: string; link: string };
  if (b > 0 && showRate < SHOW_RATE_BENCHMARK) {
    weakest = { stage: "Show rate", text: `${p1(showRate)} of booked calls happen, below the ${SHOW_RATE_BENCHMARK}% average with email-only confirmations. Add SMS and WhatsApp reminders and a confirmation call.`, href: "/blog/how-to-increase-show-rate", link: "How to increase show rate" };
  } else if (h > 0 && closeRate < CLOSE_RATE_BENCHMARK) {
    weakest = { stage: "Close rate", text: `${p1(closeRate)} of held calls close, below the ${CLOSE_RATE_BENCHMARK}% to 31% range for setter-qualified $5K to $10K offers. Tighten qualification before the call.`, href: "/blog/how-to-qualify-leads", link: "How to qualify leads" };
  } else {
    weakest = { stage: "Lead to booked call", text: `${p1(bookRate)} of leads book a call. Replying within 5 minutes and a short qualification step usually move this stage most.`, href: "/blog/speed-to-lead-statistics-response-time", link: "Speed to lead statistics" };
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Lead Conversion Rate Calculator",
        url: `${site.url}${PATH}`,
        description: "Free calculator for lead-to-call, show, close and lead-to-client conversion rates, revenue per lead and the weakest funnel stage.",
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

  const stages = [
    { label: "Lead to booked call", value: bookRate, detail: `${b} of ${leads} leads` },
    { label: "Show rate (booked to held)", value: showRate, detail: `${h} of ${b} booked calls` },
    { label: "Close rate (held to client)", value: closeRate, detail: `${w} of ${h} held calls` },
  ];

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbJsonLd items={[{ name: "Tools", url: "/tools" }, { name: "Lead Conversion Rate Calculator", url: PATH }]} />
      <AnnouncementBar />
      <Nav />

      <section className="relative overflow-hidden bg-ink pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Free tool · no sign-up</span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-fog sm:text-5xl">
            Lead Conversion Rate <span className="text-gradient-lime">Calculator</span>
          </h1>
          <ShortAnswer>
            Lead conversion rate is the share of leads that become paying clients: clients won divided by leads, times 100. For example, 12 clients from 400 leads is 3%. This calculator also breaks that rate into booking, show and close rates, so you can see which stage loses the most leads.
          </ShortAnswer>
        </div>
      </section>

      <section className="border-t border-line bg-panel/30 py-12 sm:py-16">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 rounded-2xl border border-line bg-ink/80 p-6 sm:p-8 lg:col-span-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-fog">
                <Calculator className="h-5 w-5 text-lime" />
                One month of your numbers
              </h2>
              <NumberField label="New leads" value={leads} onChange={setLeads} />
              <NumberField label="Calls booked from those leads" value={booked} onChange={setBooked} />
              <NumberField label="Calls that actually happened" value={held} onChange={setHeld} />
              <NumberField label="New clients won" value={won} onChange={setWon} />
              <NumberField label="Average deal value" value={dealValue} onChange={setDealValue} prefix="$" />
            </div>

            <div className="rounded-2xl border border-lime/40 bg-ink p-6 sm:p-8 lg:col-span-6" aria-live="polite">
              <h2 className="text-xl font-bold text-fog">Your conversion rates</h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Lead to client conversion rate</dt>
                  <dd className="font-mono text-3xl font-bold text-lime">{p1(leadToClient)}</dd>
                </div>
                {stages.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-sm text-mist">{s.label}<span className="block text-xs text-dim">{s.detail}</span></dt>
                    <dd className="font-mono text-xl font-bold text-fog">{p1(s.value)}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-mist">Revenue per lead</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{fmt(revenuePerLead)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-mist">Leads needed per client</dt>
                  <dd className="font-mono text-xl font-bold text-fog">{w > 0 ? leadsPerClient.toFixed(1) : "-"}</dd>
                </div>
              </dl>
              <div className="mt-6 rounded-xl border border-line bg-panel p-4 text-sm leading-relaxed text-mist">
                <p className="font-semibold text-fog">Weakest stage: {weakest.stage}</p>
                <p className="mt-1">{weakest.text}</p>
                <Link href={weakest.href} className="mt-2 inline-block text-lime underline underline-offset-2">{weakest.link}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container-x max-w-3xl space-y-12 leading-relaxed text-mist">
          <div>
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">How do you calculate lead conversion rate?</h2>
            <p className="mt-4">The overall rate is clients won ÷ leads × 100. The calculator splits it into three stage rates that multiply back to the overall rate:</p>
            <ul className="mt-4 space-y-3">
              {[
                "Booking rate = calls booked ÷ leads",
                "Show rate = calls held ÷ calls booked",
                "Close rate = clients won ÷ calls held",
                "Lead to client rate = booking rate × show rate × close rate",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-lime" /><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Which benchmarks does it compare against?</h2>
            <p className="mt-4">
              Only figures published on this site: a 58.2% cross-industry show rate with email-only confirmations (<Link href="/benchmarks/show-rate" className="text-lime underline underline-offset-2">show rate benchmarks</Link>) and a 24% to 31% close rate on setter-qualified calls for $5,000 to $10,000 offers (<Link href="/benchmarks/close-rate" className="text-lime underline underline-offset-2">close rate benchmarks</Link>). There is no reliable public benchmark for lead-to-booking rate, because it depends so much on lead source and qualification.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">What should I do with the result?</h2>
            <ul className="mt-4 space-y-3">
              <li><strong className="text-fog">Low booking rate:</strong> reply faster and qualify earlier; see <Link href="/speed-to-lead" className="text-lime underline underline-offset-2">AI speed to lead</Link> and <Link href="/appointment-setting" className="text-lime underline underline-offset-2">appointment setting</Link>.</li>
              <li><strong className="text-fog">Low show rate:</strong> confirmations and reminders; check the cost with the <Link href="/tools/show-rate-calculator" className="text-lime underline underline-offset-2">show rate calculator</Link>.</li>
              <li><strong className="text-fog">Low close rate:</strong> better qualification and sales process; see the <Link href="/tools/lead-scoring-template" className="text-lime underline underline-offset-2">lead scoring template</Link>.</li>
              <li><strong className="text-fog">Know your revenue per lead?</strong> Compare it with your cost per lead and model spend with the <Link href="/tools/cost-per-booked-call-calculator" className="text-lime underline underline-offset-2">cost per booked call calculator</Link>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Frequently asked questions</h2>
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
        eyebrow="Want the leak fixed for you?"
        title={
          <>
            Get your funnel numbers reviewed{" "}
            <em className="font-semibold not-italic text-lime">on a free strategy call.</em>
          </>
        }
      />
      <Footer />
    </main>
  );
}
