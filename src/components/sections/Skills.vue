<template>
<div class="skills" id="skills">
  <img src="@/assets/svg/emoji/brain.svg" alt="">
  <h1>Skills</h1>
  <p>I love web development and the power it brings to all platforms. Write once, deploy anywhere has really spoken to me so I've focused a majority of my studied on web technology. Game development is another one of my great interests, I've used Unity for years, but recently switched to the Godot Engine due to its open source model.</p>
  <div class="list">
    <skillBox text="HTML" icon="src/assets/svg/skills/html.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/HTML"></skillBox>
    <skillBox text="CSS" icon="src/assets/svg/skills/css.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/CSS"></skillBox>
    <skillBox text="Javascript" icon="src/assets/svg/skills/javascript.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"></skillBox>
    <skillBox text="Vue" icon="src/assets/svg/skills/vue.svg" :startYear="2017" link="https://vuejs.org/"></skillBox>
    <skillBox text="Firebase" icon="src/assets/svg/skills/firebase.svg" :startYear="2017" link="https://firebase.google.com/"></skillBox>
    <skillBox text="Node" icon="src/assets/svg/skills/node.svg" :startYear="2016" link="https://nodejs.org/en/"></skillBox>
    <skillBox text="Git" icon="src/assets/svg/skills/git.svg" :startYear="2016" link="https://git-scm.com/"></skillBox>
    <skillBox text="C#" icon="src/assets/svg/skills/cSharp.svg" :startYear="2016" link="https://docs.microsoft.com/en-us/dotnet/csharp/"></skillBox>
    <skillBox text="Unity" icon="src/assets/svg/skills/unity.svg" :startYear="2016" link="https://unity.com/"></skillBox>
    <skillBox text="Godot" icon="src/assets/svg/skills/godot.svg" :startYear="2020" link="https://godotengine.org/"></skillBox>
    <skillBox text="Affinity" icon="src/assets/svg/skills/affinityDesigner.svg" :startYear="2018" link="https://affinity.serif.com/en-us/designer/"></skillBox>
  </div>
</div>
</template>

<script setup lang="ts">
import SkillBox from '@/components/SkillBox.vue';
</script>

<style scoped>
.skills {
  text-align: center;
  width: 80%;
  margin: 0px auto;
  padding-top: 80px;
}

@media only screen and (max-width: 750px) {
  .skills {
    width: 100%;
  }
}


.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

</style>