import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import productsMock from "~/../tests/mocks/products.json";
import userEvent from "@testing-library/user-event";

it("Should render the Cart", async () => {
  render(<Cart products={productsMock.splice(0, 3)} />);

  expect(screen.getByTestId("product-quantity")).toHaveTextContent("3");

  await userEvent.click(screen.getByRole("button"));

  // screen.debug(screen.getByTestId("product-quantity"));
});
