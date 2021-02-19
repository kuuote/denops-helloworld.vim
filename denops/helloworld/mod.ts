import { Denops } from "https://deno.land/x/denops@v0.5/denops.ts";

// Start plugin event-loop
Denops.start(async function (denops: Denops): Promise<void> {
  // Register dispatcher
  denops.extendDispatcher({
    async hoge(hoge: unknown): Promise<void> {
      await denops.call(
        "setline", [1, Array.from(Array(100), (_, i) => i.toString())]
      );
    },
  });

  await denops.command(
    `command! Hoge call denops#notify("${denops.name}", "hoge", ["a"])`
  );

  console.log("denops-helloworld.vim has loaded");
});
