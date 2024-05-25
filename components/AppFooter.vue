<script setup lang="ts">
const { data: channelList } = await useFetch('/api/channel')
</script>
<template>
    <footer>
        <el-row class="footer-container">
            <el-col :span="12" class="footer-border">
                <div class="footer-container-left">
                    <ul>
                        <li v-for="item in channelList" :key="item.id"><nuxt-link to="/">{{ item.name }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="12" class="footer-container-right">
                <div>
                    <ul>
                        <li><nuxt-link to="/">Find a VisionHelp Doctor</nuxt-link></li>
                        <li><nuxt-link to="/">Blog</nuxt-link></li>
                        <li><nuxt-link to="/">Residencies</nuxt-link></li>
                        <li><nuxt-link to="/">图标</nuxt-link></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <p>FOLLOW US</p>
                    <nuxt-link to="/">图标</nuxt-link>
                    <nuxt-link to="/">图标</nuxt-link>
                </div>
            </el-col>
        </el-row>
    </footer>
</template>
<style>
footer {
    margin-top: 100px;
    margin-bottom: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-container {
    max-width: 1360px;
    margin: 0 auto;
    line-height: 1.5;
}

.footer-border {
    padding: 40px 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-container-left {
    /* padding: 20px; */
    letter-spacing: 3px;
    font-size: 14px;
    font-weight: 700;
}

.footer-container-left li {
    margin-bottom: 12px;
}

.footer-container-left a {
    color: #808285;
}

.footer-container-right {
    font-size: 16px;
    padding: 40px 20px 20px 50px;
}

.footer-container-right li {
    margin-bottom: 8px;
    font-family: "PT Serif", serif;
}
.footer-social{
    margin-top: 30px;
}
.footer-social p{
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
}
</style>