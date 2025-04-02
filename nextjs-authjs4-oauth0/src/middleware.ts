import { NextResponse, type NextRequest } from "next/server";

import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  if (request.nextUrl.pathname === "/") {
    return authRes;
  }

  const { origin } = new URL(request.url);
  const session = await auth0.getSession();

  if (!session) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  console.log("in middleware: ", session);

  return authRes;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
