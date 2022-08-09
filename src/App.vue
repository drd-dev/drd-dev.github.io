<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/sections/Footer.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <RouterView class="view" />
  <Footer></Footer>
</template>

<style scoped>
.view {
  padding-top: 65px;
}
</style>
