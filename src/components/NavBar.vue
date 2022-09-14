<template>
  <div class="navbar" :class="{'box-shadow-normal': showShadow}">
    <router-link class="logo" to="/#home">
      <img src="@/assets/images/Logo.svg" alt="logo" />
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
    <div class="menu box-shadow-normal" :class="{visible: isOpen, hidden: !isOpen}">
      <nav-bar-link class="mobile-link link" :class="{'link-visible': isOpen, 'link-hidden': !isOpen}" @click="toggleMenu" link="/#home">Home</nav-bar-link>
      <nav-bar-link class="mobile-link link" :class="{'link-visible': isOpen, 'link-hidden': !isOpen}" @click="toggleMenu" link="/#work">Work</nav-bar-link>
      <nav-bar-link class="mobile-link link" :class="{'link-visible': isOpen, 'link-hidden': !isOpen}" @click="toggleMenu" link="/#skills">Skills</nav-bar-link>
      <nav-bar-link class="mobile-link link" :class="{'link-visible': isOpen, 'link-hidden': !isOpen}" @click="toggleMenu" link="/#about">About</nav-bar-link>
      <nav-bar-link class="button button-dark" :class="{'link-visible': isOpen, 'link-hidden': !isOpen}" @click="toggleMenu" link="/#contact">Contact</nav-bar-link>

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
  top: 50px;
  height: 0px;
  background-color: var(--col-old-paper);
  overflow: hidden;
}

.visible {
  animation: grow 0.25s ease-in-out forwards;
}

.hidden {
  animation: shrink 0.25s ease-in-out forwards;
}

.link-visible { 
  animation: fadeIn 0.25s ease-in-out forwards 0.1s;
}

.link-hidden {
  animation: fadeOut 0.25s ease-in-out forwards 0.1s;
}

.links{
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.mobile-link {
  margin: 20px;
}

.button{
  height: 50px;
  margin: 0px auto;
  max-width: 250px;
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
  height: 35px;
  width: auto;
  display: flex;
  filter: invert(9%) sepia(15%) saturate(5071%) hue-rotate(190deg) brightness(98%) contrast(95%);
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
  user-select: none;
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
.link{
  color: var(--col-old-ink);
  text-decoration: none;
}



/* queries */
@media(hover:hover){
  .link:hover{
    color: var(--col-red) !important;
  }
}

@media only screen and (max-width: 750px) {
  .button{
    width: 250px;
  }
}


/* animations */
@keyframes grow {
  0% {
    height: 0px;
  }
  100% {
    height: 50vh;
  }
}

@keyframes shrink {
  0% {
    height: 50vh;
  }
  100% {
    height: 0px;
  }
}

</style>
