import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { carbonPreset } from "./registry/lib/carbon-tailwind-preset";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "inherit",
            },
            h2: {
              fontWeight: "inherit",
            },
            p: {
              fontWeight: "inherit",
            },
            ul: {
              fontWeight: "inherit",
            },
          },
        },
      },
    },
  },
  presets: [carbonPreset],
  plugins: [typography],
} satisfies Config;
