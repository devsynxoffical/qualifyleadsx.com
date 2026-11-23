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

const PATH = "/tools/ad-frequency-calculator";

/**
 * Ad frequency calculator. Formulas only: frequency = impressions / reach;
 * impressions needed = reach x target frequency; budget = impressions / 1000 x CPM.
 * The default CPM ($24.50) is the site's own tier-1 average on /benchmarks/meta-ads-cpm.
 */
export default function AdFrequencyCalculatorPage() {
  const [impressions, setImpressions] = useState<number>(60000);
  const [reach, setReach] = useState<number>(25000);
  const [audience, setAudience] = useState<number>(40000);
  const [targetFreq, setTargetFreq] = useState<number>(3);
  const [cpm, setCpm] = useState<number>(24.5);

  const frequency = reach > 0 ? impressions / reach : 0;
  const neededImpressions = Math.round(audience * targetFreq);
  const budget = (neededImpressions / 1000) * cpm;
  const currentSpend = (impressions / 1000) * cpm;

  const faqs = [
    {
      q: "What is ad frequency?",
      a: "Ad frequency is the average number of times each person saw your ad: impressions divided by reach. 60,000 impressions shown to 25,000 people is a frequency of 2.4. Meta Ads Manager reports it as the Frequency column.",
    },
    {
      q: "How do you calculate ad frequency?",
      a: "Frequency = impressions ÷ reach, for the same campaign and date range. To plan, reverse it: impressions needed = audience you want to reach × target frequency, and budget = impressions ÷ 1,000 × CPM.",
    },
    {
      q: "What is a good frequency for Facebook ads?",
      a: "There is no single right number. Meta does not publish a target, and the right frequency depends on audience size, how often you refresh creative and how long your buyers take to decide. Watch the trend instead: when frequency keeps rising while click-through rate falls and cost per lead climbs, the audience is seeing the same ads too often and it is time for new creative or a broader audience.",
    },
    {
      q: "What is the frequency formula in Meta ads?",
      a: "In Meta Ads Manager, frequency = impressions ÷ reach for the selected date range. For example, 90,000 impressions reaching 30,000 accounts gives a frequency of 3.0. Compare it over the same date range each week to see whether it is rising.",
    },
    {
      q: "Why is my Facebook ad frequency so high?",
      a: "Usually because the audience is small for the budget, so Meta shows the same people your ads again and again. Broadening targeting, adding new creative and lowering spend on small retargeting audiences all bring frequency down. Our guide to broad targeting explains why wider audiences often work better for high-ticket offers.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Ad Frequency Calculator for Facebook & Meta Ads",
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
          { name: "Ad Frequency Calculator", url: PATH },
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
            Ad Frequency Calculator <span className="text-gradient-lime">for Meta Ads</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Check how often people are seeing your Facebook and Instagram ads, and plan the impressions and budget for the frequency you want.
          </p>
          <div className="short-answer mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">Short answer</span>
            <h2 className="mt-1 text-lg font-bold text-fog">How do you calculate ad frequency?</h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              <strong>Frequency = impressions ÷ reach.</strong> 60,000 impressions shown to 25,000 people is a frequency of 2.4. To hit a target,
              multiply the audience you want to reach by the target frequency to get the impressions needed, then multiply by CPM ÷ 1,000 for the budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-t border-line bg-panel/30">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6 rounded-2xl border border-line bg-ink/80 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-fog flex items-center gap-2">
                <Calculator className="h-5 w-5 text-lime" /> Current campaign
              </h2>
              {slider("Impressions", impressions.toLocaleString(), 1000, 1000000, 1000, impressions, setImpressions)}
              {slider("Reach (people)", reach.toLocaleString(), 500, 500000, 500, reach, setReach)}
              <h2 className="text-xl font-bold text-fog pt-4 border-t border-line/60">Plan a target frequency</h2>
              {slider("Audience you want to reach (people)", audience.toLocaleString(), 1000, 1000000, 1000, audience, setAudience)}
              {slider("Target frequency", targetFreq.toFixed(1), 1, 10, 0.5, targetFreq, setTargetFreq)}
              {slider("CPM ($)", `$${cpm.toFixed(2)}`, 5, 80, 0.5, cpm, setCpm)}
              <p className="text-xs text-dim">
                Default CPM is our tier-1 average from the{" "}
                <Link href="/benchmarks/meta-ads-cpm" className="text-lime underline">Meta ads CPM benchmarks</Link>; use your own Ads Manager number.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">Result</span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">Current frequency</span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">{frequency.toFixed(2)}</span>
                  <span className="text-xs text-dim block mt-1">
                    {impressions.toLocaleString()} impressions ÷ {reach.toLocaleString()} people
                  </span>
                </div>
                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Spend at this CPM (current):</span>
                    <span className="font-mono font-bold text-fog">${Math.round(currentSpend).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Impressions for target:</span>
                    <span className="font-mono font-bold text-fog">{neededImpressions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Budget for target:</span>
                    <span className="font-mono font-bold text-lime">${Math.round(budget).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call#book"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Get your Meta ads audited <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tools/meta-ads-budget-calculator" className="w-full text-center block text-xs text-mist hover:text-lime mt-3">
                  Plan budget from target clients instead &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl font-bold text-fog">What to do when frequency climbs</h2>
          <ul className="mt-6 space-y-3 text-mist">
            <li>
              <strong className="text-fog">Check the trend, not one number.</strong> Rising frequency with falling click-through rate and rising cost per lead means
              creative fatigue.
            </li>
            <li>
              <strong className="text-fog">Refresh creative first.</strong> New hooks and formats reset attention without shrinking reach. See{" "}
              <Link href="/blog/meta-ads-for-high-ticket-b2b-broad-targeting" className="text-lime underline">why broad targeting and creative do the targeting</Link>.
            </li>
            <li>
              <strong className="text-fog">Widen small audiences.</strong> A small retargeting or interest audience with a large budget will always run high frequency.
            </li>
            <li>
              <strong className="text-fog">Judge on cost per booked call.</strong> Frequency is a diagnostic, not the goal. Model the full funnel with the{" "}
              <Link href="/tools/cost-per-booked-call-calculator" className="text-lime underline">cost per booked call calculator</Link>.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl font-bold text-fog text-center mb-10">Ad frequency: FAQs</h2>
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
