<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$store.state.position.name}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position.name}}{{$store.state.foodType}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.tradeName}}</el-breadcrumb-item>                                        
    </el-breadcrumb>
</template>
<script>
export default {
  updated() {

  }
}
</script>
