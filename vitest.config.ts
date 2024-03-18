/// <reference types="vitest" />
import { resolve } from "path";
import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...defaultExclude, "/dist/"],
    // setupFiles: ["dotenv/config"],
  },
  resolve: {
    alias: [
      {
        replacement: resolve(__dirname, "./src/domain"),
        find: "@/domain",
      },
      {
        replacement: resolve(__dirname, "./src/infra"),
        find: "@/infra",
      },
      {
        replacement: resolve(__dirname, "./src/application"),
        find: "@/application",
      },
      {
        replacement: resolve(__dirname, "./src"),
        find: "@/src",
      },
    ],
  },
});
