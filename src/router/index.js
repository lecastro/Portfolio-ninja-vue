import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue';
import Project from '@/pages/Repository.vue';
import Skills from '@/pages/Skills.vue';
import About from '@/pages/About.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
