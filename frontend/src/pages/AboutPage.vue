<template>
  <div class="about-page">
    <div class="about-image-container">
      <img 
        :src="aboutImage" 
        alt="About Us"
        class="about-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import aboutImageSrc from '@/assets/About Us_0.png'

const aboutImage = ref(aboutImageSrc)
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.about-image-container {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}
</style>

