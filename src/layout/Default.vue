<template>
   <div class="layout-default">
       <el-container>
            <el-header height="">
                <my-header/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer height="">
                <my-footer/>
            </el-footer>
       </el-container>
   </div>
</template>

<script>
import MyHeader from '@/components/header/Index.vue'
import MyFooter from '@/components/footer/Index.vue'

export default {
  components: {
    MyHeader, // 不能用header便签，H5有这个标签
    MyFooter
  }
}
</script>

<style scoped lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>
