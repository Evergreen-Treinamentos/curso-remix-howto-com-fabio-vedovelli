import { z } from "zod";
import { db } from "~/db";

export const schema = z.object({
  name: z.string().min(1, { message: "Please provide your name" }).trim(),
  email: z
    .string()
    .min(1, { message: "Please provide your email" })
    .email({ message: "Please provide a valid email" })
    .trim(),
  city: z.string().min(1, { message: "Please provide your city" }).trim(),
  state: z.string().min(1, { message: "Please provide your state" }).trim(),
});

type UserInput = z.infer<typeof schema>;

export async function getUsers() {
  return db.user.findMany();
}

export async function saveUser(user: UserInput) {
  return db.user.create({ data: user });
}
