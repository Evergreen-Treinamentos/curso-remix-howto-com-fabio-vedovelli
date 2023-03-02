import { type Product } from "@prisma/client";
import { Form } from "~/remix-forms";
import { type Totals } from "~/features/Checkout";
import { checkoutSchema } from "./checkout.api";

interface Props {
  products: Product[];
  totals: Totals;
}

export function Checkout({ products, totals }: Props) {
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden h-full w-1/2 bg-indigo-900 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <h1 className="sr-only">Checkout</h1>

        {/* <section
          aria-labelledby="summary-heading"
          className="bg-indigo-900 py-12 text-indigo-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                ${totals.total}
              </dd>
            </dl>

            <ul
              role="list"
              className="divide-y divide-white divide-opacity-10 text-sm font-medium"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start space-x-4 py-6"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white">{product.name}</h3>
                    <p>{product.color}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-white">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>${totals.subTotal}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>FREE</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>${totals.taxes}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${totals.total}</dd>
              </div>
            </dl>
          </div>
        </section> */}

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <Form
            schema={checkoutSchema}
            className="custom-form mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0"
          >
            {({ Field, Errors, Button }) => (
              <>
                <h3
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h3>
                <Field name="email" type="email" />
                <h3 className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>
                <div className="mt-6 grid grid-cols-1  gap-x-4 sm:grid-cols-3">
                  <Field name="address" className="sm:col-span-3" />
                  <Field name="city" />
                  <Field name="state" />
                  <Field name="postal" />
                </div>
                <Errors />
                <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                  <Button>Pay Now</Button>
                </div>
              </>
            )}
            {/* <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <div>
                <h3
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h3>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Pay now
                </button>
              </div>
            </div> */}
          </Form>
        </section>
      </div>
    </div>
  );
}
