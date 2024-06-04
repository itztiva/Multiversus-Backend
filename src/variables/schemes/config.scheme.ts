import { z } from "zod";

export const ConfigScheme = z.object({
    PORT: z.number(),
    DB_URL: z.string()
})