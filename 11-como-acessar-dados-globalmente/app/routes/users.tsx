import { defer, type LoaderArgs } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { ErrorFeedback, Loading } from "~/components";
import { getUsers, UsersTable } from "~/features/Users";
import { getLoggedUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const loggedUser = await getLoggedUser(request);

  return defer({ users: getUsers(), loggedUser });
}

export default function () {
  const { users: usersPromise, loggedUser } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="flex items-center justify-between p-6 bg-gray-100">
        <p>Welcome {loggedUser.name}</p>
        <Link to="/logout">Logout</Link>
      </header>
      <Suspense fallback={<Loading />}>
        <Await resolve={usersPromise}>
          {(users) => <UsersTable users={users} />}
        </Await>
      </Suspense>
    </>
  );
}

export function ErrorBoundary() {
  // Envia o erro para um serviço externo! Ex. Sentry, Bugsnag, etc.
  return <ErrorFeedback />;
}
