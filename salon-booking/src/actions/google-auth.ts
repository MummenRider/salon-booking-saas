"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const googleAuth = async () => {
  "use server";
  try {
    await signIn("google", { redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Google login failed";
    }
    throw error;
  }
};
