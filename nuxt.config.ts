// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/ionic'],
  css: [
      '@ionic/core/css/core.css',
      '@ionic/core/css/normalize.css',
      '@ionic/core/css/structure.css',
      '@ionic/core/css/typography.css',
      '@ionic/core/css/ionic.bundle.css',
  ],
})