import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex要先引入vue,然后让vue使用vuex
Vue.use(Vuex)

const state = {
  position: {},
  userName: '',
  foodType: '',
  tradeName: ''// 店名
}
const mutations = {
  setPosition (state, val) {
    state.position = val
    state.address = '中国,' + state.position.name
  },
  setUserName (state, val) {
    state.userName = val
  },
  setFoodType (state, val) {
    state.foodType = val
  },
  setTradeName (state, val) {
    state.tradeName = val
  }
}
const getters = {
  // 城市切换了就把他的经纬度算出来
  // address(state) {
  //   let address = '中国,' + state.position.name;
  //   return address;
  // },
}
const actions = {
  setPosition ({ commit }, val) { // 可以直接用es6的解构赋值,或者使用state
    // 异步请求后端数据，位置信息
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  // 在这里也可以对store分模块 modules:{  },注意模块那边要开启命名空间。
  state, // 公共数据池
  getters,
  mutations, // 一般修改数据池的数据要先经过mutations，异步的话用actions
  // 处理异步请求数据池数据的时候使用
  actions
})
