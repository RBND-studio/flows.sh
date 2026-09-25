import { loggerErrKey } from "./rules/logger-err-key.ts";

export default {
  meta: { name: "flows" },
  rules: {
    "logger-err-key": loggerErrKey,
  },
};
