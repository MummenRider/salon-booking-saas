// types/next-auth.d.ts (create this file if it doesn't exist)
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    onboardingComplete: boolean;
  }

  interface Session {
    user: {
      onboardingComplete: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    onboardingComplete: boolean;
  }
}
