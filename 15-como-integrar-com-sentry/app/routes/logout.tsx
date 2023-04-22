import type { LoaderArgs } from "@remix-run/node";
import { destroySession, getSession } from "~/session.server";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
