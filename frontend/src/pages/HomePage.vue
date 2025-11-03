<template>
  <div class="home-page">
    <!-- 首页图片 - 水平铺满，竖直可滚动 -->
    <div class="home-image-container">
      <img 
        :src="homeImage" 
        alt="首页"
        class="home-image"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeImageSrc from '@/assets/Home_0.png'

// 使用 assets 文件夹中的图片
const homeImage = ref(homeImageSrc)
</script>

<style scoped>
.home-page {
  /* 移除默认的内边距和外边距 */
  margin: 0;
  padding: 0;
  width: 100%;
}

.home-image-container {
  /* 确保容器宽度100% */
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0; /* 移除图片下方的默认间隙 */
}

.home-image {
  /* 水平方向铺满 */
  width: 100%;
  /* 高度自适应，保持图片比例 */
  height: auto;
  /* 移除图片默认边距 */
  display: block;
  margin: 0;
  padding: 0;
}
</style>

