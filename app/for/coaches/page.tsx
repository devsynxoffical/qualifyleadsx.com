import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  ShieldCheck,
  CalendarCheck,
  Video,
  Sparkles,
  HelpCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Acquisition Funnels for High-Ticket Coaches",
  description:
    "Done-for-you client acquisition system for business, executive, and fitness coaches. Get 30–50 qualified sales calls every month from ready-to-invest buyers.",
  keywords: [
    "client acquisition for coaches",
    "high ticket coaching leads",
    "lead generation for business coaches",
    "coaching vsl funnel",
    "scale coaching business to 100k",
  ],
  alternates: {
    canonical: "/for/coaches",
  },
  openGraph: {
    title: "Client Acquisition Funnels for High-Ticket Coaches | QualifiedLeadsX™",
    description:
      "Install a high-converting VSL funnel and Meta ads machine to book 30–50 qualified coaching sales calls on autopilot.",
    url: "/for/coaches",
    type: "website",
  },
};

const coachFaqs = [
  {
    q: "How does this system differ from running typical Facebook lead ads for coaches?",
    a: "Standard Facebook lead ads generate cheap, low-intent form fills who rarely answer the phone or afford a $5,000+ program. Our system uses broad creative video targeting combined with an 8-minute VSL and a strict 6-question qualification filter so only prospects with liquid capital can book on your calendar.",
  },
  {
    q: "What price point should my coaching program be for this to work?",
    a: "This system is optimized for high-ticket offers priced between $3,000 and $25,000. The economics of paid acquisition produce the highest ROI when your customer lifetime value exceeds $3,000.",
  },
  {
    q: "Do I need a large personal brand or organic following first?",
    a: "No. Paid acquisition bypasses the organic treadmill entirely. Decision-makers assess your unique mechanism, case studies, and offer structure inside the VSL, not your follower count.",
  },
  {
    q: "How fast can the funnel be launched and start booking calls?",
    a: "Our done-for-you installation sprint takes approximately 14 to 21 business days, including offer positioning, VSL scripting, landing page development, tracking pixels, and Meta ads launch.",
  },
];

export default function CoachesLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "High-Ticket Coaching Client Acquisition System",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    serviceType: "Lead Generation & Client Acquisition Funnels",
    description:
      "Done-for-you client acquisition funnel installation for high-ticket coaches scaling past $50K–$100K/month.",
    areaServed: "Global",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: coachFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Industries", url: "/#different" },
          { name: "Coaches", url: "/for/coaches" },
        ]}
      />

      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-lime/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-lime mb-6">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>Built Specifically For High-Ticket Coaches</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-fog max-w-4xl mx-auto leading-[1.1]">
            Fill Your Calendar With{" "}
            <span className="text-gradient-lime font-extrabold">30–50 Qualified Coaching Clients</span>{" "}
            Every Month
          </h1>

          <p className="mt-6 text-lg sm:text-2xl text-mist max-w-3xl mx-auto leading-relaxed">
            Eliminate low-ticket tire-kickers and the organic social media treadmill. We install a complete done-for-you client acquisition system engineered for $3K–$25K coaching programs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-your-call" variant="primary" size="xl">
              Book Your Free Scaling Walkthrough
            </Button>
            <Button href="/case-studies" variant="outline" size="xl">
              View 125+ Coach Case Studies
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">30–50</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Calls / Month</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">85%+</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Show-Up Rate</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">$3K–$25K</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Target Offer Size</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">14–21 Days</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Deployment Speed</div>
            </div>
          </div>

          {/* Coaching Acquisition Architecture Visual Mockup */}
          <div className="mt-14 relative mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-panel/60 to-transparent p-2 sm:p-4 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl text-left">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-mist/70 hidden sm:inline-block">coach-vsl-funnel-pipeline.arch</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-lime font-semibold">
                <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span>ACTIVE COACHING ENROLLMENT SYSTEM</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 relative aspect-[16/9] shadow-inner group">
              <Image
                src="/images2/showreel/shot_08_multi_device.webp"
                alt="Multi-device coaching client acquisition and high-ticket enrollment funnel"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: The Old Way vs The QualifiedLeadsX Engine */}
      <section className="py-20 bg-base/60 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              The Evolution of Coaching Growth
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              Stop Cold DMing & Chasing Unqualified Leads
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="rounded-3xl border border-rose/30 bg-panel/80 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-rose font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <XCircle className="w-5 h-5" />
                <span>The Outdated Coaching Model</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-mist">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Spending 4+ hours a day posting reels, carousels, and sending cold Instagram DMs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Calendar filled with unqualified people who say &quot;I love this but I have no money.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>50% no-show rates causing massive wasted time for you and your sales team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Income rollercoasters: $30K one month, followed by $6K the next.</span>
                </li>
              </ul>
            </div>

            {/* The QualifiedLeadsX Way */}
            <div className="rounded-3xl border-2 border-lime/50 bg-panel p-8 sm:p-10 shadow-[0_0_60px_-15px_rgba(201,242,107,0.12)]">
              <div className="flex items-center gap-3 text-lime font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <CheckCircle2 className="w-5 h-5" />
                <span>The QualifiedLeadsX™ Installed Engine</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-fog">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Targeted Meta ads that attract established, solvent clients looking for transformation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>10-minute VSL pre-sells your methodology so prospects arrive eager to enroll.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Conditional application filters out anyone without liquid capital before booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Predictable $50K–$150K/month client acquisition on complete autopilot.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Installation System */}
      <section className="py-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              How It Works
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              The 4-Step Client Acquisition Engine We Install
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-line bg-panel p-5 flex flex-col justify-between overflow-hidden group hover:border-lime/40 transition-all">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-4 bg-ink/90">
                  <Image
                    src="/images2/showreel/shot_03_brand_system.webp"
                    alt="Coaching offer and positioning architecture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                    STEP 01 OFFER
                  </span>
                </div>
                <div className="font-mono text-3xl font-bold text-lime mb-2">01</div>
                <h4 className="text-lg font-bold text-fog mb-2">Offer & Angle Dial-In</h4>
                <p className="text-sm text-mist leading-relaxed">
                  We position your coaching program around an undeniable, high-ROI transformation that justifies a $5K–$25K price point.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-5 flex flex-col justify-between overflow-hidden group hover:border-lime/40 transition-all">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-4 bg-ink/90">
                  <Image
                    src="/images2/showreel/shot_06_vsl_player.webp"
                    alt="High-converting coaching video sales letter mechanism"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                    STEP 02 VSL
                  </span>
                </div>
                <div className="font-mono text-3xl font-bold text-lime mb-2">02</div>
                <h4 className="text-lg font-bold text-fog mb-2">High-Converting VSL</h4>
                <p className="text-sm text-mist leading-relaxed">
                  We script and design a cinematic 12-minute video sales letter that explains your unique coaching framework and shows proof.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-5 flex flex-col justify-between overflow-hidden group hover:border-lime/40 transition-all">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-4 bg-ink/90">
                  <Image
                    src="/images2/showreel/shot_14_ai_screener.webp"
                    alt="Smart application filter gate for high ticket coaching"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                    STEP 03 FILTER
                  </span>
                </div>
                <div className="font-mono text-3xl font-bold text-lime mb-2">03</div>
                <h4 className="text-lg font-bold text-fog mb-2">Smart Application Filter</h4>
                <p className="text-sm text-mist leading-relaxed">
                  Multi-step conditional logic asks budget, timeline, and goals—routing unqualified leads away and booking closable buyers.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-5 flex flex-col justify-between overflow-hidden group hover:border-lime/40 transition-all">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-4 bg-ink/90">
                  <Image
                    src="/images2/showreel/shot_15_calendar_booked.webp"
                    alt="Pre-call nurture flow and calendar booking"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                    STEP 04 SHOW-UP
                  </span>
                </div>
                <div className="font-mono text-3xl font-bold text-lime mb-2">04</div>
                <h4 className="text-lg font-bold text-fog mb-2">Pre-Call Nurture Flow</h4>
                <p className="text-sm text-mist leading-relaxed">
                  Automated WhatsApp and SMS confirmation triggers with pre-call videos ensure show-up rates routinely exceed 85%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Coaching Success Snapshot Gallery */}
      <section className="py-20 bg-base/40 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              VERIFIED COACHING OUTCOMES
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Real Transformations. Proven Enrollment Velocity.
            </h3>
            <p className="mt-3 text-base text-mist">
              Unfiltered pipeline snapshots from high-ticket business, life, and executive coaches using our acquisition engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/10-3.webp"
                  alt="Executive coaching high ticket client enrollment proof"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">EXECUTIVE COACHING</div>
                <div className="text-sm font-semibold text-white mt-0.5">$68,500 In New Cohort MRR</div>
                <div className="text-xs text-mist/70 mt-1">4.2x Return On Ad Spend</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/11-2.webp"
                  alt="Business coach client pipeline calendar bookings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">BUSINESS COACHING</div>
                <div className="text-sm font-semibold text-white mt-0.5">44 Strategy Sessions / Mo</div>
                <div className="text-xs text-mist/70 mt-1">89% Show-Up Confirmation</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/6-2.webp"
                  alt="Consulting program closed sales proof"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">CAREER MENTORSHIP</div>
                <div className="text-sm font-semibold text-white mt-0.5">From $12K to $74K/Mo</div>
                <div className="text-xs text-mist/70 mt-1">Zero Cold Messaging Required</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/8-1.webp"
                  alt="High ticket closing call stats"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">FITNESS & HEALTH COACH</div>
                <div className="text-sm font-semibold text-white mt-0.5">3.8x Pipeline Expansion</div>
                <div className="text-xs text-mist/70 mt-1">Direct Inbound Application Flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-base/50 border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Questions & Answers</span>
            </div>
            <h3 className="text-3xl font-bold font-heading text-fog">
              Frequently Asked Questions for Coaches
            </h3>
          </div>

          <div className="space-y-4">
            {coachFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-fog mb-2">{faq.q}</h4>
                <p className="text-sm sm:text-base text-mist leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Coaching Growth Guarantee"
        title={
          <>
            Scale your coaching program to{" "}
            <em className="font-semibold not-italic text-lime">$100K+ months, guaranteed.</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
