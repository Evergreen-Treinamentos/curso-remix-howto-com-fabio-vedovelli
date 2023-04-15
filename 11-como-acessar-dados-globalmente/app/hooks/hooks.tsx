import { useMatches } from "@remix-run/react";

export function useLoggedUser() {
  const [root] = useMatches();

  return root.data.loggedUser;
}
export function useUsersList() {
  const [_, users] = useMatches();

  return users.data.users;
}
