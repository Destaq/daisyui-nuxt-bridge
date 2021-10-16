import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css", "tailwindcss/tailwind.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});
