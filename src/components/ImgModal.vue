<template>
<div class="background"></div>
<div class="modal img-modal" @click="emit('close')">
  <img :src="image" alt="">
</div>
</template>

<script setup lang="ts">

const emit = defineEmits(['close'])

defineProps({
  image: String
})
</script>

<style scoped>
.modal {
  cursor: pointer;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  background-color: rgba(55, 55, 55, 0.59);
  cursor: pointer;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  filter: blur(100px);
  z-index: 99999;  
}

@keyframes grow{
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}

img {
  transform: scale(0);
  transition: transform 0.25s;
  animation-name: grow;
  animation-fill-mode: forwards;
  animation-duration: 0.1s;
  width: auto;
  border-radius: 10px;
  max-height: 90vh;
}
</style>