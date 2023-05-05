import { expect, it, vi } from "vitest";
import { action, loader } from "~/routes/products";
import productsMock from "~/../tests/mocks/products.json";
import { db } from "~/db/__mocks__/db.server";
import { getSession } from "~/__mocks__/session.server";

vi.mock("~/db/db.server");
vi.mock("~/session.server");

it("should execute loader and return a list of products and no cartProducts", async () => {
  db.product.findMany.mockResolvedValue(productsMock.splice(0, 3));

  const response = await loader({
    request: new Request("http://app.com/path"),
    params: {},
    context: {},
  });

  const responseData = await response.json();

  expect(responseData.products).toHaveLength(3);
  expect(responseData.cartProducts).toHaveLength(0);
});

it("should execute action, receive formData and redirect to /products", async () => {
  db.product.findUnique.mockResolvedValue(productsMock[0]);

  const formData = new FormData();
  formData.append("productId", `${productsMock[0]}`);

  const response = await action({
    request: new Request("http://app.com/path", {
      method: "POST",
      body: formData,
    }),
    params: {},
    context: {},
  });

  const session = getSession();

  expect(session.get).toHaveBeenCalledWith("cartProducts");
  expect(session.set).toHaveBeenCalledWith("cartProducts", [productsMock[0]]);

  const headers = Object.fromEntries(response.headers.entries());

  expect(headers["set-cookie"]).toBeDefined();
  expect(headers.location).toEqual("/products");
});
