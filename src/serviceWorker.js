import { register } from 'register-service-worker'
import store from '@/store/index';

register('/service-worker.js', {
  registrationOptions: { scope: './' },
  ready (/*registration*/) {
    //console.log('Service worker is active.')
  },
  registered (/*registration*/) {
    //console.log('Service worker has been registered.')
  },
  cached (/*registration*/) {
    //console.log('Content has been cached for offline use.')
  },
  updatefound (/*registration*/) {
    //console.log('New content is downloading.')
  },
  updated (/*registration*/) {
    //console.log('New content is available; please refresh.');
    store.dispatch('app/snackOpen', 'Новый контент. Пожалуста, обновите страницу');
  },
  offline () {
    //console.log('No internet connection found. App is running in offline mode.');
    store.dispatch('app/snackOpen', 'Переход в оффлайн-режим');
  },
  error (error) {
    //console.error('Error during service worker registration:', error)
  }
})
