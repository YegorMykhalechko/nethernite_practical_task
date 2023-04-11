export default {
  namespaced: true,

  state: () => ({
    loading: false
  }),
  mutations: {
    setLoading(state, val) {
      state.loading = val
    }
  }
}
