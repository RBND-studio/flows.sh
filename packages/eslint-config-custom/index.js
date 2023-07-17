module.exports = {
  extends: [
    "next",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    "plugin:prettier/recommended",
  ],
  plugins: [
    "simple-import-sort",
    "@typescript-eslint",
    "deprecation",
    "unused-imports",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["../../tsconfig.base.json", "packages/*/tsconfig.json"], // <-- Point to your project's tsconfig.json or create new one
      },
      extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "next/core-web-vitals",
        "plugin:prettier/recommended",
      ],
      rules: {
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": ["warn"],
        "no-console": "error",
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ], // Overrides Airbnb configuration and enable no-restricted-syntax
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-unused-expressions": [
          "error",
          { allowShortCircuit: true, allowTernary: true },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          { variables: false, typedefs: false },
        ],
        "import/no-extraneous-dependencies": 0,
        "no-param-reassign": ["error", { props: false }],
        "deprecation/deprecation": "error",

        "react/function-component-definition": 0, // Disable Airbnb's specific function type
        "react/destructuring-assignment": 0, // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": 0, // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": 0, // _app.tsx uses spread operator and also, react-hook-form
        "react-hooks/exhaustive-deps": 0, // Incorrectly report needed dependency with Next.js router
        "@typescript-eslint/comma-dangle": 0, // Avoid conflict rule between Eslint and Prettier
        "react/react-in-jsx-scope": 0, // Next.js doesn't require to import React
        "no-sequences": 0,
        "no-html-link-for-pages": 0, // We in mono repo, so we can't use relative path
        "import/no-unresolved": 0,
        "import/extensions": 0, // Dont use extensions for imports
        "no-nested-ternary": 0, // Sometimes it's more readable
      },
    },

    {
      files: ["*.js", "*.jsx"],
      rules: {
        "no-use-before-define": ["error", { variables: false }],
      },
    },
  ],
};
