import { NextResponse } from "next/server";
import { NextAuthRequest } from "next-auth";
import { getToken } from "next-auth/jwt";

export const middleware = async (request: NextAuthRequest) => {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
