// https://ssr.vuejs.org/guide/non-node.html
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } };
window.process = process;

let vuePromise;

export async function loadVue() {
    if (!vuePromise) {
        vuePromise = import("./dependencies/vue/vue.esm.js")
    }
    const vueModule = await vuePromise;
    return vueModule.default;
}
