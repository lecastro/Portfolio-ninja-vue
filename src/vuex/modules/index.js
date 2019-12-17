export default {
  namespaced: true,
  state: {
    isActive: false
  },

  mutations: {
    STOP_HELLO_WORLD(state, obj) {
      state.isActive = obj
    }
  }
}
