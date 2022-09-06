<template>
  <div class="contact" id="contact">
    <img class="section-icon" src="@/assets/svg/emoji/mail.svg" alt="" />
    <h1>Contact Me</h1>
    <div class="form" v-if="submissionState == 0">
      <label for="name">Name</label>
      <input name="name" v-model="formData.name" type="text" placeholder="Full Name" />
      <label for="email">Email</label>
      <input name="email" v-model="formData.email" type="email" placeholder="Email Address" />
      <label for="message" id="message">Message</label>
      <textarea
        name="message"
        v-model="formData.message"
        type="area"
        style="height: 200px"
        placeholder="Your Message"
      ></textarea>
      <button class="button button-dark" @click="submitForm">Submit</button>
      <span v-if="error" class="text-red">*Please fill out all information</span>
    </div>
    <div class="submitting" v-if="submissionState == 1">
      <h2>Submitting, please wait...</h2>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <div class="submitted" v-if="submissionState == 2">
      <h1>Thank You!</h1>
      <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_afs4kbqm.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"    autoplay></lottie-player>
      <h2>Your message has been sent.</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const error = ref(false);
const submissionState = ref(0); //0 - default, 1 - submitting, 2 - submitted

const formData = ref({
  name: "",
  email: "",
  message: "",
});

async function submitForm() {
  submissionState.value = 1;
  const isGood = validateForm();
  if (isGood) {
    error.value = false;
    const res = await fetch("https://contact.drd.software/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData.value),
    });
    submissionState.value = 2;
  }else {
    submissionState.value = 0;
  }
}

function validateForm(): boolean {
  let r: boolean = true;
  if (formData.value.name.length <= 0) r = false;
  if (formData.value.email.length <= 0) r = false;
  if (formData.value.message.length <= 0) r = false;

  if (r == false) {
    error.value = true;
  }
  return r;
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  background-color: var(--col-old-ink);
  color: var(--col-old-paper);
  padding-bottom: 80px;
}

.form {
  max-width: 900px;
  margin: 0px auto;
}

.form, .submitting, .submitted {
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.submitting, .submitted {
  align-items: center;
}

input,
textarea,
button {
  border: none;
  background-color: var(--col-blue);
  color: var(--col-old-paper);
  font-family: Lexend;
  font-size: 20px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
}

label {
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
