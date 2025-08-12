import * as z from "zod";

export const SignUpSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters long" }),
  passwordConfirmation: z
    .string()
    .min(6, { error: "Password must be at least 6 characters long" }),
});

export const SignInSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(5, { message: "Please enter a valid password" }),
});
