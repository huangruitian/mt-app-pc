<template>
    <div class="recommened">
        <h3>推荐菜</h3>
        <div class="re-item" v-for="(item,index) in recommend" :key="index">
            <p>{{item}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "recommend"
     ],
}
</script>
<style>
    .re-item{
      padding-bottom: 10px;
      border-bottom: 1px solid #3c3c3c3c; 
    }
    .recommened{
        /* border:  1px solid black; */
        padding-top: 10px;
    }
</style>