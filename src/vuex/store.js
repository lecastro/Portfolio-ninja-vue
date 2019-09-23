import Vue from 'vue';
import Vuex from 'vuex';

import Repository from './modules/github/Repository.js';
import Avatar from './modules/github/Avatar.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Repository,
    Avatar
  }
});


export default store;
