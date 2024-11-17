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
  ],
  plugins: ['~/plugins/fontawesome.js'],
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: process.env.NUXT_GOOGLE_CLIENT_ID,
      GOOGLE_REDIRECT_URI: process.env.NUXT_GOOGLE_REDIRECT_URI
    }
  }
})