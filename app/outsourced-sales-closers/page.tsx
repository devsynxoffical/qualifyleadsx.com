import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Outsourced Sales Closers | QualifiedLeadsX",
  description:
    "Hire vetted outsourced sales closers for $3K–$25K high-ticket offers. Commission-aligned sales talent, call audits, and consistent 25%+ close rates.",
  alternates: {
    canonical: `${site.url}/outsourced-sales-closers`,
  },
  openGraph: {
    title: "Outsourced Sales Closers | QualifiedLeadsX",
    description:
      "Hire vetted outsourced sales closers for $3K–$25K high-ticket offers. Commission-aligned talent, call audits, and 25%+ close rates.",
    url: `${site.url}/outsourced-sales-closers`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How are your outsourced sales closers vetted and trained?",
    a: "Every closer undergoes a 3-stage vetting process: past track record verification (minimum $500K closed revenue), live simulated objection handling roleplay, and product mastery on your exact high-ticket offer.",
  },
  {
    q: "What compensation models do outsourced closers work on?",
    a: "Our closers operate on performance-aligned commission structures (typically 10% to 15% of cash collected), with an optional performance ramp retainer during the initial 30-day onboarding window.",
  },
  {
    q: "What offer price points are best suited for sales closers?",
    a: "Our closing teams are purpose-built for high-ticket offers priced between $3,000 and $25,000+ across coaching, agency retainers, enterprise SaaS, and B2B consulting.",
  },
  {
    q: "How do you maintain quality control and closing consistency?",
    a: "Every sales call recording is audited weekly against our 12-point Closing Framework, reviewing rapport, pain uncovery, financial qualification, urgency framing, and objection handling.",
  },
];

export default function OutsourcedSalesClosersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/outsourced-sales-closers#service`,
        name: "Outsourced High-Ticket Sales Closers",
        description:
          "Elite, commission-aligned sales closers vetted for high-ticket service providers, coaches, and agencies to close $3K–$25K contracts.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Sales Team Placement & Management",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/outsourced-sales-closers#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Outsourced Sales Closers", url: "/outsourced-sales-closers" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <span className="text-lime text-xs font-mono tracking-widest uppercase">
              Commission-Aligned High-Ticket Sales Talent
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Outsourced Sales Closers
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Outsourced sales closers</strong> are professional commission-aligned sales representatives who handle scheduled consultation calls to convert qualified high-ticket leads into paying clients for $3,000 to $25,000+ offers. They eliminate founder sales burnout, maintain 25%+ close rates, and scale revenue without fixed executive overhead.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">27.6%</div>
                <div className="text-xs text-fog mt-1">Average Qualified Close Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$3K–$25K</div>
                <div className="text-xs text-fog mt-1">Average Deal Size Handled</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Audited Call Recordings</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">14 Days</div>
                <div className="text-xs text-fog mt-1">Time to Live Calendar Onboarding</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Request Vetted Closers
              </Link>
              <Link
                href="/appointment-setting"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Appointment Setting Infrastructure →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Why Founders Must Transition Off the Sales Floor
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-fog text-sm sm:text-base leading-relaxed">
              <div>
                <p className="mb-4">
                  When the founder or CEO is trapped taking 20 to 30 sales calls every week, company growth caps at \$50K to \$100K/month. Product delivery suffers, strategic marketing stagnates, and burnout turns high-ticket sales calls into rushed conversations.
                </p>
                <p>
                  Placing dedicated outsourced closers with performance compensation frees leadership to focus on enterprise delivery, brand authority, and client retention while sales volume doubles.
                </p>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-paper font-semibold mb-3">Closer Management Protocol</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><strong className="text-lime">Daily Pipeline Standups:</strong> Pipeline review tracking scheduled calls, offers presented, and cash collected.</li>
                  <li><strong className="text-lime">Objection Breakdown Coaching:</strong> Bi-weekly deep dives into &apos;I need to think about it&apos; and partner objections.</li>
                  <li><strong className="text-lime">CRM Stage Hygiene:</strong> Real-time logging of call notes, recording links, and follow-up commitments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <h3 className="text-lg font-semibold text-paper mb-2">{f.q}</h3>
                  <p className="text-fog text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
