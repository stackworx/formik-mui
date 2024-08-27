/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

const external = [
  "react",
  "react/jsx-runtime",
  "formik",
  "@mui/material/Autocomplete",
  "@mui/material/Checkbox",
  "@mui/material/RadioGroup",
  "@mui/material/Select",
  "@mui/material/Switch",
  "@mui/material/TextField",
  "@mui/material/ToggleButtonGroup",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "formik-mui",
      formats: ["es"],
      fileName: (format) => `formik-mui.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      external,
      output: [
        {
          format: "es",
          dir: "./dist",
          sourcemap: true,
          preserveModules: true,
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`;
          },
        },
      ],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  }
});
