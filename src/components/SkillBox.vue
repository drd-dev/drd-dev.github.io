<template>
    <a class="skill" :href="link" target="_blank" ref="skill">
      <img :src="icon" alt="skill icon">
      <h3>{{text}}</h3>
      <p v-element-visibility="onScroll" class="time">{{years}} years</p>
    </a>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {ref} from 'vue';
import {vElementVisibility } from "@vueuse/components";
const props = defineProps({
  text: {
    type: String,
    default: '',
    required: true,
  },
  icon: {
    type: String,
    default: '',
    required: true,
  },
  startYear: {
    type: Number,
    default: 2001,
    required: true,
  },
  link: {
    type: String,
    default: '',
    required: true,
  }
})

const years = computed(() => {
  const endDate = new Date();
  const diffTime = endDate.getFullYear() - props.startYear;
  return diffTime;
})

const skill = ref(null);
function onScroll(state: boolean) {
  if(state && skill.value){
    const s: any = skill.value;
    s.classList.add('visible');
  }
}
</script>


<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--col-old-pencil);
  margin: 10px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--col-old-paper);
  transition: all 0.2s;
  cursor: pointer;
  opacity: 0;
}

.visible{
  opacity: 1;
}

.time {
  color: var(--col-orange);
}

@media (hover: hover) {
  .skill:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
    color: var(--col-old-paper) !important;
  }
}

img {
  height: 50px;
}

h3 {
  margin-top: 8px;
  font-family: Lexend;
}

</style>