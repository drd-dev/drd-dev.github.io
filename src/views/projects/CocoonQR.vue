<template>
<div class="cocoon-qr">
  <div class="lines">
    <hr class="bg-blue">
    <hr class="bg-orange">
    <hr class="bg-red">
  </div>  
  <img class="icon" src="@/assets/images/projects/cocoon-qr/qr-code.svg" alt="">
  <h1 class="title">COCOON - QR</h1>
  <div class="subtitle">
    <p>A QR Code generator and manager.</p>
  </div>
  <div class="content">
    <div class="about box-shadow-normal">
      <h2>About</h2>
      <p>This Project was developed for <a href="https://thecocoon.com" target="_blank">COCOON</a> as a way for the marketing team to create and manage QR codes in house. It features a fully-fledged QR code creation suite with options to upload images, 
      change colors/shapes, and then export for use on the web or in print. All generated QR codes have a dynamic URL that can be edited after creation without the need to reprint or change the code in the field. 
      QR codes also contain basic tracking that keeps track of the number of uses along with timestamps for each code.
      </p>
    </div>
    <div class="tech">
      <h2>Tech Used</h2>
      <ul>
        <li>Html/CSS</li>
        <li>JavaScript</li>
        <li>Vue</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Create and customize QR Code</li>
        <li>Manage QR codes with dynamic links</li>
        <li>Track number of QR code uses</li>
        <li>Microsoft Azure AD authentication</li>
      </ul>
    </div>
    <div class="images">
      <h2>Screenshots</h2>
      <img class="box-shadow-normal" src="@/assets/images/projects/cocoon-qr/qr-create.png" alt="">
      <img class="box-shadow-normal" src="@/assets/images/projects/cocoon-qr/qr-created.png" alt="">
      <img class="box-shadow-normal" src="@/assets/images/projects/cocoon-qr/qr-manage.png" alt="">
      <img class="box-shadow-normal" src="@/assets/images/projects/cocoon-qr/qr-examine.png" alt="">
      
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
})

</script>


<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}


.about {
  background-color: var(--col-old-ink);
  border-radius: 10px;
  padding: 20px;
  color: white;
  width: 500px;
  margin-top: 80px;
}

.about p {
  color: white;
}

.tech {
  background-color: var(--col-old-ink);
  padding: 30px;
  border-radius: 10px;
  color: var(--col-old-paper);
  text-align: left;
}

.images {
  display: flex;
  flex-direction: column;
}

img {
  width: 300px;
  margin: 10px;
  border-radius: 10px;
}

.icon {
  width: 100px;
  margin-top: 20px;
}
.lines{
  width: 100%;
  animation: lineGrow 0.5s ease-in-out;
  animation-direction: forwards;
}

hr {
  width: 100%;
  border: 0;
  height: 8px;
  margin-bottom: 5px;
}

</style>