<script setup lang="ts">
import { ref } from 'vue'

const page = ref('form')
// const page = ref('card')

const info = ref({
  name: '',
  age: ''
})

const onGo = () => {
  if (!info.value.name) return
  if (info.value.age !== '18') return

  page.value = 'loader'

  setTimeout(() => {
    page.value = 'card'
  }, 2000)
}
</script>

<template>
  <div class="container container1" v-if="page === 'form'">
    <form class="form" autocomplete="off">
      <label for="nome">名字:</label>
      <input type="text" class="infos" id="nome" name="nome" placeholder="输入名字，如：唐碧波，tbb，唐总" v-model="info.name">
      <div class="mario"></div>
      <label for="age">芳龄:</label>
      <input type="age" id="age" name="age" placeholder="输入年龄" v-model="info.age">
      <div class="error" v-if="info.age && info.age !== '18'">只能输入18</div>

      <button type="button" @click="onGo">Let's Go</button>
      <!-- <button type="reset" id="limpar">Clear</button> -->
    </form>
  </div>

  <div class="container container2" v-if="page === 'loader'">
    <div class="loading-wave">
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
    </div>
  </div>

  <div class="container container3" v-if="page === 'card'">
    <h1>
      Happy 18th birthday to {{ info.name }}
    </h1>
    <img src="./img/hat.svg" alt="" class="hat">
    <img src="./img/celebrate.svg" alt="" class="celebrate celebrate1">
    <img src="./img/celebrate.svg" alt="" class="celebrate celebrate2">
    <img src="./img/celebrate.svg" alt="" class="celebrate celebrate3">
    <img src="./img/bow.svg" alt="" class="bow">
    <div class="cake-list">
      <img src="./img/cake.svg" alt="" class="cake">
      <img src="./img/cake.svg" alt="" class="cake">
      <img src="./img/cake.svg" alt="" class="cake">
      <img src="./img/cake.svg" alt="" class="cake">
      <img src="./img/cake.svg" alt="" class="cake">
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");

/* From Uiverse.io by guilhermeyohan */ 
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container1 {
  width: 100%;
  height: 100%;
  --s: 20px; /* size of the lines */
  --g: 15px; /* gap between lines */

  --c1: #c02942;
  --c2: #53777a;

  background: conic-gradient(
        at var(--s) calc(100% - var(--s)),
        #0000 270deg,
        var(--c1) 0
      )
      calc(var(--s) + var(--g)) 0,
    linear-gradient(var(--c2) var(--s), #0000 0) 0 var(--g),
    conic-gradient(
      at var(--s) calc(100% - var(--s)),
      #0000 90deg,
      var(--c2) 0 180deg,
      var(--c1) 0
    ),
    #ecd078;
  background-size: calc(2 * (var(--s) + var(--g)))
    calc(2 * (var(--s) + var(--g)));
  overflow: hidden;
}

form {
  background-color: #fcd0a1;
  border-radius: 10px;
  padding: 20px 20px 50px 20px;
  width: 600px;
}

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #de5959;
}

.infos[type="text"], input[type="age"] {
  width: 100%;
  height: 70px;
  padding: 10px;
  font-size: 32px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.error {
  margin-top: 10px;
  padding-left: 10px;
  color: #b54141;
  font-size: 24px;
}

button {
  background-color: #de5959;
  color: white;
  font-size: 36px;
  padding: 20px 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 40px;
}

button:hover {
  background-color: #b54141;
}

#limpar {
  background-color: #fcb13e;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#limpar:hover {
  background-color: #c78d35;
}

.mario {
  width: 5px;
  height: 5px;
  position: relative;
  left: 220px;
  top: 100px;
  transform: scale(2,2);
  box-shadow: 0px 0px 0px transparent, 130px 5px #ffa500, 135px 5px #ffa500,
140px 5px #ffa500, 95px 10px #de4513, 100px 10px #de4513, 105px 10px #de4513,
110px 10px #de4513, 115px 10px #de4513, 130px 10px #ffa500,
135px 10px #ffa500, 140px 10px #ffa500, 90px 15px #de4513, 95px 15px #de4513,
100px 15px #de4513, 105px 15px #de4513, 110px 15px #de4513,
115px 15px #de4513, 120px 15px #de4513, 125px 15px #de4513,
130px 15px hsl(15, 84%, 47%), 135px 15px #ffa500, 140px 15px #ffa500,
90px 20px #a52a2a, 95px 20px #a52a2a, 100px 20px #a52a2a, 105px 20px #ffa500,
110px 20px #ffa500, 115px 20px #000, 120px 20px #ffa500, 130px 20px #4545bb,
135px 20px #4545bb, 140px 20px #4545bb, 85px 25px #a52a2a, 90px 25px #ffa500,
95px 25px #a52a2a, 100px 25px #ffa500, 105px 25px #ffa500,
110px 25px #ffa500, 115px 25px #000, 120px 25px #ffa500, 125px 25px #ffa500,
130px 25px #4545bb, 135px 25px #4545bb, 140px 25px #4545bb,
85px 30px #a52a2a, 90px 30px #ffa500, 95px 30px #a52a2a, 100px 30px #a52a2a,
105px 30px #ffa500, 110px 30px #ffa500, 115px 30px #ffa500,
120px 30px #a52a2a, 125px 30px #ffa500, 130px 30px #ffa500,
135px 30px #ffa500, 140px 30px #4545bb, 85px 35px #a52a2a, 90px 35px #a52a2a,
95px 35px #ffa500, 100px 35px #ffa500, 105px 35px #ffa500,
110px 35px #ffa500, 115px 35px #a52a2a, 120px 35px #a52a2a,
125px 35px #a52a2a, 130px 35px #a52a2a, 135px 35px #a52a2a,
95px 40px #ffa500, 100px 40px #ffa500, 105px 40px #ffa500,
110px 40px #ffa500, 115px 40px #ffa500, 120px 40px #ffa500,
125px 40px #ffa500, 130px 40px #4545bb, 75px 45px #4545bb, 80px 45px #4545bb,
85px 45px #4545bb, 90px 45px #4545bb, 95px 45px #4545bb, 100px 45px #de4513,
105px 45px #4545bb, 110px 45px #4545bb, 115px 45px #4545bb,
120px 45px #de4513, 125px 45px #4545bb, 70px 50px #4545bb, 75px 50px #4545bb,
80px 50px #4545bb, 85px 50px #4545bb, 90px 50px #4545bb, 95px 50px #4545bb,
100px 50px #4545bb, 105px 50px #de4513, 110px 50px #4545bb,
115px 50px #4545bb, 120px 50px #4545bb, 125px 50px #de4513, 140px 50px #000,
65px 55px #ffa500, 70px 55px #ffa500, 75px 55px #4545bb, 80px 55px #4545bb,
85px 55px #4545bb, 90px 55px #4545bb, 95px 55px #4545bb, 100px 55px #4545bb,
105px 55px #de4513, 110px 55px #de4513, 115px 55px #de4513,
120px 55px #de4513, 125px 55px #de4513, 140px 55px #000, 65px 60px #ffa500,
70px 60px #ffa500, 75px 60px #ffa500, 85px 60px #de4513, 90px 60px #de4513,
95px 60px #4545bb, 100px 60px #de4513, 105px 60px #de4513, 110px 60px #ff0,
115px 60px #de4513, 120px 60px #de4513, 125px 60px #ff0, 130px 60px #de4513,
135px 60px #000, 140px 60px #000, 70px 65px #ffa500, 80px 65px #000,
85px 65px #de4513, 90px 65px #de4513, 95px 65px #de4513, 100px 65px #de4513,
105px 65px #de4513, 110px 65px #de4513, 115px 65px #de4513,
120px 65px #de4513, 125px 65px #de4513, 130px 65px #de4513, 135px 65px #000,
140px 65px #000, 75px 70px #000, 80px 70px #000, 85px 70px #000,
90px 70px #de4513, 95px 70px #de4513, 100px 70px #de4513, 105px 70px #de4513,
110px 70px #de4513, 115px 70px #de4513, 120px 70px #de4513,
125px 70px #de4513, 130px 70px #de4513, 135px 70px #000, 140px 70px #000,
70px 75px #000, 75px 75px #000, 80px 75px #000, 85px 75px #de4513,
90px 75px #de4513, 95px 75px #de4513, 100px 75px #de4513, 105px 75px #de4513,
110px 75px #de4513, 115px 75px #de4513, 70px 80px #000, 85px 80px #de4513,
90px 80px #de4513, 95px 80px #de4513;
}

.container2 {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    5deg,
    orange 50%,
    orangered 60%,
    orange 50%
  );
  background-color: orange;
  background-size: 1em 1em;
  background-repeat: space;
}

/* From Uiverse.io by mrpumps31232 */ 
.loading-wave {
  position: relative;
  z-index: 2;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.loading-bar {
  width: 50px;
  height: 10px;
  margin: 0 5px;
  background-color: #eb678a;
  border-radius: 5px;
  animation: loading-wave-animation 1s ease-in-out infinite;
}

.loading-bar:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-bar:nth-child(3) {
  animation-delay: 0.2s;
}

.loading-bar:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes loading-wave-animation {
  0% {
    height: 20px;
  }

  50% {
    height: 100px;
  }

  100% {
    height: 20px;
  }
}

.container3 {
  width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}

h1 {
  color: #fff;
  text-transform: uppercase;
  word-spacing: 100vw;
  width: min-content;
  text-align: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 150px;
  line-height: 100%;
  background:linear-gradient(225deg,
    var(--color1) 0%, var(--color1) 9%,
    transparent 9%, transparent 10%,
    var(--color2) 10%, var(--color2) 19%,
    transparent 19%, transparent 20%,
    var(--color3) 20%, var(--color3) 29%,
    transparent 29%, transparent 30%,
    var(--color4) 30%, var(--color4) 39%,
    transparent 39%, transparent 40%,
    var(--color5) 40%, var(--color5) 49%,
    transparent 49%, transparent 50%,
    var(--color1) 50%, var(--color1) 59%,
    transparent 59%, transparent 60%,
    var(--color2) 60%, var(--color2) 69%,
    transparent 69%, transparent 70%,
    var(--color3) 70%, var(--color3) 79%,
    transparent 79%, transparent 80%,
    var(--color4) 80%, var(--color4) 89%,
    transparent 89%, transparent 90%,
    var(--color5) 90%, var(--color5) 99%,
    transparent 99%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% 200%;
  color: transparent;
  animation: move 4s linear infinite;
}

@keyframes move {
  0%{
    background-position: 0px 100%;
  }
  100%{
    background-position: 100% 0px;
  }
}

.hat {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 180px;
  height: 180px;
  transform: rotate(30deg) translate(30px, 90px);
}

.celebrate {
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  width: 180px;
  height: 180px;
  margin: 0 auto;
}

.celebrate1 {
  transform: rotate(-30deg) translate(-200px,-100px);
}

.celebrate3 {
  transform: rotate(30deg) translate(200px,-100px);
}

.bow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50px, 330px);
}

.cake-list {
  position: absolute;
  left: 0;
  bottom: 10%;
  display: flex;
  justify-content: center;
  width: 100%;
}

.cake {
  width: 120px;
  height: 120px;
}
</style>
