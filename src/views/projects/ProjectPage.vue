<template>
  <div class="cocoon-qr">
    <ImgModal v-if="modalURL != ''" :image="modalURL" v-on:close="modalURL = ''"/>
    <div class="lines">
      <hr class="bg-blue" />
      <hr class="bg-orange" />
      <hr class="bg-red" />
    </div>
    <h1 class="title">{{title}}</h1>
      <p class="subtitle">{{subtitle}}</p>
    <img class="hero-image" :src="coverImage" @click="openModal(coverImage)" alt="" />
    <div class="main">
      <div class="left">
        <div class="about">
          <h2>About</h2>
          <p>{{about}}</p>
        </div>
        <div style="display: flex; flex-wrap: wrap; justify-content: center">
          <div class="tech box-shadow-normal">
            <h2>Tech Used</h2>
            <div class="tech-tags">
              <Tag v-for="t in tech">{{t}}</Tag>
            </div>
          </div>
          <div class="features box-shadow-normal">
            <h2>Features</h2>
            <ul>
              <li v-for="f in features">{{f}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="images">
          <h2>Screenshots</h2>
          <img class="box-shadow-normal" v-for="s in screenshots" :src="s" @click="openModal(s)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import Tag from "@/components/Tag.vue";
import ImgModal from "@/components/ImgModal.vue"

const modalURL = ref('');

onMounted(() => {
  window.scrollTo(0, 0);
});


const props =  defineProps({
  title:  {
    type:  String,
    default: 'New Project'
  },
  subtitle: {
    type:String,
    default: 'A new Project'
  },
  demoURL: String,
  sourceURL: String,
  coverImage: {
    type: String,
    default: ''
  },
  about: String,
  tech: Array,
  features: Array,
  screenshots: {
    type: Array as PropType<Array<string>>,
    default: []
  },

})


function openModal(imageURL: string) {
  modalURL.value = imageURL
  console.log(modalURL.value);
  
}

</script>

<style scoped>
.main {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 80px;
  margin: 80px 50px 50px 80px;
}

.about {
  border-radius: 10px;
  padding: 20px;
}

.tech, .features {
  background-color: var(--col-old-ink);
  padding: 30px;
  border-radius: 10px;
  color: var(--col-old-paper);
  max-width: 400px;
  margin: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.tag {
  margin: 5px;
}

.images {
  display: flex;
  flex-direction: column;
}

img {
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
}

hr {
  width: 100%;
  border: 0;
  height: 8px;
  margin-bottom: 5px;
}

.hero-image {
  width: 50%;
}

@media only screen and (max-width: 750px){
  .hero-image{
    width: 95%;
  }

  .main{
    flex-direction: column;
    text-align: center;
    margin: 0px;
    align-items: center;
  }
}
</style>
