import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages merged into stronger siblings on 13 Nov 2026 (audit/programmatic_decisions.csv).
// Kept here as well as in next.config.ts because the host applies middleware redirects reliably.
const MERGED: Record<string, string> = {
  "/for/executive-coaches": "/for/coaches",
  "/for/business-coaches": "/for/coaches",
  "/for/online-education": "/for/course-creators",
  // 19 Nov 2026 (SEO_INVESTIGATION_2026-11-19.md, C2): service x industry pages that were
  // not indexed and had 0 impressions in 28 days, merged into the closest live page.
  "/meta-ads-for-law-firms": "/services",
  "/meta-ads-for-real-estate-investors": "/for/real-estate-investors",
  "/meta-ads-for-course-creators": "/for/course-creators",
  "/appointment-setting-for-coaches": "/for/coaches",
  "/appointment-setting-for-saas": "/for/saas",
  // 20 Nov 2026 (Gaurav Sir SEO Recovery Plan): legal (PI/MVA/mass tort) and roofing leads
  // are owned by sister sites; these pages leave qualifiedleadsx.com.
  "/personal-injury-leads": "/services",
  "/mva-leads": "/services",
  "/mass-tort-leads": "/services",
  "/for/law-firms": "/services",
  "/roofing-leads": "/for/home-improvement",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  
  // Strict host-level 301 redirect from non-www to www (e.g. qualifiedleadsx.com -> www.qualifiedleadsx.com)
  if (host === "qualifiedleadsx.com") {
    const url = request.nextUrl.clone();
    url.host = "www.qualifiedleadsx.com";
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const target = MERGED[request.nextUrl.pathname.replace(/\/+$/, "")];
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    url.search = "";
    url.host = "www.qualifiedleadsx.com";
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except internal static assets and api
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|images|images2|opengraph-image|robots.txt|sitemap.xml).*)",
  ],
};
