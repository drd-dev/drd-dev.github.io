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
        <img
          class="top-img profile box-shadow-normal"
          src="@/assets/images/General/profile_pic.jpg"
          alt="Profile Picutre"
        />
        <h2>A Passion For Creation</h2>
        <p style="font-style: italic;">I believe that through the power of technology and code, incredible experiences can be brought to life.</p>
        <br />
        <p>
          Growing up, I've always had a strong passion for creation. It began simple with lego sets, then quickly evolved into arts, electronics, and now programming.
          I truly believe that through the power of good technology, magical expierences can be brought into the world by those gifted enough to craft them.
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
          <div class="edu-card">
            <div class="top">
              <a href="https://kutztown.edu" target="_blank"><h3 style="color: var(--col-red); display: inline;">Kutztown University</h3><h4 style="color: var(--col-old-pencil); display: inline;">&nbsp;2015-2019</h4></a>
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
      <img
        class="profile right box-shadow-normal"
        src="@/assets/images/General/profile_pic.jpg"
        alt="Profile Picutre"
      />
    </div>
    <div class="content bottom-content">
      <hr class="divider" />
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

.top-img {
  display: none;
}

.lines {
  width: 100%;
}

.right {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
}

.profile {
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

.job {
  margin-bottom: 45px;
}

h3 {
  color: var(--col-old-ink);
  font-weight: bold;
  font-family: Lexend;
  font-size: 25px;
}


.bottom {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
ul {
  list-style-image: url("@/assets/svg/emoji/arrow.svg");
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
  .content {
    text-align: center;
    flex-direction: column;
  }
  .hobbies {
    justify-content: center;
  }
  .right {
    display: none;
  }

  .top-img {
    display: block;
    position: static;
    margin: 0px auto;
    margin-bottom: 50px;
  }
}

.tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
