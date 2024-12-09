import { Registry } from "./schema";

const BASE_URL =
  "https://raw.githubusercontent.com/Wondersauce/carbon-tech-showcase-templates/refs/heads/master/public/registry";

export const ui: Registry = [
  {
    name: "chat-01",
    type: "registry:block",
    registryDependencies: [
      `${BASE_URL}/button-pill.json`,
      `${BASE_URL}/chat.json`,
      `${BASE_URL}/carbon.tailwind-preset.json`,
    ],
    files: ["block/chat-01/chat-01.tsx"],
    dependencies: ["@carbon/react"],
  },
  {
    name: "button-pill",
    type: "registry:ui",
    files: ["ui/button-pill.tsx"],
    dependencies: ["@carbon/react"],
  },
  {
    name: "chat",
    type: "registry:ui",
    files: ["ui/chat.tsx"],
    dependencies: ["@carbon/react"],
  },
  {
    name: "carbon-tailwind-preset",
    type: "registry:lib",
    files: ["lib/carbon.tailwind-preset.ts"],
    dependencies: ["@carbon/react"],
  },
];
