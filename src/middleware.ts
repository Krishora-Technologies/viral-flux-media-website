import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
      pathname.startsWith("/launch") ||
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
