<template>
    <div class="comment">
        <h3>{{comment.length}}条网友点评</h3>
        <div class="comment-item clearfloat" v-for="(item,index) in comment">
            <div class="left-box">
                <img :src="item.image" alt="">
            </div>
            <div class="right-box">
                <p>{{item.username}}</p>
                <p>
                    <el-rate v-model="item.rate" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </p>
                <p class="evalaute">{{item.evalaute}}</p>
                <div>
                    <img :src="v" alt="" v-for="(v,i) in item.pics">
                </div>                                               
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    props: [
        "comment"
    ],
}
</script>
<style>
    .comment-item{
        border: 1px solid green;
        padding-top: 20px;
    }
    .left-box,
    .right-box{
        float: left;
    }
    .right-box{
        margin-left: 20px;
    }
    .right-box img{
        width: 140px;
        height: 140px;
    }
    .comment{
          padding-top: 20px;
    }
    .evalaute{
        margin: 10px 0px;
    }
</style>