<template>
<div class="skills" id="skills">
  <img src="@/assets/svg/emoji/brain.svg" alt="">
  <h1>Skills</h1>
  <p>I love web development and the power it brings to all platforms. Write once, deploy anywhere has really spoken to me so I've focused a majority of my studied on web technology. Game development is another one of my great interests, I've used Unity for years, but recently switched to the Godot Engine due to its open source model.</p>
  <div class="list">
    <a class="skill" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
      <img src="@/assets/svg/skills/html.svg" alt="">
      <h3>HTML</h3>
      <p class="time">6 years</p>
    </a>
    <a class="skill" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
      <img src="@/assets/svg/skills/css.svg" alt="">
      <h3>CSS</h3>
      <p class="time">6 years</p>
    </a>
    <a class="skill" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="@/assets/svg/skills/javascript.svg" alt="">
      <h3>JavaScript</h3>
      <p class="time">6 years</p>
    </a>
    <a class="skill" href="https://vuejs.org/" target="_blank">
      <img src="@/assets/svg/skills/vue.svg" alt="">
      <h3>Vue</h3>
      <p class="time">5 years</p>
    </a>
    <a class="skill"  href="https://firebase.google.com/" target="_blank">
      <img src="@/assets/svg/skills/firebase.svg" alt="">
      <h3>Firebase</h3>
      <p class="time">5 years</p>
    </a>
    <a class="skill" href="https://nodejs.org/en/" target="_blank">
      <img src="@/assets/svg/skills/node.svg" alt="">
      <h3>Node</h3>
      <p class="time">5 years</p>
    </a>
    <a class="skill" href="https://git-scm.com/" target="_blank">
      <img src="@/assets/svg/skills/git.svg" alt="">
      <h3>Git</h3>
      <p class="time">6 years</p>
    </a>
    <a class="skill" href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">
      <img src="@/assets/svg/skills/cSharp.svg" alt="">
      <h3>C#</h3>
      <p class="time">5 years</p>
    </a>
    <a class="skill" href="https://unity.com/" target="_blank">
      <img src="@/assets/svg/skills/unity.svg" alt="">
      <h3>Unity</h3>
      <p class="time">5 years</p>
    </a>
    <a class="skill" href="https://godotengine.org/" target="_blank">
      <img src="@/assets/svg/skills/godot.svg" alt="">
      <h3>Godot</h3>
      <p class="time">1 year</p>
    </a>
    <a class="skill" href="https://affinity.serif.com/en-us/designer/" target="_blank">
      <img src="@/assets/svg/skills/affinityDesigner.svg" alt="">
      <h3>Affinity</h3>
      <p class="time">4 years</p>
    </a>
  </div>
</div>
</template>


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

h3 {
  font-weight: bold;
  margin-top: 8px;
}


.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

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
  max-width: 50px;
}

</style>