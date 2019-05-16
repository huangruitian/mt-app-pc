<template>
   <el-row class="m-header m-header-topbar">

      <el-col :span="10">
          <geo/>
      </el-col>

      <el-col :span="14">
          <m-nav/>
      </el-col>

   </el-row>
</template>

<script>
import MNav from '@/components/header/Nav.vue'
import Geo from '@/components/header/Geo.vue'

export default {
  components: {
    MNav, // H5有这标签 避开
    Geo
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>
