import type { Rule } from "oxlint/plugins-dev";

/**
 * Pino only runs its error serializer (message, stack, type, cause) on the `err` key. Errors
 * logged under any other key end up serialized as `{}`, so the actual failure is lost.
 *
 * Reports errors passed to `logger.<method>({ ... }, "message")` under a key other than `err`.
 */

const LOG_METHODS = new Set(["log", "error", "warn", "info", "debug", "fatal", "trace", "verbose"]);

const ERROR_KEY_RE = /^(?:e|ex|exc|error|exception)$/i;
const ERROR_CLASS_RE = /(?:^|[a-z])(?:Error|Exception)$/;

type Node = any;

const getName = (node: Node): string | undefined => {
  if (!node) return;
  if (node.type === "Identifier") return node.name;
  if (node.type === "Literal" && typeof node.value === "string") return node.value;
};

const getPropertyKeyName = (prop: Node): string | undefined =>
  prop.computed && prop.key.type !== "Literal" ? undefined : getName(prop.key);

/** Matches `logger.error(...)`, `this.logger.error(...)`, `this.deps.logger.error(...)`, ... */
const isLoggerCall = (node: Node): boolean => {
  const callee = node.callee;
  if (callee?.type !== "MemberExpression" || callee.computed) return false;
  if (!LOG_METHODS.has(callee.property.name)) return false;
  const obj = callee.object;
  if (obj.type === "Identifier") return obj.name === "logger";
  if (obj.type === "MemberExpression" && !obj.computed) return obj.property.name === "logger";
  return false;
};

const isNewErrorExpression = (node: Node): boolean =>
  node?.type === "NewExpression" && ERROR_CLASS_RE.test(getName(node.callee) ?? "");

/** `promise.catch((err) => ...)` callback parameter */
const isPromiseCatchParam = (def: Node): boolean => {
  if (def.type !== "Parameter") return false;
  const fn = def.node;
  if (fn.params[0] !== def.name) return false;
  const call = fn.parent;
  return (
    call?.type === "CallExpression" &&
    call.arguments[0] === fn &&
    call.callee.type === "MemberExpression" &&
    getName(call.callee.property) === "catch"
  );
};

export const loggerErrKey: Rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Require errors passed to the logger to use the `err` key",
    },
    messages: {
      useErrKey:
        "Log errors under the `err` key instead of `{{key}}` — pino only serializes errors on `err`.",
      duplicateErrKey:
        "Remove `{{key}}` — log the error only once, under the `err` key (pino only serializes errors on `err`).",
    },
    schema: [],
  },

  create(context) {
    const { sourceCode } = context;

    const isErrorValue = (value: Node): boolean => {
      if (isNewErrorExpression(value)) return true;
      if (value.type !== "Identifier") return false;

      const scope = sourceCode.getScope(value);
      const ref = scope.references.find((r) => r.identifier === value);
      const variable = ref?.resolved;
      if (!variable) return false;

      return variable.defs.some(
        (def: Node) =>
          def.type === "CatchClause" ||
          isPromiseCatchParam(def) ||
          (def.type === "Variable" && isNewErrorExpression(def.node.init)),
      );
    };

    return {
      CallExpression(node) {
        if (!isLoggerCall(node)) return;

        const [firstArg] = node.arguments;
        if (firstArg?.type !== "ObjectExpression") return;

        const props: Node[] = firstArg.properties.filter((p: Node) => p.type === "Property");
        const hasErrKey = props.some((p: Node) => getPropertyKeyName(p) === "err");

        for (const prop of props) {
          const key = getPropertyKeyName(prop);
          if (key === "err") continue;

          const isError = (key !== undefined && ERROR_KEY_RE.test(key)) || isErrorValue(prop.value);
          if (!isError) continue;

          context.report({
            node: prop,
            messageId: hasErrKey ? "duplicateErrKey" : "useErrKey",
            data: { key: key ?? sourceCode.getText(prop.key) },
          });
        }
      },
    };
  },
};
