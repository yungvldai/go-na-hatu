import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '@/views/Main.vue'
import PartyList from '@/views/PartyList.vue'
import PartyMap from '@/views/PartyMap.vue'
import vueScrollBehavior from 'vue-scroll-behavior'

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
      //component: PartyCreate
    }

  ]
});

Vue.use(vueScrollBehavior, { router: router });

export default router;
