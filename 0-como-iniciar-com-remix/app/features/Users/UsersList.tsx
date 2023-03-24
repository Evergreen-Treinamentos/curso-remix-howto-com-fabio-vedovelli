import type { User } from "@prisma/client";
import { Outlet } from "@remix-run/react";

interface Props {
  users: User[];
}

export function UsersList({ users }: Props) {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <img src={user.avatar} alt={user.name} height="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}
