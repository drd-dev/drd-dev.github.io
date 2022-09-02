<template>
  <div class="project-card" ref="card">
    <div class="title">
      <h2 class="title">{{ title }}</h2>
      <h5>{{ year }}</h5>
    </div>
    <img class="image" :src="image" alt="">
    <div v-element-visibility="onScroll" class="bottom">
    <div class="info">
      <div class="card box-shadow-normal">
        <p id="desc">{{ description }}</p>
        <a class="button button-dark" :href="link">Explore</a>
      </div>
      <div class="bottom-text">
          <span class="tech-entry" v-for="t in tech">{{ t }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vElementVisibility } from "@vueuse/components";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "Learn More",
  },
  tech: {
    type: Array,
    default: () => [],
  },
  source: {
    type: String,
    default: "",
  },
});

const card = ref(null);
function onScroll(state: boolean) {
  if (state && card.value) {
    const c: any = card.value;
    c.classList.add("visible");
  }
}
</script>

<style scoped>
.project-card{
  opacity: 0;
  transition: opacity 0.5s, transform 0.25s ease-in-out;

}

.visible{
  opacity: 1;
}

img {
  width: 600px;
  height: 350px;
  border-radius: 10px;
  filter: grayscale(100%);
  cursor: pointer;
  object-fit: cover;
  transition: all 0.25s ease-in-out;
}

@media (hover: hover) {
  img:hover {
    filter: grayscale(0%);
  }
}
.title {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  font-family: Lexend;
  font-size: 20px;
  margin-right: 5px;
}

.info {
  width: 500px;
  margin: 0px auto;
}

.card {
  text-align: left;
  color: var(--col-old-ink);
  background-color: var(--col-old-paper);
  padding: 20px;
  border-radius: 10px;
}

.bottom {
  top: -60px;
  height: 200px;
  color: var(--col-old-paper);
}

.bottom-text{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
}
.tech-entry {
  margin: 8px;
}

.button {
  width: 150px;
  margin-top: 25px;
  margin-left: auto;
  border-radius: 10px;
}

.link {
  width: 35px;
  height: auto;
  filter: invert(93%) sepia(13%) saturate(552%) hue-rotate(335deg) brightness(99%) contrast(94%);
}

@media (hover: hover){
  .link:hover {
   filter: invert(47%) sepia(27%) saturate(6319%) hue-rotate(331deg) brightness(97%) contrast(94%);
  }
}

@media only screen and (max-width: 750px) {

  .title{
    justify-content: center;
  }

  img {
    width: 90%;
    height: 200px;
    filter: grayscale(0%);
  }

  .info {
    bottom: 0px;
    width: 90%
  }
  .bottom-text{
    display: none;
  }

  #desc {
    font-size: 15px;
  }

  .button {
    width: 90%;
    margin: 0px auto;
    margin-top: 25px;
  }
}
</style>
