// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Sarabun: [400, 700],
      Inter: [400, 700], 
      Kanit: [400, 700], 
      Prompt: [400,500,600, 700], 
    },
    display: 'swap',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    "@prisma/nuxt",
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  plugins: ['~/plugins/fontawesome.js'],
})