import { site, nav } from "@/lib/site";
import { brandFacts } from "@/lib/brand-facts";
import { siteNavigation, TIER1_MARKETS, orgRef } from "@/lib/schema";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: brandFacts.name,
    alternateName: [...brandFacts.alternateNames],
    legalName: brandFacts.legalName,
    department: { "@id": `${site.url}/#office-delhi` },
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/qualified-leadsx.webp`,
    },
    image: `${site.url}/opengraph-image`,
    description:
      "QualifiedLeadsX is a done-for-you client acquisition agency that builds and runs Meta ads, funnels, CRM and AI follow-up to book qualified sales calls for agency owners, high-ticket coaches and B2B service businesses doing $10,000+ a month.",
    email: site.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        url: `${site.url}${brandFacts.bookingPath}`,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `https://wa.me/${brandFacts.whatsappNumber}`,
        availableLanguage: ["English"],
      },
    ],
    foundingDate: String(brandFacts.foundedYear),
    founder: {
      "@type": "Person",
      "@id": `${site.url}/about#founder`,
      name: brandFacts.founder.name,
      url: `${site.url}${brandFacts.founder.path}`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: brandFacts.address.streetAddress,
      addressLocality: brandFacts.address.addressLocality,
      addressRegion: brandFacts.address.addressRegion,
      postalCode: brandFacts.address.postalCode,
      addressCountry: brandFacts.address.addressCountry,
    },
    areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
    slogan: "Done-for-you client acquisition for high-ticket offers",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "QualifiedLeadsX service plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Meta Ads Management",
          description:
            "Full Meta ads campaign management: ad creative production, direct-response copy, audience segmentation, daily creative testing and ROAS optimization. Custom quote.",
          url: `${site.url}/meta-ads-agency`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: "Meta Ads Management", url: `${site.url}/meta-ads-agency`, provider: orgRef },
        },
        {
          "@type": "Offer",
          name: "Full-Service Growth",
          description:
            "Everything in Meta Ads Management plus a custom 3 to 5 page funnel, 40 to 100+ creatives, AI follow-up, email and SMS nurture, lead qualification, CRM and calendar booking. Custom quote.",
          url: `${site.url}/appointment-setting`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: "Full-Service Client Acquisition System", url: `${site.url}/appointment-setting`, provider: orgRef },
        },
      ],
    },
    serviceType: ["Lead Generation", "Meta Ads Management", "Appointment Setting", "Sales Funnel Development"],
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
      "https://clutch.co/profile/qualifiedleadsx",
      "https://www.crunchbase.com/organization/qualifiedleadsx",
      "https://www.trustpilot.com/review/qualifiedleadsx.com",
      brandFacts.googleBusinessProfile.mapsUrl,
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
    alternateName: [...brandFacts.alternateNames],
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };

  // Operating office as listed on Google Business Profile, linked to the
  // Organization so Google can match the website to the Maps listing.
  const gbp = brandFacts.googleBusinessProfile;
  const office = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#office-delhi`,
    name: brandFacts.name,
    alternateName: [...brandFacts.alternateNames],
    url: site.url,
    image: `${site.url}/gbp/qualifiedleadsx-cover.png`,
    logo: `${site.url}/gbp/qualifiedleadsx-logo.png`,
    telephone: gbp.office.telephone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: gbp.office.streetAddress,
      addressLocality: gbp.office.addressLocality,
      addressRegion: gbp.office.addressRegion,
      postalCode: gbp.office.postalCode,
      addressCountry: gbp.office.addressCountry,
    },
    geo: { "@type": "GeoCoordinates", latitude: gbp.office.latitude, longitude: gbp.office.longitude },
    hasMap: gbp.mapsUrl,
    openingHours: gbp.office.openingHours,
    priceRange: "Custom quote",
    parentOrganization: { "@id": `${site.url}/#organization` },
    sameAs: [gbp.mapsUrl],
  };

  const navigation = siteNavigation([...nav, { label: "Book Free Strategy Call", href: "/book-your-call" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(office) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigation) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
