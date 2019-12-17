import Vue from 'vue';
import Vuex from 'vuex';

import github from './modules/github';
import index from './modules/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    github,
    index
  }
});

export default store;
