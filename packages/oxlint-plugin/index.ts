import { definePlugin } from "@oxlint/plugins";
import { loggerErrKey } from "./rules/logger-err-key.ts";

export default definePlugin({
  meta: { name: "flows" },
  rules: {
    "logger-err-key": loggerErrKey,
  },
});
