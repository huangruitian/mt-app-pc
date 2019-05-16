<template>
    <div class="m-header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>

<script>
    import TopBar from './TopBar.vue'//  引入两个组件
    import SearchBar from './SearchBar.vue'

    export default {
        components: {
            TopBar,
            SearchBar
        },
    }
</script>

<style lang="scss">
    /* 其实这些样式都可以在输出出口引入 */

    @import "@/assets/css/public/header/index.scss";
    @import "@/assets/css/public/header/search.scss";
</style>