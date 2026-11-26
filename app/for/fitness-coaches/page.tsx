import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
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
    images: [defaultOgImage],
    title: "Online Fitness Coach Clients | QualifiedLeadsX",
    description:
      "Scale high-ticket online fitness coaching ($2.5K–$6K offers). Book 30–60 qualified transformation clients monthly with Meta ads and automated DM setters.",
    url: `${site.url}/for/fitness-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do online fitness coaches get clients?",
    a: "Most start with referrals and social content, then add paid ads to a simple first offer. The model behind our published fitness results is an ascension funnel: Meta ads sell a low-ticket membership, a one-time offer adds revenue, and the best buyers are invited to a higher-ticket coaching program.",
  },
  {
    q: "How do you handle Meta's health and personal attributes ad policies?",
    a: "Ads avoid before-and-after body shots and negative self-image claims. Hooks focus on routines, energy and the coaching experience, and every ad is checked against Meta's policy before launch.",
  },
  {
    q: "Can fitness coaches sell higher-ticket programs with this system?",
    a: "Yes. In one published launch, 35 buyers moved up to a mastermind at an average of $2,542 each ($89,000), after first buying a low-ticket membership.",
  },
  {
    q: "What results have fitness coaches had with your campaigns?",
    a: "One fitness funnel generated $203,941 in 11 days (1,566 memberships, 246 one-time offers, 35 mastermind clients). Another fitness coach sold 696 courses for $70,673 in 30 days from $21,789 in ads, a 3.24 ROAS.",
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
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To get <strong>online fitness coaching clients</strong>, we run compliant Meta ads into a low-ticket offer, move the best buyers up to a higher-ticket program, and book calls for the coaching tier. One published fitness funnel sold 1,566 memberships, 246 one-time offers and 35 mastermind places: <strong>$203,941 in 11 days</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">$203,941</div>
                <div className="text-xs text-fog mt-1">Fitness funnel revenue in 11 days</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">35</div>
                <div className="text-xs text-fog mt-1">Mastermind clients from one launch</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">696</div>
                <div className="text-xs text-fog mt-1">Courses sold in 30 days (another coach)</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">3.24</div>
                <div className="text-xs text-fog mt-1">ROAS on $21,789 in ad spend</div>
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

        {/* 25 Nov 2026: published results only (lib/case-studies-data.ts) */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-4">Published fitness coaching results</h2>
            <p className="text-fog max-w-3xl mb-8">Both campaigns were published with the numbers shown, so you can check them. Results depend on the offer, audience and budget.</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-lg font-semibold text-paper mb-2">$203,941 in 11 days from an ascension funnel</h3>
                <p className="text-fog text-sm sm:text-base leading-relaxed">1,566 low-ticket memberships ($86,967), 246 one-time offers ($27,974) and 35 mastermind clients ($89,000, about $2,542 each).</p>
                <Link href="/case-studies/high-ticket-coaching-203k" className="mt-3 inline-block text-sm text-lime underline-offset-2 hover:underline">Read the case study</Link>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-lg font-semibold text-paper mb-2">696 courses sold in 30 days</h3>
                <p className="text-fog text-sm sm:text-base leading-relaxed">$21,789 in Meta ads produced $70,673 in revenue, a 3.24 ROAS, after testing more than 15 ad angles.</p>
                <a href="https://www.instagram.com/p/DMOUbBhywzQ/" className="mt-3 inline-block text-sm text-lime underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">See the original post</a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-paper mt-12 mb-4">How a fitness coaching funnel works</h3>
            <ol className="space-y-3 text-fog">
              <li className="flex gap-3"><span className="font-mono text-lime">1.</span><span>Compliant Meta ads sell a simple first offer, such as a membership or course.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">2.</span><span>A one-time offer at checkout lifts the value of every buyer.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">3.</span><span>Engaged buyers are invited to a higher-ticket coaching or mastermind tier.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">4.</span><span>Applicants answer a short form and book a call, with reminders before it.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">5.</span><span>Every step is tracked: cost per buyer, ascension rate and revenue per client.</span></li>
            </ol>
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
