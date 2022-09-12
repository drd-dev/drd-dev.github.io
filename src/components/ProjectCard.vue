<template>
  <div class="project-card" ref="card">
    <div class="title">
      <h2 class="title">{{ title }}</h2>
      <h5>{{ year }}</h5>
    </div>
    <img class="image" :class="{hidden: imageLoading}"  :src="image" alt="project cover image" @load="imageLoading = false"/>
    <div v-if="imageLoading" class="image-loader">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-element-visibility="onScroll" class="bottom">
      <div class="info">
        <div class="card box-shadow-normal">
          <p id="desc">{{ description }}</p>
          <router-link class="button button-dark" :to="`/projects/${props.projectID}`">Explore</router-link>
        </div>
        <div class="bottom-text">
          <span class="tech-entry" v-for="t in tech">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { vElementVisibility } from "@vueuse/components";
const props = defineProps({
  projectID: {
    type: String,
    default: "",
  },
});

const imageLoading = ref(true);
const title = ref("");
const description = ref("");
const link = ref("");
const image = ref("");
const year = ref("");
const tech = ref([]);

onMounted(() => {
  getContent();
});

async function getContent() {
  const id = props.projectID;

  //fetch project data from server
  const url = `https://berowra.zeoxo.deta.app/api/content/${props.projectID}`;
  const projectRaw = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const projectInfo = await projectRaw.json();

  //convert project data to a js object
  title.value = projectInfo.title;
  description.value = getObjectByTitle(projectInfo.content, "description").value;
  image.value = `https://berowra.zeoxo.deta.app/file/${getObjectByTitle(projectInfo.content, "cover_image")?.value[0]}`;
  tech.value = getObjectByTitle(projectInfo.content, "tech").value;
  year.value = getObjectByTitle(projectInfo.content, "creation_year").value;
}

function getObjectByTitle(source: any, value: String): any | undefined {
  for (let i in source) {
    if (source[i].title == value) {
      return source[i];
    }
  }
}

const card = ref(null);
function onScroll(state: boolean) {
  if (state && card.value) {
    const c: any = card.value;
    c.classList.add("visible");
  }
}
</script>

<style scoped>
.project-card {
  opacity: 0;
  transition: opacity 0.5s, transform 0.25s ease-in-out;
  margin: 20px;
}

.visible {
  opacity: 1;
}

img {
  width: 600px;
  height: 350px;
  border-radius: 10px;
  filter: grayscale(100%);
  object-fit: cover;
  transition: all 0.25s ease-in-out;
}

.image-loader {
  height: 350px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.188);
  border-radius: 10px;
}

.lds-ring {
  width: 100px;
  height: 100px;
}

@media (hover: hover) {
  .project-card:hover > img {
    filter: grayscale(0);
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

.bottom-text {
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

.hidden {
  display: none;
}

@media only screen and (max-width: 750px) {
  .title {
    justify-content: center;
  }

  img {
    width: 95%;
    height: auto;
    filter: grayscale(0%);
  }

  .info {
    bottom: 0px;
    width: 90%;
  }
  .bottom-text {
    display: none;
  }

  .button {
    width: 90%;
    margin: 0px auto;
    margin-top: 25px;
  }
}
</style>
