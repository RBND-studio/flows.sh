module.exports = function (plop) {
  const transformName = (str) => {
    return str.toLowerCase().replace(/ /g, "-");
  };

  // create your generators here
  plop.setGenerator("example", {
    description: "new example in examples folder",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Example name:",
      },
    ],
    actions: (data) => {
      const plopExampleName = transformName(data.name);
      const plopPath = `examples/${plopExampleName}`;
      const templatePath = "example-templates/next";

      return [
        // Copy all files from the template directory
        {
          type: "addMany",
          destination: plopPath,
          base: templatePath,
          templateFiles: `${templatePath}/**/*`,
          globOptions: { dot: true },
        },
        // README.md
        {
          type: "modify",
          path: `${plopPath}/README.md`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: "modify",
          path: `${plopPath}/README.md`,
          pattern: /(-- PLOP EXAMPLE NAME HERE --)/gi,
          template: `${plopExampleName}`,
        },
        // layout.tsx
        {
          type: "modify",
          path: `${plopPath}//src/app/layout.tsx`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        // providers.tsx
        {
          type: "modify",
          path: `${plopPath}/src/app/providers.tsx`,
          pattern: /(-- PLOP EXAMPLE NAME HERE --)/gi,
          template: `${plopExampleName}`,
        },
        // package.json
        {
          type: "modify",
          path: `${plopPath}/package.json`,
          pattern: /(-- PLOP EXAMPLE NAME HERE --)/gi,
          template: `${plopExampleName}`,
        },
      ];
    },
  });
};
