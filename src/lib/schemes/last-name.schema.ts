import { z } from "zod";

// Last Name Schema
// I don't know why did you create a schema for the last name, but you could have simply used the pick method
// on the registerSchema, but you will have to remove the refine.
export const lastNameSchema = z.object({
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(15, "Last Name must not exceed 10 characters")
    .refine((val) => !/\s/.test(val), {
      message: "Must not contain spaces",
    }),
});

// Type forlast name input values from the schema
export type lastNameField = z.infer<typeof lastNameSchema>;
