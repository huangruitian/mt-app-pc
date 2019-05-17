/* eslint-disable no-new */
import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/Default'
// 空业
import Index from '@/page/Index'// 项目模版页;
const BlankPage = () => import('@/layout/Blank')// 主页
const ChangeCity = () => import('@/page/ChangeCity')// 选择城市
const GoodsList = () => import('@/page/GoodsList')// 产品展示
const ProductDeatil = () => import('@/page/ProductDeatil')// 产品展示列表的每一项
const Register = () => import('@/page/Register')// 注册页面
const Login = () => import('@/page/Login')// 登录页面,路由懒加载

// 首先路由也可以想vuex一样模块化管理
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [// 如果路由子项过多，可以通过模块化的形式来配置
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
      redirect: '/index', // 重定向指向
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        },
        {
          path: '/productDeatil',
          name: 'productDeatil',
          component: ProductDeatil
        }
      ]
    },
    {
      path: '/blink',
      name: 'blankPage',
      component: BlankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
