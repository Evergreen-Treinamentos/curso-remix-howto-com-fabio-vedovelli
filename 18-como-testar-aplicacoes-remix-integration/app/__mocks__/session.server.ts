import { vi } from "vitest";

const set = vi.fn();
const get = vi.fn();

export const getSession = () => ({
  set,
  get,
});

export const commitSession = vi.fn();
