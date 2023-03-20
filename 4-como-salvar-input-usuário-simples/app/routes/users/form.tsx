import type { User } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { UserForm } from "~/components/UserForm";
import { db } from "~/db.server";

export async function action({ request }: ActionArgs) {
  // throw new Error("Yeah Mr. White! Yeah SCIENCE!!");
  const data = Object.fromEntries(await request.formData());

  await db.user.create({
    data: data as unknown as User,
  });

  return redirect("/users");
}

export default function () {
  return <UserForm />;
}

export function ErrorBoundary() {
  return (
    <div className="bg-red-100 border border-red-500 p-12 text-red-500 font-bold text-2xl">
      Something went wrong
    </div>
  );
}
