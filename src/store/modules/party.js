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
    'oneparty/get': function({commit}, {id, callback = () => {}}) {
      commit('app/loading', true);
      api.get('/api/parties/party/' + id)
      .then(response => {
        commit('oneparty/save', response.data);
        callback();
      })
      .catch(() => {

      })
      .finally(() => {
        commit('app/loading', false);
      })
    },
    'party/get': function({commit}, callback = () => {}) {
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
    },
    'party/delete': function({commit}, {callback = () => {}, id}) {
      commit('app/loading', true);
      api.delete('/api/parties/party/' + id)
      .then(() => {
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
