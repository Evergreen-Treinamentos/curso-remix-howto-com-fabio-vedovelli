import { getEnv } from "~/env.server";
import dotenv from "dotenv";
import { installGlobals } from "@remix-run/node";

import "@testing-library/jest-dom";

installGlobals();

dotenv.config();

global.ENV = getEnv();
