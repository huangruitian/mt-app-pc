<template>
    <div>
        <span class="name">按省份选择：</span>
        <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive" 
        @change_active="showProvince"
        @change="changeProvince"
        :className="province"
        />
        <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive" 
        @change_active="showCity"
        @change="changeCity"
        :disabled="cityDisabled"
        :className="city" 
        />
        <span>直接搜索：</span>
        <el-select v-model="searchWord" filterable remote reserve-keyword placeholder="请输入关键词" 
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item">
            </el-option>
        </el-select>
    </div>
</template>
<script>
    import MSelect from "./Select";
    import api from '@/api/index.js';

    export default {
        created() {
            api.getProvinceList().then((res) => {
                this.provinceList = res.data.data.map((item) => {
                   item.name = item.provinceName;
                   return item;
                });
            })
        },
        data() {
            return {
                cityDisabled:true,
                cityActive: false,
                provinceActive: false,
                province: '省份',
                provinceList: [],
                cityList: [],
                city: "城市",
                searchList: [
                    "山东",
                    "甘肃",
                    "黑龙江",
                    "浙江",
                    "沈阳",
                ],
                searchWord:'',
                loading:false,
            }
        },
        components: {
            MSelect,
        },
        methods: {
            showProvince(value) {
                this.provinceActive = value;
                if (value) {
                    this.cityActive = false;
                }
            },
            showCity(value) {
                this.cityActive = value;
                if (value) {
                    this.provinceActive = false;
                }
            },
            remoteMethod(e){
               console.log(e);
               //请求后端接口
            },
            changeProvince(item){
                this.province = item.name;
                this.cityDisabled = false;
                this.cityList = item.cityInfoList;
            },
            changeCity(item){
                this.city = item.name;
                this.$store.dispatch("setPosition",item);
                this.$router.push({name:"index"});
            }
        },
    }
</script>
<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss";
</style>