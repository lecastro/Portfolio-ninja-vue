<template>
<div id="message">
    <h1>
        <span class="animationLetters">H</span>
        <span class="animationLetters">e</span>
        <span class="animationLetters">l</span>
        <span class="animationLetters">l</span>
        <span class="animationLetters">o</span>
        <span class="animationLetters">W</span>
        <span class="animationLetters">o</span>
        <span class="animationLetters">r</span>
        <span class="animationLetters">l</span>
        <span class="animationLetters">d</span>
        <span class="animationLetters">!</span>
    </h1>
</div>
</template>

<script>
export default {
    name: 'Hello World',
}
</script>

<style scoped>
#message h1 {
    color: #000;
    font-size: 2.0rem;
    font-family: 'Bungee Shade';
}

/* aqui a messagem começa a pula */

.animationLetters {
    padding: 10px 5px;
    display: inline-block;
    animation: animate .7s infinite alternate;
    text-shadow: 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

.stopLetters {
    animation: stop .7s infinite alternate;
}

@keyframes animate {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0px);
    }

}

/* para a animação */
#message h1 span {
    padding: 10px 5px;
    display: inline-block;
    text-shadow: 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

/* nessa etapa o pulo fica mais lento */
#message h1 span:nth-child(1) {
    animation-delay: .1s;
}

#message h1 span:nth-child(2) {
    animation-delay: .3s;
}

#message h1 span:nth-child(3) {
    animation-delay: .4s;
}

#message h1 span:nth-child(4) {
    animation-delay: .5s;
}

#message h1 span:nth-child(5) {
    animation-delay: .6s;
}

#message h1 span:nth-child(6) {
    animation-delay: .7s;
}

#message h1 span:nth-child(7) {
    animation-delay: .8s;
}

#message h1 span:nth-child(8) {
    animation-delay: .9s;
}

#message h1 span:nth-child(9) {
    animation-delay: .1s;
}

#message h1 span:nth-child(10) {
    animation-delay: .2s;
}

#message h1 span:nth-child(11) {
    animation-delay: .3s;
}

@media(max-width: 600px) {
    #message h1 {
        font-size: 1.5rem;
    }
}
</style>
