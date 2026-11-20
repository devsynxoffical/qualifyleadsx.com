"use client";

import { useState } from "react";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { Calculator, ArrowRight } from "lucide-react";

const PATH = "/tools/mer-calculator";

/**
 * Marketing Efficiency Ratio (MER) calculator. Only arithmetic is presented as
 * fact: MER = revenue / marketing spend; break-even MER = 1 / gross margin.
 */
export default function MerCalculatorPage() {
  const [revenue, setRevenue] = useState<number>(120000);
  const [adSpend, setAdSpend] = useState<number>(20000);
  const [otherSpend, setOtherSpend] = useState<number>(8000);
  const [margin, setMargin] = useState<number>(70);

  const totalSpend = adSpend + otherSpend;
  const mer = totalSpend > 0 ? revenue / totalSpend : 0;
  const breakEven = margin > 0 ? 100 / margin : 0;
  const grossProfit = revenue * (margin / 100);
  const contribution = grossProfit - totalSpend;
  const spendShare = revenue > 0 ? (totalSpend / revenue) * 100 : 0;
  const status = mer === 0 ? "" : mer >= breakEven ? "above break-even" : "below break-even";

  const faqs = [
    {
      q: "What is the marketing efficiency ratio (MER)?",
      a: "MER, also called blended ROAS, is total revenue divided by total marketing spend over the same period. If you collected $120,000 and spent $28,000 on ads, agency fees and marketing tools, your MER is 4.29. It measures the business as a whole instead of crediting revenue to individual ads.",
    },
    {
      q: "How do you calculate MER?",
      a: "MER = total revenue ÷ total marketing spend. Use the same time window for both, include every marketing cost you want the ratio to cover (ad spend, agency or media-buyer fees, marketing software, creative), and use cash collected rather than contract value if you sell on payment plans.",
    },
    {
      q: "What is the difference between MER and ROAS?",
      a: "ROAS divides the revenue attributed to ads by ad spend, usually per campaign and based on platform tracking. MER divides all revenue by all marketing spend, so it does not depend on attribution. ROAS tells you which campaigns work; MER tells you whether marketing as a whole is profitable.",
    },
    {
      q: "What is a good MER?",
      a: "A good MER is one above your break-even MER, which is 1 ÷ gross margin. At a 70% gross margin, break-even MER is 1.43: every $1 of marketing must bring at least $1.43 of revenue before the spend is covered. How far above break-even you need to be depends on your fixed costs and profit target, so compare against your own margin, not a generic benchmark.",
    },
    {
      q: "Should MER include agency fees and software?",
      a: "Include every cost that exists only because you market. Most teams include ad spend, agency or media-buyer fees and marketing tools, and leave out sales salaries, which belong in customer acquisition cost (CAC). Whatever you choose, keep the definition the same month to month so the trend is comparable.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Marketing Efficiency Ratio (MER) Calculator",
        url: `${site.url}${PATH}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: site.name, url: site.url },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  const slider = (label: string, value: string, min: number, max: number, step: number, v: number, set: (n: number) => void) => (
    <div>
      <div className="flex justify-between text-sm mb-2 font-mono">
        <span className="text-mist">{label}</span>
        <span className="text-lime font-bold">{value}</span>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(Number(e.target.value))}
        className="w-full accent-lime cursor-pointer"
      />
    </div>
  );

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", url: "/tools" },
          { name: "MER Calculator", url: PATH },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">Free calculator</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Marketing Efficiency Ratio <span className="text-gradient-lime">(MER) Calculator</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            See how much revenue every marketing dollar brings in across the whole business, and whether that is enough to cover your margin.
          </p>
          <div className="short-answer mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">Short answer</span>
            <h2 className="mt-1 text-lg font-bold text-fog">How do you calculate marketing efficiency ratio?</h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              <strong>MER = total revenue ÷ total marketing spend</strong> for the same period. $120,000 of revenue from $28,000 of
              marketing spend is an MER of 4.29. Your break-even MER is 1 ÷ gross margin: at a 70% margin that is 1.43.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-t border-line bg-panel/30">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6 rounded-2xl border border-line bg-ink/80 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-fog flex items-center gap-2">
                <Calculator className="h-5 w-5 text-lime" /> Your numbers (same month)
              </h2>
              {slider("Total revenue ($)", `$${revenue.toLocaleString()}`, 5000, 1000000, 5000, revenue, setRevenue)}
              {slider("Ad spend ($)", `$${adSpend.toLocaleString()}`, 0, 250000, 500, adSpend, setAdSpend)}
              {slider("Other marketing costs: fees, tools, creative ($)", `$${otherSpend.toLocaleString()}`, 0, 100000, 500, otherSpend, setOtherSpend)}
              {slider("Gross margin (%)", `${margin}%`, 10, 95, 1, margin, setMargin)}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">Result</span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">Marketing efficiency ratio</span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">{mer.toFixed(2)}</span>
                  <span className="text-xs text-dim block mt-1">
                    ${revenue.toLocaleString()} revenue ÷ ${totalSpend.toLocaleString()} marketing spend, {status}
                  </span>
                </div>
                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Break-even MER (1 ÷ margin):</span>
                    <span className="font-mono font-bold text-fog">{breakEven.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Marketing spend as % of revenue:</span>
                    <span className="font-mono font-bold text-fog">{spendShare.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Gross profit:</span>
                    <span className="font-mono font-bold text-fog">${Math.round(grossProfit).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Profit after marketing:</span>
                    <span className={`font-mono font-bold ${contribution >= 0 ? "text-lime" : "text-red-400"}`}>
                      ${Math.round(contribution).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call#book"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Get a free acquisition audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tools/roas-calculator" className="w-full text-center block text-xs text-mist hover:text-lime mt-3">
                  Need campaign-level numbers? Use the ROAS calculator &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl font-bold text-fog">MER vs ROAS vs CAC</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-elevated/70 text-fog">
                <tr>
                  <th className="p-3">Metric</th>
                  <th className="p-3">Formula</th>
                  <th className="p-3">Answers</th>
                </tr>
              </thead>
              <tbody className="text-mist">
                <tr className="border-t border-line">
                  <td className="p-3 font-semibold text-fog">MER</td>
                  <td className="p-3">Total revenue ÷ total marketing spend</td>
                  <td className="p-3">Is marketing as a whole profitable?</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="p-3 font-semibold text-fog">ROAS</td>
                  <td className="p-3">Ad-attributed revenue ÷ ad spend</td>
                  <td className="p-3">Which campaigns and ads work? (<Link href="/tools/roas-calculator" className="text-lime underline">ROAS calculator</Link>)</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="p-3 font-semibold text-fog">CAC</td>
                  <td className="p-3">Marketing + sales cost ÷ new customers</td>
                  <td className="p-3">What does one new client cost? (<Link href="/tools/cac-calculator" className="text-lime underline">CAC calculator</Link>)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-mist">
            For high-ticket offers, pair MER with the funnel numbers behind it: cost per booked call, show rate and close rate. See our{" "}
            <Link href="/benchmarks/cost-per-booked-call" className="text-lime underline">cost per booked call benchmarks</Link> and{" "}
            <Link href="/blog/b2b-roas-benchmarks-qualified-appointment-generation" className="text-lime underline">B2B ROAS benchmarks</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl font-bold text-fog text-center mb-10">Marketing efficiency ratio: FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl border border-line bg-ink/70">
                <h3 className="text-lg font-bold text-fog mb-2">{f.q}</h3>
                <p className="text-sm text-mist leading-relaxed font-sans">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
