import { Hono } from "hono";
import routing from "./utils/routing";
import path from "node:path"

const app = new Hono({ strict: false });

Bun.serve({
    port: 5555,
    fetch: app.fetch
})

export default app;

app.use(async (c, next) => {
    if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico") await next();
    else {
      await next();
  
      console.log(`URL ${c.req.url} | METHOD ${c.req.method} | STATUS ${c.res.status}`);
    }
});

await routing.loadRoutes(path.join(__dirname, "routes"), app);


console.log("listening on http://127.0.0.1:5555")