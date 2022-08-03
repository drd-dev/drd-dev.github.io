<template>
<div class="navbar">
  <img src="@/assets/images/logo.svg" alt="">
  <div class="links">
    <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#skills">Skills</a>
    <a href="#about">About</a>
    <a id="contact" href="#">Contact</a>
  </div>
</div>
</template>

<style scoped>
@import "@/assets/base.css";
.navbar{
  z-index: 2000;
  background-color: var(--col-old-paper);
  position: fixed;
  padding: 15px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
}

img {
  max-width: 80px;
}

a {
  font-size: 20px;
  margin-left: 30px;
}

#contact {
  color: var(--col-old-paper);
  background-color: var(--col-old-ink);
  padding: 12px 32px 12px 32px;
}

#contact:hover {
  background-color: var(--col-red);
  color: var(--col-old-ink) !important;
}
</style>