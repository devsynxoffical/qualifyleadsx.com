import type { Metadata } from "next";

// The calculator page is a client component and cannot export metadata, so it
// lives here. Without this file the page inherited the homepage's title and
// canonical ("/"), telling Google it was a duplicate of the homepage.
const TITLE = "ROAS & Break-Even ROAS Calculator";
const DESCRIPTION =
  "Calculate return on ad spend and your break-even ROAS for a high-ticket offer, including front-end cash collected and lifetime revenue per client.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX` },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/roas-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/roas-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
