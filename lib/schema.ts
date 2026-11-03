import { site } from "@/lib/site";

/**
 * Shared schema.org building blocks so every page references the same
 * Organization / Person / WebSite nodes by @id (Google stitches these into one graph).
 */

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const FOUNDER_ID = `${site.url}/about#founder`;
export const LOGO_URL = `${site.url}/images/qualified-leadsx.webp`;

export const orgRef = { "@id": ORG_ID } as const;

export const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Gaurav",
  jobTitle: "Founder & Head of Acquisition",
  worksFor: orgRef,
  url: `${site.url}/about`,
  description:
    "Founder of QualifiedLeadsX with 12+ years in paid acquisition and $50M+ in Meta ads managed across 125+ documented client accounts.",
  knowsAbout: [
    "Meta ads",
    "Facebook ads",
    "Client acquisition",
    "High ticket sales",
    "Appointment setting",
    "Sales funnels",
    "Agency growth",
  ],
  sameAs: ["https://www.linkedin.com/in/gauravecom/", "https://www.youtube.com/@QualifiedLeadsX"],
} as const;

export const publisherOrg = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 1000,
    height: 444,
  },
} as const;

/** Known intrinsic sizes for the image folders used as covers / inline graphics. */
export function imageObject(path: string, id?: string) {
  const url = path.startsWith("http") ? path : `${site.url}${path}`;
  let width: number | undefined;
  let height: number | undefined;
  if (path.startsWith("/images/blog/")) {
    width = 1376;
    height = 768;
  } else if (path.startsWith("/images2/showreel/")) {
    width = 1600;
    height = 900;
  } else if (path === "/opengraph-image") {
    width = 1200;
    height = 630;
  }
  return {
    "@type": "ImageObject",
    ...(id ? { "@id": id } : {}),
    url,
    contentUrl: url,
    ...(width && height ? { width, height } : {}),
  };
}

/** "7:51" | "14:29" | "1:02:03" -> ISO 8601 duration (PT7M51S). */
export function isoDuration(clock: string): string {
  const parts = clock.split(":").map((n) => parseInt(n, 10));
  let h = 0;
  let m = 0;
  let s = 0;
  if (parts.length === 3) [h, m, s] = parts;
  else if (parts.length === 2) [m, s] = parts;
  else [s] = parts;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${s}S`;
}

/** "11 min read" -> PT11M */
export function readTimeToIso(readTime: string): string | undefined {
  const m = readTime.match(/(\d+)/);
  return m ? `PT${m[1]}M` : undefined;
}

export function breadcrumbList(id: string, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: it.url.startsWith("http") ? it.url : `${site.url}${it.url}`,
      })),
    ],
  };
}
