<template>
    <div class="deatil clearfloat">
        <div class="left-box">
            <p>{{title}}</p>
            <p>{{score}}分,人均￥{{avgPrice}}</p>
            <p>地址：{{address}}</p>
            <p>电话：{{phone}}</p>
            <p>营业时间：{{businessTime}}</p>
            <p>
              <span v-for="(item,index) in service" :key="index">
                  {{item}}
              </span>     
            </p>
        </div>
        <div class="right-box">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>
<script>
export default {
   props: [
       "title",
       "imgUrl",
       "score",
       "avgPrice",
       "address",
       "phone",
       "businessTime",
       "service"
   ],
}
</script>
<style>
    .deatil{
        /* border: 1px solid black; */
        padding-top: 10px;
    }
    /* .left-box, */
    .right-box{
        float: right;
    }
    .left-box{
        float: left;
    }
</style>