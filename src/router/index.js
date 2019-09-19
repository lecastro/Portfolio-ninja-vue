import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/HomePages';
import Project from '@/pages/RepositoryPages.vue';
import Skills from '@/pages/SkillsPages.vue';
import Contacts from '@/pages/ContactsPages.vue';
import About from '@/pages/AboutPages.vue';

Vue.use(Router)

export default new Router({
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
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
