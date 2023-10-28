module.exports = {
  rules: {
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/consistent-type-definitions": "off",
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
  plugins: ["simple-import-sort", "unused-imports"],
};
