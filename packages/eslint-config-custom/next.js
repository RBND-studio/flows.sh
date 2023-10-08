const commonRules = require("./common-rules");
const { resolve } = require("node:path");
const project = resolve(process.cwd(), "./tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  root: true,
  plugins: ["simple-import-sort", "import", "unused-imports"],
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    ...commonRules,
    "import/order": 0,
    "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
    "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/function-component-definition": "off",
    "import/no-default-export": "off",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
  },
};
