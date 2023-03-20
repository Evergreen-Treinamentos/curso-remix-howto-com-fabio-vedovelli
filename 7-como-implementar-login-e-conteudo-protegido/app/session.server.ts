import { createCookieSessionStorage, redirect } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: [ENV.SESSION_SECRET],
      secure: true,
    },
  });

async function getLoggedUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("user")) {
    throw redirect("/login");
  }

  return session.get("user");
}

export { getSession, commitSession, destroySession, getLoggedUser };
