<script setup lang="ts">
    const footerLeft = ref([
        { id: 1, name: 'ABOUT' },
        { id: 2, name: 'AMBLYOPIA' },
        { id: 3, name: 'CONCUSSION' },
        { id: 4, name: 'STRABISMUS' },
        { id: 5, name: 'VISION & LEARNING' },
        { id: 6, name: 'SCREEN TIME' },
        { id: 7, name: 'AUTISM' },
        { id: 8, name: 'VIDEOS' }
    ])
    const footerRight=ref([
        'Find a VisionHelp Doctor',
        'Blog',
        'Residencies'
    ])
</script>
<template>
    <footer class="mt-100px mb-20px border-t-1px border-t-solid border-gray-300">
        <div class="flex max-w-1240px mx-auto">
            <div class="w-[50%] p-40px border-r-1px border-r-solid border-gray-300">
                <ul class="tracking-3px text-14px font-600">
                    <li class="mb-10px" v-for="item in footerLeft" :key="item.id"><nuxt-link to="/" class="text-[#808285]">{{ item.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-[50%] text-16px p-40px">
                <div>
                    <ul>
                        <li class="mb-10px" v-for="item in footerRight"><nuxt-link to="/">{{ item }}</nuxt-link></li>
                    </ul>
                </div>
                <div class="mt-30px">
                    <p class="mb-30px text-14px font-700 tracking-2px">FOLLOW US</p>
                    <nuxt-link to="/">图标</nuxt-link>
                    <nuxt-link to="/">图标</nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>