import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { retrievePaymentIntent } from "~/features/Payment";
import { commitSession, getSession } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);
  const paymentIntentId = url.searchParams.get("payment_intent");
  const paymentIntent = await retrievePaymentIntent(paymentIntentId ?? "");

  session.unset("orderId");
  session.unset("cartProducts");

  return json(
    {
      paymentIntent,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function () {
  const { paymentIntent } = useLoaderData<typeof loader>();

  return <pre>{JSON.stringify(paymentIntent, null, 2)}</pre>;
}
