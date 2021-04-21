import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: false
  },
  mutations: {
    activaProgress (state) {
      state.progress = true
    },
    desactivaProgress (state) {
      state.progress = false
    }
  },
  actions: {
  },
  modules: {
  }
})
