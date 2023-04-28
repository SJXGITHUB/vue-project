import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// 定义了全局数据

// 把state，mutations拆分到不同页面，再引入进来
export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   //   执行下方的mutations-changeCity
  //   }
  // },
  mutations: mutations
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
