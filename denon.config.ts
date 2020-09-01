import { DenonConfig } from "https://deno.land/x/denon@2.3.3/mod.ts";

const config: DenonConfig = {
  allow: {
    net: [
      "raw.githubusercontent.com",
      "0.0.0.0",
    ],
  },
  scripts: {
    start: {
      cmd: "deno run server.ts",
      desc: "Run the 'vuerassic' server",
    },
  },
};

export default config;
