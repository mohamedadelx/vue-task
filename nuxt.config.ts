import { resolve } from "path"
import graphqlLoader from "vite-plugin-graphql-loader";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
   
    "~/assets/main.css",
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Candal&display=swap'
        }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/svg-sprite',
  ],

  svgSprite: {
    input: '~/assets/sprite/svg/',
    defaultSprite: 'icons',
  },

  plugins: [
    {src: '~/plugins/villus.client.js'},
  ],


  vite: {
    plugins: [
      graphqlLoader(),
    ]
  },

  runtimeConfig: {
    public: {
      graphqlUrl: process.env.GRAPHQL_URL,
    },
  },
})
