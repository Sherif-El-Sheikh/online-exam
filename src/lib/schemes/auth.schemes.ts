import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

// Login Schema
export const loginSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email" })
    .min(1, "Please enter your email")
    .email("Please enter a valid email address"),

  password: z
    .string({ required_error: "Please enter your password" })
    .min(1, "Please enter your password"),
});

// Type for login inputs values from the schema
export type LoginFields = z.infer<typeof loginSchema>;

// Register Schema
export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "User Name is required" })
      .min(1, "User Name is required")
      .min(2, "User Name must be at least 2 characters")
      .max(50, "User Name must not exceed 50 characters"), // Invalid limitation

    firstName: z
      .string({ required_error: "First Name is required" })
      .min(1, "First Name is required")
      .min(2, "First Name must be at least 2 characters")
      .max(15, "First Name must not exceed 10 characters") // Some names might exceed 15 characters
      .refine((val) => !/\s/.test(val), {
        message: "Must not contain spaces",
      }),

    lastName: z
      .string({ required_error: "Last Name is required" })
      .min(1, "Last Name is required")
      .min(2, "Last Name must be at least 2 characters")
      .max(15, "Last Name must not exceed 10 characters") // Some names might exceed 15 characters
      .refine((val) => !/\s/.test(val), {
        message: "Must not contain spaces",
      }),

    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      ),

    rePassword: z
      .string({ required_error: "Please confirm your password" })
      .min(1, "Please confirm your password"),

    phone: z
      .string({ required_error: "Phone is required" })
      .min(1, "Phone is required")
      .refine(
        (value) => parsePhoneNumberFromString(value, "EG")?.isValid(),
        "Phone number must be a valid Egyptian mobile number",
      )
      .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
        message: "Phone number must be 11 digits",
      }),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Password don not match ",
    path: ["rePassword"],
  });

// Type for register inputs values from the schema
export type RegisterFields = z.infer<typeof registerSchema>;

// Forgot password schema
export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

// Type for forgot password input values from the schema
export type ForgotPasswordField = z.infer<typeof forgotPasswordSchema>;

// Verify reset code schema
export const verifyCodeSchema = z.object({
  resetCode: z
    .string({ required_error: "Code is required" })
    .min(1, "Code is required")
    .length(6, "Reset code must be 6 digits"), // You can use the .length method instead of min and max
});

// Type for verify code input values from the schema
export type VerifyCodeField = z.infer<typeof verifyCodeSchema>;

// Set password schema
export const setPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  newPassword: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
    ),
});

// Type for set password inputs values from the schema
export type setPasswordFields = z.infer<typeof setPasswordSchema>;
