import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

function resolve(dir: string) {
  return path.join(__dirname, "/", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src/index.tsx"),
      name: "type_logger",
      fileName: (format) => `useTypeLogger.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
