const templateLocation = "./templates";

const locationsMap = {
  "registry:block": `./registry/block`,
  "registry:component": `./registry/component`,
  "registry:hook": `./registry/hook`,
  "registry:ui": `./registry/ui`,
  "registry:lib": `./registry/lib`,
};

const generator = (plop) => {
  plop.setGenerator("registry", {
    description: "Generate a new registry",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Select the type of registry:",
        choices: [
          "registry:block",
          "registry:component",
          "registry:hook",
          "registry:ui",
          "registry:lib",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name of the registry:",
      },
    ],
    actions: function (data) {
      const actions = [];
      data.baseType = data.type.split(":")[1];

      actions.push({
        type: "add",
        path: `${
          locationsMap[data.type]
        }/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: `${templateLocation}/component.tsx.hbs`,
      });
      actions.push({
        type: "add",
        path: `${locationsMap[data.type]}/{{kebabCase name}}/config.ts`,
        templateFile: `${templateLocation}/config.ts.hbs`,
      });

      return actions;
    },
  });
};

export default generator;
