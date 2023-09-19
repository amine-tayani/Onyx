import { z } from "zod";

export const createAccountSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required.",
    })
    .min(2, {
      message: "First name must be at least 2 characters long.",
    })
    .max(20, {
      message: "First name is too long.",
    })
    .nonempty(),
  lastName: z
    .string({
      required_error: "Last name is required.",
    })
    .min(2, {
      message: "Last name must be at least 2 characters long.",
    })
    .max(20, {
      message: "Last name is too long.",
    })
    .nonempty(),

  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({ message: "Invalid email format." })
    .nonempty(),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(6, { message: "Password must be at least 6 characters long." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character.",
    }),
  location: z
    .string({
      required_error: "Your location is required.",
    })
    .nonempty(),
  linkedin: z
    .string({
      required_error: "Your LinkedIn profile is required.",
    })
    .regex(/^(https:\/\/www\.linkedin\.com\/in\/).+/, {
      message: "Invalid LinkedIn profile URL.",
    })
    .nonempty(),
});

export type FormSchema = z.infer<typeof createAccountSchema>;
