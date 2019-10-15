<template>
<div id="main">
  <div class="main-network">
    <a :href="links.facebook" target="_blank"><img :src="images.facebook" :alt="images.facebook" /></a>
    <a :href="links.github" target="_blank"><img :src="images.github" :alt="images.github" /></a>
    <a :href="links.instagram" target="_blank"><img :src="images.instagram" :alt="images.instagram" /></a>
    <a :href="links.linkedin" target="_blank"><img :src="images.linkedin" :alt="images.linkedin" /></a>
  </div>
</div>
</template>

<script>
import facebook from '../assets/social/facebook.png';
import github from '../assets/social/github.png';
import instagram from '../assets/social/instagram.png';
import linkedin from '../assets/social/linkedin.png';

export default {
  data() {
    return {
      images: {
        facebook,
        github,
        instagram,
        linkedin,
      },
      links: {
        facebook: process.env.LINK_FACEBOOK,
        github: process.env.LINK_GITHUB,
        instagram: process.env.LINK_INSTAGRAM,
        linkedin: process.env.LINK_LINKDIN
      }
    }
  },
}
</script>

<style scoped>
#main .main-network {
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#main .main-network img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
}

#main .main-network img {
  margin: 15px;
}

#main .main-network img:hover {
  -webkit-transform: scale(1.8);
  -ms-transform: scale(1.8);
  transform: scale(1.8);
}
</style>
