import { loadVue } from "./vue-loader.js";

// https://ssr.vuejs.org/guide/non-node.html
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } };
window.process = process;

export async function render(vm) {
  await Promise.all([
    loadVue(),
    import("./dependencies/vue-server-renderer/basic.js"),
  ]);
  return new Promise((resolve, reject) => {
    globalThis.renderVueComponentToString(vm, (err, str) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(str);
      }
    });
  });
}
