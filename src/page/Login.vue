<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
           <div class="banner">
               <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
           </div>
           <div class="form">
               <h4 v-if="error" class="tips">{{error}}</h4>
               <p>
                 <span>帐号登录</span>
               </p>
               <el-input :class="{error: error && !userName}" v-model="userName" placeholder="手机/用户名/邮箱" prefix-icon="profile"></el-input>
               <el-input :class="{error: error && !password}" v-model="password" type="password" placeholder="密码" prefix-icon="password"></el-input>               
               <div class="foot">
                  <a href="#">忘记密码?</a> 
               </div>
               <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
               <p class="signup-guide">
                   <span>还没有帐号？</span>
                   <router-link :to="{name:'register'}">免费注册</router-link>
               </p>
               <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站帐号登录</span></h3>
                    <div class="oauth cf">
                        <a href="" class="oauth__link"></a>
                        <a href="" class="oauth__link oauth__link--weibo"></a>
                    </div>
               </div>
           </div>
        </div>
        <footer>
              <ul>
                  <li><a href="#">关于美团</a></li>
                  <li><a href="#">加入我们</a></li>
                  <li><a href="#">商家入驻</a></li>
                  <li><a href="#">帮助中心</a></li>
                  <li><a href="#">美团手机版</a></li>
              </ul>
              <p>
                    ©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
              </p>
        </footer>
    </div>
</template>
<script>
import api from "@/api/index.js";

export default {
   data() {
       return {
           userName:'',
           password:'',
           error:'',
       }
   },
   methods: {
      submit(){
           console.log(this.userName,this.password);
           if(!this.userName){
               this.error = '请输入帐号';
               return false;
           }
           if(!this.password){
               this.error = '请输入密码';
               return false;
           }
           api.login({
               params:{
                   userName:this.userName,
                   password:this.password,
               }
           }).then((res) => {
               console.log("res----",res);
               if(res.data.status === "success"){
                   this.$store.commit('setUserName',this.userName);
                   this.$router.push({name:"index"});
               }else{
                   this.error = res.data.msg;
               }
           });
      }
   }
}
</script>
<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>