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
import { trainingVideos, testimonialVideos } from "@/lib/media";
import { isoDuration, imageObject, hostedVideo, WEBSITE_ID, ORG_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lead Generation Agency for High-Ticket B2B",
  description:
    "B2B lead generation agency scaling high ticket sales for agencies and coaches. Get 30-50 predictable booked calls with our AI acquisition engine.",
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

  // Video rich results: the homepage VSL (YouTube) and the three self-hosted training clips.
  // uploadDate values are the dates the clips went live on the site; update if re-published.
  const VSL_ID = "e5za2tPu7ZI";
  const vslVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${site.url}/#vsl`,
    name: "How QualifiedLeadsX Builds Your High-Ticket Client Acquisition Pipeline",
    description:
      "A short breakdown of the QualifiedLeadsX client acquisition system: Meta ads, VSL funnel, automated qualification, AI follow-up and calendar booking, and what a fully booked calendar looks like.",
    thumbnailUrl: [
      `https://img.youtube.com/vi/${VSL_ID}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${VSL_ID}/hqdefault.jpg`,
    ],
    uploadDate: "2026-09-15T00:00:00+00:00",
    embedUrl: `https://www.youtube-nocookie.com/embed/${VSL_ID}`,
    contentUrl: `https://www.youtube.com/watch?v=${VSL_ID}`,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
    isFamilyFriendly: true,
  };

  const trainingVideoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/#training-videos`,
    name: "QualifiedLeadsX Training & Case Study Videos",
    itemListElement: trainingVideos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        thumbnailUrl: v.poster ? `${site.url}${v.poster}` : undefined,
        contentUrl: v.src ? `${site.url}${v.src}` : undefined,
        duration: v.duration ? isoDuration(v.duration) : undefined,
        uploadDate: "2026-09-15T00:00:00+00:00",
        inLanguage: "en-US",
        publisher: { "@id": ORG_ID },
        url: v.link ? `${site.url}${v.link}` : site.url,
      },
    })),
  };

  const testimonialVideoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/#testimonial-videos`,
    name: "QualifiedLeadsX client video testimonials",
    itemListElement: testimonialVideos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: hostedVideo({
        name: `${v.name}: ${v.result}`,
        description: `${v.quote.replace(/[“”]/g, "")} (${v.role})`,
        contentUrl: v.src,
        thumbnailUrl: v.poster,
        duration: v.duration,
        pageUrl: `${site.url}/#testimonials`,
      }),
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/`,
    url: site.url,
    name: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: imageObject("/opengraph-image"),
    video: { "@id": `${site.url}/#vsl` },
    dateModified: "2026-11-03",
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vslVideoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingVideoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialVideoSchema) }}
      />
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
