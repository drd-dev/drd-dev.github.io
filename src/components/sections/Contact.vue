<template>
<div class="contact" id="contact">
  <img class="section-icon" src="@/assets/svg/emoji/mail.svg" alt="">
  <h1>Contact Me</h1>
  <div class="content">
      <label for="name">Name</label>
      <input name="name" v-model="formData.name" type="text" placeholder="Full Name">
      <label for="email">Email</label>
      <input name="email" v-model="formData.email" type="email" placeholder="Email Address">
      <label for="message" id="message">Message</label>
      <textarea name="message" v-model="formData.message" type="area" style="height: 200px;" placeholder="Your Message"></textarea>
      <button class="button button-dark" @click="submitForm">Submit</button>
      <span v-if="error" class="col-red">*Please fill out all information*</span>
  </div>
</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const error = ref(false);

  const formData = ref({
    name: "",
    email: "",
    message: ""
  })


  async function submitForm(){
    const isGood = validateForm();
    if(!isGood) return;
    error.value = false;
    const res = await fetch( 'https://contact.drd.software/submit' , {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData.value)
    })
    console.log(JSON.stringify(formData.value));
  }

  function validateForm(): boolean {
    let r:boolean = true;
    if(formData.value.name.length <= 0) r = false;
    if(formData.value.email.length <= 0) r = false;
    if(formData.value.message.length <=0) r = false;

    if(r == false){
      error.value = true;
    }
    return r;
  }

</script>

<style scoped>
.contact {
  padding-top:80px;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  padding-bottom: 80px;
}

.content{
  max-width: 900px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input, textarea, button {
  border: none;
  background-color: var(--col-blue);
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