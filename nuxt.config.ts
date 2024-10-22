import { resolve } from "path"

export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"), // To import dynamically
  },
  css: [
   
    "~/assets/main.css",
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  
  
  // Add Google Fonts link to head
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
    // manipulate module options
    input: '~/assets/sprite/svg/',
    defaultSprite: 'icons',
  },

  //plugins
  plugins: [
    '~/plugins/villus.client.js',
  ],

  runtimeConfig: {
    public: {
      graphqlUrl: process.env.GRAPHQL_URL,
    },
  },
})
