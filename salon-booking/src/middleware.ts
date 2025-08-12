import { NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import { auth } from "@/auth";

export default auth((request) => {
  const { nextUrl, url, auth } = request;
  const publicAuthRoutes = ["/signin", "/signup"];
  const publicRoutes = ["", "/", ...publicAuthRoutes];

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (!isPublicRoute && !auth) {
    const requestedUrl = nextUrl.pathname + nextUrl.search;
    return NextResponse.redirect(
      new URL(
        `/signin?callbackUrl=${encodeURIComponent(requestedUrl)}`,
        nextUrl
      )
    );
  }
  //Redirect user if already authenticated and trying to go to sign in or sign up page
  if (auth && publicAuthRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

// dont run auth in static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
