<template>
    <div class="page-product">
        <el-row  class="m-crumbs">
            <crumbs/>
        </el-row>   
        <el-row>
            <el-col :span="19">
                 <el-row>
                     <categroy/>
                 </el-row>
                 <el-row>
                     <list/>
                 </el-row>                 
            </el-col>
            <el-col :span="5">
                <el-row>
                    <m-map/>
                </el-row>
                <el-row>
                    <like/>
                </el-row>                
            </el-col>            
        </el-row>        
    </div>
</template>
<script>
import Crumbs from '@/components/products/Crumbs';
import Categroy from '@/components/products/Categroy';
import List from '@/components/products/List';
import MMap from '@/components/products/Map';
import Like from '@/components/products/Like';

export default {
    components: {
        Crumbs,
        Categroy,
        List,
        MMap,
        Like,
    }
}
</script>
<style lang="scss">
        @import "@/assets/css/products/index.scss";
</style>