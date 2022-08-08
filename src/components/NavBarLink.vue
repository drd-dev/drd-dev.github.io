<template>
<router-link :to="link" :class="{selected: isSelected}">
<slot/>
</router-link>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import router from '../router';

const props = defineProps({
  link: {
    type: String,
    default: '',
  },
})

const isSelected = computed(() => {  
  return router.currentRoute.value.fullPath === props.link;
})

</script>


<style scoped>
a {
  font-size: 20px;
  margin-right: 30px;
  font-family: Lexend;
}
.selected {
  color: var(--col-red);
  text-decoration: underline;
}

</style>