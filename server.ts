import { serve } from "https://deno.land/std@0.66.0/http/server.ts";

import mainContent from "./example/my-main.ts";
import { render, loadVue } from "./ssr.ts";

const Vue = await loadVue();
const component = new Vue(mainContent);

const port = 8000;
const server = serve({ port });
console.log(`Listening on http://localhost:${port}`);

for await (const req of server) {
  const startMs = performance.now();

  if (req.url === "/favicon.ico") {
    req.respond({ status: 204 });
  } else {
    const html = await render(component);
    const body = ` <!DOCTYPE html><html><body>${html}</body></html>`;
    req.respond({ body });
  }

  const durationMs = performance.now() - startMs;
  console.log(`${req.method} ${req.url} - ${durationMs}ms`);
}
