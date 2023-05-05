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
      db.user.findUnique.mockResolvedValue(null);

      expect(login(credentials)).rejects.toThrow("User not found");
    });

    it("should return a user when login is successful", async () => {
      const user = {
        id: 1,
        name: "Fabio Vedovelli",
        email: "fabio@vedovelli.com.br",
        password: await bcrypt.hash("123456789", 10),
        city: "SBC",
        state: "SP",
      };

      db.user.findUnique.mockResolvedValue(user);

      expect(login(credentials)).rejects.toThrow("Invalid password");
    });

    it("should return a user when login is successful", async () => {
      const user = {
        id: 1,
        name: "Fabio Vedovelli",
        email: "fabio@vedovelli.com.br",
        password: await bcrypt.hash("123456", 10),
        city: "SBC",
        state: "SP",
      };

      db.user.findUnique.mockResolvedValue(user);

      expect(login(credentials)).resolves.toStrictEqual(user);
    });
  });
});
