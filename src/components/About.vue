<template>
<div id="container">
    <div class="card">
        <div class="imgBx" data-text='text'>
            <img :src="img.data" />
        </div>
        <div class="content">
            <div>
                <h3>text</h3>
                <p>asdsadasdsadasdasdasdasdasdas sadsadad</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgBx" data-text='text'>
            <img :src="img.data" />
        </div>
        <div class="content">
            <div>
                <h3>text</h3>
                <p>asdsadasdsadasdasdasdasdasdas sadsadad</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgBx" data-text='text'>
            <img :src="img.data" />
        </div>
        <div class="content">
            <div>
                <h3>text</h3>
                <p>asdsadasdsadasdasdasdasdasdas sadsadad</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgBx" data-text='text'>
            <img :src="img.data" />
        </div>
        <div class="content">
            <div>
                <h3>text</h3>
                <p>asdsadasdsadasdasdasdasdasdas sadsadad</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import data from '../assets/data.png'
import money from '../assets/money.png'
import sketch from '../assets/sketch.png'
import startup from '../assets/startup.png'
export default {
    name: 'About',
    data() {
        return {
            img: {
                data,
                money,
                sketch,
                startup
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

#container .card .imgBx::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 6em;
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
    font-size: 24px;
}

#container .card .content a {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background: #333;
    text-decoration: none;
    color: #fff;
}
</style>
