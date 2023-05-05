import { type Product } from "@prisma/client";
import { Form, useNavigation } from "@remix-run/react";
import { formatCurrency } from "../utils/currency";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  const navigation = useNavigation();

  return (
    <Form method="post" className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            const busy =
              navigation.state === "submitting" &&
              Number(navigation.formData.get("productId")) === product.id;
            return (
              <div key={product.id} className={`${busy && "opacity-50"}`}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    name="productId"
                    value={product.id}
                    disabled={busy}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Form>
  );
}
