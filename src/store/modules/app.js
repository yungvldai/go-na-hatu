export default {
  state: {
    loading: false,
    needToLoad: true,
    oneLocation: [0, 0],
    oneId: null,
    isMobile: false,
    snackShow: false,
    shackText: ''
  },
  actions: {
    'app/snackOpen': function({commit}, text) {
      commit('app/snack', {text: text, show: true});
      setTimeout(() => commit('app/snack', {show: false}), 3000);
    }
  },
  mutations: {
    'app/snack': function(state, {show, text = ''}) {
      state.snackShow = show;
      state.snackText = text;
    },



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
    },
    'app/setMobile': function(state, value) {
      state.isMobile = value;
    }
  }
}
