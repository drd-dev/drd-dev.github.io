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
    <div class="content">
      <img src="@/assets/svg/emoji/folder.svg" alt="" />
      <h1 class="text-light">My Work</h1>
      <p style="margin-bottom: 80px;">Below you will find some of my work, which includes web apps, games, and art.</p>


      <img class="icon" src="@/assets/svg/emoji/globe.svg" alt="">
      <h2>Web</h2>
      <div class="projects">
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/cocoon-qr/qr-code.svg"
          title="COCOON-QR"
          year="2022"
          description="A QR Code management system"
          link="/projects/cocoon-qr"
          image="src/assets/images/projects/cocoon-qr/qr-created.png"
        /> 
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/greatMachine/dwarf.gif"
          title="COCOON-Present"
          year="2022"
          description="Presentation software for client meetings"
          link="https://zeoxo.itch.io/the-great-machine-ldjam48"
          image="src/assets/images/projects/greatMachine/TGM.gif"
        />
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/greatMachine/dwarf.gif"
          title="Purchase Order Tracker"
          year="2020"
          description="Track purchase orders"
          link="https://zeoxo.itch.io/the-great-machine-ldjam48"
          image="src/assets/images/projects/greatMachine/TGM.gif"
        />
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/greatMachine/dwarf.gif"
          title="Social Study"
          year="2019"
          description="A collaborative learning tool students"
          link="https://zeoxo.itch.io/the-great-machine-ldjam48"
          image="src/assets/images/projects/greatMachine/TGM.gif"
        />
        </div>     
        
      <img class="icon" src="@/assets/svg/emoji/controller.svg" alt=""/>        
      <h2>Games</h2>
      <div class="projects">
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/greatMachine/dwarf.gif"
          title="The Great Machine"
          year="2021"
          description="A game made in 48 hours with the Godot engine"
          link="https://zeoxo.itch.io/the-great-machine-ldjam48"
          image="src/assets/images/projects/greatMachine/TGM.gif"
        />
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/flyta/spaceman.svg"
          title="FLYTA"
          year="2021"
          description="A mobile game about a lost space man"
          link="https://flytagame.com"
          image="src/assets/images/projects/flyta/flyta.gif"
        />
        <ProjectCard
          class="project-card"
          icon="src/assets/images/projects/pop/orange.png"
          title="Paper or Plastic"
          year="2019"
          description="A mobile game about catching groceries"
          link="https://zeoxo.itch.io/pop"
          image="https://img.itch.zone/aW1nLzU0ODEyMTEuZ2lm/original/BOKXz5.gif"
        />
        <ProjectCard
          class="project-card"
          icon="https://img.itch.zone/aW1hZ2UvMTQ2OTA0LzY3Mzg0Ny5wbmc=/original/QM%2B8vu.png"
          title="Slap Fight"
          year="2017"
          description="A Game made in 48 hours for Shananijam 2017"
          link="https://zeoxo.itch.io/slap-fight"
          image="src/assets/images/projects/slapFight/slapFight.gif"
        />
      </div>  
      <img class="icon" src="@/assets/svg/emoji/art.svg" alt="">
      <h2>Art</h2>
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

.content {
  padding: 30px;
}

.icon {
  max-width: 50px;
  margin-top: 50px;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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


@media (max-width: 750px) {
  .content {
    padding: 5px;
  }

  .project-card {
    margin: 0px;
    margin-bottom: 30px;
  }
}

p {
  color: var(--col-old-paper);
}

</style>
