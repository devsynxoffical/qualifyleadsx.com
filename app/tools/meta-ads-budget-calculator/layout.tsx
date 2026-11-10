import type { Metadata } from "next";

// Metadata for the client-component calculator page.
const TITLE = "Meta Ads Budget Calculator (Free)";
const DESCRIPTION =
  "Work out the monthly Facebook and Instagram ad budget you need from your target clients, close rate, show rate and cost per booked call. Free, no sign-up.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX™` },
  description: DESCRIPTION,
  keywords: ["meta ads budget calculator", "facebook ads budget calculator", "how much to spend on facebook ads", "facebook ads budget for lead generation"],
  alternates: { canonical: "/tools/meta-ads-budget-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/meta-ads-budget-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
