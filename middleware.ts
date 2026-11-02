import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

  return NextResponse.next();
}

export const config = {
  // Match all request paths except internal static assets and api
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|images|images2|opengraph-image|robots.txt|sitemap.xml).*)",
  ],
};
