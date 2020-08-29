import { serve } from "https://deno.land/std@0.66.0/http/server.ts";
import { loadVue } from './vue-loader.js';
import { render } from "./render.js";

const Vue = await loadVue();
const component = new Vue({
    template: `<h1>Hello!!!</h1>`,
});

const s = serve({ port: 8000 });
for await (const req of s) {
  const html = await render(component);
  req.respond({ body: html });
}
