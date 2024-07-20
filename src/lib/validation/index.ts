import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Name is too short" }),
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string()
    .min(8, { message: "Password must be between 8 to 16 characters" })
    .max(16, { message: "Password must be between 8 to 16 characters" }),
});