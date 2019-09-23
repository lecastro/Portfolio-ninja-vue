<template>
<div id="main">
  <div class="main-avatar">
    <img :src="avatar" :alt="avatar" />
    <h1>{{ this.message }}</h1>
    <p>{{ this.name }}</p>
  </div>
  <NetworkComponent></NetworkComponent>
</div>
</template>

<script>
import avatar from "../assets/lucas-castro.jpg";
import NetworkComponent from "../components/NetworkComponent.vue";

export default {
  data() {
    return {
      avatar,
      message: 'Hello World!',
      name: 'Lucas Castro | Junior Software Developer'
    };
  },
  components: {
    NetworkComponent
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Bungee+Shade");

#main .main-avatar {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

#main .main-avatar img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px;
}

#main .main-avatar h1 {
  color: #000;
  font-size: 35px;
  font-family: 'Bungee Shade';
  text-align: center;
}

#main .main-avatar p {
  font-size: 18px;
  color: #fff;
}

@media screen and (max-width: 850px) {
  #main .main-avatar h1 {
    font-size: 2em;
  }
}

@media screen and (max-width: 550px) {
  #main .main-avatar h1 {
    font-size: 1.5em;
  }
}
</style>
