import Vue from 'vue'
import About from '../components/About'
import HelloWorld from '../components/HelloWorld'
import Menu from '../components/Menu'
import Network from '../components/Network'
import Repository from '../components/Repository'
import Skills from '../components/Skills'

// resgistrando os componestes de forma global

[
  About,
  HelloWorld,
  Menu,
  Network,
  Repository,
  Skills
].forEach(Component => {
  Vue.component(Component.name, Component)
})
