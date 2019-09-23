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
    },
    LOAD_AVATAR(state, avatar) {
      state.items = avatar
    }
  },
  actions: {
    loadAvatar(context) {
      axios
        .get(`https://api.github.com/users/lecastro`)
        .then(Response => context.commit('LOAD_AVATAR', Response.data))
        .catch(Response => {
          console.log(Response);
        });
    }
  }
}
