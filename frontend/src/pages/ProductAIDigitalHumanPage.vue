<template>
  <div class="product-page">
    <!-- 顶部背景图片区域 -->
    <div class="hero-section">
      <img 
        :src="backgroundImage" 
        alt="Background"
        class="background-image"
      >
      
      <!-- 标题覆盖在背景图片上 -->
      <h1 class="page-title">
        AI DIGITAL HUMAN SOLUTIONS
      </h1>
      
      <!-- 圆角矩形覆盖在背景图片上 -->
      <div class="content-box" />
    </div>
    
    <!-- 内容容器 -->
    <div class="content-container">
      <!-- Exhibition Presenter 部分 -->
      <div class="exhibition-section">
        <!-- 二级标题 -->
        <h2 class="section-title">
          EXHIBITION PRESENTER
        </h2>
        
        <!-- 三级标题 -->
        <h3 class="section-subtitle">
          Interactive AI Digital Human presenting product videos, images, and descriptions for exhibitions
        </h3>
        
        <!-- 三组模块 -->
        <div class="modules-container">
          <!-- 第一组模块 -->
          <div class="module">
            <img 
              :src="interactivePresentaImage" 
              alt="Interactive Presentation"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                Interactive Presentation
              </h4>
              <p class="module-description">
                Engages visitors with natural conversation and dynamic product demonstrations
              </p>
            </div>
          </div>
          
          <!-- 第二组模块 -->
          <div class="module">
            <img 
              :src="multiMediaSupportImage" 
              alt="Multi-Media Support"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                Multi-Media Support
              </h4>
              <p class="module-description">
                Seamlessly presents videos, images, and detailed product information
              </p>
            </div>
          </div>
          
          <!-- 第三组模块 -->
          <div class="module">
            <img 
              :src="availability247Image" 
              alt="24/7 Availability"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                24/7 Availability
              </h4>
              <p class="module-description module-description-wide">
                Always ready to assist visitors, providing consistent service throughout the exhibition
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- AI Sales Person 部分 -->
      <div class="sales-section">
        <!-- 二级标题 -->
        <h2 class="section-title sales-title">
          AI SALES PERSON
        </h2>
        
        <!-- 三级标题 -->
        <h3 class="section-subtitle">
          INTERACTIVE DIGITAL HUMAN FOR PRODUCT PRESENTATION AND INTELLIGENT SALES AUTOMATION
        </h3>
        
        <!-- 三个矩形模块（无图片） -->
        <div class="modules-container">
          <!-- 第一个模块 -->
          <div class="module">
            <div class="module-card sales-card">
              <h4 class="module-title">
                Smart Sales Conversations
              </h4>
              <p class="module-description">
                Handles customer inquiries, product recommendations, and sales negotiations
              </p>
            </div>
          </div>
          
          <!-- 第二个模块 -->
          <div class="module">
            <div class="module-card sales-card">
              <h4 class="module-title">
                Personalized Experience
              </h4>
              <p class="module-description">
                Adapts communication style based on customer preferences and behavior
              </p>
            </div>
          </div>
          
          <!-- 第三个模块 -->
          <div class="module">
            <div class="module-card sales-card">
              <h4 class="module-title">
                Performance Analytics
              </h4>
              <p class="module-description">
                Tracks sales metrics and provides insights for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import backgroundImageSrc from '@/assets/Case Studies-AI Digital Human-1/bg.png'
import interactivePresentaImageSrc from '@/assets/Case Studies-AI Digital Human-1/Interactive Presenta.png'
import multiMediaSupportImageSrc from '@/assets/Case Studies-AI Digital Human-1/Multi-Media Support.png'
import availability247ImageSrc from '@/assets/Case Studies-AI Digital Human-1/247 Availability.png'

const backgroundImage = ref(backgroundImageSrc)
const interactivePresentaImage = ref(interactivePresentaImageSrc)
const multiMediaSupportImage = ref(multiMediaSupportImageSrc)
const availability247Image = ref(availability247ImageSrc)
</script>

<style scoped>
.product-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

/* 顶部背景图片区域 */
.hero-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
  /* 设置固定高度以确保圆角矩形完全显示，并为下方内容预留空间 */
  /* 圆角矩形 top: 16.1vw + height: 38.6vw = 54.7vw */
  min-height: 54.7vw; /* 1051px at 1920px viewport (309 + 742) */
}

.background-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

/* 标题覆盖在背景图片上 */
.page-title {
  position: absolute;
  top: 6.3vw; /* 121px at 1920px viewport */
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 4.58vw; /* 88px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: normal;
  text-align: center;
  color: #3285ff;
  line-height: 5.63vw; /* 108px at 1920px viewport */
  letter-spacing: 0.014vw; /* 0.26px at 1920px viewport */
  white-space: nowrap;
}

/* 圆角矩形 */
.content-box {
  position: absolute;
  /* 标题 top: 6.3vw + line-height: 5.63vw + 间隔: 4.17vw = 16.1vw */
  top: 16.1vw; /* 309px at 1920px viewport (121 + 108 + 80) */
  left: 50%;
  transform: translateX(-50%);
  width: 68.7vw; /* 1319px at 1920px viewport */
  height: 38.6vw; /* 742px at 1920px viewport */
  border: 0.31vw solid #002d6e; /* 6px at 1920px viewport */
  border-radius: 1.25vw; /* 24px at 1920px viewport */
  box-shadow: 0 0.68vw 1.25vw 0 rgba(0, 29, 59, 0.51); /* 0px 13px 24px at 1920px viewport */
}

/* 内容容器 */
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.25vw; /* 80px at 1920px viewport - 添加底部间距 */
}

/* Exhibition Presenter 部分 */
.exhibition-section {
  width: 68.7vw; /* 与圆角矩形同宽 */
  /* 圆角矩形下方间隔 80px */
  margin-top: 4.17vw; /* 80px at 1920px viewport */
}

/* 二级标题 */
.section-title {
  margin: 0;
  font-size: 1.67vw; /* 32px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #3285ff;
  line-height: 2.03vw; /* 39px at 1920px viewport */
  letter-spacing: 0.0016vw; /* 0.03px at 1920px viewport */
}

/* 三级标题 */
.section-subtitle {
  margin: 0;
  margin-top: 0.73vw; /* 14px at 1920px viewport */
  font-size: 0.94vw; /* 18px at 1920px viewport */
  font-family: PingFang SC, PingFang SC-Regular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #b0b4cc;
  line-height: 1.3vw; /* 25px at 1920px viewport */
  letter-spacing: 0;
}

/* 模块容器 */
.modules-container {
  display: flex;
  gap: 2.03vw; /* 39px at 1920px viewport */
  margin-top: 2.08vw; /* 40px at 1920px viewport */
}

/* 单个模块 */
.module {
  flex: 0 0 21.56vw; /* 414px at 1920px viewport */
}

/* 模块图片 */
.module-image {
  width: 21.56vw; /* 414px at 1920px viewport */
  height: 15.47vw; /* 297px at 1920px viewport */
  display: block;
  object-fit: cover;
}

/* 蓝色卡片 */
.module-card {
  width: 21.56vw; /* 414px at 1920px viewport */
  height: 8.54vw; /* 164px at 1920px viewport */
  background: #3285ff;
  margin-top: 1.04vw; /* 20px at 1920px viewport */
  padding: 2.08vw; /* 40px at 1920px viewport */
  box-sizing: border-box;
}

/* 模块标题 */
.module-title {
  margin: 0;
  font-size: 1.04vw; /* 20px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.25vw; /* 24px at 1920px viewport */
}

/* 模块描述 */
.module-description {
  margin: 0;
  margin-top: 1.04vw; /* 20px at 1920px viewport */
  font-size: 0.73vw; /* 14px at 1920px viewport */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.04vw; /* 20px at 1920px viewport */
}

/* 第三个模块的描述文本（更宽） */
.module-description-wide {
  width: 17.34vw; /* 333px at 1920px viewport */
  height: 2.08vw; /* 40px at 1920px viewport */
}

/* AI Sales Person 部分 */
.sales-section {
  width: 68.7vw; /* 与圆角矩形同宽 */
  /* Exhibition Presenter 板块下方间隔 80px */
  margin-top: 4.17vw; /* 80px at 1920px viewport */
}

/* AI Sales Person 标题（黄色） */
.sales-title {
  color: #3285ff;
}

/* AI Sales Person 的卡片（黄色背景） */
.sales-card {
  background: #ffbd3c;
  /* 距离三级标题 40px */
  margin-top: 0;
}

/* AI Sales Person 的模块容器（调整 margin-top） */
.sales-section .modules-container {
  margin-top: 2.08vw; /* 40px at 1920px viewport */
}
</style>

