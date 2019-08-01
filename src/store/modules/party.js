import { api } from '@/services/api.js';

export default {
  state: {
    partyList: [],
    oneParty: {}
  },
  mutations: {
    'party/save': function(state, newPartyList) {
      state.partyList = newPartyList;
    },
    'oneparty/save': function(state, newOneParty) {
      state.oneParty = newOneParty;
    }
  },
  actions: {
    'oneparty/get': function({commit, dispatch}, {id, callback = () => {}}) {
      commit('app/loading', true);
      api.get('/api/parties/party/' + id)
      .then(response => {
        commit('oneparty/save', response.data);
        callback();
      })
      .catch(() => {
        dispatch('app/snackOpen', 'Ошибка сети');
      })
      .finally(() => {
        commit('app/loading', false);
      })
    },
    'party/get': function({commit, dispatch}, callback = () => {}) {
      commit('app/loading', true);
      api.get('/api/parties/all')
      .then(response => {
        commit('party/save', response.data);
        callback();
      })
      .catch(() => {
        dispatch('app/snackOpen', 'Ошибка сети');
      })
      .finally(() => {
        commit('app/loading', false);
      })
    },
    'party/delete': function({commit, dispatch}, {callback = () => {}, id, key}) {
      commit('app/loading', true);
      api.delete('/api/parties/party/' + id, {
        headers: {
          'Access-Key': key
        }
      })
      .then(() => {
        callback();
      })
      .catch(() => {
        dispatch('app/snackOpen', 'Ошибка сети или неверный ключ для удаления');
      })
      .finally(() => {
        commit('app/loading', false);
      })
    }
  }
}
