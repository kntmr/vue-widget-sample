import api from '@/api/items'

const state = {
  items: [],
  query: ''
}

const getters = {
  items: state => state.items,
  query: state => state.query
}

const mutations = {
  setItems: (state, items) => {
    state.items = items
  },
  setQuery: (state, query) => {
    state.query = query
  }
}

const actions = {
  getItems: ({ commit }, query) => {
    return api.getItems(query).then(items => {
      commit('setItems', items)
    })
  },
  setQuery: ({ commit }, query) => {
    commit('setQuery', query)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
