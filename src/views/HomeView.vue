<script setup lang="ts">
import MyWork from "../components/sections/MyWork.vue";
import About from "../components/sections/About.vue";
import Skills from "../components/sections/Skills.vue";
import ColorBoxes from "../components/colorBoxes.vue";
import HLines from "../components/HLines.vue"
</script>

<template>
  <main id="home">
    <HLines></HLines>
    <div class="hero content">
      <h1 class="name">Dylan Dougherty</h1>
      <div class="title">Software Developer</div>
      <div class="hello">
        <img id="wave" src="@/assets/svg/emoji/wave.svg" alt="">
        <div style="display: flex;">
          <h1 id="hello-world">Hello World </h1>
          <ColorBoxes/>
        </div>
        <p>I’m Dylan, a Pennsylvania based Software Developer who believes in using the power of thoughtful code and design to bring incredible experiences to life.</p>
        <div class="buttons">
          <router-link class="button button-dark-outline" to="/#work">View My Work</router-link>
          <a href="mailto:dyldougherty@gmail.com" class="button button-dark">Contact Me</a>
        </div>
      </div>
    </div>
    <MyWork/>
    <Skills/>
    <About/>
  </main>
</template>


<style scoped>
.hero {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  animation: fadeIn 0.5s ease-in-out;
  animation-direction: forwards;
}
.name {
  font-size: 55px;
  font-weight: bold;
  color: var(--col-old-ink);
  transform: scale(0);
  animation: growIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
.title {
  font-size: 25px;
  color: var(--col-old-pencil);
  transform: scale(0);
  animation: growIn 0.5s ease-in-out;
  animation-delay: 0.05s;
  animation-fill-mode: forwards;
}

.hello {
  margin-top: 10vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
}

@media (max-width: 750px) {
  .hello {
    align-items: center;
    text-align: center;
  }
}

#hello-world {
  white-space: nowrap;
  display: inline-flex;
}

.color-boxes {
  margin-top: 17px;
  margin-left: 5px;
}

img{
  max-width: 80px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 50px;
}

@media only screen and (max-width: 850px) {
  .buttons {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button {
    margin: 20px;
    width: 300px;
  } 
}




#wave {
  opacity: 0;
  animation: wave 1s infinite ease-in-out alternate, fadeIn 0.75s ease-in-out forwards; 
  animation-delay: 0.5s;
}


@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(15deg);
  }
}

@keyframes growIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
