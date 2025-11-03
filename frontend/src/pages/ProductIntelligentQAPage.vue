<template>
  <div class="product-page">
    <div class="product-image-container">
      <img 
        :src="productImage" 
        alt="Intelligent Q&A System"
        class="product-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import productImageSrc from '@/assets/Intelligent Q&A Syst.png'

const productImage = ref(productImageSrc)
</script>

<style scoped>
.product-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.product-image-container {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}
</style>

