// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image", "nuxt-swiper", "nuxt-icon"],
  image: { inject: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
