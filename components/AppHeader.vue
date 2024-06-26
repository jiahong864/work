<script setup lang="ts">
    const navbarRight=ref([
        'Find a VisionHelp Doctor',
        'Blog',
        'Residencies'
    ])
    const navbarBottom  = ref([
        { id: 1, name: 'ABOUT' },
        { id: 2, name: 'AMBLYOPIA' },
        { id: 3, name: 'CONCUSSION' },
        { id: 4, name: 'STRABISMUS' },
        { id: 5, name: 'VISION & LEARNING' },
        { id: 6, name: 'SCREEN TIME' },
        { id: 7, name: 'AUTISM' },
        { id: 8, name: 'VIDEOS' }
    ])
</script>
<template>
    <header>
        <div class="flex justify-center p-y-40px relative mx-auto max-w-1360px py-40px  items-center">
            <nuxt-link to="/">
                <img src="@/assets/images/logo.png" alt="">
            </nuxt-link>
            <div class="absolute right-0">
                <ul class="flex">
                    <li class="pr-10px" v-for="item in navbarRight"><nuxt-link to="/">{{ item }}</nuxt-link></li>
                    <li class="w-18px h-18px simple-line-icons:magnifier"><nuxt-link to="/" class="simple-line-icons:magnifier"></nuxt-link></li>
                </ul>
            </div>
        </div>
        <nav class="border-y-1px border-y-solid border-gray-300 text-13px tracking-3px font-600">
            <ul  class="flex justify-center py-50px">
                <li class="px-35px border-r-1px border-r-solid border-gray-300 last:border-0" v-for="item in navbarBottom" :key="item.id"><nuxt-link to="/">{{ item.name }}</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>
