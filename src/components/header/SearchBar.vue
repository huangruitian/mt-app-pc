<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" @focus="focus" @blur="blur" @input="input" type="input" placeholder="请输入内容">
                    </el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="index">
                            <router-link :to="{name:'goods',params:{name:item} }">
                                {{item}}
                            </router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item,index) in searchList" :key="index">
                            <router-link :to="{name:'goods',params:{name:item} }">
                                {{item}}
                            </router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="/" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '@/api/index.js';
    export default {
        mounted() {
            api.searchHotWords().then(res => {
                //    console.log(res);
                this.suggestList = res.data.data;
            });

            api.getSearchList().then(res => {
                this.hotPlaceList = res.data.data.list;
            })
        },
        data() {
            return {
                searchWord: '', // 输入框的值
                isFocus: false, // 聚焦了吗？
                hotPlaceList: [],
                searchList: [],
                suggestList: []
            }
        },
        computed: {
            isHotPlace() {
                return this.isFocus && !this.searchWord// 聚焦了，输出框没东西，显示热搜索
            },
            isSearchList() {
                return this.isFocus && this.searchWord// 聚焦了，输出框输入了值，查询
            }
        },
        methods: {
            focus() {
                this.isFocus = true
            },
            blur() {
                // 点击智能搜索的时候，离开马上触发这个函数，所以要设置延迟一个点击动作的时间
                const self = this
                setTimeout(() => { // 定时器的this指向window
                    self.isFocus = false
                }, 300)
            },
            input() {
                //前端拿到后端数据过滤（搜索功能）
                // console.log(this.searchWord); getSearchList
                let val = this.searchWord;
                api.getSearchList().then(res => {
                    // console.log(res);
                    this.searchList = res.data.data.list.filter((item, index) => {
                        return item.indexOf(val) > -1;
                    });
                });
            }
        }
    }
</script>