import { type Product } from "@prisma/client";
import { z } from "zod";
import { db } from "~/db";

export interface Totals {
  subTotal: number;
  taxes: number;
  total: number;
}

export const checkoutSchema = z.object({
  email: z.string().email().trim(),
  address: z.string().min(1).trim(),
  city: z.string().min(1).trim(),
  state: z.string().min(1).trim(),
  postal: z.string().min(1).trim(),
});

export type CheckoutType = z.infer<typeof checkoutSchema>;

interface OrderInput extends CheckoutType {
  totals: string;
  products: string;
  stripePaymentIntentId?: string;
}

/* c8 ignore start */

export function createOrder(data: OrderInput) {
  return db.order.create({
    data,
  });
}

/* c8 ignore end */
/* c8 ignore start */

export function getOrder(orderId: string) {
  return db.order.findUnique({
    where: { id: orderId },
  });
}

/* c8 ignore end */
/* c8 ignore start */

export function updateOrder(id: string, data: Partial<OrderInput>) {
  return db.order.update({
    where: { id },
    data,
  });
}

/* c8 ignore end */

export function getTotals({ products }: { products: Product[] }): Totals {
  const subTotal = products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);

  const taxes = Number((subTotal * 0.1).toFixed(2));

  const total = subTotal + taxes;

  return { subTotal, taxes, total };
}
