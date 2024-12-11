import { pathToFileURL } from "url";
import { promises as fs } from "fs";
import { registryItemFileSchema } from "../registry/schema";
import { z } from "zod";
import path from "path";

const REGISTRY_BASE_PATH = "registry";
const REGISTRY_CONFIG = "config";
const PUBLIC_FOLDER_BASE_PATH = "public/registry";
const COMPONENT_FOLDER_PATH = "components";

type File = z.infer<typeof registryItemFileSchema>;
const FolderToComponentTypeMap = {
  block: "registry:block",
  component: "registry:component",
  hooks: "registry:hook",
  ui: "registry:ui",
  lib: "registry:lib",
};

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath); // Extract the directory path

  try {
    // Ensure the directory exists, recursively creating directories as needed
    await fs.mkdir(dir, { recursive: true });

    // Write the file
    await fs.writeFile(filePath, data, "utf-8");
    console.log(`File written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file`);
    console.error(error);
  }
}

const getComponentFiles = async (files: File[]) => {
  const filesArrayPromises = (files ?? []).map(async (file) => {
    if (typeof file === "string") {
      const filePath = `${REGISTRY_BASE_PATH}/${file}`;
      const fileContent = await fs.readFile(filePath, "utf-8");
      return {
        type: FolderToComponentTypeMap[
          file.split("/")[0] as keyof typeof FolderToComponentTypeMap
        ],
        content: fileContent,
        path: file,
        target: `${COMPONENT_FOLDER_PATH}/${file}`,
      };
    }
  });
  const filesArray = await Promise.all(filesArrayPromises);
  return filesArray;
};

const collectConfigFiles = async () => {
  const registryArray = [];
  const configDir = path.join(REGISTRY_BASE_PATH, REGISTRY_CONFIG);
  const files = await fs.readdir(configDir, { withFileTypes: true });

  for (const file of files) {
    const configFilePath = path.join(configDir, file.name);
    try {
      const fileUrl = pathToFileURL(path.resolve(configFilePath)).href;
      const { registryEntry } = await import(fileUrl);

      if (registryEntry) {
        registryArray.push(registryEntry);
      }
    } catch (error) {
      console.error(`Error reading config file: ${configFilePath}`);
      console.error(error);
    }
  }

  return registryArray;
};

const main = async () => {
  // make a json file and put it in public folder
  const registryComponents = await collectConfigFiles();
  for (const element of registryComponents) {
    const component = element;
    const files = component.files;
    if (!files) throw new Error("No files found for component");

    const filesArray = await getComponentFiles(files);

    const json = JSON.stringify(
      {
        ...component,
        files: filesArray,
      },
      null,
      2
    );
    const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
    await writeFileRecursive(jsonPath, json);
  }
};

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err);
  });
