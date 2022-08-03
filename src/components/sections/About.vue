<template>
  <div class="about-me" id="about">
    <img src="@/assets/svg/emoji/questionmark.svg" alt="" />
    <h1>About Me</h1>
    <div class="content">
      <h2>A Passion For Creation</h2>
      <p>
        Growing up, I’ve always loved the act of creating. It started with Legos and evolved to Ceramics, Drawing,
        Digital Art, and now Programming. Whatever the medium, my love for creation was always fueled by the rush of
        eventually getting to share the effort of hundreds of hours of work with the others and seeing their reactions.
        I believe that through the power of technology and code, we can bring incredible experiences to life.
      </p>
      <hr />
      <h2>Hobbies</h2>
      <p>
        I like to try new things. Because of this, I have many hobbies that I love to jump around depending on the time
        of year. Some I take more serious than others, but the list currently includes...
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
  </div>
</template>

<style scoped>
.about-me {
  padding-top: 80px;
}
.content {
  text-align: left;
  max-width: 60%;
  margin: 0px auto;
  margin-top: 80px;
}

@media (max-width: 750px) {
  .content {
    text-align: center;
    max-width: 90%;
  }
}

li {
  margin-bottom: 10px;
  font-size: 20px;
}

hr {
  border: none;
  height: 3px;
  background-color: var(--col-old-pencil);
  margin: 20px 0px 20px 0px;
}
</style>
