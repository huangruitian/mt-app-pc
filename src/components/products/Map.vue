<template>
    <div class="map" id="map">
    </div>
</template>
<script>
    export default {
        created() {
        },
        mounted() {
            this.codeAddress();
            // this.init(this.lng, this.lat);
        },
        data() {
            return {
                // lng:null,
                // lat:null,
            }
        },
        methods: {
            codeAddress() {
                var geocoder = null;
                // var address = this.$store.state.address;
                var address = '中国,北京,海淀区,海淀大街38号';
                var self = this;
                geocoder = new qq.maps.Geocoder();
                console.log(address);
                //对指定地址进行解析
                geocoder.getLocation(address);
                //设置服务请求成功的回调函数
                geocoder.setComplete(res => {
                    // self.lng = res.detail.location.lng;
                    // self.lat = res.detail.location.lat;
                    self.init(res.detail.location.lng, res.detail.location.lat);
                });
                console.log(this.lng);
                //若服务请求失败，则运行以下函数
                geocoder.setError(function () {
                    console.log("出错了，请输入正确的地址！！！");
                    self.init(126.556824,45.717838);
                });
            },

            init(longitude, latitude) {
                console.log(longitude,latitude);
                //设置地图中心点
                var myLatlng = new qq.maps.LatLng(longitude, latitude);
                //定义工厂模式函数
                var myOptions = {
                    zoom: 8,               //设置地图缩放级别
                    center: myLatlng,      //设置中心点样式
                    mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
                }
                //获取dom元素添加地图信息
                var map = new qq.maps.Map(document.getElementById("map"), myOptions);
            }
        },
    }
</script>
<style lang="scss">
    @import '@/assets/css/products/map.scss';
</style>