<template>
<div class="cards">
    <div class="card-item" v-for="(item, index) in repository" :key="index">
      <img class="article-img" :src='github' :alt='github' />
      <footer>
        <strong>{{ item.name }}</strong>
      </footer>
    </div>
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
  border-radius: 5px 5px 5px 5px;
  height: 75px;
  width: 75px;
}

.cards{
  padding-top: 3%;
  padding-left: 11%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  align-items: center;
  grid-gap: 10px;
}

.card-item footer {
  font-size: 13px;
  color: #fff;
}


@media (max-width: 500px) {
  .cards{
    padding-left: 40%;
    padding-top: 10%;
  }
}

</style>
