import { resolve } from "path";
import { defineConfig } from "vitest/config";

const name = "typograms-ts";
export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name == "style.css" ? `${name}.css` : assetInfo.name
      }
    },
    minify: true,
    terserOptions: {
      output: {
        comments: false
      }
    },
    cssMinify: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name,
      fileName: name
    }
  }
});
