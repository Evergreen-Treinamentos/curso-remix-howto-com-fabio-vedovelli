import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUsers } from "~/features/Users/users.api.server";
import { UsersList } from "~/features/Users/UsersList";

export async function loader() {
  return json({
    users: await getUsers(),
  });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return <UsersList users={users} />;
}
