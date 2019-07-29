export default {
  state: {
    party: null
  },
  actions: {

  },
  mutations: {
    'owner/party': function(state, party) {
      state.party = party;
    },
    'owner/delete': function(state) {
      state.party = null;
    }
  }
}
