<template>
<div id="container">

    <div class="card" :style="{ height: btn1.height + 'px'}">
        <div class="imgBx" data-text='Lucas'>
            <img :src="img.data" />
        </div>
        <div class="content">
            <div>
                <h3>Lucas</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <span :style="{ display: btn1.display }">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>
                <button v-if="this.btn1.button" @click.prevent="handleReadMore('btn1')">Read More</button>
                <button v-else @click.prevent="handleClose('btn1')">Read More</button>
            </div>
        </div>
    </div>

    <div class="card" :style="{ height: btn2.height + 'px' }">
        <div class="imgBx" data-text='Esporte'>
            <img :src="img.jiujitsu" />
        </div>
        <div class="content">
            <div>
                <h3>Jiu Jitsu</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <span :style="{ display: btn2.display }">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>
                <button v-if="this.btn2.button" @click.prevent="handleReadMore('btn2')">Read More</button>
                <button v-else @click.prevent="handleClose('btn2')">Read More</button>
            </div>
        </div>
    </div>

    <div class="card" :style="{ height: btn3.height + 'px' }">
        <div class="imgBx" data-text='Games'>
            <img :src="img.joystick" />
        </div>
        <div class="content">
            <div>
                <h3>Games</h3>
                <p>Hoje o games tem um papel muito importante na minha vida, um do meus principais passa tempo
                    <span :style="{ display: btn3.display }">o que me atrai para mundo do games é um mercado que está sempre investindo em enovação e tecnologia.</span></p>
                <button v-if="this.btn3.button" @click.prevent="handleReadMore('btn3')">Read More</button>
                <button v-else @click.prevent="handleClose('btn3')">Read More</button>
            </div>
        </div>
    </div>

    <div class="card" :style="{ height: btn4.height + 'px' }">
        <div class="imgBx" data-text='Passa tempos'>
            <img :src="img.recreation" />
        </div>
        <div class="content">
            <div>
                <h3>Passa tempos</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <span :style="{ display: btn4.display }">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>
                <button v-if="this.btn4.button" @click.prevent="handleReadMore('btn4')">Read More</button>
                <button v-else @click.prevent="handleClose('btn4')">Read More</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import data from '../assets/user.png'
import jiujitsu from '../assets/jiu-jitsu.png'
import joystick from '../assets/joystick.png'
import recreation from '../assets/recreation.png'

export default {
    name: 'About',
    data() {
        return {
            img: {
                data,
                jiujitsu,
                joystick,
                recreation
            },
            btn1: {
                height: 250,
                display: 'none',
                button: true
            },
            btn2: {
                height: 250,
                display: 'none',
                button: true
            },
            btn3: {
                height: 250,
                display: 'none',
                button: true
            },
            btn4: {
                height: 250,
                display: 'none',
                button: true
            },
        }
    },
    methods: {
        handleReadMore(event) {
            if (event === 'btn1') {
                this.btn1.height = 550
                this.btn1.display = 'block'
                this.btn1.button = false
            }
            if (event === 'btn2') {
                this.btn2.height = 550
                this.btn2.display = 'block'
                this.btn2.button = false
            }
            if (event === 'btn3') {
                this.btn3.height = 550
                this.btn3.display = 'block'
                this.btn3.button = false
            }
            if (event === 'btn4') {
                this.btn4.height = 550
                this.btn4.display = 'block'
                this.btn4.button = false
            }
        },
        handleClose(event) {
            if (event === 'btn1') {
                this.btn1.height = 250
                this.btn1.display = 'none'
                this.btn1.button = true
            }
            if (event === 'btn2') {
                this.btn2.height = 250
                this.btn2.display = 'none'
                this.btn2.button = true
            }
            if (event === 'btn3') {
                this.btn3.height = 250
                this.btn3.display = 'none'
                this.btn3.button = true
            }
            if (event === 'btn4') {
                this.btn4.height = 250
                this.btn4.display = 'none'
                this.btn4.button = true
            }
        }
    },
}
</script>

<style scoped>
#container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    margin: 0 auto;
    grid-gap: 28px;
    padding: 15px;
    text-align: center;
}

#container .card {
    position: relative;
    height: 250px;
    background: #fff;
    display: flex;
    width: 100%;
    margin: 30px 0;
}

#container .card-expand-1 {
    height: 550px;
}

#container .card .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s ease-in-out;
}

#container .card:hover .imgBx {
    width: 150px;
    height: 150px;
    left: -75px;
    top: calc(50% - 75px);
    transition: 0.5s ease-in-out;
    background: #ff0057;
}

#container .card .imgBx:before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2em;
    color: rgba(255, 255, 255, .05);
    font-weight: 700;
}

#container .card .imgBx img {
    max-width: 100px;
    transition: 0.5s ease-in-out;
}

#container .card:hover .imgBx img {
    max-width: 75px;
}

#container .card .content {
    position: absolute;
    right: 0;
    width: calc(100% - 75px);
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#container .card .content h3 {
    margin-bottom: 5px;
    font-size: 16px;
}

#container .card .content .more {
    display: none;
}

#container .card .content button {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background: #333;
    text-decoration: none;
    color: #fff;
}

@media (max-width: 992px) {
    #container {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    #container .card {
        width: 400px;
    }
}

@media(max-width: 768px) {
    #container .card {
        width: 300px;
        flex-direction: column;
        height: auto;
    }

    #container .card .content h3 {
        margin-bottom: 2px;
        font-size: 16px;
    }

    #container .card .content p {
        font-size: 13px;
    }

}
</style>
