import { db } from "~/db";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getProducts() {
  return db.product.findMany();
}

export function getProduct({ id }: { id: number }) {
  return delay(3000).then(() =>
    db.product.findUnique({
      where: { id },
    })
  );
}
