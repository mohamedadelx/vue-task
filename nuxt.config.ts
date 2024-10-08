// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  
 compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"), //to import dynamically
  },
  css: [
    "~/assets/main.css",
    '@fortawesome/fontawesome-free/css/all.css'
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
    input: '~/assets/sprite/svg/', // This should point to the directory containing your SVG files
    defaultSprite: 'icons',
  },
})
