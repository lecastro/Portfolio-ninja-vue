<template>
<div class='main-container'>
    <ul>
        <li>
          <img :src='github' :alt='github' />
            <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
            </footer>
        </li>
    </ul>

    <ul>
        <li>
          <img :src='github' :alt='github' />
            <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
            </footer>
        </li>
    </ul>


    <ul>
        <li>
          <img :src='github' :alt='github' />
            <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
            </footer>
        </li>
    </ul>

</div>
</template>

<script>
import github from '../assets/github.gif'
export default {
  data() {
    return {
      github
    }
  },
}
</script>

<style scoped>

.main-container{
  max-width: 80px;
  margin: 0 auto;
  padding: 25px;
}
.main-container ul {
  list-style: none;
}
.main-container ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

}
.main-container ul li {
    flex-direction: column;
}
.main-container ul li img{
  max-width: 100%;
  border-radius: 5px 5px 0 0;
}
.main-container ul li footer{
  flex: 1;
  background: #fff;
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
}
</style>
