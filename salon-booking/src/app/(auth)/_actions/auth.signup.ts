"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const authSignUp = async (credentials: FormData) => {
  try {
    const email = credentials.get("email") as string;
    const password = credentials.get("password") as string;
    const name = email.split("@").at(0);
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response?.error) {
      throw new Error(response.error);
    }
    return { success: true, message: "Successfully registered" };
  } catch (error) {
    return { success: false, message: "Failed to register" };
  }
};
