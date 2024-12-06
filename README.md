# IBM Carbon Showcases

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project structure

The project is structured in the following way:

- `/src/app`: Nextjs pages dedicated to the documentation of the project.
- `/src/components`: React components of the application that are not part of the design system. Used for the documentation of the project.
- `/registry`: React components of the application that are to be distributed trhough shadcn CLI.
- `/public/registry`: Static JSON generated files that shadcn uses to download the components.
- `/scripts`: Assorted scripts used mostly to generate the project.

## Shadcn repository

We are leveraging the Shadcn CLI to distribute the components of the project.

All distributed components are in the `registry` folder. Within the folder `blocks` constitute larger componentes or complete pages, and `ui` are considered building blocks, such as buttons, cards, etc.

To create a new component, run the following command:

```bash
npm run plop
```

You need to add the new component to the `/registry/registry-components.ts` file, with the appropriate configuration options.
