import { Checkout, createOrder, getTotals } from "~/features/Checkout";
import { json, type LoaderArgs } from "@remix-run/node";
import { getSession } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import formsStyles from "~/styles/forms.css";
import type { ActionArgs } from "@remix-run/node";
import { checkoutSchema } from "../features/Checkout/checkout.api";

export function links() {
  return [{ rel: "stylesheet", href: formsStyles }];
}

export async function action({ request }: ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const products = session.get("cartProducts") ?? [];
  const totals = getTotals({ products });
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = await createOrder({
    ...checkoutSchema.parse(data),
    products: JSON.stringify(products),
    totals: JSON.stringify(totals),
  });

  console.log(order);

  return null;
}

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const products = session.get("cartProducts") || [];
  const totals = getTotals({ products });

  return json({
    products,
    totals,
  });
}

export default function () {
  const { products, totals } = useLoaderData<typeof loader>();
  return <Checkout products={products} totals={totals} />;
}
