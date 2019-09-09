import Vue from 'vue';
import Vuex from 'vuex';

import Repository from './modules/github/Repository.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Repository
  }
});


export default store;
