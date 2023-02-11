import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ErrorFeedback } from "~/components";
import { getUsers, UsersTable } from "~/features/Users";

export async function loader() {
  return json({ users: await getUsers() });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return <UsersTable users={users} />;
}

export function ErrorBoundary() {
  // Envia o erro para um serviço externo! Ex. Sentry, Bugsnag, etc.
  return <ErrorFeedback />;
}
