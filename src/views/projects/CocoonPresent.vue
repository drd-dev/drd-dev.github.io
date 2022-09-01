<template>
  <ProjectPage
    title="COCOON-Present"
    subtitle="Specialized presentation software for three screens"
    coverImage="/src/assets/images/projects/present/present.png"
    about=" "
    :tech="['HTML', 'CSS', 'JavaScript', 'Electron', 'PDF.js', 'Firebase']"
    :features="[
      'Load and present 3 seperate PDFs at once',
      'Screen selection for each PDF',
      'Easy to use interface',
      'Keyboard shortcuts for easy navigation',
    ]"
    :screenshots="[
      '/src/assets/images/projects/present/present.png',
    ]"
  >
  <p>This Project was developed for <a href="https://thecocoon.com">COCOON</a> for use in their specialized client presentations. 
    A sales representative needed a way to easily present three seperate slideshows on three seperate screens as if it were one presentation.
    As a solution, I developed an electron app that would allow the user to select three PDF's and then choose which screen each would be displayed on. Upon pressing start presentation, the application would open each PDF on a sperate screen and display each page as a slide. 
    The user can then use keyboard shortcuts to easily navigate on each screen.</p>
  </ProjectPage>
</template>

<script setup lang="ts">
import ProjectPage from "@/views/projects/ProjectPage.vue";
</script>
