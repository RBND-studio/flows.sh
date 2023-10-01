const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");
const commonRules = require("./common-rules");

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
  plugins:["simple-import-sort"],
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo"
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
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"]
      }
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    ...commonRules,
    "import/order": 0,
    "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
    "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
    "react/function-component-definition": "off",
    "import/no-default-export": "off",
  },

};
