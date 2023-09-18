import { z } from "zod";

export const createAccountSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name is required",
    })
    .max(50, {
      message: "First name is too long",
    })
    .nonempty(),
  lastName: z
    .string()
    .min(2, {
      message: "Last name is required",
    })
    .max(50, {
      message: "Last name is too long",
    })
    .nonempty(),

  email: z.string().email({ message: "Invalid email" }).nonempty(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 charaters long" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
  location: z.string().nonempty(),
  linkedin: z
    .string()
    .regex(/^(https:\/\/www\.linkedin\.com\/in\/).+/, {
      message: "Invalid LinkedIn profile URL",
    })
    .nonempty(),
});

export type FormSchema = z.infer<typeof createAccountSchema>;
