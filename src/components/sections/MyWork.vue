<template>
  <div class="my-work" id="work">
    <div class="lines top">
      <hr class="bg-blue" />
      <hr class="bg-orange" />
      <hr class="bg-red" />
    </div>
    <div class="lines right">
      <hr class="bg-blue" />
      <hr class="bg-orange" />
      <hr class="bg-red" />
    </div>
    <div class="">
      <img class="section-icon" src="@/assets/svg/emoji/folder.svg" alt="" />
      <h1 class="text-light">My Work</h1>
      <img src="@/assets/svg/emoji/globe.svg" alt="globe emoji" style="margin-top: 50px" />
      <h2 style="margin-bottom: 30px">Web</h2>
      <div class="projects">
        <ProjectCard
          v-if="webProjects"
          v-for="p in webProjects"
          class="project-card"
          :projectID="p.id"
        />
      </div>
      <img src="@/assets/svg/emoji/controller.svg" alt="controller emoji" style="margin-top: 50px" />
      <h2 style="margin-bottom: 30px">Games</h2>
      <div class="projects">
        <ProjectCard
          v-if="gameProjects"
          v-for="p in gameProjects"
          class="project-card"
          :projectID="p.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import { onMounted, ref } from "vue";

const webProjects: any = ref([]);
const gameProjects: any = ref([]);

onMounted(() => {
  getContent();
});

async function getContent() {
  //get list of projects in the CDN
  const res = await fetch("https://berowra.zeoxo.deta.app/api/collection/klkqa7a8shtv", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const projectList = await res.json();

  //get details for each project
  projectList.items.forEach(async (project: any) => {
    const url = `https://berowra.zeoxo.deta.app/api/content/${project.key}`;
    const projectRaw = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const projectInfo = await projectRaw.json();
    

    //convert project data to a js object and push it to the array of objects
    const projectData = {
      id: project.key,
      type: getObjectByTitle(projectInfo.content, "type").value,
      year: getObjectByTitle(projectInfo.content, "creation_year").value,
    };

    //sort the project into the correct list
    if (projectData.type == "web") {
      webProjects.value.push(projectData);
    } else {
      gameProjects.value.push(projectData);
    }
  });

  
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
.my-work {
  padding-top: 80px;
  text-align: center;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  overflow: hidden;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0px auto;
}

.project-card {
  margin: 20px;
}

hr {
  width: 100%;
  border: 0;
  height: 8px;
  margin-bottom: 5px;
}

.top {
  position: absolute;
  right: 10px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  top: 20px;
}

.top hr {
  margin-right: 5px;
  width: 8px;
  top: 0px;
  bottom: 0px;
  height: 100%;
}

.top .bg-orange {
  top: 13px;
}

.top .bg-red {
  top: 26px;
}

.right {
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;
  right: 0px;
  width: 49px;
  top: 20px;
}

.right .bg-orange {
  width: 35px;
  right: 0px;
}

.right .bg-red {
  width: 22px;
  right: 0px;
}

p {
  color: var(--col-old-paper);
}

@media (max-width: 750px) {
  .content {
    padding: 5px;
  }

  .project-card {
    margin: 0px;
    margin-bottom: 30px;
  }

  .lines {
    display: none;
  }
}
</style>
