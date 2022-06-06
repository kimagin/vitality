import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";

import { presetAttributify, presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
});
