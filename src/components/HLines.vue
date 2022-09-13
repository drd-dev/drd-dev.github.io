<template>
<div class="lines" ref="lines" >
  <hr class="bg-blue">
  <hr class="bg-orange">
  <hr class="bg-red" v-element-visibility="onScroll">
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {vElementVisibility } from "@vueuse/components";

const lines = ref(null);
function onScroll(state:boolean){
  if(state){
    const el:any = lines.value;
    if(el)
      el.classList.add('visible');
  }
}
</script>

<style scoped>
.lines{
  width: 0%;
}

hr {
  width: 100%;
  border: 0;
  height: 8px;
  margin-bottom: 5px;
}

.visible {
  animation: lineGrow 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes lineGrow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

</style>


