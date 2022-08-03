<script setup lang="ts">
import MyWork from "../components/sections/MyWork.vue";
import About from "../components/sections/About.vue";
import Skills from "../components/sections/Skills.vue";
</script>

<template>
  <main id="home">
    <div class="lines">
      <hr class="bg-blue">
      <hr class="bg-orange">
      <hr class="bg-red">
    </div>
    <div class="hero">
      <div class="name">Dylan Dougherty</div>
      <div class="title">Software Developer</div>
      <div class="hello">
        <img id="wave" src="@/assets/svg/emoji/wave.svg" alt="">
        <h1 id="hello-world">Hello World</h1>
        <p>I’m Dylan, a Pennsylvania based Software Developer who believes in using the power of thoughtful code and design to bring incredible experiences to life.</p>
        <a href="mailto:dyldougherty@gmail.com" class="button-dark">Contact Me</a>
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
  height: 100vh;
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
  width: 50%;
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
}

img{
  max-width: 80px;
}
.lines{
  margin-top: 50px;
  width: 100%;
  animation: lineGrow 0.5s ease-in-out;
  animation-direction: forwards;
}

hr {
  width: 100%;
  border: 0;
  height: 8px;
  margin-bottom: 5px;
}

.button-dark {
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  padding: 12px 32px 12px 32px;
  border: none;
  font-size: 20px;
  margin-top: 50px;
  display: block;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media(hover: hover){
  .button-dark:hover {
    background-color: var(--col-red);
    color: var(--col-old-ink) !important;
  }
}

#wave {
  opacity: 0;
  animation: wave 1s infinite ease-in-out alternate, fadeIn 0.75s ease-in-out forwards; 
  animation-delay: 0.5s;
  /* animation-direction: alternate; */
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

@keyframes lineGrow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

</style>
