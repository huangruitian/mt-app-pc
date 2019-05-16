<template>
    <div class="coupon">
        <h3>商家团购及优惠</h3>
        <div class="coupon-item" v-for="(item,index) in dealItems">
            <p>{{item.title}}</p>
            <p>已售{{item.saleNum}}</p>
            <p>￥{{item.counterPrice}} 门店价￥{{item.price}}{{item.priceType}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            "dealItems"
        ],
    }
</script>
<style>
    .coupon{
        border: 1px solid black;
        padding-top: 10px;
    }
    .coupon-item{
        padding-bottom: 10px;
        border-bottom: 1px solid red;
    }
    h3{
        padding-bottom: 10px;
    }
</style>