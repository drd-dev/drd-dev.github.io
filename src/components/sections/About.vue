<script setup lang="ts">
import HLines from "@/components/HLines.vue";
import Tag from "@/components/Tag.vue";
import { computed } from "vue";

const age = computed(() => {
  const year = new Date().getFullYear();
  return year - 1997;
});
</script>

<template>
  <div class="about-me" id="about">
    <HLines class="lines" />
    <img class="section-icon" src="@/assets/svg/emoji/questionmark.svg" alt="" />
    <h1 style="margin-bottom: 80px">About Me</h1>
    <div class="content">
      <div class="left">
        <h2>A Passion For Creation</h2>
        <p>I believe that through the power of technology and code, incredible experiences can be brought to life.</p>
        <br />
        <p>
          Growing up, I’ve always loved the act of creating. It started with legos as a child and evolved to ceramics,
          drawing, graphic design, and now programming. Whatever the medium, my love for creating has always been fueled
          by the ability to share what I've built with others.
        </p>
        <hr class="divider" />
        <div class="who">
          <img class="section-icon" src="@/assets/svg/emoji/person.svg" alt="" />
          <h2>General Info</h2>
          <div class="info">Who: <span>Dylan Dougherty</span></div>
          <div class="info">What: <span>Software Developer</span></div>
          <div class="info">
            When: <span>Born 1997 ({{ age }} Years Old)</span>
          </div>
          <div class="info">Where: <span>West Chester, PA</span></div>
          <div class="info">Why: <span>To create</span></div>
          <hr class="divider" />
        </div>
        <div class="edu">
          <img class="section-icon" src="@/assets/svg/emoji/gradCap.svg" alt="" />
          <h2>Education</h2>
          <div class="edu-card box-shadow-normal">
            <div class="top">
              <a href="https://kutztown.edu" target="_blank"
                ><img class="ku-logo" src="@/assets/svg/KU.svg" alt="Kutztown University Logo"
              /></a>
              <h4>2015-2019</h4>
            </div>
            <div class="bottom">
              <ul>
                <li>Major: B.S. Computer Science</li>
                <li>Minor: Web Development</li>
                <li>Deans List 2019</li>
                <li>National Honors Society For Leadership and Success</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img class="right box-shadow-normal" src="@/assets/images/General/profile_pic.jpg" alt="Profile Picutre" />
    </div>
    <div class="content bottom-content">
      <hr class="divider"/>
      <div class="experience">
        <img class="section-icon" src="@/assets/svg/emoji/briefcase.svg" alt="" />
        <h2>Work Experience</h2>
        <div class="jobs">
          <div class="job">
            <h3>Software Developer - <a href="https://thecocoon.com" target="_blank">@COCOON</a></h3>
            <h4>2021-Present</h4>
            <ul>
              <li>Develop software for use internally</li>
              <li>Maintain in-house software</li>
              <li>Mantain Office 365 infrastructure</li>
              <li>Maintain computer systems</li>
            </ul>
          </div>
          <div class="job">
            <h3>Independent Game Developer</h3>
            <h4>2019-present</h4>
            <ul>
              <li>Develop games using Unity (C#) and Godot (GdScript)</li>
              <li>Market games on google adsense, snapchat, and instagram</li>
              <li>Manage and maintain games with updates</li>
            </ul>
          </div>
          <div class="job">
            <h3>Desktop Support Specialist - <a href="https://cenero.com" target="_blank">@Cenero</a></h3>
            <h4>2019-2021</h4>
            <ul>
              <li>Mantain windows systems for over 250 users</li>
              <li>Develop custom software for aid within the IT department</li>
              <li>Perform admin duties in microsoft 365 products</li>
              <li>Handle IT related purchasing</li>
              <li>Manage account relations with companies such as Verizon</li>
            </ul>
          </div>
        </div>
      </div>
      <img class="section-icon" src="@/assets/svg/emoji/skiing.svg" alt="" />
      <h2>Hobbies</h2>
      <p>
        I like to try new things. Because of this, I have many hobbies that I love to jump around depending on the time
        of year. Some I take more serious than others, but the list currently includes...
      </p>
      <div class="hobbies">
        <Tag>Snowboarding</Tag>
        <Tag>Game Dev</Tag>
        <Tag>Hiking</Tag>
        <Tag>3D Printing</Tag>
        <Tag>Cooking</Tag>
        <Tag>Homebrewing</Tag>
        <Tag>Coffee</Tag>
        <Tag>Mechanical Keyboards</Tag>
        <Tag>Digital Art</Tag>
        <Tag>Video Games</Tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  padding-top: 80px;
  margin-bottom: 100px;
}

.lines {
  margin-bottom: 50px;
}

.content {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
}

.bottom-content {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

li {
  margin-bottom: 10px;
  font-size: 20px;
}

.lines {
  width: 100%;
}

.right {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
  margin-left: 80px;
  object-fit: cover;
  border-radius: 100px;
  height: 300px;
  width: 200px;
  filter: grayscale(100);
  top: 100px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin-top: 25px;
}

.job{
  margin-bottom: 45px;
}

@media (max-width: 750px) {
  .content {
    text-align: center;
    flex-direction: column;
  }
  .right {
    margin: 30px;
    margin-top: 30px;
    align-self: center;
  }
}

.edu-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  padding: 20px;
  min-width: 250px;
  border-radius: 10px;
  font-size: 18px;
  
}

h3 {
  color: var(--col-old-ink);
  font-weight: bold;
  font-family: Lexend;
  font-size: 25px;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 35px;
}

.bottom {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.ku-logo {
  margin-right: 0px;
  width: 225px;
}
ul {
  list-style-type: none;
  list-style-image: url('@/assets/svg/emoji/arrow.svg');
}

.info {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.hobbies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 15px;
}

@media only screen and (max-width: 750px) {
  .hobbies {
    justify-content: center;
  }
}

.tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
