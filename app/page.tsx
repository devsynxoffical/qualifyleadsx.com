import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyScale } from "@/components/sections/WhyScale";
import { Different } from "@/components/sections/Different";
import { FunnelProof } from "@/components/sections/FunnelProof";
import { VSL } from "@/components/sections/VSL";
import { LogoBar } from "@/components/sections/LogoBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Process } from "@/components/sections/Process";
import { EverythingIncluded } from "@/components/sections/EverythingIncluded";
import { Training } from "@/components/sections/Training";
import { FlowWave } from "@/components/sections/FlowWave";
import { Industries } from "@/components/sections/Industries";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { Community } from "@/components/sections/Community";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { UFSquareMarquee } from "@/components/sections/UFSquareMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { site } from "@/lib/site";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
  description:
    "B2B lead generation agency scaling high ticket sales for agencies and coaches. Get predictable booked calls with our AI acquisition engine. Book your call.",
  keywords: [
    "lead generation agency",
    "high ticket sales",
    "b2b lead generation",
    "appointment setting",
    "high ticket client acquisition",
    "meta ads agency",
    "speed to lead",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
    description:
      "B2B lead generation agency scaling high ticket sales for agencies and coaches. Get predictable booked calls with our AI acquisition engine.",
    url: site.url,
    siteName: "QualifiedLeadsX™",
    images: [
      {
        url: `${site.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
    description:
      "B2B lead generation agency scaling high ticket sales for agencies and coaches. Get predictable booked calls with our AI acquisition engine.",
    images: [`${site.url}/opengraph-image`],
  },
};

export default function Home() {
  // FAQPage schema lives here (not in the root layout) so it only appears on the page
  // where the FAQ content is actually visible.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AnnouncementBar />
      <Nav />
      <FlowWave />
      <VSL />
      <LogoBar />
      <TrustBar />
      <WhyScale />
      <Different />
      <FunnelProof />
      <EverythingIncluded />
      <ClientSuccess />
      <Process />
      <CTABanner
        compact
        eyebrow="Done-for-you"
        title={
          <>
            Every step above,{" "}
            <em className="font-semibold not-italic text-lime">installed for you.</em>
          </>
        }
      />
      <Training />
      <Industries />
      <Guarantee />
      <CTABanner
        compact
        eyebrow="Risk reversed"
        title={
          <>
            Your free strategy call,{" "}
            <em className="font-semibold not-italic text-lime">backed in writing.</em>
          </>
        }
      />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Community />
      <FeaturedInsights />
      <UFSquareMarquee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
