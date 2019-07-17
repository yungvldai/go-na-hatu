export default {
  state: {
    loading: false
  },
  mutations: {
    'app/loading': function(state, value) {
      state.loading = value;
    }
  }
}
