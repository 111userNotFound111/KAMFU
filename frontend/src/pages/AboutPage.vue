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
        <!-- Blue Rectangle with Gray Rectangles Inside -->
        <div class="blue-rectangle">
          <div class="blue-content">
            <h2 class="section-title">
              Our Mission
            </h2>
            <p class="section-text">
              To empower businesses of all sizes with accessible, customized AI solutions that drive growth and innovation in the digital economy.
            </p>
          </div>
          
          <!-- Gray Rectangles Container (inside blue rectangle) -->
          <div class="gray-rectangles">
            <!-- First Gray Rectangle -->
            <div class="gray-rectangle">
              <div class="gray-content">
                <h2 class="section-title">
                  Multi-Media Support
                </h2>
                <p class="gray-text">
                  To be the trusted AI partner for enterprises globally, known…
                </p>
              </div>
            </div>
            
            <!-- Divider Line -->
            <div class="divider-line" />
            
            <!-- Second Gray Rectangle -->
            <div class="gray-rectangle">
              <div class="gray-content">
                <h2 class="section-title">
                  24/7 Availability
                </h2>
                <p class="gray-text">
                  Innovation, integrity, and impact drive everything we do. We…
                </p>
              </div>
            </div>
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

/* Info Section - Blue and Gray Rectangles */
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

.blue-rectangle {
  width: 68.75vw; /* 1320px / 1920px */
  height: 9.58vw; /* 184px / 1920px */
  background: #3285ff;
  position: relative;
  flex-shrink: 0;
}

.blue-content {
  padding-top: 2.08vw; /* 40px / 1920px */
  padding-left: 2.08vw; /* 40px / 1920px */
}

.gray-rectangles {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}

.gray-rectangle {
  width: 14.58vw; /* 280px / 1920px */
  height: 9.58vw; /* 184px / 1920px */
  background: rgba(116, 116, 116, 0.7); /* #747474 with 0.7 opacity */
  flex-shrink: 0;
}

.gray-content {
  padding-top: 2.08vw; /* 40px / 1920px */
  padding-left: 2.08vw; /* 40px / 1920px */
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
  width: 26.56vw; /* 510px / 1920px */
  height: auto;
  margin: 0;
  margin-top: 1.04vw; /* 20px / 1920px */
  padding: 0;
  font-size: 0.73vw; /* 14px / 1920px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.04vw; /* 20px / 1920px */
}

.gray-text {
  width: 10.42vw; /* 200px / 1920px */
  height: 2.08vw; /* 40px / 1920px */
  margin: 0;
  margin-top: 1.04vw; /* 20px / 1920px */
  padding: 0;
  font-size: 0.73vw; /* 14px / 1920px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  line-height: 1.04vw; /* 20px / 1920px */
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

