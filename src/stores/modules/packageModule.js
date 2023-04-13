import api from '../../api'

export default {
  namespaced: true,

  state: () => ({
    packages: [],
    sizePackage: 10,
    queryPackage: null
  }),

  getters: {
    allPackages(state) {
      return state.packages.objects
    },

    allPages(state) {
      return Math.ceil(state.packages.total / state.sizePackage)
    }
  },

  actions: {
    async getPackages({ commit, state }, query) {
      try {
        const res = await api.get(`search?text=${query}&size=${state.sizePackage}`)
        commit('setPackages', res)
        commit('setDataQuery', query)
      } catch (err) {
        console.log(err)
      }
    },

    async getNextPackages({ commit, state }, offset) {
      try {
        const res = await api.get(
          `search?text=${state.queryPackage}&size=${state.sizePackage}&from=${offset}`
        )
        commit('setNextPackages', res)
      } catch (err) {
        console.log(err)
      }
    }
  },

  mutations: {
    setPackages(state, packages) {
      state.packages = packages
    },

    setDataQuery(state, query) {
      state.queryPackage = query
    },

    setNextPackages(state, packages) {
      state.packages = packages
    }
  }
}
