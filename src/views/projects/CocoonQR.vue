<template>
  <ProjectPage
    title="COCOON-QR"
    subtitle="A QR Code Generator and management system"
    coverImage="/src/assets/images/projects/cocoon-qr/qr-create.png"
    :tech="['HTML', 'CSS', 'JavaScript', 'Vue', 'Firebase']"
    :features="[
      'Create and customize QR Code',
      'Manage QR codes with dynamic links',
      'Track number of QR code uses',
      'Microsoft Azure AD authentication',
    ]"
    :screenshots="[
      '/src/assets/images/projects/cocoon-qr/qr-create.png',
      '/src/assets/images/projects/cocoon-qr/qr-created.png',
      '/src/assets/images/projects/cocoon-qr/qr-manage.png',
      '/src/assets/images/projects/cocoon-qr/qr-examine.png',
    ]"
  >
    <p>
      This Project was developed for <a href="https://thecocoon.com" target="_blank">COCOON</a> as a way for the marketing team to create and manage QR codes in house. It
      features a fully-fledged QR code creation suite with options to upload images, change colors/shapes, and then
      export for use on the web or in print. All generated QR codes have a dynamic URL that can be edited after creation
      without the need to reprint or change the code in the field. QR codes also contain basic tracking that keeps track
      of the number of uses along with timestamps for each code.
    </p>
  </ProjectPage>
</template>

<script setup lang="ts">
import ProjectPage from "@/views/projects/ProjectPage.vue";
</script>
