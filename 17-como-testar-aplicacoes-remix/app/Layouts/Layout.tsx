import { Link } from "@remix-run/react";
import { useLoggedUser } from "~/hooks/hooks";

export function Layout({ children }: { children: React.ReactNode }) {
  const loggedUser = useLoggedUser();

  return (
    <>
      <header className="flex items-center gap-8 p-6 bg-gray-100">
        <p>Welcome {loggedUser?.name}</p>
        <nav className="flex-1">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/users" prefetch="intent">
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/logout">Logout</Link>
      </header>
      {children}
    </>
  );
}
