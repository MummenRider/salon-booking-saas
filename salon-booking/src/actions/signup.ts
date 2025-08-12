"use server";
import { prisma } from "@/lib/prisma";
import { SignUpSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const signup = async (credentials: z.infer<typeof SignUpSchema>) => {
  "use server";
  try {
    const validateCredentials = SignUpSchema.parse(credentials);
    const { email, password, passwordConfirmation } = validateCredentials;

    if (!validateCredentials) return { error: "Invalid input data" };

    if (password !== passwordConfirmation)
      return { error: "Passwords do not match" };
    const hashedPassword = await bcrypt.hash(password, 10);
    const userExistAlready = await prisma.user.findFirst({
      where: { email },
    });
    if (userExistAlready) return { error: "Email address exist already" };

    await prisma.user.create({
      data: {
        email: email.toLocaleLowerCase(),
        name: email.split("@").at(0),
        password: hashedPassword,
      },
    });

    return { success: "Account has been created", redirectUrl: "/dashboard" };
  } catch (error) {
    console.error("Error occured during account creation", error);
    return { error: "Unexpected error occured" };
  }
};
