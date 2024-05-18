// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  // css: [
    // 这两行代码不加好像也能执行，存疑
    //   'element-plus/dist/index.css',
    //   'element-plus/theme-chalk/display.css'
  // ]
})
