import { api } from '@/services/api.js';

export default {
  state: {
    partyList: [
      {
        id: 1,
        description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые мода',
        weWant: 'водочки и закуски',
        weHave: 'колонка и немного пива',
        peopleNow: 3,
        peopleMax: 10,
        address: 'ул. Пушкина, 12',
        price: 100,
        phone: '+73248934003',
        orgName: 'Игорь'
      },
      {
        id: 2,
        description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификац',
        weWant: 'водочки и закуски',
        peopleNow: 103,
        phone: '8324345403',
        orgName: 'Sergey'
      },
      {
        id: 3,
        description: 'Есть много вариантов Lorem Ipsum, но бол',
        weHave: 'колонка и немного пива',
        peopleMax: 11,
        peopleNow: 10,
        address: 'за городом',
        price: 10000,
        phone: '+7324355003'
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
