"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function authSignIn(credentials: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      email: credentials.get("email"),
      password: credentials.get("password"),
      redirect: false,
    });

    return { success: true, message: "Sign in success" };
  } catch (error) {
    let errorMessage = "Something went wrong. Please try again.";
    if (error instanceof AuthError && error.type === "CredentialsSignin") {
      errorMessage = "Invalid email or password";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return { success: false, message: errorMessage };
  }
}
