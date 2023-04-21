import type { User } from ".prisma/client";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [ENV.SESSION_SECRET],
      secure: true,
    },
  });

async function getLoggedUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));

  return session.get("user") as User;
}

async function isAuthenticated(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("user")) {
    throw redirect("/login");
  }

  return true;
}

export {
  getSession,
  commitSession,
  destroySession,
  getLoggedUser,
  isAuthenticated,
};
