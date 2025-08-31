// types/next-auth.d.ts (create this file if it doesn't exist)
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    onboardingComplete: boolean;
  }

  interface Session {
    user: {
      id: string;
      onboardingComplete: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    onboardingComplete: boolean;
  }
}
