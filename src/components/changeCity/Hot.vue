<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item,index) in list" :key="index">{{item}}</dd>
        </dl>    
    </div>
</template>
<script>
export default {
  props: [
      "title",//父组件传过来的时候，如果是常量，不需要在父组件上加冒号
      "list"
    ]
}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/hot.scss";
</style>