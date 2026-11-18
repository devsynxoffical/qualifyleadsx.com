import type { Metadata } from "next";

// Client-component page; metadata lives here (see /tools/roas-calculator/layout.tsx).
// Demand: GSC 17 Nov, "marketing efficiency ratio calculator" pos 18 on /tools.
const TITLE = "Marketing Efficiency Ratio (MER) Calculator";
const DESCRIPTION =
  "Free MER calculator: divide total revenue by total marketing spend, then compare it with your break-even MER from gross margin. Includes MER vs ROAS.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/tools/mer-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/mer-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
