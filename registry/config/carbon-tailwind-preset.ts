import { RegistryEntry } from '../schema';

export const registryEntry: RegistryEntry = {
  name: 'carbon-tailwind-preset',
  type: 'registry:lib',
  files: ['lib/carbon-tailwind-preset.ts'],
  dependencies: ['@carbon/react', '@carbon/icons-react'],
};
