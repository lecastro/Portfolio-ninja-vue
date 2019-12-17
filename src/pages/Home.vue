<template>
<div id="main">
    <div class="main-avatar">
        <img v-if="items.avatar" :src="items.avatar.avatar_url" :alt="items.avatar.name" />
        <HelloWorldComponent :isActive="isActive" />
        <p>{{ this.name }}</p>
    </div>

    <NetworkComponent />
</div>
</template>

<script>
import NetworkComponent from "../components/Network";
import HelloWorldComponent from "../components/AnimatedLetters";

import { mapState, mapActions } from 'vuex';

export default {
    created() {
        this.loadAvatar();
    },
    data() {
        return {
            name: 'Lucas Castro | Software Engineer | AllEasy'
        };
    },
    methods: {
        ...mapActions('github', ['loadAvatar'])
    },
    computed: {
        ...mapState('github', ['items']),
        ...mapState('index', ['isActive']),
    },
    components: {
        NetworkComponent,
        HelloWorldComponent,
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
