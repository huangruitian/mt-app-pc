<template>
    <div class="m-istyle">
        <dl @mouseover="over" :class="nav.class">
            <dt>{{nav.title}}</dt>
            <dd v-for="(item, index) in nav.list" :key="index" :class="{active:kind == item.tab}" :data-type="item.tab">{{item.text}}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item,index) in resultData[kind]" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img :src="item.image" class="image">
                    <div class="cbody">
                        <div class="title" :title="item.title">{{item.title}}</div>
                        <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
                        <!-- <div class="price-info" v-if="item.rentNum && item.price_info.current_price"> -->
                        <div class="price-info">                            
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price}}</span>
                            </span>
                            <span class="sold bottom-right-info">{{item.address}}</span>                            
                            <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span> -->
                        </div>
                        <!-- <div class="price-info" v-else-if="!item.rentNum">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                        </div>
                        <div class="price-info" v-else>
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                                <span class="units">/{{item.price_info.units}}</span>
                            </span>
                        </div> -->
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>
<script>
    import api from '@/api/index.js';
    export default {
        props: ["nav"],
        created() {
            api.resultsByKeywords().then((res) => {
                   console.log(res);
                   this.resultData = res.data.data;
            })
        },
        data() {
            return {
                kind: 'all',
                resultData:{},
                list: [
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: null,
                            old_price: null,
                            avg_price: 18,
                            units: '人均',
                        },
                        rentNum: 10,
                        address: '王府井/东单',
                    },
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: 188,
                            old_price: 288
                        },
                        address: '王府井/东单',
                    },
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: 188,
                            old_price: 288,
                            avg_price: null,
                            units: null,
                        },
                        rentNum: 10,
                        address: '王府井/东单',
                    },
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: 188,
                            old_price: 288
                        },
                        address: '王府井/东单',
                    },
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: 188,
                            old_price: 288
                        },
                        address: '王府井/东单',
                    },
                    {
                        image: '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
                        title: '小王府徽菜臭鳜鱼',
                        sub_title: '推荐招牌双人套餐，有赠品',
                        price_info: {
                            current_price: 188,
                            old_price: 288
                        },
                        address: '王府井/东单',
                    },
                ]
            }
        },
        methods: {
            over(e) {
                let dom = e.target;
                let tagName = dom.tagName.toLowerCase();
                //编程技巧，要先考虑不等于的情况，这样的代码看起来也优雅
                if (tagName != "dd") {
                    return false;
                }
                this.kind = dom.getAttribute("data-type");
                //动态获取数据 ajax请求
            }
        },
    }
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>