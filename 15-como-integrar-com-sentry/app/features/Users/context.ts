import type { User } from "@prisma/client";
import React from "react";
import { createContext } from "react";

interface UserContextInterface {
  loggedUser?: User;
}

export const UserContext = createContext<UserContextInterface>({});

export function useLoggedUser() {
  return React.useContext(UserContext);
}
