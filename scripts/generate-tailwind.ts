import { promises as fs } from "fs";
import { exec } from "node:child_process";
import path from "path";
import { fileURLToPath } from "url";
import { fontsUtilities, carbonPreset } from "../carbon.preset";

const FILE_PATH = "../src/components/tailwind/classes.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main = async () => {
  const tailwindFontsClasses = Object.keys(fontsUtilities());
  const tailwindColorGroups = Object.keys(carbonPreset.theme.colors);
  const tailwindColors = Object.entries(carbonPreset.theme.colors).reduce<
    string[]
  >((acc, [key, value]) => {
    if (value && typeof value === "object") {
      Object.entries(value as Record<string, unknown>).forEach(([subKey]) => {
        acc.push(`${key}-${subKey}`);
      });
    } else {
      acc.push(key);
    }
    return acc;
  }, []);

  await fs.writeFile(
    path.join(__dirname, FILE_PATH),
    `
// This file is auto-generated by the build script
    export const tailwindFonts = [${tailwindFontsClasses
      .map((className) => `"${className.replace(".", "")}"`)
      .join(",\n")}];

    export const tailwindColorGroups = [${tailwindColorGroups
      .map((group) => `"${group}"`)
      .join(",\n")}];

    export const tailwindBgColors = [${tailwindColors
      .map((color) => `"bg-${color}"`)
      .join(",\n")}];
    `,
    "utf-8"
  );

  // Format the file
  await exec(`npx prettier --write ${path.join(__dirname, FILE_PATH)}`);
};

main();