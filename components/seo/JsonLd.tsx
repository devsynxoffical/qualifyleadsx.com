import { site } from "@/lib/site";
import { faqs } from "@/lib/data";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: "QualifiedLeadsX™",
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og.png`,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.addressLocality,
      addressRegion: site.location.addressRegion,
      addressCountry: site.location.addressCountry,
    },
    sameAs: site.socials.map((s) => s.href),
    brand: {
      "@type": "Brand",
      name: "QualifiedLeadsX™",
      slogan: "Qualified sales calls, booked on demand.",
    },
    makesOffer: {
      "@type": "Offer",
      name: "Done-for-you client acquisition system",
      description:
        "QualifiedLeadsX™ installs a complete client acquisition funnel system for high-ticket coaches, consultants and service providers.",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.legalName,
    publisher: { "@id": `${site.url}/#organization` },
  };

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
