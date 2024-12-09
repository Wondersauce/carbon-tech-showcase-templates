import "@/envConfig";
import { Registry } from "./schema";

const BASE_URL = process.env.NEXT_PUBLIC_REGISTRY_URL;

export const ui: Registry = [
  {
    name: "chat-01",
    type: "registry:block",
    files: ["block/chat-01/chat-01.tsx"],
    dependencies: ["@carbon/react"],
    registryDependencies: [
      `${BASE_URL}/button-pill.json`,
      `${BASE_URL}/chat.json`,
      `${BASE_URL}/carbon-tailwind-preset.json`,
    ],
  },
  {
    name: "button-pill",
    type: "registry:ui",
    files: ["ui/button-pill.tsx"],
    dependencies: ["@carbon/react"],
    registryDependencies: [`${BASE_URL}/carbon-tailwind-preset.json`],
  },
  {
    name: "chat",
    type: "registry:ui",
    files: ["ui/chat.tsx"],
    dependencies: ["@carbon/react"],
    registryDependencies: [`${BASE_URL}/carbon-tailwind-preset.json`],
  },
  {
    name: "carbon-tailwind-preset",
    type: "registry:lib",
    files: ["lib/carbon-tailwind-preset.ts"],
    dependencies: ["@carbon/react"],
  },
];
