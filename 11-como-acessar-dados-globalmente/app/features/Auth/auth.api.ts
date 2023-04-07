import { z } from "zod";
import { db } from "~/db";
import bcrypt from "bcryptjs";

export const LoginInputSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(1),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;

export async function login(values: LoginInput) {
  const user = await db.user.findUnique({
    where: {
      email: values.email,
    },
  });

  if (!user) {
    throw "User not found";
  }

  const passwordValid = await bcrypt.compare(values.password, user.password);

  if (!passwordValid) {
    throw "Invalid password";
  }

  return user;
}
