import { expect, it, describe, vi } from "vitest";
import { login } from "./auth.api";
import { db } from "~/db/__mocks__/db.server";
import bcrypt from "bcryptjs";

const credentials = {
  email: "fabio@vedovelli.com.br",
  password: "123456",
};

vi.mock("~/db/db.server");

describe("auth.api", () => {
  describe("login", () => {
    it("should return a user when login is successful", async () => {
      db.user.findUnique.mockResolvedValue({
        id: 1,
        name: "Fabio Vedovelli",
        email: "fabio@vedovelli.com.br",
        password: await bcrypt.hash("123456", 10),
        city: "SBC",
        state: "SP",
      });

      console.log(await login(credentials));
    });
  });
});
