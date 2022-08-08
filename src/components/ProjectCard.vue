<template>
<div class="project-card">
  <img class="image" :src="image" alt="">
  <div class="bottom">
    <img class="icon" :src="icon" alt="">
    <h5 style="float:right">{{year}}</h5>
    <h2 class="title">{{title}}</h2>
    <p>{{description}}</p>
    <router-link class="learn-more" :to="link" style="float:right; margin-top: 35px;">Learn More</router-link>
  </div>
</div>
</template>


<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '',
  }
});
</script>

<style scoped>
.project-card {
  color: var(--col-old-ink);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.25s;
}

@media (hover: hover) {
  .project-card:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.75);
  }
}

.bottom {
  position: absolute;
  background-color: var(--col-old-paper);
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  text-align: left;
  padding-bottom: 10px;
  bottom: 0px;
  top: 300px;
}

.icon {
  width: 80px;
  position: absolute;
  width: 50px;
  z-index: 100;
  left: 10px;
  bottom: 175px
}

.image {
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
}
  
  .title {
    margin-top: 12px;
    font-size: 25px;
    font-weight: bold;
    font-family: Lexend;
  }

p {
  margin-bottom: 5px;
  font-size: 15px;
}

.learn-more {
  position: absolute;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  right: 10px;
  bottom: 10px;
}
</style>