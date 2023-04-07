import { db } from "~/db";

export function getProducts() {
  return db.product.findMany();
}

export function getProduct({ id }: { id: number }) {
  return db.product.findUnique({
    where: { id },
  });
}
