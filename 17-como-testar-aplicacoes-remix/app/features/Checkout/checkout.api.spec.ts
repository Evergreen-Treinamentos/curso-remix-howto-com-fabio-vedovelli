import { expect, it, describe, vi } from "vitest";
import { db } from "~/db";

import productsMock from "../../../tests/mocks/products.json";
import { getTotals } from "./checkout.api";

describe("checkout.api", () => {
  describe("getTotals", () => {
    it("should return proper totals given a list of products", async () => {
      const products = productsMock.splice(0, 3);

      const result = getTotals({ products });

      expect(result).toStrictEqual({
        subTotal: 3252,
        taxes: 325.2,
        total: 3577.2,
      });
    });
  });
});
