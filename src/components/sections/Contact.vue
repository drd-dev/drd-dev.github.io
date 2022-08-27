<template>
<div class="contact" id="contact">
  <img class="section-icon" src="@/assets/svg/emoji/mail.svg" alt="">
  <h1>Contact Me</h1>
  <div class="content">
    <form action="https://formspree.io/f/xknegpwj" method="POST">
      <label for="name">Name</label>
      <input name="name" type="text" placeholder="Full Name">
      <label for="email">Email</label>
      <input name="email" type="email" placeholder="Email Address">
      <label for="message" id="message">Message</label>
      <textarea name="message" type="area" style="height: 200px;" placeholder="Your Message"></textarea>
      <input class="button button-dark" type="submit" value="Submit">
    </form>
  </div>
</div>
</template>



<style scoped>
.contact {
  padding-top:80px;
}

form{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input, textarea {
  border: none;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  font-family: Lexend;
  font-size: 20px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
}

label{
  font-family: Lora;
  font-weight: bold;
  font-size: 20px;
  align-self: flex-start;
}

.message {
  height: 50px;
}

.button {
  align-self: center;
  margin-top: 30px;
  font-family: Lora;
  width: 200px;

}
</style>