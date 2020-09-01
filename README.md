# experiment-vue-deno

aka _the Vuerassic Fork_.

> Learning Deno while with Vue SSR

This is experimental project to get a feeling of working with Deno.

* Use Vue SSR to put some Markup on the screen.

* Everything should work _without_ installing Node/NPM tooling, just to see how well that works.


Running the experiment (requires [Deno](https://deno.land/#installation)):

```console
> deno run --allow-net server.ts
Check file:///Volumes/Code/x1b/experiment-vue-deno/server.ts
Listening on http://localhost:8000

# or, if you have [denon](https://deno.land/x/denon@2.3.3)
> denon start
```


Next Steps:

* see if we can get the component compiler and SFCs to integrate with Deno.

* rinse and repeat for Vue3

* In principle, [vite](https://github.com/vitejs/vite) should be a good match for Deno (Works with ES-modules, browser-oriented). What is required to get it running? I call this _Project devito_.
