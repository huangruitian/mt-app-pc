// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'// 引入vue
import App from './App'
import router from './router'// 会自动找当前的router文件夹的index
import store from './store'// vuex
import ElementUI from 'element-ui'// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'// 引入项目的重置css样式，可以自己去找一个rest.css

Vue.use(ElementUI)// 使用element-ui
Vue.config.productionTip = false
Vue.directive('documenet-click', {// 自定义指令
  // 自定义指令的生命钩子
  bind () {
  },
  inserted () {
  },
  update (el, binding, VNode) {
    document.addEventListener('click', binding.value, false)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app', // 需要挂载的根元素
  router, // 项目路由
  store, // vuex
  components: { App }, // 组件，根组件
  template: '<App/>'// 跟组件模版，相当于项目的root
})
