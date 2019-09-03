<template>
  <div id="center">
    <h1>My Skill</h1>
    <div class="box-skills" v-for="(skill, index) in pageOfItems" :key="index">
      <p>{{ skill.name }}</p>
      <p>{{ skill.level }}</p>
      <div class="skill">
        <div v-bind:class="skill.className"></div>
      </div>
    </div>
    <jw-pagination :items="skills" :pageSize='5' @changePage="onChangePage" :labels="customLabels"></jw-pagination>
  </div>
</template>

<script>
  import skills from '../Utils/Skills';
  import JwPagination from 'jw-vue-pagination';

  const customLabels = {
    first: 'inicio',
    last: 'última',
    previous: 'Voltar',
    next: 'Proxímo'
  };
  export default {
    data() {
      return {
        customLabels,
        skills,
        pageOfItems: [],
      }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    components:{
      'jw-pagination':JwPagination
    },
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  #center {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    background: #444;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  #center h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
  }

  #center .box-skills {
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0;
  }

  #center .box-skills p {
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 10px;
    padding: 0;
  }

  #center .box-skills p:nth-child(2) {
    float: right;
    position: relative;
    top: -30px;
  }

  #center .box-skills .skill {
    background: #262626;
    box-sizing: border-box;
    border: 1px solid #808080;
    border-radius: 4px;
  }

  .html {
    height: 10px;
    background: #2187e7;
    width: 90%;
    animation: html 4s;
  }

  @keyframes html {
    0% {
      width: 0%;
    }

    100% {
      width: 90%;
    }
  }

  .css {
    height: 10px;
    background: #2187e7;
    width: 50%;
    animation: css 4s;
  }

  @keyframes css {
    0% {
      width: 0%;
    }

    100% {
      width: 50%;
    }
  }

  .javascript {
    height: 10px;
    background: #2187e7;
    width: 70%;
    animation: javascript 4s;
  }

  @keyframes javascript {
    0% {
      width: 0%;
    }

    100% {
      width: 70%;
    }
  }

  .mysql {
    height: 10px;
    background: #2187e7;
    width: 80%;
    animation: mysql 4s;
  }

  @keyframes mysql {
    0% {
      width: 0%;
    }

    100% {
      width: 80%;
    }
  }

  .hardware {
    height: 10px;
    background: #2187e7;
    width: 60%;
    animation: hardware 4s;
  }

  @keyframes hardware {
    0% {
      width: 0%;
    }

    100% {
      width: 60%;
    }
  }

  .laravel {
    height: 10px;
    background: #2187e7;
    width: 75%;
    animation: laravel 4s;
  }

  @keyframes laravel {
    0% {
      width: 0%;
    }

    100% {
      width: 75%;
    }
  }

  .mvc {
    height: 10px;
    background: #2187e7;
    width: 65%;
    animation: mvc 4s;
  }

  @keyframes mvc {
    0% {
      width: 0%;
    }

    100% {
      width: 65%;
    }
  }

  .api {
    height: 10px;
    background: #2187e7;
    width: 77%;
    animation: api 4s;
  }

  @keyframes api {
    0% {
      width: 0%;
    }

    100% {
      width: 77%;
    }
  }

  .react {
    height: 10px;
    background: #2187e7;
    width: 40%;
    animation: react 4s;
  }

  @keyframes react {
    0% {
      width: 0%;
    }

    100% {
      width: 40%;
    }
  }

  .mongo {
    height: 10px;
    background: #2187e7;
    width: 50%;
    animation: mongo 4s;
  }

  @keyframes mongo {
    0% {
      width: 0%;
    }

    100% {
      width: 50%;
    }
  }

  .linux {
    height: 10px;
    background: #2187e7;
    width: 65%;
    animation: linux 4s;
  }

  @keyframes linux {
    0% {
      width: 0%;
    }

    100% {
      width: 65%;
    }
  }

  .docker {
    height: 10px;
    background: #2187e7;
    width: 50%;
    animation: api 4s;
  }

  @keyframes api {
    0% {
      width: 0%;
    }

    100% {
      width: 50%;
    }
  }

  .express {
    height: 10px;
    background: #2187e7;
    width: 60%;
    animation: express 4s;
  }

  @keyframes express {
    0% {
      width: 0%;
    }

    100% {
      width: 60%;
    }
  }

  .jwt {
    height: 10px;
    background: #2187e7;
    width: 60%;
    animation: jwt 4s;
  }

  @keyframes jwt {
    0% {
      width: 0%;
    }

    100% {
      width: 60%;
    }
  }

  .solid {
    height: 10px;
    background: #2187e7;
    width: 60%;
    animation: solid 4s;
  }

  @keyframes solid {
    0% {
      width: 0%;
    }

    100% {
      width: 60%;
    }
  }

    .vuejs {
    height: 10px;
    background: #2187e7;
    width: 55%;
    animation: vuejs 4s;
  }

  @keyframes vuejs {
    0% {
      width: 0%;
    }

    100% {
      width: 55%;
    }
  }

</style>
