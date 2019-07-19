import { api } from '@/services/api.js';

export default {
  state: {
    partyList: [
      {
        id: 1,
        description: 'У нас сегодня самая топовая рок вечерина 🔥🔥🔥 Приходи и оторвись под самые зажигательные треки, ну и конечно бахни пива 🍻',
        weWant: 'чтобы ты принес немного еды, потому что мы вообще забыли купить ее 🍔🍟🍕🥪 ',
        weHave: 'все, чтобы тебе было хорошо этим вечером',
        peopleNow: 3,
        peopleMax: 10,
        address: 'СПб, пер. Вяземский 5-7',
        price: 100,
        phone: '+73248934003',
        orgName: 'Савелий',
        where: [30.301980, 59.972366]
      },
      // {
      //   id: 2,
      //   description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификац',
      //   weWant: 'водочки и закуски',
      //   peopleNow: 103,
      //   phone: '8324345403',
      //   orgName: 'Sergey',
      //   where: [0, 0]
      // },
      // {
      //   id: 3,
      //   description: 'Есть много вариантов Lorem Ipsum, но бол',
      //   weHave: 'колонка и немного пива',
      //   peopleMax: 11,
      //   peopleNow: 10,
      //   address: 'за городом',
      //   price: 10000,
      //   phone: '+7324355003',
      //   where: [20, 20]
      // }
    ]
  },
  mutations: {
    'party/save': function(state, newPartyList) {
      state.partyList = newPartyList;
    }
  },
  actions: {
    'party/get': function({commit}) {
      commit('app/loading', true);
      api.get('partylist')
      .then(response => {
        commit('party/save', response.data);
      })
      .catch(() => {

      })
      .finally(() => {
        commit('app/loading', false);
      })
    }
  }
}
