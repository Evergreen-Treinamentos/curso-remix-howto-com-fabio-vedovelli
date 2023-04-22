import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const password = "123456";

async function users() {
  await prisma.user.deleteMany();

  const quantity = 12;

  await prisma.user.create({
    data: {
      name: "Fabio Vedovelli",
      email: `fabio@vedovelli.com.br`,
      password: await bcrypt.hash(password, 10),
      city: faker.address.city(),
      state: faker.address.state(),
    },
  });

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        password: await bcrypt.hash(password, 10),
        city: faker.address.city(),
        state: faker.address.state(),
      },
    });
  });
}

async function products() {
  await prisma.product.deleteMany();

  const quantity = 12;

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        color: `${faker.color.human()} and ${faker.color.human()}`,
        href: faker.internet.url(),
        imageSrc: faker.image.cats(),
        imageAlt: faker.lorem.sentence(),
        price: faker.datatype.number({
          min: 1000,
          max: 2000,
        }),
      },
    });
  });
}

async function seed() {
  await users();
  await products();
}

seed().finally(() => prisma.$disconnect());
