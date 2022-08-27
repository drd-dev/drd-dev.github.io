<template>
<div class="modal img-modal">
  <img :src="image" alt="">
</div>
</template>

<script setup lang="ts">
defineProps({
  image: String
})
</script>

<style scoped>
.modal {
  position: absolute;
  left: 10;
  right: 10;
  bottom: 10;
  top: 10;
}
</style>