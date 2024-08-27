/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const external = [
  /node_modules/,
  "react",
  "react/jsx-runtime",
  "formik",
  "tiny-warning",
  "@mui/utils",
  /@mui\/x-date-pickers/,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes: true,
    // https://github.com/qmhc/vite-plugin-dts/issues/344#issuecomment-2231355823
    tsconfigPath: "./tsconfig.app.json",
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external,
      output: [
        {
          format: "es",
          dir: "./dist",
          preserveModules: true,
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`;
          },
        }
      ],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  }
});
