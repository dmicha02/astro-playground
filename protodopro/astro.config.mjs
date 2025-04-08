// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://golden-figolla-17a053.netlify.app",
  integrations: [preact(),icon({iconDir: "src/icons",})],
  vite: {
    plugins: [tailwindcss()],
  },
});