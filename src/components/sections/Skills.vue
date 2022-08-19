<template>
<div class="skills" id="skills">
  <img class="section-icon" src="@/assets/svg/emoji/brain.svg" alt="">
  <h1>Skills</h1>
  <div class="content">
    <div class="card box-shadow-normal">
      <h2>I Love Web Tech.</h2>
      <p>I enjoy creating applications with modern web technologies. I love the speed, and efficency that web apps provide, as well as the code once, deploy anywhere capabilities.</p>
      <br>
      <p>In my off time, I also like to develop small games using the Unity and Godot game engines.</p>
    </div>
    <div class="list">
      <SkillBox text="HTML" icon="src/assets/svg/skills/html.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/HTML"></skillBox>
      <SkillBox text="CSS" icon="src/assets/svg/skills/css.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/CSS"></skillBox>
      <SkillBox text="Javascript" icon="src/assets/svg/skills/javascript.svg" :startYear="2016" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"></skillBox>
      <SkillBox text="Vue" icon="src/assets/svg/skills/vue.svg" :startYear="2017" link="https://vuejs.org/"></skillBox>
      <SkillBox text="Firebase" icon="src/assets/svg/skills/firebase.svg" :startYear="2017" link="https://firebase.google.com/"></skillBox>
      <SkillBox text="Node" icon="src/assets/svg/skills/node.svg" :startYear="2016" link="https://nodejs.org/en/"></skillBox>
      <SkillBox text="Git" icon="src/assets/svg/skills/git.svg" :startYear="2016" link="https://git-scm.com/"></skillBox>
      <SkillBox text="C#" icon="src/assets/svg/skills/cSharp.svg" :startYear="2016" link="https://docs.microsoft.com/en-us/dotnet/csharp/"></skillBox>
      <SkillBox text="Unity" icon="src/assets/svg/skills/unity.svg" :startYear="2016" link="https://unity.com/"></skillBox>
      <SkillBox text="Godot" icon="src/assets/svg/skills/godot.svg" :startYear="2020" link="https://godotengine.org/"></skillBox>
      <SkillBox text="Affinity" icon="src/assets/svg/skills/affinityDesigner.svg" :startYear="2018" link="https://affinity.serif.com/en-us/designer/"></skillBox>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import SkillBox from '@/components/SkillBox.vue';
</script>

<style scoped>
.skills {
  text-align: center;
  padding-top: 80px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0px auto;
}


.card {
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  border-radius: 10px;
  padding: 20px;
  max-width: 450px;
  position: sticky;
  top: 100px;
  margin: 10px;
  text-align: left;
  align-self: flex-start;
}

.card p {
  color: var(--col-old-paper);
}


.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 450px;
  margin: 0px auto;
}

@media only screen and (max-width: 750px) {

  .content {
    flex-direction: column;
  }
  .card{
    position: relative;
    top: 0px;
    align-self: center;
  }
}

</style>