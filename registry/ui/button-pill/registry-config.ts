import { RegistryEntry, BASE_URL } from "../../schema";

export const registryEntry: RegistryEntry = {
  name: "button-pill",
  type: "registry:ui",
  files: ["ui/button-pill/button-pill.tsx"],
  dependencies: ["@carbon/react", "@carbon/icons-react"],
  registryDependencies: [`${BASE_URL}/carbon-tailwind-preset.json`],
};
