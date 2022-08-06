<template>
  <div class="navbar">
    <router-link class="logo" to="/#home">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </router-link>
    <div class="links desktop">
      <router-link to="/#home">Home</router-link>
      <router-link to="/#work">Work</router-link>
      <router-link to="/#skills">Skills</router-link>
      <router-link to="/#about">About</router-link>
      <router-link class="button button-dark" id="contact" to="/#contact">Contact</router-link>
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
      <router-link class="mobile-link" @click="toggleMenu" to="/#home">Home</router-link>
      <router-link class="mobile-link" @click="toggleMenu" to="/#work">Work</router-link>
      <router-link class="mobile-link" @click="toggleMenu" to="/#skills">Skills</router-link>
      <router-link class="mobile-link" @click="toggleMenu" to="/#about">About</router-link>
      <router-link class="button button-dark mobile-link" id="contact" @click="toggleMenu"  to="/#contact">Contact</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
@import "@/assets/base.css";
.navbar {
  z-index: 2000;
  background-color: var(--col-old-paper);
  position: fixed;
  padding: 10px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.mobile-link {
  opacity: 0;
  animation: fadeIn 0.25s ease-in-out forwards 0.1s;
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

a {
  font-size: 20px;
  margin-left: 30px;
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
</style>
