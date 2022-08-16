<script setup lang="ts">
import HLines from "@/components/HLines.vue";
</script>

<template>
  <div class="about-me">
    <HLines class="lines" />
    <img class="section-icon" src="@/assets/svg/emoji/questionmark.svg" alt="" />
    <h1 style="margin-bottom: 80px;">About Me</h1>
    <div class="content">
      <div class="left">
        <h2>A Passion For Creation</h2>
        <p>
          Growing up, I’ve always loved the act of creating. It started with Legos and evolved to Ceramics, Drawing,
          Digital Art, and now Programming. Whatever the medium, my love for creation was always fueled by the rush of
          eventually getting to share the effort of hundreds of hours of work with the others and seeing their
          reactions. I believe that through the power of technology and code, we can bring incredible experiences to
          life.
        </p>
        <hr />
        <div class="edu">
          <img class="section-icon" src="@/assets/svg/emoji/gradCap.svg" alt="">
          <h2>Education</h2>
          <div class="edu-card box-shadow-normal">
            <div class="top">
              <a href="https://kutztown.edu" target="_blank"><img class="ku-logo" src="@/assets/svg/KU.svg" alt="Kutztown University Logo"/></a> 
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
        <hr>
        <h2>Hobbies</h2>
        <p>
          I like to try new things. Because of this, I have many hobbies that I love to jump around depending on the
          time of year. Some I take more serious than others, but the list currently includes...
        </p>
        <ul>
          <li><a href="https://zeoxo.itch.io" target="_blank">Game Dev</a></li>
          <li>Snowboarding</li>
          <li>Skateboarding</li>
          <li>Hiking</li>
          <li>Cooking</li>
          <li>Beer Brewing</li>
          <li>Coffee</li>
          <li>Custom Mechanical Keyboards</li>
          <li>Digital Art</li>
        </ul>
      </div>
        <img class=" right box-shadow-normal" src="@/assets/images/General/profile_pic.jpg" alt="Profile Picutre" />
    </div>
  </div>
</template>

<style scoped>
.about-me {
  padding-top: 80px;
}

.lines {
  margin-bottom: 50px;
}

.content {
  width: 60%;
  margin: 0px auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
}



li {
  margin-bottom: 10px;
  font-size: 20px;
}

.lines {
  width: 100%;
}

hr {
  border: none;
  height: 3px;
  background-color: var(--col-old-pencil);
  margin: 20px 0px 20px 0px;
}

.right{
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

@media (max-width: 750px) {
  .content {
    text-align: center;
    flex-direction: column;
  }
  .right{
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
  border-radius: 10px;
  font-size: 18px;
}

h3 {
  color: var(--col-old-paper);
  font-weight: bold;
  font-family: Lexend;
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
}

</style>
