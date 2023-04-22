import type { User } from "@prisma/client";
import { useRouteLoaderData } from "@remix-run/react";

interface LoaderData {
  loggedUser?: User;
  users?: User[];
}

export function useLoggedUser() {
  const data = useRouteLoaderData("routes/users") as LoaderData;

  return data.loggedUser;
}
export function useUsersList() {
  const data = useRouteLoaderData("routes/users") as LoaderData;

  return data.users;
}
