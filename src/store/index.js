import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import items from './modules/items'

export default new Vuex.Store({
  modules: {
    items
  }
})
