import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";
import type { db as appDb } from "../db.server";

const db = mockDeep<typeof appDb>();

beforeEach(() => {
  mockReset(db);
});

export { db };
