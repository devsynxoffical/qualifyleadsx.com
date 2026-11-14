import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/site";

// Metadata for the client-component calculator page.
const TITLE = "Lead Conversion Rate Calculator (Free)";
const DESCRIPTION =
  "Calculate your lead-to-call, show, close and lead-to-client conversion rates, revenue per lead and your weakest sales funnel stage. Free, no sign-up.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX` },
  description: DESCRIPTION,
  keywords: ["lead conversion rate calculator", "lead to client conversion rate", "sales funnel conversion calculator", "lead generation calculator"],
  alternates: { canonical: "/tools/lead-conversion-rate-calculator" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/tools/lead-conversion-rate-calculator", type: "website", images: [defaultOgImage] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [defaultOgImage.url] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
