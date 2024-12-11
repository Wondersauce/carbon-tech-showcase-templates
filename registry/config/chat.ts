import { BASE_URL, RegistryEntry } from "../schema"

export const registryEntry: RegistryEntry = {
  name: "chat",
  type: "registry:ui",
  files: ["ui/chat.tsx"],
  dependencies: ["@carbon/react", "@carbon/icons-react"],
  registryDependencies: [`${BASE_URL}/carbon-tailwind-preset.json`],
}
