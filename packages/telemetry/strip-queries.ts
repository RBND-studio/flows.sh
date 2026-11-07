// Query and fragment of an absolute URL anywhere in a string, e.g. inside an error message
const ABSOLUTE_URL_QUERY = /(https?:\/\/[^\s?#"'<>]*)[?#][^\s"'<>]*/g;
// Query and fragment of a string that is a relative URL as a whole, e.g. `/login?code=...`
const RELATIVE_URL_QUERY = /^(\/[^\s?#]*)[?#]\S*$/;

const stripQuery = (value: string): string =>
  value.replace(ABSOLUTE_URL_QUERY, "$1").replace(RELATIVE_URL_QUERY, "$1");

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== "object" || value === null) return false;
  const proto: unknown = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
};

const strip = (value: unknown): unknown => {
  if (typeof value === "string") return stripQuery(value);
  if (Array.isArray(value)) return value.map(strip);
  if (isPlainObject(value))
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, strip(v)]));
  return value;
};

/**
 * Copy of a JSON like value with the query and fragment stripped from every URL in it, at any
 * depth. Auth and OAuth URLs carry tokens in the query (magic link `token`, OAuth `code`, `state`)
 * and API URLs carry user searches, so none of them may reach Loki. Paths stay for grouping.
 */
export const stripQueries = <T>(value: T): T => strip(value) as T;
