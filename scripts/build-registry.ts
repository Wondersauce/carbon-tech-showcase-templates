// import { registryComponents } from "../registry";
import { pathToFileURL } from "url";
import { promises as fs } from "fs";
import { registryItemFileSchema } from "../registry/schema";
import { z } from "zod";
import path from "path";

const REGISTRY_BASE_PATH = "registry";
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

async function findConfigFiles(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  const configFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      configFiles.push(...(await findConfigFiles(filePath)));
    } else if (file.isFile() && file.name === "config.ts") {
      configFiles.push(filePath);
    }
  }

  return configFiles;
}

const collectConfigFiles = async () => {
  const registryArray = [];

  const configFiles = await findConfigFiles(REGISTRY_BASE_PATH);

  for (const configFilePath of configFiles) {
    console.log(configFilePath);
    try {
      const fileUrl = pathToFileURL(path.resolve(configFilePath)).href;
      const { ui } = await import(fileUrl);

      if (ui) {
        registryArray.push(ui);
        console.log(ui);
      }
    } catch (error) {
      console.error(`Error reading file`);
      console.error(error);
    }
  }

  return registryArray;
};

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err);
  });
