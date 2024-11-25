import { resolve } from 'path';
import { defineConfig } from "vitest/config";

const name = "typograms"; 
export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return `${name}.css`;
          return assetInfo.name;
        },
      },
    },
    minify: "terser",
    sourcemap: true,
  lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name,
			fileName: name,
		},
  },
});
