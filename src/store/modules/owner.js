import { api } from '@/services/api';

export default {
  state: {
    party: null
  },
  actions: {
    'owner/reload': function({state, commit, dispatch}) {
      commit('app/loading', true);
      api.get('/api/parties/party/' + state.party.id)
      .then(response => {
        commit('owner/party', response.data);
      })
      .catch(() => {
        dispatch('app/snackOpen', 'Ошибка сети');
      })
      .finally(() => {
        commit('app/loading', false);
      })
    }
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
