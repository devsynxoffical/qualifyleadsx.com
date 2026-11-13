import { brandFacts as bf } from "@/lib/brand-facts";

export const site = {
  name: bf.name,
  legalName: bf.legalName,
  legalAddress: "1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801",
  url: bf.url,
  bookCallUrl: "/book-your-call#book",
  email: bf.email,
  phone: "",
  whatsappNumber: bf.whatsappNumber,
  whatsappDisplay: bf.whatsappDisplay,
  founded: bf.foundedYear,
  location: {
    streetAddress: bf.address.streetAddress,
    addressLocality: bf.address.addressLocality,
    addressRegion: bf.address.addressRegion,
    postalCode: bf.address.postalCode,
    addressCountry: bf.address.addressCountry,
  },
  description:
    "QualifiedLeadsX™ installs a done-for-you client acquisition funnel system for high-ticket coaches, consultants and service providers - generating $100K+ months of qualified sales calls on your calendar.",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/qualifiedleadsx/" },
    { label: "Instagram", href: "https://www.instagram.com/qualifiedleadsx/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravecom/" },
    { label: "YouTube", href: "https://www.youtube.com/@QualifiedLeadsX" },
  ],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/for" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Tools", href: "/tools" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Mastermind", href: "/mastermind" },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;

/** Default 1200x630 share image (app/opengraph-image.tsx), used by pages that set their own openGraph block. */
export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "QualifiedLeadsX: done-for-you client acquisition for high-ticket offers",
} as const;
