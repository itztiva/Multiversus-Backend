import type { Certificates } from "../interfaces";
import fs from "node:fs/promises";
import path from "node:path";
import app from "..";

export async function loadCerts(): Promise<Certificates> {
  const [key, cert]: [Buffer, Buffer] = await Promise.all([
    fs.readFile(path.join(__dirname, "certs", "ol.epicgames.com.key")),
    fs.readFile(path.join(__dirname, "certs", "ol.epicgames.com.chain.cert")),
  ]);

  return { key, cert };
}

export async function startProxy(): Promise<void> {
  const { key, cert }: Certificates = await loadCerts();

  Bun.serve({
    port: 443,
    fetch: app.fetch,
    cert,
    key,
  });

  console.log("Proxy listening on port 443");
}
