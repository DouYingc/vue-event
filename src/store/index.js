import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储登录成功后得到的 token
    token: ''
  },
  getters: {
  },
  mutations: {
    // 更新 token 的 mutation 函数
    updateToken (state, val) {
      state.token = val
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
