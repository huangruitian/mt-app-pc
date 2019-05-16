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
                console.log(res);
            })
            api.getAreaList().then((res) => {
                //这个接口返回的JSON格式有问题。
                this.dataStr = `{
                    "status": "success",
                    "msg": "成功",
                    "data": [
                        {
                            "title": "推荐商圈",
                            "subList": [{
                                "name": "望京",
                                "id": 120000
                            }, {
                                "name": "昌平",
                                "id": 12222
                            }]
                        },
                        {
                            "title": "南岗区",
                            "subList": [{
                                "name": "中央大街",
                                "id": 123
                            }, {
                                "name": "西客站",
                                "id": 11
                            }, {
                                "name": "花园街",
                                "id": 222
                            }, {
                                "name": "通乡街/果园街",
                                "id": 21
                            }, {
                                "name": "爱建社区",
                                "id": 1
                            }, {
                                "name": "学府路",
                                "id": 34
                            }]
                        }
                    ]
                    }`;
                this.areaList = JSON.parse(this.dataStr).data;
            });
        },
        components: {
            MSelect,
        },
        computed: {

        },
        data() {
            return {
                dataStr: '',
                classicList: [],
                areaList: [
                    // {
                    //     "title": "推荐商圈",
                    //     "subList": [{
                    //         "name": "望京",
                    //         "id": 120000
                    //     }, {
                    //         "name": "昌平",
                    //         "id": 12222
                    //     }]
                    // }
                ]
            }
        },
    }
</script>