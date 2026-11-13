import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages merged into stronger siblings on 13 Nov 2026 (audit/programmatic_decisions.csv).
// Kept here as well as in next.config.ts because the host applies middleware redirects reliably.
const MERGED: Record<string, string> = {
  "/for/executive-coaches": "/for/coaches",
  "/for/business-coaches": "/for/coaches",
  "/for/online-education": "/for/course-creators",
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
