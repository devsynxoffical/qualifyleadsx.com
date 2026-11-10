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

/**
 * Date the current site content (VSL, training clips, mastermind breakdowns) went live.
 * Google requires uploadDate / datePublished on Video and Article rich results.
 * Update this if the assets are re-published.
 */
export const CONTENT_LAUNCH_DATE = "2026-09-15";
export const SITE_LAST_MODIFIED = "2026-11-04";

export const TIER1_MARKETS = ["United States", "United Kingdom", "Canada", "Australia"] as const;

export const businessAudience = (description: string) => ({
  "@type": "BusinessAudience",
  audienceType: "High-ticket coaches, consultants and B2B service businesses",
  description,
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1, maxValue: 50 },
});

/** Shared enrichment for every Service node (spread after "@type": "Service"). */
export function serviceExtras(path: string, audienceDescription: string) {
  const url = `${site.url}${path}`;
  return {
    "@id": `${url}#service`,
    url,
    image: imageObject("/opengraph-image"),
    provider: orgRef,
    brand: orgRef,
    areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
    audience: businessAudience(audienceDescription),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${site.url}/book-your-call`,
      availableLanguage: ["English"],
    },
    offers: {
      "@type": "Offer",
      name: "Custom quote after a free 30-minute strategy call",
      url: `${site.url}/book-your-call`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      eligibleRegion: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
      seller: orgRef,
    },
    termsOfService: `${site.url}/terms`,
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

/** WebPage node with optional speakable selectors for AEO answer blocks. */
export function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
  speakable?: boolean;
  dateModified?: string;
  primaryImage?: string;
  about?: { "@id": string };
}) {
  const url = `${site.url}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: opts.about ?? orgRef,
    publisher: orgRef,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: imageObject(opts.primaryImage ?? "/opengraph-image"),
    dateModified: opts.dateModified ?? SITE_LAST_MODIFIED,
    ...(opts.speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-answer"],
          },
        }
      : {}),
  };
}

/** Google needs a full datetime with timezone for VideoObject.uploadDate. */
export const videoDate = (d: string) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? `${d}T00:00:00+00:00` : d);

/** VideoObject for a YouTube embed used on the site. */
export function youtubeVideo(opts: {
  videoId: string;
  name: string;
  description: string;
  pageUrl: string;
  uploadDate?: string;
  id?: string;
}) {
  return {
    "@type": "VideoObject",
    "@id": opts.id ?? `${opts.pageUrl}#video`,
    name: opts.name,
    description: opts.description,
    thumbnailUrl: [
      `https://img.youtube.com/vi/${opts.videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${opts.videoId}/hqdefault.jpg`,
    ],
    uploadDate: videoDate(opts.uploadDate ?? CONTENT_LAUNCH_DATE),
    embedUrl: `https://www.youtube-nocookie.com/embed/${opts.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${opts.videoId}`,
    url: opts.pageUrl,
    inLanguage: "en-US",
    isFamilyFriendly: true,
    publisher: orgRef,
  };
}

/** VideoObject for a self-hosted / CDN clip. */
export function hostedVideo(opts: {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl: string;
  duration?: string; // "m:ss"
  pageUrl: string;
  uploadDate?: string;
}) {
  const abs = (p: string) => (p.startsWith("http") ? p : `${site.url}${p}`);
  return {
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: abs(opts.thumbnailUrl),
    contentUrl: abs(opts.contentUrl),
    ...(opts.duration ? { duration: isoDuration(opts.duration) } : {}),
    uploadDate: videoDate(opts.uploadDate ?? CONTENT_LAUNCH_DATE),
    url: opts.pageUrl,
    inLanguage: "en-US",
    isFamilyFriendly: true,
    publisher: orgRef,
  };
}

export function faqPage(id: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function siteNavigation(items: readonly { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/#sitenav`,
    name: "Primary navigation",
    itemListElement: items.map((it, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: it.label,
      url: it.href.startsWith("http") ? it.href : `${site.url}${it.href}`,
    })),
  };
}
