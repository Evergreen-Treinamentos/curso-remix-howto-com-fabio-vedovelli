import { faker } from "@faker-js/faker";
import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function getUsers() {
  return db.user.findMany();
}

export async function createUser(user: User) {
  return db.user.create({
    data: {
      ...user,
      avatar: faker.image.cats(),
    },
  });
}
