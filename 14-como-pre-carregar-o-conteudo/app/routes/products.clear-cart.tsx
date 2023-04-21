import { type LoaderArgs, redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  session.unset("cartProducts");

  return redirect("/products", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
