<template>
    <div class="productDeatil">
        <el-row>
            <crumbs/>
        </el-row>
        <el-row>
            <deatil 
             :title="title" 
             :imgUrl="imgUrl"  
             :score="score"  
             :avgPrice="avgPrice"  
             :address="address"  
             :phone="phone" 
             :businessTime="businessTime"  
             :service="service" />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <coupon :dealItems = "dealItems"/>
                </el-row>
                <el-row>
                    <recommend :recommend = "recommend"/>
                </el-row>
                <el-row>
                    <comment :comment="comment"/>
                </el-row>
            </el-col>
            <el-col :span="5">
                <like/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Crumbs from '@/components/productDeatil/Crumbs';
    import Like from '@/components/products/Like';
    import Deatil from '@/components/productDeatil/Deatil';
    import Coupon from '@/components/productDeatil/Coupon';
    import Recommend from '@/components/productDeatil/Recommend';
    import Comment from '@/components/productDeatil/Comment';
    import api from '@/api/index.js';
    export default {
        mounted() {
            api.getItemDetail().then((res) => {
                    this.productDeatil = res.data.data;
                    this.imgUrl = this.productDeatil.imgUrl
                    this.score = this.productDeatil.score
                    this.avgPrice = this.productDeatil.avgPrice
                    this.address = this.productDeatil.address
                    this.phone = this.productDeatil.phone
                    this.businessTime = this.productDeatil.businessTime
                    this.service = this.productDeatil.service
                    this.dealItems = this.productDeatil.dealItems
                    this.recommend = this.productDeatil.recommend
                    this.comment = this.productDeatil.comment;
                    //没传店名就用以前的
                    console.log("route",this.$route.params.type)
                    if(this.$route.params.type){
                        //点哪家店就把哪家店的名字传过来
                        this.title = this.$route.params.type;
                        //跨组建要用这个类名
                        this.$store.commit('setTradeName',this.$route.params.type);
                    }else{
                        this.title = this.productDeatil.title;
                        this.$store.commit('setTradeName',this.title);
                    }
            });
        },
        data() {
            return {
                productDeatil: [],
                title: '',
                imgUrl: '',
                score: 0,
                avgPrice: 0,
                address: '',
                phone: '',
                businessTime: '',
                service: [],
                dealItems:[],
                recommend:[],
                comment:[],
            }
        },
        components: {
            Crumbs,
            Deatil,
            Like,
            Coupon,
            Recommend,
            Comment,
        },
    }
</script>