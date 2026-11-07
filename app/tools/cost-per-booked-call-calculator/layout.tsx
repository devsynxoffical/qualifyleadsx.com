import type { Metadata } from "next";

// The calculator page is a client component and cannot export metadata, so it
// lives here. Without this file the page inherited the homepage's title and
// canonical ("/"), telling Google it was a duplicate of the homepage.
const TITLE = "Cost Per Booked Call Calculator";
const DESCRIPTION =
  "Calculate your true cost per booked sales call from ad spend, lead volume, booking rate and show rate, and compare it with 2026 high-ticket benchmarks.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX` },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/cost-per-booked-call-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/cost-per-booked-call-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
