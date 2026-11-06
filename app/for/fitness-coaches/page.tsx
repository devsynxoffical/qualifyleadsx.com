import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Online Fitness Coach Clients | QualifiedLeadsX",
  description:
    "Scale high-ticket online fitness coaching ($2.5K–$6K offers). Book 30–60 qualified transformation clients monthly with Meta ads and automated DM setters.",
  alternates: {
    canonical: `${site.url}/for/fitness-coaches`,
  },
  openGraph: {
    title: "Online Fitness Coach Clients | QualifiedLeadsX",
    description:
      "Scale high-ticket online fitness coaching ($2.5K–$6K offers). Book 30–60 qualified transformation clients monthly.",
    url: `${site.url}/for/fitness-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you navigate Meta's strict health and personal attributes ad policies?",
    a: "We strictly avoid policy violations (no before/after body zoom-ins or negative self-image prompts). Instead, we engineer compliant lifestyle, routine transformation, and energy optimization hooks that Meta's automated compliance filters approve smoothly.",
  },
  {
    q: "Can fitness coaches sell programs above $3,000 using this system?",
    a: "Yes. Our client funnels transition coaches away from cheap $50/month app subscriptions into high-ticket holistic concierge transformation programs ($3,000–$6,000 for 4–6 months), combining nutrition, bloodwork, and 1-on-1 coaching.",
  },
  {
    q: "What is the typical cost per booked call for high-ticket fitness?",
    a: "Across our active fitness coaching clients, the cost per qualified booked call averages $85 to $145, yielding an average client acquisition cost of $450 to $850 for a $3,500 program.",
  },
  {
    q: "Do you use Instagram DM funnels for fitness coaches?",
    a: "Yes. ManyChat and automated Instagram DM triage are ideal for fitness. We use keyword-triggered story and reel ads that start a conversation in the DMs, where setters qualify prospects before sharing booking links.",
  },
];

export default function FitnessCoachesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/fitness-coaches#service`,
        name: "Client Acquisition for High-Ticket Fitness Coaches",
        description:
          "Turnkey lead generation funnels, Meta ad campaigns, and Instagram DM appointment setting for online transformation coaches selling $2.5K–$6K programs.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Fitness Coach Client Acquisition",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/fitness-coaches#faq`,
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
          { name: "Industries", url: "/for" },
          { name: "Fitness Coaches", url: "/for/fitness-coaches" },
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
              Health, Wellness & Performance Coaching
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Online Fitness Coach Clients
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To acquire <strong>high-ticket online fitness coaching clients ($2,500–$6,000 packages)</strong>, we combine compliant Meta lifestyle ads, Instagram DM triage sequences, and appointment setters. This system books 30 to 60 qualified consultation calls monthly at an average cost of $85–$145 per call.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">35–60</div>
                <div className="text-xs text-fog mt-1">Booked Consultations / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$112</div>
                <div className="text-xs text-fog mt-1">Avg Cost Per Booked Call</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">4.6x</div>
                <div className="text-xs text-fog mt-1">Verified Return on Ad Spend</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Meta Ad Policy Compliant</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Fitness Coaching
              </Link>
              <Link
                href="/case-studies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect Fitness Transformation Cases →
              </Link>
            </div>
          </div>
        </section>

        <ProofStack variant="full" />

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
