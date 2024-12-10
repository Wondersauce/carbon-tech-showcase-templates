//Item types should match the registryItemTypes in ./registry/schema
const registryItemTypes = [
  "registry:block",
  "registry:component",
  "registry:example",
  "registry:hook",
  "registry:lib",
  "registry:page",
  "registry:style",
  "registry:theme",
  "registry:ui",
];

const templateLocation = "./templates";

const generator = (plop) => {
  plop.setGenerator("registry", {
    description: "Generate a new registry",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Select the type of registry:",
        choices: registryItemTypes,
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name of the registry:",
      },
    ],
    actions: function (data) {
      const location = `registry/${data.type.split(":")[1]}`;
      const actions = [];
      data.baseType = data.type.split(":")[1];

      actions.push({
        type: "add",
        path: `${location}/{{kebabCase name}}/index.ts`,
        templateFile: `${templateLocation}/index.ts.hbs`,
      });
      actions.push({
        type: "add",
        path: `${location}/{{kebabCase name}}/registry-config.ts`,
        templateFile: `${templateLocation}/registry-config.ts.hbs`,
      });
      actions.push({
        type: "add",
        path: `${location}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: `${templateLocation}/component.tsx.hbs`,
      });

      return actions;
    },
  });
};

export default generator;
