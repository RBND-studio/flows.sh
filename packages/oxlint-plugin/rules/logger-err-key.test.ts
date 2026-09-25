import { describe, it } from "node:test";
import { RuleTester } from "oxlint/plugins-dev";
import { loggerErrKey } from "./logger-err-key.ts";

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({ languageOptions: { parserOptions: { lang: "ts" } } });

tester.run("logger-err-key", loggerErrKey, {
  valid: [
    `this.logger.error({ err }, "Failed");`,
    `this.logger.log({ err: error, workflowId }, "Failed");`,
    `logger.warn({ err: new Error("x") }, "Failed");`,
    `try {} catch (e) { this.logger.error({ err: e, id }, "Failed"); }`,
    // Not a logger
    `this.service.error({ error }, "Failed");`,
    `console.error({ error });`,
    // Non-error keys
    `this.logger.error({ errorCode: 1, errorMessage: "x" }, "Failed");`,
    `const errors = []; this.logger.warn({ errors }, "Validation failed");`,
    // Not an object literal
    `this.logger.error(error, "Failed");`,
  ],
  invalid: [
    {
      code: `this.logger.error({ workflowId, error }, "Failed");`,
      errors: [{ messageId: "useErrKey", data: { key: "error" } }],
    },
    {
      code: `this.logger.fatal({ error: e }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    {
      code: `logger.info({ e }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    {
      code: `this.logger.warn({ "error": e }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    {
      code: `this.logger.warn({ ["exception"]: e }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    // Catch clause param under an arbitrary key
    {
      code: `try {} catch (caught) { this.logger.error({ reason: caught }, "Failed"); }`,
      errors: [{ messageId: "useErrKey", data: { key: "reason" } }],
    },
    // Promise .catch() callback param
    {
      code: `p.catch((failure) => this.logger.error({ failure }, "Failed"));`,
      errors: [{ messageId: "useErrKey" }],
    },
    // Variable initialized with an Error
    {
      code: `const boom = new HttpException("x", 500); this.deps.logger.debug({ boom }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    {
      code: `this.logger.error({ cause: new TypeError("x") }, "Failed");`,
      errors: [{ messageId: "useErrKey" }],
    },
    // Already has `err`
    {
      code: `this.logger.log({ error, err: error }, "Failed");`,
      errors: [{ messageId: "duplicateErrKey", data: { key: "error" } }],
    },
    // Multiple offending keys
    {
      code: `this.logger.error({ error, e }, "Failed");`,
      errors: [{ messageId: "useErrKey" }, { messageId: "useErrKey" }],
    },
  ],
});
