import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "../content/church";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  // 308 (permanent), not the 307 default — this locale routing is
  // permanent, and a real domain is now live, so it's worth Google
  // consolidating ranking signals onto the /uk destination.
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip Next internals and any request for a static file (has a dot in
  // the last path segment — logo.png, icon.png, robots.txt, etc.) so
  // public/ assets aren't wrongly redirected to /uk/logo.png and 404.
  matcher: ["/((?!_next|.*\\.[a-zA-Z0-9]+$).*)"],
};
