import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { EmailOptInWidget } from "@/components/ui/EmailOptInWidget";
import { site } from "@/lib/site";

const inter = { variable: "font-sans" };
const interTight = { variable: "font-heading" };
const geistMono = { variable: "font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lead Generation Agency for High-Ticket Offers - QualifiedLeadsX",
    template: "%s | QualifiedLeadsX™",
  },
  description:
    "B2B lead generation agency scaling high ticket sales for agencies and coaches. Get predictable booked calls with our AI acquisition engine. Book your call.",
  keywords: [
    "high ticket lead generation",
    "client acquisition system",
    "qualified leads for coaches",
    "done for you funnel",
    "b2b lead generation agency",
    "meta ads scaling",
    "high ticket client acquisition",
    "vsl funnel builder",
    "consultant lead generation",
    "appointment setting system",
    "facebook ads for high ticket",
  ],
  authors: [{ name: "Qualified LeadsX", url: site.url }],
  creator: "Qualified LeadsX",
  publisher: "Ecom Expertz LLC®",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "QualifiedLeadsX™",
    title: "QualifiedLeadsX™ - High-Ticket Client Acquisition Funnel System",
    description:
      "Done-for-you client acquisition funnel systems for agency owners, high-ticket coaches & B2B service providers. $100K+ months with guaranteed qualified calls.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "QualifiedLeadsX™ - High-Ticket Client Acquisition System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QualifiedLeadsX™ - High-Ticket Client Acquisition Funnel System",
    description:
      "Done-for-you client acquisition funnel systems for agency owners, high-ticket coaches & B2B service providers. $100K+ months with guaranteed qualified calls.",
    images: ["/opengraph-image"],
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
  verification: {
    google: "NOUxANYoxDqPZ3H4RgJxesvq4YD2wayyf-I7X8SVvfc",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MetaPixel />
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
        <EmailOptInWidget />
      </body>
    </html>
  );
}
