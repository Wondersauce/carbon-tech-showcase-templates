//Item types should match the registryItemTypes in ./registry/schema
const registryItemTypes = [
  'registry:block',
  'registry:component',
  'registry:example',
  'registry:hook',
  'registry:lib',
  'registry:page',
  'registry:style',
  'registry:theme',
  'registry:ui',
];

const templateLocation = './templates';
const registryPartialsLocation = './registry/config';
const demoLocation = './src/app/demos';
const docsLocation = './src/app/docs/templates';

const generator = plop => {
  plop.setGenerator('registry', {
    description: 'Generate a new registry',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of registry:',
        choices: registryItemTypes,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the registry:',
      },
    ],
    actions: function (data) {
      const location = `registry/${data.type.split(':')[1]}`;
      const actions = [];
      data.baseType = data.type.split(':')[1];

      actions.push({
        type: 'add',
        path: `${registryPartialsLocation}/{{kebabCase name}}.ts`,
        templateFile: `${templateLocation}/registry-config.ts.hbs`,
      });
      actions.push({
        type: 'add',
        path: `${location}/{{kebabCase name}}.tsx`,
        templateFile: `${templateLocation}/component.tsx.hbs`,
      });
      actions.push({
        type: 'add',
        path: `${demoLocation}/{{kebabCase name}}/page.tsx`,
        templateFile: `${templateLocation}/demos-page.tsx.hbs`,
      });

      actions.push({
        type: 'add',
        path: `${docsLocation}/{{kebabCase name}}/page.mdx`,
        templateFile: `${templateLocation}/templates-page.mdx.hbs`,
      });

      actions.push(answers => {
        const kC = plop.getHelper('kebabCase');
        const componentName = kC(answers.name);
        console.log(`\nDemo: http://localhost:3000/demos/${componentName}`);
        console.log(
          `Docs: http://localhost:3000/docs/templates/${componentName}\n`
        );
      });

      return actions;
    },
  });
};

export default generator;
