/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

const external = [
  "react",
  "react/jsx-runtime",
  "formik",
  "@mui/x-date-pickers/DatePicker",
  "@mui/x-date-pickers/DateTimePicker",
  "@mui/x-date-pickers/DesktopDatePicker",
  "@mui/x-date-pickers/DesktopTimePicker",
  "@mui/x-date-pickers/MobileDatePicker",
  "@mui/x-date-pickers/MobileTimePicker",
  "@mui/x-date-pickers/MobileDateTimePicker",
  "@mui/x-date-pickers/StaticDatePicker",
  "@mui/x-date-pickers/StaticTimePicker",
  "@mui/x-date-pickers/StaticDateTimePicker",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "formik-mui",
      formats: ["es"],
      fileName: (format) => `formik-mui-x-date-pickers.${format}.js`,
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
        }
      ],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  }
});
