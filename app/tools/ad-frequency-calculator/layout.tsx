import type { Metadata } from "next";

// Client-component page; metadata lives here (see /tools/roas-calculator/layout.tsx).
// Demand: GSC 17 Nov, "ad frequency calculator" pos 10.5 on /tools.
const TITLE = "Ad Frequency Calculator for Facebook & Meta Ads";
const DESCRIPTION =
  "Free ad frequency calculator: frequency = impressions ÷ reach. Also works out the impressions and budget you need to hit a target frequency at your CPM.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/ad-frequency-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/ad-frequency-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
