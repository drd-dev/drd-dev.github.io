<template>
  <div class="navbar" :class="{'box-shadow-normal': showShadow}">
    <router-link class="logo" to="/#home">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </router-link>
    <div class="links desktop">
      <nav-bar-link class="link" link="/#home">Home</nav-bar-link>
      <nav-bar-link class="link" link="/#work">Work</nav-bar-link>
      <nav-bar-link class="link" link="/#skills">Skills</nav-bar-link>
      <nav-bar-link class="link" link="/#about">About</nav-bar-link>
      <nav-bar-link class="button button-dark" link="/#contact">Contact</nav-bar-link>
    </div>
    <div class="mobile">
      <div class="hamburger" v-if="!isOpen" @click="toggleMenu">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="close" v-else @click="toggleMenu">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
    <div class="menu box-shadow-normal" v-if="isOpen">
      <nav-bar-link class="mobile-link link" @click="toggleMenu" link="/#home">Home</nav-bar-link>
      <nav-bar-link class="mobile-link link" @click="toggleMenu" link="/#work">Work</nav-bar-link>
      <nav-bar-link class="mobile-link link" @click="toggleMenu" link="/#skills">Skills</nav-bar-link>
      <nav-bar-link class="mobile-link link" @click="toggleMenu" link="/#about">About</nav-bar-link>
      <nav-bar-link class="button button-dark" @click="toggleMenu" link="/#contact">Contact</nav-bar-link>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import NavBarLink from "./NavBarLink.vue";
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const showShadow = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    showShadow.value = window.scrollY > 0 ? true : false;
  });
});
</script>

<style scoped>
@import "@/assets/base.css";
.navbar {
  z-index: 2000;
  background-color: var(--col-old-paper);
  position: fixed;
  padding: 5px;
  left: 0px;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.25s;
}

.mobile {
  display: none;
}

.menu {
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
  z-index: 1000;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 60px;
  height: 0px;
  background-color: var(--col-old-paper);
  animation: grow 0.25s ease-in-out forwards;
}

.links{
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.mobile-link {
  opacity: 0;
  animation: fadeIn 0.25s ease-in-out forwards 0.1s;
  margin: 20px;
}

.button{
  height: 50px;
  margin-right: 0px;
}

/* mobile */
@media only screen and (max-width: 750px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .menu {
    display: flex;
  }
}

img {
  width: 80px;
}

.logo {
  margin: 0px;
  height: 40px;
  display: flex;
}

#contact {
  display: inline;
}

.hamburger,
.close {
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.top,
.bottom,
.middle,
.left,
.right {
  position: absolute;
  background-color: var(--col-old-ink);
  top: 0px;
  height: 5px;
  width: 30px;
  border-radius: 10px;
}

.middle {
  top: 10px;
}
.bottom {
  top: 20px;
}
.left {
  top: 50%;
  transform: rotate(45deg);
}

.right {
  top: 50%;
  transform: rotate(-45deg);
}

@keyframes grow {
  0% {
    height: 0px;
  }
  100% {
    height: 500px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.link{
  color: var(--col-old-ink);
  text-decoration: none;
}
@media(hover:hover){
  .link:hover{
    color: var(--col-red) !important;
  }
}
</style>
