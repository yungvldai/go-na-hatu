export default {
  state: {
    loading: false,
    needToLoad: true,
    oneLocation: [0, 0],
    oneId: null
  },
  mutations: {
    'app/loadOnlyOneLocation': function(state, {location, id}) {
      state.needToLoad = false;
      state.oneLocation = location;
      state.oneId = id;
    },
    'app/loadAllLocations': function(state) {
      state.needToLoad = true;
    },
    'app/loading': function(state, value) {
      state.loading = value;
    }
  }
}
