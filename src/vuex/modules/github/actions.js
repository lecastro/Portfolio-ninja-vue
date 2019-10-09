import axios from 'axios';

// listar project do gitgub
const loadRepository = async ({ commit }) => {

  const repository = (await axios.get('https://api.github.com/users/lecastro/repos')).data;

  commit('LOAD_REPOSITORY', { repository })
}

// buscar avatar github
const loadAvatar = async ({ commit }) => {

  const resul = (await axios.get('https://api.github.com/users/lecastro')).data;

  const avatar = { name: resul.name, avatar_url: resul.avatar_url };

  commit('LOAD_AVATAR', { avatar })
}

export default {
  loadRepository,
  loadAvatar
}
