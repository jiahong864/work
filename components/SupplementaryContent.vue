<script setup lang="ts">
    import EmilyImg from '~/assets/images/emily.jpg'
    import ActivitiesImg from '~/assets/images/Activities.jpg'
    import AdobeStockImg from '~/assets/images/AdobeStock.jpg'
    import AccommodationImg from '~/assets/images/Accommodation.jpg'
    import SilhouetteImg from '~/assets/images/Silhouette.jpg'
    import BappelImg from '~/assets/images/bappel.jpg'




    const SupplementaryLeft = ref([
        { id: 1,
            image: EmilyImg,
            category: 'AMBLYOPIA', 
            title: 'Advanced Amblyopia Treatment…for faster and better outcomes', 
            description: 'At age 18, Emily is a bright and talented young lady. ...'
        },
        { id: 2,
            image: ActivitiesImg,
            category: 'AUTISM - SENSORY INTEGRATION', 
            title: 'Activities to Develop Visual Spatial Knowledge: General Movement – Part 2', 
            description: ''
        },
        { id: 3,
            image: AdobeStockImg,
            category: 'AMBLYOPIA', 
            title: 'Amblyopia Treatment – Eye Patching Alone is No Longer the Standard of Care', 
            description: 'Amblyopia, otherwise known as "lazy eye", is the most common cause ...'
        },
        { id: 4,
            image: AccommodationImg,
            category: 'VISION AND LEARNING', 
            title: 'Accommodation’s 3-A’s…The Triple Play for Reading and Learning', 
            description: 'Even after practicing for 30 years in the optometric specialty of ...'
        },
        { id: 5,
            image: SilhouetteImg,
            category: 'FEATURED', 
            title: 'Activities to Develop Visual Spatial Knowledge: Mental Map of Body', 
            description: ''
        },
        { id: 6,
            image: BappelImg,
            category: 'FEATURED', 
            title: 'At First Sight', 
            description: 'Combining optometric vision therapy with occupational therapy results in an integrated ...'
        }
    ])
    const SupplementaryRight = ref([
        {
            id:1,
            category:'VISION AND LEARNING',
            title:'CI:The Private Eye Goes Public -Part 3…who’s looking out for the kids?',
            description:'In Part 1 and Part 2 of CI: The Private Eye Goes Public, we ...'
        },
        {
            id:2,
            category:'AUTISM - SENSOY INTEGRATION',
            title:'Activities to Develop Visual Spatial Knowledge: Mental Map of Body',
            description:''
        },
        {
            id:3,
            category:'STRABISMUS',
            title:'Susan R. Barry, Ph.D., Featured on PBS NOVA Series',
            description:'As noted on its website, NOVA is the highest rated science series on television, ...'
        }
    ])

</script>
<template>
    <div class="flex pt-60px max-w-1240px mx-auto">
        <div class="w-1020px">
            <div class="flex flex-col justify-center items-center mb-100px">
                <h3 class="text-24px font-700 text-center lh-38px">Other Articles</h3>
                <p class="mx-auto pt-30px w-100px border-b-2px border-b-solid border-[#608e76]"></p>
            </div>
            <div class="grid grid-cols-3 gap-3">
                <div class="col-span-1 bg-[#F4F4F4]" v-for="item in SupplementaryLeft">
                    <div class="w-full h-160px">
                        <img :src="item.image" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="p-20px h-250px">
                        <div class="py-10px text-10px tracking-2px">{{ item.category }}</div>
                        <nuxt-link to="/" class="text-16px font-700">{{ item.title }}</nuxt-link>
                        <p class="mt-10px text-15px">{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-220px mt-170px pl-40px flex flex-col">
            <div class="flex flex-col" v-for="item in SupplementaryRight" :key="item.id" >
                <hr class="w-40px" />
                <nuxt-link to="/" class="pb-10px pt-20px text-10px tracking-2px">{{ item.category }}</nuxt-link>
                <nuxt-link to="/" class="text-16px font-700">{{ item.title }}</nuxt-link>
                <p class="mt-10px text-15px pb-40px">{{item.description}}</p>
            </div>
        </div>
    </div>
</template>
