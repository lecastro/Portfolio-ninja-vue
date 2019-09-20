<template>
<div id="cards-grid">
  <section>
      <div class="card-item" v-for="(item, index) in repository" :key="index">
        <img class="article-img" :src='github' :alt='github' />
        <strong>{{ item.name }}</strong>
      </div>
  </section>
</div>
</template>

<script>
import github from '../assets/github.gif'
export default {
  created() {
    this.loadRepository();
  },
  data() {
    return {
      github
    }
  },
  methods: {
    loadRepository(){
      this.$store.dispatch("loadRepository");
    }
  },
  computed: {
    repository(){
      return this.$store.state.Repository.items;
    }
  },
}
</script>

<style scoped>

img {
  max-width: 100%;
  display: block;
}

#cards-grid section{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 800px;
  margin: 0 auto;
  grid-gap: 28px;
  padding: 10px;
}

#cards-grid section > div:nth-child(n + 4){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  border-top: 0;
  /* overflow: scroll; */
}

#cards-grid section > div:nth-child(4){
  background: red;
  grid-column: 1;
  grid-row: 2/5;
  display: block;
}

@media(max-width: 600px){
  #cards-grid section{
  grid-template-columns: repeat(2, 1fr);
}
  #cards-grid section > div:nth-child(4) {
    grid-column: auto;
    grid-row: auto;
  }
}

</style>
