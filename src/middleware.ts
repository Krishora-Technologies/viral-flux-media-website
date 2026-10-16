import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = (
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    request.nextUrl.host ||
    ""
  ).toLowerCase();

  const proto = (
    request.headers.get("x-forwarded-proto") ||
    (request.nextUrl.protocol ? request.nextUrl.protocol.replace(":", "") : "")
  ).toLowerCase();

  // Canonical domain enforcement (301 Permanent Redirect)
  // 1. Redirect all www.viralfluxmedia.in requests to https://viralfluxmedia.in in a single hop
  if (host === "www.viralfluxmedia.in" || host.startsWith("www.viralfluxmedia.in:")) {
    const targetUrl = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      "https://viralfluxmedia.in"
    );
    return NextResponse.redirect(targetUrl, 301);
  }

  // 2. Redirect http://viralfluxmedia.in to https://viralfluxmedia.in
  if (
    (host === "viralfluxmedia.in" || host.startsWith("viralfluxmedia.in:")) &&
    proto === "http"
  ) {
    const targetUrl = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      "https://viralfluxmedia.in"
    );
    return NextResponse.redirect(targetUrl, 301);
  }
  // Retrieve country code from Cloudflare or Vercel edge headers
  const country = (
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code") ||
    ""
  ).toUpperCase();

  const isRestrictedCountry = country === "NG" || country === "GH";

  if (isRestrictedCountry) {
    const { pathname } = request.nextUrl;

    // Block access to referral / earning documents for Nigerian and Ghanaian traffic
    if (
      pathname.startsWith("/program") ||
      pathname.toLowerCase().includes("partner_program")
    ) {
      return new NextResponse(
        JSON.stringify({
          status: 404,
          message:
            "Viral Flux Media is a digital marketing agency for brands and businesses worldwide. We do not provide online earning, task-based, or investment services.",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            "X-Robots-Tag": "noindex, nofollow, noarchive",
          },
        }
      );
    }

    // Tell crawlers and search engine bots originating from NG/GH to never index the site
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
