<template>
  <div class="case-studies-page">
    <div class="case-studies-image-container">
      <img 
        :src="caseStudiesImage" 
        alt="Case Studies"
        class="case-studies-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import caseStudiesImageSrc from '@/assets/Case Studies-1_0.png'

const caseStudiesImage = ref(caseStudiesImageSrc)
</script>

<style scoped>
.case-studies-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.case-studies-image-container {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.case-studies-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}
</style>

