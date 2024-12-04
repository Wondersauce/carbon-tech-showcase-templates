import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "chat-01",
    type: "registry:block",
    registryDependencies: [],
    files: ["block/chat-01/chat-01.tsx", "block/chat-01/chat.tsx"],
    dependencies: ["@carbon/react"],
  },
  {
    name: "button-pill",
    type: "registry:ui",
    files: ["ui/button-pill.tsx"],
    dependencies: ["@carbon/react"],
  },
];
