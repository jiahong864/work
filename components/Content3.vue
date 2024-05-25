<script setup lang="ts">
    const {data:Content3List} = await useFetch('/api/content3')
</script>
<template>
    <div class="content3">
        <el-row>
            <el-col  class="content3-left" :gutter="10" :span="20">
                <div class="content3-left-title">
                    <h3>Other Articles</h3>
                    <p></p>
                </div>
                <div class="content3-left-box">
                    <div class="content3-left-item" v-for="item in Content3List" :key="item.id">
                        <img src="../assets/images/emily-cutcliff-swim-photoshopped-e1592191319286.jpg" alt="">
                        <!-- <img :src="item.img" alt=""> -->
                        <div class="content3-left-item-mes">
                            <div>
                                <nuxt-link to="/">{{ item.name }}</nuxt-link>
                            </div>
                            <nuxt-link to="/">{{ item.title }}</nuxt-link>
                            <p>{{ item.information }}</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col  class="content3-right" :span="4">
                <div>
                    <i></i>
                    <div></div>
                    <nuxt-link to="/"></nuxt-link>
                    <p></p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.content3{
    width: 1200px;
    padding: 20px;
    margin: 0 auto;
}

.content3-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content3-left-title{
    margin-bottom: 100px;
}
.content3-left-title h3{
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}
.content3-left-title p{
    margin: 0 auto;
    padding-top: 30px;
    width: 100px;
    border-bottom: 2px solid #608e76;
}
.content3-left-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.content3-left-item{
    width: 320px;
}
.content3-left-item img{
    width: 100%;
}
.content3-left-item-mes{
    height: 220px;
    padding: 20px;
    background-color: #f4f4f4;
}
.content3-left-item-mes div{
    padding: 10px 0;
    font-size: 10px;
    letter-spacing: 2px;
}
.content3-left-item-mes > a{
    font-size: 16px;
    font-weight: 700;
}
.content3-left-item-mes p{
    margin-top: 10px;
    font-size: 15px;
    font-family: "PT Serif", serif;
}
.content3-right{
    padding: 192px 10px 0 0;
}
</style>