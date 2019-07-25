import { api } from '@/services/api.js';

export default {
  state: {
    partyList: []
  },
  mutations: {
    'party/save': function(state, newPartyList) {
      state.partyList = newPartyList;
    }
  },
  actions: {
    'party/get': function({commit}, callback) {
      commit('app/loading', true);
      api.get('/api/parties/all')
      .then(response => {
        commit('party/save', response.data);
        callback();
      })
      .catch(() => {

      })
      .finally(() => {
        commit('app/loading', false);
      })
    }
  }
}
