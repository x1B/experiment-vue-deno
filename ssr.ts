const VUE_ROOT_URL =
  "https://raw.githubusercontent.com/x1B/vue/experiment/deno-ssr";

type DenoSsrGlobal = {
  process: { env: { VUE_ENV: "server"; NODE_ENV: "production" } };
  renderVueComponentToString: Function;
};
const global: DenoSsrGlobal = window as any as DenoSsrGlobal;

// https://ssr.vuejs.org/guide/non-node.html
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } } as const;
global.process = process;

export async function loadVue() {
  const vueModule: { default: any } = await import(
    `${VUE_ROOT_URL}/dist/vue.esm.js`
  );
  return vueModule.default;
}

const vue = loadVue();
const vueRenderer = loadRenderer();
export async function render(vm: any): Promise<String> {
  // load vue dynamically so that `process` is visible from there:
  await Promise.all([vue, vueRenderer]);
  return new Promise((resolve, reject) => {
    global.renderVueComponentToString(
      vm,
      (err: any, html: string) => err ? reject(err) : resolve(html),
    );
  });
}

async function loadRenderer() {
  return import(`${VUE_ROOT_URL}/packages/vue-server-renderer/basic.js`);
}
