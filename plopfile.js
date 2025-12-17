module.exports = function (plop) {
  const toKebabCase = (str) => {
    return str.toLowerCase().replace(/ /g, "-");
  };
  const toCamelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase(),
      )
      .replace(/\s+/g, "");
  };

  // create your generators here
  plop.setGenerator("example", {
    description: "new example in examples folder",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Example name (Sentence case):",
      },
    ],
    actions: (data) => {
      const exampleSlug = toKebabCase(data.name);
      const exampleCamel = toCamelCase(data.name);

      const destinationPath = `examples/${exampleSlug}`;
      const templatePath = "example-templates/next";
      const templateContentPath = "example-templates/web-content";
      const contentDestinationPath = `apps/web/src/app/examples/${exampleSlug}`;

      const demoUrlName = toCamelCase(data.name);
      const demoUrl = `https://${exampleSlug}.examples.flows.sh`;
      const exampleSourceUrlName = `${toCamelCase(data.name)}Source`;
      const exampleSourceUrl = `https://github.com/RBND-studio/flows.sh/tree/main/examples/${exampleSlug}`;

      return [
        // Copy all files from the template directory
        {
          type: "addMany",
          destination: destinationPath,
          base: templatePath,
          templateFiles: `${templatePath}/**/*`,
          globOptions: { dot: true },
        },
        // Copy all files from the content directory
        {
          type: "addMany",
          destination: contentDestinationPath,
          base: templateContentPath,
          templateFiles: `${templateContentPath}/**/*`,
          globOptions: { dot: true },
        },
        // README.md
        {
          type: "modify",
          path: `${destinationPath}/README.md`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: "modify",
          path: `${destinationPath}/README.md`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        // layout.tsx
        {
          type: "modify",
          path: `${destinationPath}/src/app/layout.tsx`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: "modify",
          path: `${destinationPath}/src/app/layout.tsx`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        // providers.tsx
        {
          type: "modify",
          path: `${destinationPath}/src/app/providers.tsx`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        // user-provider.tsx
        {
          type: "modify",
          path: `${destinationPath}/src/components/providers/user-provider.tsx`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        // package.json
        {
          type: "modify",
          path: `${destinationPath}/package.json`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        // shared/src/links.ts
        {
          type: "modify",
          path: "packages/shared/src/links.ts",
          pattern: /\/\/ --PLOP_NEW_EXAMPLE_LINK--/g,
          template: `${demoUrlName}: "${demoUrl}",\n      ${exampleSourceUrlName}: "${exampleSourceUrl}",\n      // --PLOP_NEW_EXAMPLE_LINK--`,
        },
        // content.tsx
        {
          type: "modify",
          path: `${contentDestinationPath}/content.tsx`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: "modify",
          path: `${contentDestinationPath}/content.tsx`,
          pattern: /(-- PLOP EXAMPLE SLUG HERE --)/gi,
          template: `${exampleSlug}`,
        },
        {
          type: "modify",
          path: `${contentDestinationPath}/content.tsx`,
          pattern: /(-- PLOP EXAMPLE DEMO HERE --)/gi,
          template: `${demoUrlName}`,
        },
        {
          type: "modify",
          path: `${contentDestinationPath}/content.tsx`,
          pattern: /(-- PLOP EXAMPLE SOURCE HERE --)/gi,
          template: `${exampleSourceUrlName}`,
        },
        {
          type: "modify",
          path: `${contentDestinationPath}/content.tsx`,
          pattern: /(-- PLOP EXAMPLE CAMEL HERE --)/gi,
          template: `${exampleCamel}`,
        },
        {
          type: "modify",
          path: "apps/e2e/cypress/e2e/website.cy.ts",
          pattern: /\/\/ --PLOP_NEW_EXAMPLE_TEST--/g,
          template: "// TODO: Add test here\n  // --PLOP_NEW_EXAMPLE_TEST--",
        },
      ];
    },
  });
};
