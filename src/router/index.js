import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/pages/HomeComponent';
import ProjectComponent from '@/pages/ProjectComponent.vue';
import SkillsComponent from '@/pages/SkillsComponent.vue';
import ContactsComponent from '@/pages/ContactsComponent';
import AboutComponent from '@/pages/AboutComponent.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsComponent
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectComponent
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
  ]
})
