import type { SomeZodObject } from "zod";
import { Form } from "~/form";

interface UserFormProps {
  schema: SomeZodObject;
}

export function UserForm({ schema }: UserFormProps) {
  return (
    <div className="pt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <Form schema={schema}>
            {({ Field, Errors, Button, register }) => (
              <>
                <Field name="name" label="Name">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("name")}
                        className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-red-500 font-bold text-sm antialiased" />
                    </>
                  )}
                </Field>
                <Field name="email" label="E-mail">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("email")}
                        className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-red-500 font-bold text-sm antialiased" />
                    </>
                  )}
                </Field>
                <Field name="city" label="City">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("city")}
                        className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-red-500 font-bold text-sm antialiased" />
                    </>
                  )}
                </Field>
                <Field name="state" label="State">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("state")}
                        className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-red-500 font-bold text-sm antialiased" />
                    </>
                  )}
                </Field>
                <Errors className="text-red-500 font-bold text-sm antialiased" />
                <Button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </Button>
              </>
            )}
          </Form>
          {/* <form method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="first-name"
                      autoComplete="name"
                      className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-address"
                      autoComplete="email"
                      className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city-address"
                      autoComplete="city"
                      className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
