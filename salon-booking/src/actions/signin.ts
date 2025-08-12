"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { SignInSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import z from "zod";

export const signin = async (credentials: z.infer<typeof SignInSchema>) => {
  const validateCredentials = SignInSchema.parse(credentials);
  if (!validateCredentials) return { error: "Invalid credentials" };
  const { email, password } = validateCredentials;
  const userExist = await prisma.user.findFirst({
    where: { email },
  });
  try {
    if (!userExist || !userExist.password)
      return { error: "Email address not found" };
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" };

        default:
          return { error: "Please confirm your email address" };
      }
    }
    throw error;
  }
};
