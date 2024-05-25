<script setup lang="ts">
    const {data:channelList} = await useFetch('/api/channel')
</script>
<template>
    <header>
        <div class="top-header">
            <nuxt-link to="/">
                <img src="@/assets/images/cropped-logo-visionhelp.png" alt="">
            </nuxt-link>
            <div class="top-navigation">
                <ul class="top-navigation-container">
                    <li><nuxt-link to="/">Find a VisionHelp Doctor</nuxt-link></li>
                    <li><nuxt-link to="/">Blog</nuxt-link></li>
                    <li><nuxt-link to="/">Residencies</nuxt-link></li>
                    <li><nuxt-link to="/">图标</nuxt-link></li>
                    <li><nuxt-link to="/"><Search style="width: 1em; height: 1em; margin-right: 8px" /></nuxt-link></li>
                </ul>
            </div>
        </div>
        <nav>
            <ul  class="nav-ul">
                <li v-for="item in channelList" :key="item.id"><nuxt-link to="/">{{ item.name }}</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>
<style>
    .top-header{
        display: flex;
        justify-content: center;
        max-width: 1360px;
        position: relative;
        margin: 0 auto;
        padding:40px 0;

    }
    .top-navigation{
        position: absolute;
        right: 0
    }
    .top-navigation-container{
        display: flex;
    }
    .top-navigation-container li{
        padding-right: 10px;
        font-family: "PT Serif", serif;
    }
    nav{
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 13px;
        letter-spacing: 3px;
        font-weight: 700;
    }
    .nav-ul{
        display: flex;
        justify-content: center;
        padding:50px 0;
        
    }
    .nav-ul li{
        padding: 0 34px;
        border-right: 1px solid rgb(0, 0, 0,0.2);
    }
    .nav-ul li:last-child{
        border: 0;
    }
</style>