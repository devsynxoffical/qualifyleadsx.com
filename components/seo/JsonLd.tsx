import { site } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: "QualifiedLeadsX",
    legalName: "Ecom Expertz LLC",
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/qualified-leadsx.webp`,
    },
    image: `${site.url}/opengraph-image`,
    description:
      "QualifiedLeadsX is a done-for-you client acquisition agency that builds and runs Meta ads, funnels, CRM and AI follow-up to book qualified sales calls for agency owners, high-ticket coaches and B2B service businesses doing $10,000+ a month.",
    email: site.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      availableLanguage: ["English"],
    },
    foundingDate: "2022",
    founder: {
      "@id": `${site.url}/about#founder`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1309 Coffeen Avenue STE 1200",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    areaServed: ["US", "GB", "CA", "AU"],
    knowsAbout: [
      "Meta ads",
      "Facebook ads",
      "Lead generation",
      "Appointment setting",
      "Speed to lead",
      "High ticket sales",
      "Sales funnels",
      "CRM automation",
    ],
    sameAs: [
      "https://www.facebook.com/qualifiedleadsx/",
      "https://www.instagram.com/qualifiedleadsx/",
      "https://www.youtube.com/@QualifiedLeadsX",
      "https://www.facebook.com/groups/qualifiedleadsx",
      "https://www.linkedin.com/in/gauravecom/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "QualifiedLeadsX",
    alternateName: "QualifiedLeadsX.com",
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
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
    </>
  );
}
