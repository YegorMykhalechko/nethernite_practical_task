import api from '../../api'

export default {
  namespaced: true,

  state: () => ({
    packages: []
  }),

  getters: {
    allPackages(state) {
      return state.packages
    }
  },

  actions: {
    async getPackages({ commit }, data) {
      // const res = await api.get(`search?text=${data.query}&size=${data.size}`)
      // const res20 = await api.get(`search?text=${data.query}`)
      // const resoffset = await api.get(`search?text=${data.query}&size=${data.size}&from=10`)
      // console.log('res10:', res)
      // console.log('res20:', res20)
      // console.log('resOffset:', resoffset)
      // commit('setPackages', res)
    }
  },

  mutations: {
    setPackages(state, packages) {
      state.packages = packages
    }
  }
}
