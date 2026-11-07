import type { Metadata } from "next";

// The calculator page is a client component and cannot export metadata, so it
// lives here. Without this file the page inherited the homepage's title and
// canonical ("/"), telling Google it was a duplicate of the homepage.
const TITLE = "CAC Calculator for High-Ticket Offers";
const DESCRIPTION =
  "Free customer acquisition cost (CAC) calculator for high-ticket offers. Enter ad spend, team and tool costs to get blended CAC, payback and margin.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX` },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/cac-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/cac-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
