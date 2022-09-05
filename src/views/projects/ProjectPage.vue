<template>
  <div class="cocoon-qr">
    <ImgModal v-if="modalURL != ''" :image="modalURL" v-on:close="modalURL = ''"/>
    <HLines></HLines>
    <div class="hero">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <img class="hero-image" :src="coverImage" @click="openModal(coverImage)" alt="" style="border-radius: 10px;"/>
      <hr class="divider" />
    </div>
    <div class="main content">
      <div class="left">
        <div class="about">
          <h2>About</h2>
          <slot></slot>
        </div>
        <div class="info-boxes">
          <div>

        <h2 style="margin-top: 0px;"><img class="icon" src="@/assets/svg/emoji/paper.svg" alt="icon">Main Features</h2>
            <div class="tags">
              <Tag v-for="f in features">{{ f }}</Tag>
            </div>
          </div>

          <h2><img class="icon" src="@/assets/svg/emoji/gear.svg" alt="icon">Tech Used</h2>
          <div class="tags">
            <Tag v-for="t in tech">{{ t }}</Tag>
          </div>
          <div>
            <h2><img class="icon" src="@/assets/svg/emoji/disk.svg" alt="icon">Try it out</h2>
            <a class="url" v-if="demoURL" :href="demoURL" target="_blank">Click Here</a>
            <p v-else>Not Available</p>
          </div>
          <div>
            <h2><img class="icon" src="@/assets/svg/emoji/computer.svg" alt="icon">Source Code</h2>
            <a class="url" v-if="sourceURL" :href="sourceURL" target="_blank">Click Here</a>
            <p v-else>Not Available</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="images">
          <h2>Screenshots</h2>
          <img
            class="screenshot-image box-shadow-normal"
            v-for="s in screenshots"
            :src="s"
            @click="openModal(s)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import Tag from "@/components/Tag.vue";
import ImgModal from "@/components/ImgModal.vue";
import HLines from "../../components/HLines.vue";

const modalURL = ref("");

onMounted(() => {
  window.scrollTo(0, 0);
});

const props = defineProps({
  title: {
    type: String,
    default: "New Project",
  },
  subtitle: {
    type: String,
    default: "A new Project",
  },
  demoURL: String,
  sourceURL: String,
  coverImage: {
    type: String,
    default: "",
  },
  about: String,
  tech: Array,
  features: Array,
  screenshots: {
    type: Array as PropType<Array<string>>,
    default: [],
  },
});

function openModal(imageURL: string) {
  modalURL.value = imageURL;
  console.log(modalURL.value);
}
</script>

<style scoped>
.main {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
}

.url{
  font-family: lexend;
  font-size: 20px;
  margin-left: 10px;
}

.subtitle {
  margin-bottom: 20px;
}

.left {
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  max-width: 900px;
}

.about {
  border-radius: 10px;
  padding: 20px;
  text-align: left;
}

.icon {
  height: 25px;
  margin-right: 6px;
}

.info-boxes h2 {
  margin-top: 20px;
}

.info-boxes {
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 30px;
  text-align: left;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tag {
  margin: 5px;
}

.images {
  display: flex;
  flex-direction: column;
}

.screenshot-image {
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.hero-image {
  width: 60%;
}

img { 
  transition: transform 0.25s;
}

@media (hover:hover){
  img:hover {
    transform: scale(1.025);
  }
}

@media only screen and (max-width: 1150px) {
  .main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-image {
    width: 95%;
  }

  .left {
    align-items: center;
    justify-content: center;
    margin: 0px;
  }

  .screenshot-image {
    width: 95%;
  }
}
</style>
