export default {
  state: {
    loading: false,
    needToLoad: true,
    oneLocation: [0, 0]
  },
  mutations: {
    'app/loadOnlyOneLocation': function(state, location) {
      state.needToLoad = false;
      state.oneLocation = location;
    },
    'app/loadAllLocations': function(state) {
      state.needToLoad = true;
    },
    'app/loading': function(state, value) {
      state.loading = value;
    }
  }
}
