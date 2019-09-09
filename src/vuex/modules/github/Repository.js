import axios from 'axios';

export default {
  state: {
    items: {
      data: []
    }
  },
  mutations: {
    LOAD_REPOSITOTY(state, repository) {
      state.items = repository;
    }
  },
  actions: {
    // listar project do gitgub
    loadRepository(context) {
      axios
        .get(`https://api.github.com/users/lecastro/repos`)
        .then(Response => context.commit('LOAD_REPOSITOTY', Response.data))
        .catch(Response => {
          console.log(Response);
        });
      // .finally();
    }
  }
}
