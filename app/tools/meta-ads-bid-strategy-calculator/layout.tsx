import type { Metadata } from "next";

const TITLE = "Meta Ads Bid Strategy Calculator (Cost Cap)";
const DESCRIPTION =
  "Find the cost cap and bid strategy to use on Meta from your deal value, margin, close rate and show rate. Free bid strategy calculator, no sign-up.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["bid strategy calculator", "meta ads cost cap calculator", "facebook ads bid cap calculator", "target cpa calculator"],
  alternates: { canonical: "/tools/meta-ads-bid-strategy-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/meta-ads-bid-strategy-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
