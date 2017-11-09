import api from '@/api/items'

const state = {
  items: []
}

const getters = {
  items: state => state.items
}

const mutations = {
  setItems: (state, items) => {
    state.items = items
  }
}

const actions = {
  getItems: ({ commit }) => {
    return api.getItems().then(items => {
      commit('setItems', items)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
