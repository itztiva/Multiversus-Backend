import { z } from "zod";
import { ConfigScheme } from "./schemes/config.scheme";
import dotenv from "dotenv";
import { resolve } from "node:path";
import logger from "../utils/logging/logger";
export default class Variables {
  private static validatedConfig: z.infer<typeof ConfigScheme>;
  public static config: z.infer<typeof ConfigScheme>;

  public static Validate(): z.infer<typeof ConfigScheme> {
    dotenv.config({ path: resolve(process.cwd(), ".env") });

    const PORT = parseInt(Bun.env.PORT as string, 10);
    const DB_URL = Bun.env.DB_URL;

    const unsafeConfig = ConfigScheme.safeParse({
      PORT,
      DB_URL,
    });

    if (!unsafeConfig.success) throw new Error(unsafeConfig.error.message);

    this.validatedConfig = unsafeConfig.data;

    return unsafeConfig.data;
  }

  public static Register(): z.infer<typeof ConfigScheme> {
    this.Validate();

    logger.startup("Config registered");
    this.config = this.validatedConfig;
    return this.config;
  }
}
