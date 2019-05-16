<template>
    <div class="m-like">
        <p class="y-like">猜你喜欢</p>
        <div class="content"  v-for="(item,index) in items" :key="index">
            <img :src="item.imgUrl" alt="图片加载失败">
            <p>{{item.title}}</p>
            <p class="comment-box">
                <el-rate  class="score" v-model="item.score" disabled text-color="#ff9900" score-template="{value}">
                </el-rate>
                <span class="commentNum">
                    {{item.commentNum}}个评价
                </span>    
            </p>
            <p class="desc">
                {{item.areaName}}
            </p>
            <div class="price-box clearfloat">
                ￥<span class="price">{{item.lowPrice}}</span>起
            </div>
        </div>

    </div>
</template>
<script>
    import api from '@/api/index.js';
    export default {
        mounted() {
           api.getRecommend().then(res => {
            //    console.log("res--",res);
               this.items = res.data.data;
               let len = this.items.length;
               for(let i = 0; i < len; i++){
                  this.items[i].score = this.items[i].score - 0;
                  this.items[i].imgUrl = "//p0.meituan.net/deal/__26218156__8593562.jpg@190w_106h_1e_1c"
               }
           });
        },
        data() {
            return {
                items: null,
            }
        },
        methods: {

        },
    }
</script>
<style lang="scss">
    @import '@/assets/css/products/like.scss';
</style>