import { Hono } from "hono";
import routing from "./utils/routing";
import path from "node:path"
import Variables from "./variables/Variables";

const app = new Hono({ strict: false });

export const config = Variables.Register();

export default app;

app.use(async (c, next) => {
    if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico") await next();
    else {
      await next();
  
      console.log(`URL ${c.req.url} | METHOD ${c.req.method} | STATUS ${c.res.status}`);
    }
});

await routing.loadRoutes(path.join(__dirname, "routes"), app);

import("./database/conn");

console.log(`listening on http://127.0.0.1:${config.PORT}`)