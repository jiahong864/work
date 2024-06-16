<script setup lang="ts">
    const contentLeft = ref([
        { id: 1,
            // image: require('~/assets/images/Screen-time.jpg'),
            category: 'FEATURED', 
            title: 'Screen Time Library', 
            description: 'The place for advanced understanding of the human interface with screen time.'
        },
        { id: 2,
            // image: require('@/assets/images/Amblyopia.jpg'),
            category: 'FEATURED', 
            title: 'Amblyopia Library', 
            description: 'The place for doctors and patients to learn more about advanced treatment in Amblyopia care.'
        },
        { id: 3,
            // image: require('@/assets/images/Concussion.jpg'),
            category: 'FEATURED', 
            title: 'Concussion Library', 
            description: 'The place for advanced understanding of concussion and how the visual system can be affected.'
        },
    ])
    const contentRight = ref([
        {
            id:1,
            category:'CONCUSSION AND ACQUIRED BRAIN INJURY (ABI)',
            title:'What 3D movies can reveal about your child’s vision',
            description:''
        },
        {
            id:2,
            category:'SPORTS VISION TRAINING',
            title:'Making Contact Through Sports Vision',
            description:'Keith Smithson is a Doctor of Optometry in Northern ...'
        },
        {
            id:3,
            category:'VISION AND LEARNING',
            title:'CI:The Private Eye Goes Public -Part 3…who’s looking out for the kids?',
            description:'In Part 1 and Part 2 of CI: The ...'
        }
    ])
</script>
<template>
    <div class="max-w-1240px flex pt-120px mx-auto">
        <div class="grid grid-cols-3 gap-3 max-w-940px">
            <div class="col-span-3 flex h-400px">
                <img class="max-w-[50%] object-cover" src="@/assets/images/home.jpg" alt="">
                <div class="w-[50%] flex flex-col justify-center items-center p-20px bg-[#F4F4F4]">
                    <div class="py-10px text-10px tracking-2px">FEATURED</div>
                    <nuxt-link to="/"  class="mb-10px text-24px font-700">Vision & Learning Library</nuxt-link>
                    <p class="mb-25px text-16px text-center">The place for advanced understanding of how vision affects learning and what can be done to improve the...</p>
                    <nuxt-link to="/" class="py-10px px-20px text-16px font-700 border-1px border-solid border-gray-300">Read More</nuxt-link>
                </div>
            </div>
            <div class="col-span-1 bg-[#F4F4F4]" v-for="item in contentLeft" :key="item.id">
                <div class="w-full h-120px">
                    <!-- <img :src="item.image" class="w-full h-full object-cover"> -->
                    <img src="~/assets/images/Screen-time.jpg" class="w-full h-full object-cover">
                </div>
                <div class="p-20px h-255px">
                    <div class="py-10px text-10px tracking-2px">{{ item.category }}</div>
                    <nuxt-link to="/" class="text-16px font-700">{{ item.title }}</nuxt-link>
                    <p class="mt-10px text-15px">{{item.description}}</p>
                </div>
            </div>
        </div>
        <div class="ml-40px w-300px">
            <h3 class="lh-38px text-24px font-700 mb-24px">Other Vision Articles</h3>
            <div class="pb-30px" v-for="item in contentRight" :key="item.id">
                <hr class="w-40px" />
                <div class="pb-10px pt-40px text-10px tracking-2px">{{ item.category }}</div>
                <nuxt-link to="/" class="text-16px font-700">{{ item.title }}</nuxt-link>
                <p class="mt-10px text-15px">{{item.description}}</p>
            </div>
        </div>

    </div>
</template>