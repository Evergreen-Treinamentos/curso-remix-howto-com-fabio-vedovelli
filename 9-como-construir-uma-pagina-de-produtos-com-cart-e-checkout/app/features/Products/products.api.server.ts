import { db } from "~/db";

export function getProducts() {
  return db.product.findMany();
}
