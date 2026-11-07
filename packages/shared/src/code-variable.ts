// Members every plain object inherits from Object.prototype, plus "prototype". Code variables become
// object keys (block property keys are es-toolkit set/get/update paths when blocks render for the
// SDK), and a key naming an inherited member walks into shared built-ins and corrupts them for the
// whole process. Listed explicitly so the dashboard and the backend reject exactly the same names.
const reservedNames = [
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "__proto__",
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
  // es-toolkit refuses to write through it, so a property with this key would never render
  "prototype",
];

// First character must be a letter or underscore, followed by any number of letters, numbers, or
// underscores, and the whole value can't be one of the reserved names
export const codeVariableRegex = new RegExp(
  `^(?!(?:${reservedNames.join("|")})$)[a-zA-Z_][a-zA-Z0-9_]*$`,
);
export const codeVariableErrorMessage =
  "Must start with a letter or underscore, followed by letters, numbers, or underscores. Built-in object property names like constructor or toString aren't allowed.";
