import { api } from '@/services/api.js';

export default {
  state: {
    partyList: [
      {

      }
    ]
  },
  mutations: {
    'party/save': function(state, newPartyList) {
      state.partyList = newPartyList;
    }
  },
  actions: {
    'party/get': function({state, commit}) {
      commit('app/loading', true);
      api.get('partylist')
      .then(response => {
        commit('party/save', response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        commit('app/loading', false);
      })
    }
  }
}
