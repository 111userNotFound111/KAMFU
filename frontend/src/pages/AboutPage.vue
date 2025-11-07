<template>
  <div class="about-page">
    <div class="about-background">
      <img 
        :src="aboutImage" 
        alt="About Us Background"
        class="background-image"
      >
      <div class="content-overlay">
        <h1 class="main-title">
          ABOUT AMPLIFY TECH
        </h1>
        <p class="subtitle">
          Founded with a vision to democratize AI technology, Amplify Tech bridges the gap between cutting-edge AI research and practical business applications. With expertise spanning multiple industries, we deliver transformative AI solutions that drive real business value
        </p>
      </div>
      
      <!-- Blue and Gray Rectangles Section -->
      <div class="info-section">
        <!-- Three Interactive Rectangles -->
        <div 
          class="info-card" 
          :class="{ 'expanded': activeCard === 0, 'collapsed': activeCard !== 0 }"
          @click="setActiveCard(0)"
        >
          <div class="card-content">
            <h2 class="section-title">
              Our Mission
            </h2>
            <p
              class="section-text"
              :class="{ 'text-collapsed': activeCard !== 0 }"
            >
              To empower businesses of all sizes with accessible, customized AI solutions that drive growth and innovation in the digital economy.
            </p>
          </div>
        </div>
        
        <!-- Divider Line 1 -->
        <div class="divider-line" />
        
        <div 
          class="info-card" 
          :class="{ 'expanded': activeCard === 1, 'collapsed': activeCard !== 1 }"
          @click="setActiveCard(1)"
        >
          <div class="card-content">
            <h2 class="section-title">
              Multi-Media Support
            </h2>
            <p
              class="section-text"
              :class="{ 'text-collapsed': activeCard !== 1 }"
            >
              To be the trusted AI partner for enterprises globally, known for delivering innovative solutions that transform businesses.
            </p>
          </div>
        </div>
        
        <!-- Divider Line 2 -->
        <div class="divider-line" />
        
        <div 
          class="info-card" 
          :class="{ 'expanded': activeCard === 2, 'collapsed': activeCard !== 2 }"
          @click="setActiveCard(2)"
        >
          <div class="card-content">
            <h2 class="section-title">
              24/7 Availability
            </h2>
            <p
              class="section-text"
              :class="{ 'text-collapsed': activeCard !== 2 }"
            >
              Innovation, integrity, and impact drive everything we do. We are committed to excellence in every project.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- OUR EXPERTISE Section -->
    <div class="expertise-section">
      <h2 class="expertise-title">
        <span class="our-text">OUR </span><span class="expertise-text">EXPERTISE</span>
      </h2>
      
      <div class="expertise-background">
        <img 
          :src="aboutImage2" 
          alt="Our Expertise Background"
          class="expertise-image"
        >
        <div class="stats-overlay">
          <div class="stat-item">
            <div class="stat-number">
              10+
            </div>
            <div class="stat-description">
              Years Experience
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              50+
            </div>
            <div class="stat-description">
              Expert Team
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              5+
            </div>
            <div class="stat-description">
              Industry Verticals
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              24/7
            </div>
            <div class="stat-description">
              Support
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import aboutImageSrc from '@/assets/About us_1.png'
import aboutImage2Src from '@/assets/About us_2.png'

const aboutImage = ref(aboutImageSrc)
const aboutImage2 = ref(aboutImage2Src)

// 管理当前激活的卡片，默认第一个展开
const activeCard = ref(0)

// 设置激活的卡片
const setActiveCard = (index) => {
  activeCard.value = index
}
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.about-background {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}

.background-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

.content-overlay {
  position: absolute;
  top: 11.4583vw;
  left: 8.28vw;
  z-index: 10;
}

.main-title {
  margin: 0;
  padding: 0;
  font-size: 4.58vw;
  font-family: Impact, Impact-Regular;
  font-weight: normal;
  text-align: left;
  color: #3285ff;
  line-height: 5.63vw;
  letter-spacing: 0.014vw;
}

.subtitle {
  width: 41vw;
  height: auto;
  margin: 0;
  margin-top: 1.04vw;
  padding: 0;
  font-size: 0.94vw;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: normal;
  text-align: left;
  color: #333333;
  line-height: 1.30vw;
  letter-spacing: 0px;
}

/* Info Section - Interactive Cards */
.info-section {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 68.75vw; /* 1320px / 1920px */
  height: 9.58vw; /* 184px / 1920px */
  display: flex;
  z-index: 15;
}

.info-card {
  height: 9.58vw; /* 184px / 1920px */
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;
}

/* 展开状态 - 蓝色矩形样式 */
.info-card.expanded {
  width: 39.58vw; /* 68.75vw - 29.17vw (缩短560px) */
  background: #3285ff;
}

/* 收缩状态 - 灰色矩形样式 */
.info-card.collapsed {
  width: 14.58vw; /* 280px / 1920px */
  background: rgba(116, 116, 116);
}

.card-content {
  padding-top: 2.08vw; /* 40px / 1920px */
  padding-left: 2.08vw; /* 40px / 1920px */
  padding-right: 2.08vw; /* 40px / 1920px */
}

.divider-line {
  width: 0.052vw; /* 1px / 1920px */
  height: 9.58vw; /* 184px / 1920px */
  background: rgba(255, 255, 255, 0.41);
  flex-shrink: 0;
}

.section-title {
  margin: 0;
  padding: 0;
  font-size: 1.04vw; /* 20px / 1920px */
  font-family: Impact, Impact-Regular;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.25vw; /* 24px / 1920px */
}

.section-text {
  margin: 0;
  margin-top: 1.04vw; /* 20px / 1920px */
  padding: 0;
  font-size: 0.73vw; /* 14px / 1920px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.04vw; /* 20px / 1920px */
  transition: all 0.3s ease;
}

/* 展开状态下的文本样式 */
.info-card.expanded .section-text {
  width: 26.56vw; /* 510px / 1920px */
  max-width: 26.56vw;
  overflow: visible;
  display: block;
}

/* 收缩状态下的文本样式 - 显示两行+省略号 */
.section-text.text-collapsed {
  width: 10.42vw; /* 200px / 1920px */
  max-width: 10.42vw;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* OUR EXPERTISE Section */
.expertise-section {
  margin-top: 8.96vw; /* 172px / 1920px */
  width: 100%;
}

.expertise-title {
  margin: 0;
  padding: 0;
  font-size: 1.67vw; /* 32px / 1920px */
  font-family: Impact, Impact-Regular;
  font-weight: normal;
  text-align: center;
  line-height: 2.03vw; /* 39px / 1920px */
  letter-spacing: 0.0016vw; /* 0.03px / 1920px */
}

.our-text {
  color: #b0b4cc;
}

.expertise-text {
  color: #3285ff;
}

.expertise-background {
  margin-top: 1.56vw; /* 30px / 1920px */
  margin-bottom: 6.25vw; /* 120px / 1920px */
  width: 100%;
  position: relative;
}

.expertise-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
  margin-left: -1px;
  margin-right: -1px;
}

.stats-overlay {
  position: absolute;
  top: 4.17vw; /* 80px / 1920px */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12.24vw; /* 235px / 1920px */
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  margin: 0;
  padding: 0;
  font-size: 3.33vw; /* 64px / 1920px */
  font-family: Alibaba PuHuiTi, Alibaba PuHuiTi-Regular;
  font-weight: normal;
  text-align: center;
  color: #3285ff;
  line-height: 4.58vw; /* 88px / 1920px */
}

.stat-description {
  margin: 0;
  margin-top: 0.21vw; /* 4px / 1920px */
  padding: 0;
  font-size: 0.83vw; /* 16px / 1920px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: normal;
  text-align: center;
  color: #ffffff;
  line-height: 1.04vw; /* 20px / 1920px */
}
</style>

