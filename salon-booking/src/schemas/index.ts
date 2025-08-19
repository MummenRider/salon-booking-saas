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

export const SalonDetailsSchema = z.object({
  salonName: z
    .string()
    .min(2, { error: "Salon name must be at least 2 characters" }),
  address: z.string().min(2, { error: "Please enter a valid address" }),
  contactNumber: z
    .string()
    .min(10, { error: "Phone number must be at least 10 digits" })
    .max(15, { error: "Phone number must be less than 15 digits" })
    .regex(/^[0-9+\-() ]+$/, { error: "Please enter a valid phone number" }),
});
export type SalonDetails = z.infer<typeof SalonDetailsSchema>;

export const SalonServiceSchema = z.object({
  serviceName: z
    .string()
    .min(4, { error: "Service name must be at least 4 characters" }),
  serviceDescription: z
    .string()
    .min(4, { error: "Description must be at least 4 characters" }),
  duration: z
    .number()
    .min(10, { error: "Service duration must be at least 10 minutes" }),
  price: z.number().min(0, { error: "Price must be at least 0" }),
});

export type SalonService = z.infer<typeof SalonServiceSchema>;
