import { readdir } from "fs/promises";
import { join } from "path";
import { Hono } from "hono";

async function loadRoute(directory: string, file: string) {
  try {
    const RouteModule = await import(join(directory, file));
    const defaultExport = RouteModule.default;

    if (defaultExport && typeof defaultExport === "function") {
      defaultExport();
    } else {
      console.error(`${file} does not export a valid route initializer`);
    }
  } catch (error) {
    console.error(`Error loading route ${file}: ${(error as Error).message}`);
  }
}

export default {
  async loadRoutes(directory: string, app: Hono): Promise<void> {
    try {
      const files = await readdir(directory);
      const routedFiles = files.filter((name) => name.endsWith(".ts") || name.endsWith(".js"));

      await Promise.all(routedFiles.map((file) => loadRoute(directory, file)));
    } catch (error) {
        console.error(`Failed to load routes: ${error}`);
    }
  },
};