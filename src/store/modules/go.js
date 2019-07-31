export default {
  state: {
    party: null
  },
  actions: {

  },
  mutations: {
    'go/party': function(state, party) {
      state.party = party;
    },
    'go/delete': function(state) {
      state.party = null;
    }
  }
}
