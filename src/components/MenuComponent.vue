<template>
  <div>
    <nav class="nav-menu nav-menu" v-bind:class="{'nav-menu--open':isActive}">
      <div class="nav-menu__toggle nav-menu-toggle" @click.prevent="btnOpen">
        <span class="nav-menu__bars"></span>
      </div>
      <ul class="menu-list">
        <router-link class="menu-list__item" v-on:click.native="closeMenu" :to="{name: 'home'}">Home</router-link>
        <router-link class="menu-list__item" v-on:click.native="closeMenu" :to="{name: 'skills'}">Skill</router-link>
        <router-link class="menu-list__item" v-on:click.native="closeMenu" :to="{name: 'project'}">Projetos</router-link>
        <router-link class="menu-list__item" v-on:click.native="closeMenu" :to="{name: 'contacts'}">Contato</router-link>
        <router-link class="menu-list__item" v-on:click.native="closeMenu" :to="{name: 'about'}">Sobre</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    btnOpen() {
      this.isActive === false
        ? (this.isActive = true)
        : (this.isActive = false);
    },
    closeMenu() {
      this.isActive = false
    }
  }
};
</script>

<style scoped>
.nav-menu__bars,
.nav-menu__bars::before,
.nav-menu__bars::after {
  cursor: pointer;
  border-radius: 1px;
  height: 2px;
  width: 25px;
  background: #bbbbbb;
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  transition: all 0.3s;
}

.nav-menu {
  background-color: transparent;
  height: 100%;
  position: fixed;
  width: 600px;
  transform: translateX(-100%);
  transition: transform 0.3s 0.3s;
}

.nav-menu::before {
  background: #4e567e;
  content: "";
  height: 400%;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%) rotate(40deg);
  width: 100%;
  z-index: 0;

}

.nav-menu--open {
  transform: translateX(0);
}
.nav-menu--open .nav-menu__bars {
  background-color: transparent;
}
.nav-menu--open .nav-menu__bars::before,
.nav-menu--open .nav-menu__bars::after {
  top: 0;
}
.nav-menu--open .nav-menu__bars::before {
  transform: rotate(45deg);
}
.nav-menu--open .nav-menu__bars::after {
  transform: rotate(-45deg);
}
.nav-menu--open .menu-list__item {
  opacity: 1;
}
.nav-menu--open .menu-list__item:nth-child(1) {
  transition-delay: 1s;
}
.nav-menu--open .menu-list__item:nth-child(2) {
  transition-delay: 1.25s;
}
.nav-menu--open .menu-list__item:nth-child(3) {
  transition-delay: 1.5s;
}
.nav-menu--open .menu-list__item:nth-child(4) {
  transition-delay: 1.75s;
}
.nav-menu--open .menu-list__item:nth-child(5) {
  transition-delay: 2s;
}
.nav-menu--open .menu-list__item:nth-child(6) {
  transition-delay: 2.25s;
}
.nav-menu--open .menu-list__item:nth-child(7) {
  transition-delay: 2.5s;
}
.nav-menu--open .menu-list__item:nth-child(8) {
  transition-delay: 2.75s;
}
.nav-menu--open .menu-list__item:nth-child(9) {
  transition-delay: 3s;
}
.nav-menu--open .menu-list__item:nth-child(10) {
  transition-delay: 3.25s;
}
.nav-menu--open .menu-list__item:nth-child(11) {
  transition-delay: 3.5s;
}
.nav-menu--open .menu-list__item:nth-child(12) {
  transition-delay: 3.75s;
}
.nav-menu__toggle {
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: -40px;
  top: 5px;
  width: 30px;
}
.nav-menu__bars::before,
.nav-menu__bars::after {
  content: "";
}
.nav-menu__bars::before {
  left: 0;
  top: -8px;
}
.nav-menu__bars::after {
  left: 0;
  top: 8px;
}

.menu-list {
  padding: 60px 20px;
  position: relative;
  z-index: 10;
}

.menu-list .menu-list__item{
  display: block;
}

.menu-list__item{
  list-style-type: none;
}

.menu-list__item{
  text-decoration:none;
}

.menu-list__item{
  font-size: 30px;
  color: #fff;
}

.menu-list__item {
  margin: 40px 0;
  opacity: 0;
  transition: opacity 0.5s 0.5s;
}
.menu-list__item:hover{
  color: #000;
}
@media only screen and (max-width: 700px) {
  .nav-menu {
    min-width: 240px;
    width: 80%;
  }
  .nav-menu::before {
    width: 110%;
  }
}
@media only screen and (max-width: 480px) {
  .nav-menu {
    background-color: #4e567e;
    min-width: 240px;
    width: 80%;
  }
  .nav-menu::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
</style>
