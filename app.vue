<script setup lang="ts">
useSeoMeta({
  title:'这里设置网站标题',
  description:'这里设置网站的具体描述',
  keywords:'这里是搜索关键词'
})
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>

<style lang="scss">
@import './assets/styles/main.scss'
</style>