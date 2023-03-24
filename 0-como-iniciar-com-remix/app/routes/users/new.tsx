import type { User } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { UserForm } from "~/features/Users/UserForm";
import { createUser } from "~/features/Users/users.api.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // throw new Error("BOOM! 💣");
  await createUser(data as unknown as User);

  return redirect("/users");
}

export default function () {
  return <UserForm />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return <h1>Huston we have a problem!</h1>;
}
