<template>
  <div class="services-page">
    <div class="services-image-container">
      <img 
        :src="servicesImage" 
        alt="Services"
        class="services-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import servicesImageSrc from '@/assets/Services-1_0.png'

const servicesImage = ref(servicesImageSrc)
</script>

<style scoped>
.services-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.services-image-container {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.services-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}
</style>

