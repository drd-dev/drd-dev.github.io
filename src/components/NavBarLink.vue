<template>
<router-link :to="link">
<slot/>
</router-link>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    default: '',
  },
})

</script>


<style scoped>
a {
  font-size: 20px;
  margin-right: 30px;
  font-family: Lexend;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>