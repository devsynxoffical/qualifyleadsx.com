import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-heading-stack",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "QualifiedLeadsX™ - High-Ticket Client Acquisition System",
    template: "%s | QualifiedLeadsX™",
  },
  description:
    "QualifiedLeadsX™ installs a done-for-you lead generation funnel system for high-ticket coaches, consultants & service providers - generating $100K+ months of qualified sales calls on your calendar.",
  keywords: [
    "high ticket lead generation",
    "client acquisition system",
    "qualified leads for coaches",
    "done for you funnel",
    "high ticket client acquisition",
    "consultant lead generation",
  ],
  authors: [{ name: "Qualified LeadsX" }],
  creator: "Qualified LeadsX",
  publisher: "Qualified LeadsX",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "QualifiedLeadsX™",
    title: "QualifiedLeadsX™ - High-Ticket Client Acquisition System",
    description:
      "Done-for-you client acquisition for high-ticket coaches, consultants & service providers. $100K+ months. You own everything. 90-day guarantee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QualifiedLeadsX™ - High-Ticket Client Acquisition System",
    description:
      "Done-for-you client acquisition for high-ticket coaches, consultants & service providers. $100K+ months. You own everything. 90-day guarantee.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${interTight.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <NoiseOverlay />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative min-h-screen overflow-x-clip">
            {children}
          </div>
        </SmoothScroll>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
