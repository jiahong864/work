<script setup lang="ts">
const {data:channelList} = await useFetch('/api/channel',{method:'get'})
</script>

<template>
    <NuxtLink v-for="item in channelList" :key="item.id" :to="`/logos`">
        {{item.name}}
    </NuxtLink>
</template>

<style scoped>

</style>