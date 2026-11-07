import type { Metadata } from "next";

// The calculator page is a client component and cannot export metadata, so it
// lives here. Without this file the page inherited the homepage's title and
// canonical ("/"), telling Google it was a duplicate of the homepage.
const TITLE = "LTV to CAC Ratio Calculator";
const DESCRIPTION =
  "Free LTV:CAC calculator. Work out customer lifetime value, acquisition cost and the ratio that tells you whether paid acquisition is ready to scale.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX` },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/ltv-cac-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/ltv-cac-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
