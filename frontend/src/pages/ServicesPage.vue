<template>
  <div class="services-page">
    <!-- Header Section with Background -->
    <div class="services-header">
      <img 
        :src="ourServicesImage" 
        alt="Our Services"
        class="header-image"
      >
      <div class="header-content">
        <h1 class="services-title">
          OUR SERVICES
        </h1>
        <p class="services-subtitle">
          COMPREHENSIVE AI AND TECHNOLOGY SOLUTIONS FOR DIGITAL TRANSFORMATION
        </p>
      </div>
    </div>
    
    <!-- Service Cards Grid - Overlay on background -->
    <div class="service-cards-container">
      <!-- Card 1 -->
      <div class="service-card">
        <h3 class="card-title">
          Customized AI System Development
        </h3>
        <p class="card-description">
          Design and develop custom AI systems including intelligent agents, chatbots, and automated decision-making systems tailored to your specific industry needs
        </p>
      </div>

      <!-- Card 2 -->
      <div class="service-card">
        <h3 class="card-title">
          Data Analytics & Knowledge Base
        </h3>
        <p class="card-description">
          Transform your existing business data into structured knowledge bases that AI models and agents can utilize for intelligent insights and decision support
        </p>
      </div>

      <!-- Card 3 -->
      <div class="service-card">
        <h3 class="card-title">
          System Integration
        </h3>
        <p class="card-description">
          Seamlessly integrate AI tools and capabilities into your existing business systems, ensuring smooth workflow automation and enhanced operational efficiency
        </p>
      </div>

      <!-- Card 4 -->
      <div class="service-card">
        <h3 class="card-title">
          Custom System Development
        </h3>
        <p class="card-description">
          Full-stack development services building enterprise-grade applications from scratch, including backend infrastructure, APIs, and user interfaces
        </p>
      </div>

      <!-- Card 5 -->
      <div class="service-card">
        <h3 class="card-title">
          Web & Mobile Development
        </h3>
        <p class="card-description">
          Create responsive web applications and native mobile apps with modern frameworks, ensuring optimal performance across all devices and platforms
        </p>
      </div>

      <!-- Card 6 -->
      <div class="service-card">
        <h3 class="card-title">
          Data Governance & Security
        </h3>
        <p class="card-description">
          Implement comprehensive data management strategies, compliance frameworks, and security protocols to protect your digital assets
        </p>
      </div>
    </div>

    <!-- Development Process Section -->
    <div class="development-process-section">
      <!-- Process Image -->
      <img 
        :src="developmentProcessImage" 
        alt="Our Development Process"
        class="process-image"
      >

      <!-- Process Section Title -->
      <h2 class="process-section-title">
        OUR DEVELOPMENT PROCESS
      </h2>

      <!-- Orange Cards Grid -->
      <div class="process-cards-container">
        <!-- Orange Card 1 -->
        <div class="process-card process-card-1">
          <h3 class="process-card-title">
            Discovery & Analysis
          </h3>
          <p class="process-card-description">
            Implement comprehensive data management strategies, compliance frameworks, and security protocols to protect your digital assets
          </p>
        </div>

        <!-- Orange Card 2 -->
        <div class="process-card process-card-2">
          <h3 class="process-card-title">
            Proof of Concept
          </h3>
          <p class="process-card-description">
            Rapid prototyping and POC development to validate feasibility and demonstrate value
          </p>
        </div>

        <!-- Orange Card 3 -->
        <div class="process-card process-card-3">
          <h3 class="process-card-title">
            Agile Development
          </h3>
          <p class="process-card-description">
            Iterative development with regular feedback loops and flexible adaptation to changes
          </p>
        </div>

        <!-- Orange Card 4 -->
        <div class="process-card process-card-4">
          <h3 class="process-card-title">
            Testing & QA
          </h3>
          <p class="process-card-description">
            Comprehensive testing including functionality, performance, and security validation
          </p>
        </div>

        <!-- Orange Card 5 -->
        <div class="process-card process-card-5">
          <h3 class="process-card-title">
            Deployment
          </h3>
          <p class="process-card-description">
            Seamless deployment with zero-downtime strategies and complete documentation
          </p>
        </div>

        <!-- Orange Card 6 -->
        <div class="process-card process-card-6">
          <h3 class="process-card-title">
            Support & Optimization
          </h3>
          <p class="process-card-description">
            Ongoing maintenance, performance optimization, and continuous improvement
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ourServicesImage from '@/assets/Service/Our Services.png'
import developmentProcessImage from '@/assets/Service/Our Development Process.png'
</script>

<style scoped>
.services-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.services-header {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.header-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

.header-content {
  position: absolute;
  top: 12vh;
  left: 16.67vw;
  z-index: 10;
}

.services-title {
  margin: 0;
  padding: 0;
  font-size: 4.58vw; /* 88px / 1920px */
  font-family: Impact, Impact-Regular;
  font-weight: Regular;
  text-align: left;
  color: #ffffff;
  line-height: 5.625vw; /* 108px / 1920px */
  letter-spacing: 0.26px;
}

.services-subtitle {
  margin: 1.04vw 0 0 0;
  padding: 0;
  font-size: 0.9375vw; /* 18px / 1920px */
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: Regular;
  text-align: left;
  color: #ffffff;
  line-height: 1.302vw; /* 25px / 1920px */
  letter-spacing: 0px;
}

.service-cards-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.service-card {
  position: absolute;
  width: 33.33vw; /* 640px / 1920px */
  height: 14.58vw; /* 280px / 1920px */
  background: #3285ff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  pointer-events: auto;
}

/* Card positioning - Row 1 */
.service-card:nth-child(1) {
  left: 15.625vw; /* 300px */
  top: 16.30vw; /* 313px */
}

.service-card:nth-child(2) {
  left: calc(15.625vw + 33.33vw + 2.08vw); /* 300px + 640px + 40px = 980px = 51.04vw */
  top: 16.30vw; /* 313px */
}

/* Card positioning - Row 2 */
.service-card:nth-child(3) {
  left: 15.625vw; /* 300px */
  top: calc(16.30vw + 14.58vw + 2.08vw); /* 313px + 280px + 40px = 633px = 32.97vw */
}

.service-card:nth-child(4) {
  left: calc(15.625vw + 33.33vw + 2.08vw); /* 980px = 51.04vw */
  top: calc(16.30vw + 14.58vw + 2.08vw); /* 633px = 32.97vw */
}

/* Card positioning - Row 3 */
.service-card:nth-child(5) {
  left: 15.625vw; /* 300px */
  top: calc(16.30vw + 2 * 14.58vw + 2 * 2.08vw); /* 313px + 2*280px + 2*40px = 953px = 49.64vw */
}

.service-card:nth-child(6) {
  left: calc(15.625vw + 33.33vw + 2.08vw); /* 980px = 51.04vw */
  top: calc(16.30vw + 2 * 14.58vw + 2 * 2.08vw); /* 953px = 49.64vw */
}

.card-title {
  position: absolute;
  left: 2.60vw; /* 50px */
  top: 3.125vw; /* 60px */
  margin: 0;
  padding: 0;
  font-size: 1.875vw; /* 36px */
  font-family: Impact, Impact-Regular;
  font-weight: Regular;
  text-align: left;
  color: #ffffff;
  line-height: 2.29vw; /* 44px */
}

.card-description {
  position: absolute;
  left: 2.60vw; /* 50px */
  top: calc(3.125vw + 2.29vw + 1.56vw); /* 60px + 44px + 30px = 134px = 6.98vw */
  width: 24.79vw; /* 476px */
  margin: 0;
  padding: 0;
  font-size: 0.833vw; /* 16px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: Regular;
  text-align: left;
  color: #ffffff;
  line-height: 1.04vw; /* 20px */
}

/* Development Process Section */
.development-process-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 12.5vw; /* Gap before the image: 240 = 12.5vw */
  /* Height calculation (all in vw for responsive):
     8.33vw (top gap) + 31.25vw (image) + 2.08vw (gap) + 
     14.58vw (cards row1) + 2.08vw (gap) + 14.58vw (cards row2) + 
     6.25vw (bottom gap) = 79.15vw */
  min-height: 85.4vw; /* Fully responsive height */
  padding-bottom: 6.25vw; /* 120px bottom gap before footer */
}

.process-image {
  position: relative;
  left: 0;
  top: 0;
  width: 48.96vw; /* 940px */
  height: 31.25vw; /* 600px */
  margin: 0;
  padding: 0;
  display: block;
}

.process-section-title {
  position: absolute;
  left: 17.19vw; /* 330px */
  top: calc(12.5vw + 4.17vw); /* 8.33vw padding-top + 4.17vw (80px) from image top = 12.5vw */
  width: 26.67vw; /* 512px */
  height: 16.875vw; /* 324px */
  margin: 0;
  padding: 0;
  font-size: 4.58vw; /* 88px */
  font-family: Impact, Impact-Regular;
  font-weight: Regular;
  text-align: left;
  color: #58381b;
  line-height: 5.625vw; /* 108px */
  letter-spacing: 0.26px;
  white-space: normal;
  word-wrap: break-word;
}

.process-cards-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.process-card {
  position: absolute;
  width: 33.33vw; /* 640px */
  height: 14.58vw; /* 280px */
  background: rgba(255, 189, 60, 0.04);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  pointer-events: auto;
}

/* Orange Card 1 - Right of image, same top as image */
.process-card-1 {
  left: calc(48.96vw + 2.08vw); /* 940px + 40px = 980px = 51.04vw */
  top: 12.5vw; /* Same as image top (padding-top) */
}

/* Orange Card 2 - Below Card 1 */
.process-card-2 {
  left: calc(48.96vw + 2.08vw); /* 980px = 51.04vw */
  top: calc(12.5vw + 14.58vw + 2.08vw); /* 8.33vw + 280px + 40px = 24.99vw */
}

/* Orange Card 3 - Below image, 300px from left */
.process-card-3 {
  left: 15.625vw; /* 300px */
  top: calc(12.5vw + 31.25vw + 2.08vw); /* 8.33vw + 600px + 40px = 41.66vw */
}

/* Orange Card 4 - Right of Card 3 */
.process-card-4 {
  left: calc(15.625vw + 33.33vw + 2.08vw); /* 300px + 640px + 40px = 980px = 51.04vw */
  top: calc(12.5vw + 31.25vw + 2.08vw); /* 41.66vw */
}

/* Orange Card 5 - Below Card 3 */
.process-card-5 {
  left: 15.625vw; /* 300px */
  top: calc(12.5vw + 31.25vw + 2.08vw + 14.58vw + 2.08vw); /* 8.33vw + 600px + 40px + 280px + 40px = 58.32vw */
}

/* Orange Card 6 - Right of Card 5 */
.process-card-6 {
  left: calc(15.625vw + 33.33vw + 2.08vw); /* 980px = 51.04vw */
  top: calc(12.5vw + 31.25vw + 2.08vw + 14.58vw + 2.08vw); /* 58.32vw */
}

.process-card-title {
  position: absolute;
  left: 2.60vw; /* 50px */
  top: 2.60vw; /* 50px */
  margin: 0;
  padding: 0;
  font-size: 1.875vw; /* 36px / 1920px */
  font-family: Impact, Impact-Regular;
  font-weight: Regular;
  text-align: left;
  color: #FFBD3C;
  line-height: 2.29vw; /* 44px / 1920px */
}

.process-card-description {
  position: absolute;
  left: 2.60vw; /* 50px */
  top: calc(2.60vw + 2.29vw + 1.56vw); /* 50px + 44px + 30px */
  width: 24.79vw;
  margin: 0;
  padding: 0;
  font-size: 0.833vw; /* 16px / 1920px */
  font-family: Helvetica, Helvetica-Regular;
  font-weight: Regular;
  text-align: left;
  color: #666666;
  line-height: 1.04vw; /* 20px / 1920px */
}
</style>

