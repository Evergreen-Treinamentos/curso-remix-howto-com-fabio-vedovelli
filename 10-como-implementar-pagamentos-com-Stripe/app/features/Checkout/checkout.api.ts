import { type Product } from "@prisma/client";
import { z } from "zod";

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

export function getTotals({ products }: { products: Product[] }): Totals {
  const subTotal = products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);

  const taxes = subTotal * 0.1;

  const total = subTotal + taxes;

  return { subTotal, taxes, total };
}
