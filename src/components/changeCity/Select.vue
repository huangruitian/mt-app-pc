<template>
    <div :class="['choose-wrap',disabled ? 'disabled' : '']" @click="showWrapper" v-documenet-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{ 'mt-content':true, 'active':showWrapperActive }">
                 <h2>{{title}}</h2>
                 <div :class="['wrapper',className]">
                     <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <span :class="{'mt-item':true,'active': item.name == value }" v-for="(item,index) in listData" :key="index" @click="changeCity(item)">{{item.name}}</span>
                     </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
         return {
            // showWrapperActive:false,
         }
     },
     props: [
          'list',
          'value',
          'title',
          'showWrapperActive',//父组件向子组件传值
          'disabled',//没选省份不给选城市
          'className'
     ],
     computed: {
          renderList(){
              let col = Math.ceil(this.list.length / 12);
              let resultList = [];
              for(let i = 0; i < col; i++){
                  let data = this.list.slice(i * 12, i * 12 + 12);
                  resultList.push(data);
              }
              return resultList;
          }
     },
     methods: {
        showWrapper(e){
            e.stopPropagation();
            // this.showWrapperActive = true;
            if(!this.disabled){
                this.$emit('change_active',true);//子组件向父组件传值
            }
        },
        documentClick(){
           console.log('document-click');
        //    this.showWrapperActive = false;
           this.$emit('change_active',false);
        },
        changeCity(item){
           this.$emit('change',item);//子组件传值给父组件,然后子组件的值再和父组件传过来的值对比，相同就显示一个类名样式
        }
     },
}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/select.scss"; 
</style>