import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/app.css'
import store from './store/index'
import './uiLib.js'
import mobileDetect from './services/mobile-detect.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (mobileDetect()) {
  store.commit('app/setMobile', true);
}
