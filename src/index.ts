import { Hono } from "hono";
import routing from "./utils/routing";
import path from "node:path"
import { startProxy } from "./proxy/setup";
import Variables from "./variables/Variables";
import log from "./utils/logging/logger";
const app = new Hono({ strict: false });

export const config = Variables.Register();

export default app;

app.get("/", async (c) => {
  return c.json({
    message: "Hello from MVS-Backend!"
  })
});

app.use(async (c, next) => {
    if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico") await next();
    else {
      await next();
  
      log.backend(`URL ${c.req.url} | METHOD ${c.req.method} | STATUS ${c.res.status}`);
    }
});
await startProxy();
await routing.loadRoutes(path.join(__dirname, "routes"), app);

import("./database/conn");

log.startup(`listening on http://127.0.0.1:${config.PORT}`)