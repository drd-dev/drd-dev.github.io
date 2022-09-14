<template>
<div class="color-boxes">
  <div class="left" :style="{width: w + 'px', height: h + 'px'}"></div>
  <div class="middle" :style="{width: w + 'px', height: h + 'px'}"></div>
  <div class="right" :style="{width: w + 'px', height: h + 'px'}"></div>
</div>
</template>


<script setup lang="ts">
defineProps({
  w: {
    type: Number,
    default: 10,
  },
  h: {
    type: Number,
    default: 10,
  },
})
</script>

<style scoped>
.color-boxes {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.left {
  background-color: var(--col-red);
}

.middle {
  background-color: var(--col-orange);
}
.right{
  background-color: var(--col-blue);
}
</style>