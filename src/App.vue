<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <RouterView class="view" />
</template>

<style scoped>
.view {
  padding-top: 65px;
}
</style>
