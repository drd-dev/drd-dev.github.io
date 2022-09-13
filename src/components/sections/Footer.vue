<template>
<div class="footer">
  <div class="con">
    <div class="left">
      <img src="@/assets/images/logo.svg" alt="">
      <div> &copy; Dylan Dougherty, {{new Date().getFullYear()}}</div>
    </div>
    <div class="right">
      <a class="info" href="https://github.com/drd-dev/drd-dev.github.io" target="_blank">View Source Code</a>
    </div>
  </div>
</div>
</template>

<style scoped>
.footer{
  color: var(--col-old-paper);
  background-color: var(--col-old-ink);
  font-family: Lexend;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.con{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  height: 100%;
}

img{
  width: 75px;
  margin-right: 10px;
  filter: invert(76%) sepia(56%) saturate(7311%) hue-rotate(326deg) brightness(92%) contrast(105%);
}

@media only screen and (max-width: 750px) {
  .con {
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 250px;
  }

  .left{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img{
    margin-bottom: 10px;
  }
}

.info {
  color: var(--col-old-paper);
}

</style>