import { resolve } from "path";
import { defineConfig } from "vitest/config";

const name = "typograms";
export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  build: {
    /* target: "es2022", */
    /* rollupOptions: { */
    /*   output: { */
    /*     assetFileNames: (assetInfo) => { */
    /*       if (assetInfo.name == "style.css") return `${name}.css`; */
    /*       return assetInfo.name; */
    /*     } */
    /*   } */
    /* }, */
    /* minify: 'terser', */
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
