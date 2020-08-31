import { serve } from "https://deno.land/std@0.66.0/http/server.ts";

import mainContent from './components/main-content.ts';
import { render, loadVue } from "./ssr.ts";

const Vue = await loadVue();
const component = new Vue({
  components: { mainContent },
  template: `<main-content />`,
});

const server = serve({ port: 8000 });
for await (const req of server) {
  const html = await render(component);
  const body = `<!DOCTYPE html>
    <html><body>${html}</body></html>
  `;
  req.respond({ body });
}
