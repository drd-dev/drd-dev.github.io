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
      <img style="margin-top: 50px;" class="icon" src="@/assets/svg/emoji/globe.svg" alt="">
      <h2>Web</h2>
      <div class="projects">
        <ProjectCard
          class="project-card"
          title="Social Study"
          year="2019"
          description="A collaborative learning tool for students."
          image="https://i.ibb.co/MkCzmMH/social-Study.gif"
          :tech="['HTML/CSS', 'JavaScript', 'Vue', 'Firebase']"
          link="/projects/social-study"
          source="https://github.com/Social-Study/social-study"
        />        
        <ProjectCard
          class="project-card"
          title="COCOON-QR"
          year="2022"
          description="A QR Code management system."
          image="src/assets/images/projects/cocoon-qr/qr-created.png"
          :tech="['HTML/CSS', 'Firebase', 'Vue']"
        /> 
        <ProjectCard
          class="project-card"
          title="COCOON-Present"
          year="2022"
          description="Specialized presentation software."
          link="/projects/cocoon-present"
          image="src/assets/images/projects/present/present.png"
          :tech="['HTML/CSS', 'JavaScript', 'Electron']"
        />
        <ProjectCard
          class="project-card"
          title="Purchase Order Tracker"
          year="2020"
          description="App for tracking purchase orders."
          link="/projects/pot"
          image="src/assets/images/projects/pot/pot.png"
          :tech="['HTML/CSS', 'JavaScript', 'Vue', 'nest.js']"
        />
        </div>     
        
      <img class="icon" src="@/assets/svg/emoji/controller.svg" alt=""/>        
      <h2>Games</h2>
      <div class="projects">
        <ProjectCard
          class="project-card"
          title="The Great Machine"
          year="2021"
          description="A game about digging a hole. Made in 48 hours."
          image="src/assets/images/projects/greatMachine/TGM.gif"
          :tech="['Godot', 'GdScript']"
          link="https://zeoxo.itch.io/the-great-machine-ldjam48"
          source="https://github.com/drd-dev/the-great-machine"
        />
        <ProjectCard
          class="project-card"
          title="FLYTA"
          year="2021"
          description="A game about a lost spaceman."
          image="src/assets/images/projects/flyta/flyta.gif"
          :tech="['Unity', 'C#', 'XCode']"
          link="https://flytagame.com/"
        />
        <ProjectCard
          class="project-card"
          title="Paper or Plastic"
          year="2017/2019"
          description="A game about catching groceries."
          image="https://img.itch.zone/aW1nLzU0ODEyMTEuZ2lm/original/BOKXz5.gif"
          :tech="['Godot', 'GdScript', 'GameMaker']"
          link="https://zeoxo.itch.io/pop"
          source="https://github.com/drd-dev/paper-or-plastic-godot"
        />
        <ProjectCard
          class="project-card"
          title="Slap Fight"
          year="2017"
          description="A Game about Slapping your opponent."
          image="src/assets/images/projects/slapFight/slapFight.gif"
          :tech="['GameMaker']"
          link="https://zeoxo.itch.io/slap-fight"
          source="https://github.com/drd-dev/slap-fight"
        />
      </div>   
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
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

  .lines{
    display: none;
  }
}


</style>
