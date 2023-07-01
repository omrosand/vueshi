// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["@/assets/scss/global.scss"],
  modules: ["nuxt-icon"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  ssr: false,
});
