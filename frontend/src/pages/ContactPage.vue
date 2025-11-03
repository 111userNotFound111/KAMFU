<template>
  <div class="contact-page">
    <div class="contact-image-container">
      <img 
        :src="contactImage" 
        alt="Contact Us"
        class="contact-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import contactImageSrc from '@/assets/Contact-1_0.png'

const contactImage = ref(contactImageSrc)
</script>

<style scoped>
.contact-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.contact-image-container {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.contact-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}
</style>

