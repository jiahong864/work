<template>
    <div class="content1-box1">
        <div class="content1-box1-left">
            <el-row class="content1-box1-nav">
                <el-col :span="12">
                    <img src="@/assets/images/vlhome-1.jpg" alt="">
                </el-col>
                <el-col :span="12" class="content1-box1-nav-right">
                    <div>FEATURED</div>
                    <nuxt-link to="/" class="content1-box1-nav-right-title">Vision & Learning Library</nuxt-link>
                    <p>The place for advanced understanding of how vision affects learning and what can be done to improve the...</p>
                    <nuxt-link to="/" class="content1-box1-nav-right-button">Read More</nuxt-link>
                </el-col>
            </el-row>
            <el-row class="content1-box1-list" :gutter="10">
                <el-col :span="8">
                    <div class="content1-box1-list-img1">
                        <img src="@/assets/images/Screen-time.jpg" alt="">
                    </div>
                    <div class="content1-box1-list-item">
                        <div>FEATURED</div>
                        <nuxt-link to="/">Vision & Learning Library</nuxt-link>
                        <p>The place for advanced understanding of the human interface with screen time.</p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="content1-box1-list-img1">
                        <img src="@/assets/images/iStock_72892635_XXXLARGE_Reto.jpg" alt="">
                    </div>
                    <div class="content1-box1-list-item">
                        <div>FEATURED</div>
                        <nuxt-link to="/">Amblyopia Library</nuxt-link>
                        <p>The place for doctors and patients to learn more about advanced treatment in Amblyopia care.</p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="content1-box1-list-img1">
                        <img src="@/assets/images/iStock_000003877373Medium_reto-1-e1591930922422.jpg" alt="">
                    </div>
                    <div class="content1-box1-list-item">
                        <div>FEATURED</div>
                        <nuxt-link to="/">Concussion Library</nuxt-link>
                        <p>The place for advanced understanding of the human interface with screen time.</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content1-sidebar">
            <h3>Other Vision Articles</h3>
            <hr />
            <div class="content1-sidebar-item">
                <div>AUTISM - SENSOY INTEGRATION</div>
                <nuxt-link to="/">Developmental Vision and Sensory Integration OT…A Co-Treatment Approach that Works</nuxt-link>
                <p>When it comes to helping children with developmental delays ...</p>
            </div>
            <hr />
            <div class="content1-sidebar-item">
                <div>CONCUSSION AND ACQUIRED BRAIN INJURY (ABI)</div>
                <nuxt-link to="/">The Impact of Concussion on Vision – new VisionHelp video raising professional and public awareness</nuxt-link>
                <p>When a person suffers a sudden blow to the ...</p>
            </div>
            <hr />
            <div class="content1-sidebar-item">
                <div>VISION AND LEARNING</div>
                <nuxt-link to="/">Could Vision Issues Be Contributing to Your Child’s Difficulty With Learning?</nuxt-link>
                <p>Parents and educators often ask us questions about vision ...</p>
            </div>
        </div>
    </div>
</template>

<style>
.content1-box1{
    display: flex;
    justify-content: center;
    margin: 100px 0;
}
.content1-box1-left{
    margin-right: 20px;
}
.content1-box1-nav{
    width: 850px;
    height: 400px;
}
.content1-box1 img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.content1-box1-nav-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #F4F4F4;
}
.content1-box1-nav-right div{
    padding: 10px 0;
    font-size: 10px;
    letter-spacing: 2px;
}
.content1-box1-nav-right-title{
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700
}
.content1-box1-nav-right p{
    margin-bottom: 24px;
    font-size: 16px;
    font-family: "PT Serif", serif;
    text-align: center;
}
.content1-box1-nav-right-button{
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid rgba(0,0,0,0.1);
}

.content1-box1-list{
    width: 857px;
   margin-top: 10px;
}
.content1-box1-list-img1{
    width: 279px;
    height: 120px;
}
.content1-box1-list-item{
    padding: 20px;
    width: 239px;
    height: 216px;
    background-color: #F4F4F4;
}
.content1-box1-list-item div{
    padding: 10px 0;
    font-size: 10px;
    letter-spacing: 2px;
}
.content1-box1-list-item a{
    font-size: 16px;
    font-weight: 700;

}
.content1-box1-list-item p{
    margin-top: 10px;
    font-size: 15px;
    font-family: "PT Serif", serif;

}
.content1-sidebar{
    width: 290px;
    height: 720px;
}
.content1-sidebar h3{
    line-height: 38px;
    font-size: 24px;
   font-weight: 700;
   margin-bottom: 24px;
}
.content1-sidebar hr{
    width: 40px;
}
.content1-sidebar-item{
    padding: 30px 0 40px 0;
}
.content1-sidebar-item div{
    padding: 10px 0;
    font-size: 10px;
    letter-spacing: 2px;
}
.content1-sidebar-item a{
    font-size: 16px;
    font-weight: 700;
}
.content1-sidebar-item p{
    margin: 10px 0 20px 0;
    font-size: 15px;
    font-family: "PT Serif", serif;
    /* overflow: hidden;
    text-overflow: ellipsis; */
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; */
}
</style>