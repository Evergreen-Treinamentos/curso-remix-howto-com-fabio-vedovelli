import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();

  const quantity = 12;

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        city: faker.address.city(),
        state: faker.address.state(),
      },
    });
  });
}

seed().finally(() => prisma.$disconnect());
