// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongoURI: process.env.MONGO_URI,
    encryptionKey: process.env.ENCRYPTION_KEY,
    encryptionInitalVector: process.env.INITAL_VECTOR
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
    }
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  imports: {
    dirs: ['./store', './assets'],
  },

  pinia: {
    storesDirs: ["./store"]
  },

  nitro: {
    plugins: ["~/server/db/mongo.ts"],
  }

})