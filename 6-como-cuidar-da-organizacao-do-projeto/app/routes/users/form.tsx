import type { ActionArgs } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { ErrorFeedback } from "~/components";
import { saveUser, schema, UserForm } from "~/features/Users";
import { formAction } from "~/remix-forms";

const mutation = makeDomainFunction(schema)(
  async (data) => await saveUser(data)
);

export const action = async ({ request }: ActionArgs) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/users",
  });

export default function () {
  return <UserForm />;
}

export function ErrorBoundary() {
  return <ErrorFeedback />;
}
