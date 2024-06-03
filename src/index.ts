import { Hono } from "hono";

const app = new Hono({ strict: false });

export default {
    port: 5555,
    fetch: app.fetch
}

app.use(async (c, next) => {
    if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico") await next();
    else {
      await next();
  
      console.log(`URL ${c.req.url} | METHOD ${c.req.method} | STATUS ${c.res.status}`);
    }
});


console.log("Listening on port 5555");