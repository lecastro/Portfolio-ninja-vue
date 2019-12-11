<template>
<div id="app">
  <MenuCompoment />
</div>
</template>

<script>
import MenuCompoment from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    MenuCompoment
  }
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
  display: block;
}

body {

  background-color: #708090;
}

body,
input,
button {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
