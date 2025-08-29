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
export type SalonDetailsType = z.infer<typeof SalonDetailsSchema>;

export const SalonServiceSchema = z.object({
  serviceName: z
    .string()
    .min(4, { error: "Service name must be at least 4 characters" }),
  description: z.string().optional(),
  duration: z.number().optional(),
  price: z.number().optional(),
});

export type SalonServiceType = z.infer<typeof SalonServiceSchema>;

export const SalonServicesSchema = z.object({
  services: z
    .array(SalonServiceSchema)
    .min(1, { error: "Please provide at least 1 service" }),
});

export type SalonServicesType = z.infer<typeof SalonServicesSchema>;

export const CompleteSalonSchema = z.object({
  salonDetails: SalonDetailsSchema,
  services: SalonServicesSchema,
});

export type CompleteSalonType = z.infer<typeof CompleteSalonSchema>;
