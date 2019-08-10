import { api } from './api';
import store from '@/store/index';
import router from '@/router';

export default function() {
  const partyId = localStorage.getItem('party--id');
  const privateKey = localStorage.getItem('private--key');
  const goTo = localStorage.getItem('go--to');

  if (partyId && privateKey) {
    store.commit('app/loading', true);
    api.get('/api/parties/party/' + partyId)
    .then(response => {
      store.commit('owner/party', response.data);
      router.push('/poll');
    })
    .catch(() => {
      localStorage.removeItem('party--id');
      localStorage.removeItem('pivate--key');
      store.dispatch('app/snackOpen', 'Ваша туса была удалена из-за нарушения правил.');
    })
    .finally(() => {
      store.commit('app/loading', false);
    })
  } else if (goTo) {
    store.commit('app/loading', true);
    api.get('/api/parties/party/' + goTo)
    .then(response => {
      store.commit('go/party', response.data);
      router.push('/');
      setTimeout(() => {
        router.push('/go'); // это фикс некорректного отображения mapbox
      }, 0);
    })
    .catch(() => {
      localStorage.removeItem('go--to');
      store.dispatch('app/snackOpen', 'Туса, на которую Вы шли, закончилась или была удалена.');
    })
    .finally(() => {
      store.commit('app/loading', false);
    })
  }
}
