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

All distributed components are in the `registry` folder. Within the folder `blocks` constitute larger components or complete pages, and `ui` are considered building blocks, such as buttons, cards, etc.

## Component Creation Guide

To create a new component, run the following command:

```bash
npm run registry:new
```

Follow the prompts to customize the new component.

This will automatically generate the required files in a subfolder inside the `registry` directory. The subfolder will include:

1. **Component Definition:** The main `.tsx` file for the component.
2. **Index File:** An `index.ts` file for auto imports.
3. **Registry Configuration:** A `registry-config.ts` file.

#### `registry-config.ts`

Update the `registry-config.ts` file with:

- **`dependencies`:** Add required Node.js dependencies in this array.
- **`registryDependencies`:** Add registry-specific dependencies in this array.  
  **Note:** `BASE_URL` is exposed by default and only needs to be included when adding `registryDependencies`.

### Example

```typescript
import { RegistryEntry, BASE_URL } from "../../schema";

export const registryEntry: RegistryEntry = {
  name: "my-component",
  type: "registry:ui",
  files: ["ui/my-component/my-component.tsx"],
  dependencies: ["@carbon/react"],
  registryDependencies: [`${BASE_URL}/button-pill.json`],
};
