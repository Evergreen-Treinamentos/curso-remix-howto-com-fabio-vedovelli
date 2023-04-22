import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ErrorFeedback } from "~/components";
import { getUsers, UsersTable } from "~/features/Users";
import { getLoggedUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const loggedUser = await getLoggedUser(request);

  return json({ users: await getUsers(), loggedUser });
}

export default function () {
  const { users, loggedUser } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="flex items-center justify-between p-6 bg-gray-100">
        <p>Welcome {loggedUser.name}</p>
        <Link to="/logout">Logout</Link>
      </header>
      <UsersTable users={users} />
    </>
  );
}

export function ErrorBoundary() {
  // Envia o erro para um serviço externo! Ex. Sentry, Bugsnag, etc.
  return <ErrorFeedback />;
}
