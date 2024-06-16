// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['@/assets/styles/main.scss'],
  unocss:{
    icons:true
  },
  devtools: { enabled: true },
  modules: [ '@unocss/nuxt'],
})
