<template>
  <div class="project-page" v-if="!loading">
    <ImgModal v-if="modalURL != ''" :image="modalURL" v-on:close="modalURL = ''" />
    <HLines></HLines>
    <div class="hero">
      <h1 class="title">{{ data.title }}</h1>
      <p class="subtitle">{{ data.subtitle }}</p>
      <img
        class="hero-image"
        :src="data.coverImage"
        @click="openModal(data.coverImage)"
        alt=""
        style="border-radius: 10px"
      />
      <hr class="divider" />
    </div>
    <div class="main content">
      <div class="left">
        <div class="about">
          <h2>About</h2>
          <div v-html="data.about"></div>
        </div>
        <div class="info-boxes">
          <div>
            <h2 style="margin-top: 0px">
              <img class="icon" src="@/assets/svg/emoji/paper.svg" alt="icon" />Main Features
            </h2>
            <div class="tags">
              <Tag v-for="f in data.features">{{ f }}</Tag>
            </div>
          </div>

          <h2><img class="icon" src="@/assets/svg/emoji/gear.svg" alt="icon" />Tech Used</h2>
          <div class="tags">
            <Tag v-for="t in data.tech">{{ t }}</Tag>
          </div>
          <div>
            <h2><img class="icon" src="@/assets/svg/emoji/disk.svg" alt="icon" />Try it out</h2>
            <a class="url" v-if="data.demoLink != 'None'" :href="data.demoLink" target="_blank">Click Here</a>
            <p v-else>Not Available</p>
          </div>
          <div>
            <h2><img class="icon" src="@/assets/svg/emoji/computer.svg" alt="icon" />Source Code</h2>
            <a class="url" v-if="data.sourceLink != 'None'" :href="data.sourceLink" target="_blank">Click Here</a>
            <p v-else>Not Available</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="images" v-if="data.screenshots">
          <h2>Screenshots</h2>
          <img
            class="screenshot-image box-shadow-normal"
            v-for="s in data.screenshots"
            :src="`https://berowra.zeoxo.deta.app/file/${s}`"
            @click="openModal(`https://berowra.zeoxo.deta.app/file/${s}`)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else style="height: 100vh; display: flex; justify-content: center; align-items: center;">
    <div class="lds-ring" style="margin-bottom: 200px;"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";

//components
import Tag from "@/components/Tag.vue";
import ImgModal from "@/components/ImgModal.vue";
import HLines from "../../components/HLines.vue";

const route = useRoute();
const modalURL: any = ref("");
const loading = ref(true);
const data = ref({
  title: String,
  subtitle: String,
  description: String,
  about: "",
  tech: Array<String>,
  features: Array<String>,
  demoLink: "",
  sourceLink: "",
  creationYear: Date,
  coverImage: String,
  screenshots: Array<String>,
});

onMounted(() => {
  window.scrollTo(0, 0);
  loadContent(route.params.id);
});

function openModal(imageURL: string | StringConstructor) {
  modalURL.value = imageURL;
}

async function loadContent(projectID: string | string[]) {
  const url = "https://berowra.zeoxo.deta.app/api/content/";
  const res = await fetch(url + projectID, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const body = await res.json();
  data.value.title = body.title;
  data.value.subtitle = getObjectByTitle(body.content, "subtitle").value;
  data.value.about = marked.parse(getObjectByTitle(body.content, "about").value);
  data.value.tech = getObjectByTitle(body.content, "tech").value;
  data.value.features = getObjectByTitle(body.content, "features").value;
  data.value.coverImage = `https://berowra.zeoxo.deta.app/file/${
    getObjectByTitle(body.content, "cover_image").value[0]
  }` as any;
  data.value.screenshots = getObjectByTitle(body.content, "screenshots").value;
  data.value.demoLink = getObjectByTitle(body.content, "demo_link").value;
  data.value.sourceLink = getObjectByTitle(body.content, "source_link").value;
  data.value.creationYear = getObjectByTitle(body.content, "creation_year").value
  loading.value = false;
}

function getObjectByTitle(source: any, value: String): any | undefined {
  for (let i in source) {
    if (source[i].title == value) {
      return source[i];
    }
  }
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

.url {
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
  max-width: 800px;
  max-height: 400px;
}

img {
  transition: transform 0.25s;
}

@media (hover: hover) {
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

  .info-boxes{
    width: 98%;
  }
}
</style>
