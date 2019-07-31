import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app.js';
import user from './modules/user.js';
import party from './modules/party.js';
import owner from './modules/owner.js';
import go from './modules/go.js';

const modules = {
  app,
  user,
  party,
  owner,
  go
};

export default new Vuex.Store({
  modules
})
