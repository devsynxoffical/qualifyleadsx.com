import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // 13 Nov 2026: thin industry pages with no search demand merged into stronger siblings (audit/programmatic_decisions.csv)
      { source: "/for/executive-coaches", destination: "/for/coaches", statusCode: 301 },
      { source: "/meta-ads-for-law-firms", destination: "/services", statusCode: 301 },
      { source: "/meta-ads-for-real-estate-investors", destination: "/for/real-estate-investors", statusCode: 301 },
      { source: "/meta-ads-for-course-creators", destination: "/for/course-creators", statusCode: 301 },
      { source: "/appointment-setting-for-coaches", destination: "/for/coaches", statusCode: 301 },
      { source: "/appointment-setting-for-saas", destination: "/for/saas", statusCode: 301 },
      // 20 Nov 2026 (SEO Recovery Plan): legal and roofing topics move to sister sites
      { source: "/personal-injury-leads", destination: "/services", statusCode: 301 },
      { source: "/appointment-setting-services", destination: "/appointment-setting", statusCode: 301 },
      { source: "/for/final-expense", destination: "/final-expense-leads", statusCode: 301 },
      { source: "/for/mortgage", destination: "/mortgage-leads", statusCode: 301 },
      { source: "/mva-leads", destination: "/services", statusCode: 301 },
      { source: "/mass-tort-leads", destination: "/services", statusCode: 301 },
      { source: "/for/law-firms", destination: "/services", statusCode: 301 },
      { source: "/roofing-leads", destination: "/for/home-improvement", statusCode: 301 },
      { source: "/for/business-coaches", destination: "/for/coaches", statusCode: 301 },
      { source: "/for/online-education", destination: "/for/course-creators", statusCode: 301 },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "qualifiedleadsx.com",
          },
        ],
        destination: "https://www.qualifiedleadsx.com/:path*",
        // Single-hop 301 from the bare domain to the canonical www host.
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|mp4|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
