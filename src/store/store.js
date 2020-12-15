import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutations'

export default new Vuex.Store({
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production'
})