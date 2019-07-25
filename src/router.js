import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '@/views/Main.vue'
import PartyList from '@/views/PartyList/PartyList.vue'
import PartyMap from '@/views/PartyMap/PartyMap.vue'
import PartyCreate from '@/views/PartyCreate/PartyCreate.vue'

import store from '@/store/index'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/map',
      name: 'map',
      component: PartyMap
    },
    {
      path: '/list',
      name: 'list',
      component: PartyList
    },
    {
      path: '/create',
      name: 'create',
      component: PartyCreate
    }

  ]
});

router.beforeEach((to, from, next) => {
  if (from.name === 'list') {
    store.commit('user/saveScroll', {
      x: window.pageXOffset,
      y: window.pageYOffset
    });
  }
  next();
});

export default router;
