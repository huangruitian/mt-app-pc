<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in classicList" :key="item.type">
                <m-select :name="item.title" :list="item.subList" />
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in areaList" :key="item.type">
                <m-select :name="item.title" :list="item.subList" />
            </dd>
        </dl>
    </div>
</template>
<script>
    import MSelect from './Select.vue';
    import api from '@/api/index.js'
    export default {
        mounted() {
            api.getClassify().then((res) => {
                this.classicList = res.data.data;
            })
            api.getAreaList().then((res) => {
                this.dataStr = res.data;
                console.log(this.dataStr);
            });
            // this.areaList = (JSON.parse(this.dataStr)).data;
        },
        components: {
            MSelect,
        },
        computed: {

        },
        data() {
            return {
                dataStr:'',
                classicList: [],
                areaList: [
                    {
                        "title": "推荐商圈",
                        "subList": [{
                            "name": "望京",
                            "id": 120000
                        }, {
                            "name": "昌平",
                            "id": 12222
                        }]
                    }
                ]
            }
        },
    }
</script>