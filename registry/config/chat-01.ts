import { RegistryEntry, BASE_URL } from "../schema";

export const registryEntry: RegistryEntry = {
  name: "chat-01",
  type: "registry:block",
  files: ["block/chat-01.tsx"],
  dependencies: ["@carbon/react", "@carbon/icons-react"],
  registryDependencies: [
    `${BASE_URL}/button-pill.json`,
    `${BASE_URL}/chat.json`,
    `${BASE_URL}/carbon-tailwind-preset.json`,
  ],
};
