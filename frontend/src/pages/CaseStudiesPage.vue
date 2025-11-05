<template>
  <div class="case-studies-page">
    <img 
      src="@/assets/Case Studies/bg.png" 
      alt="Background"
      class="background-image"
    >
    
    <div class="header-section">
      <h1 class="main-title">
        CASE STUDIES
      </h1>
      <p class="sub-title">
        COMPREHENSIVE AI AND TECHNOLOGY SOLUTIONS FOR DIGITAL TRANSFORMATION
      </p>
    </div>

    <div class="case-studies-grid">
      <div 
        class="case-card"
        @click="navigateToCase('ai-digital-human')"
      >
        <img 
          src="@/assets/Case Studies/AI Digital Human.png" 
          alt="AI Digital Human"
          class="case-image"
        >
        <div class="case-content">
          <h3 class="case-title">
            AI Digital Human
          </h3>
          <h4 class="case-subtitle">
            Exhibition & Sales Solutions
          </h4>
          <p class="case-description">
            Interactive AI digital humans for product exhibitions and intelligent sales, replacing traditional human resources while providing 24/7 service
          </p>
        </div>
      </div>

      <div 
        class="case-card"
        @click="navigateToCase('intelligent-qa')"
      >
        <img 
          src="@/assets/Case Studies/Intelligent Q&A Syst.png" 
          alt="Intelligent Q&A System"
          class="case-image"
        >
        <div class="case-content">
          <h3 class="case-title">
            Intelligent Q&A System
          </h3>
          <h4 class="case-subtitle">
            Knowledge Management Platform
          </h4>
          <p class="case-description">
            Customized knowledge base system providing high-accuracy answers for business decisions and customer inquiries
          </p>
        </div>
      </div>

      <div 
        class="case-card"
        @click="navigateToCase('business-analysis')"
      >
        <img 
          src="@/assets/Case Studies/Enterprise Business.png" 
          alt="Enterprise Business"
          class="case-image"
        >
        <div class="case-content">
          <h3 class="case-title">
            Enterprise Business
          </h3>
          <h4 class="case-subtitle">
            Business Intelligence Solution
          </h4>
          <p class="case-description">
            Comprehensive analytics platform transforming complex business data into actionable insights for strategic decision-making
          </p>
        </div>
      </div>

      <div 
        class="case-card"
        @click="navigateToCase('manufacturing')"
      >
        <img 
          src="@/assets/Case Studies/Manufacturing Digita.png" 
          alt="Manufacturing Digital"
          class="case-image"
        >
        <div class="case-content">
          <h3 class="case-title">
            Manufacturing Digitalization
          </h3>
          <h4 class="case-subtitle">
            Industry 4.0 Solutions
          </h4>
          <p class="case-description">
            AI-powered solutions for manufacturing problems, providing automation and data-driven improvements
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToCase = (caseName) => {
  const routes = {
    'ai-digital-human': '/products/ai-digital-human',
    'intelligent-qa': '/products/intelligent-qa',
    'business-analysis': '/products/business-analysis',
    'manufacturing': '/products/manufacturing'
  };
  router.push(routes[caseName]);
};
</script>

<style scoped>
.case-studies-page {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 0;
  display: block;
}

.header-section {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.25vw; /* 120px at 1920px viewport */
}

.main-title {
  font-size: 4.58vw; /* 88px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: center;
  color: #3285ff;
  line-height: 5.625vw; /* 108px at 1920px viewport */
  letter-spacing: 0.014vw; /* 0.26px at 1920px viewport */
  margin: 0;
  white-space: nowrap;
}

.sub-title {
  font-size: 0.94vw; /* 18px at 1920px viewport */
  font-family: 'PingFang SC', 'PingFang SC-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #333333;
  line-height: 1.3vw; /* 25px at 1920px viewport */
  letter-spacing: 0;
  margin: 1.04vw 0 0 0; /* 20px at 1920px viewport */
  max-width: 90%;
}

.case-studies-grid {
  position: relative;
  z-index: 1;
  margin-top: 4.17vw; /* 80px at 1920px viewport */
  margin-left: 15.625vw; /* 300px at 1920px viewport */
  display: grid;
  grid-template-columns: 33.33vw 33.33vw; /* 640px at 1920px viewport */
  grid-template-rows: 28.85vw 28.85vw; /* 554px at 1920px viewport */
  column-gap: 2.08vw; /* 40px at 1920px viewport */
  row-gap: 2.08vw; /* 40px at 1920px viewport */
  padding-bottom: 4.17vw; /* 80px at 1920px viewport */
}

.case-card {
  position: relative;
  width: 33.33vw; /* 640px at 1920px viewport */
  height: 28.85vw; /* 554px at 1920px viewport */
  background: #ffffff;
  border-radius: 1.04vw; /* 20px at 1920px viewport */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background 0.3s ease;
}

.case-card:hover {
  background: #3285ff;
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.04vw; /* 20px at 1920px viewport */
  padding: 1px; /* 边框宽度 */
  background: linear-gradient(180deg, #ffffff, #3285ff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
}

.case-image {
  width: 33.33vw; /* 640px at 1920px viewport */
  height: 17.71vw; /* 340px at 1920px viewport */
  display: block;
  object-fit: cover;
}

.case-content {
  padding: 2.08vw 2.6vw 0 2.6vw; /* 40px 50px 0 50px at 1920px viewport */
  flex: 1;
}

.case-title {
  font-size: 1.51vw; /* 29px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #3285ff;
  line-height: 1.82vw; /* 35px at 1920px viewport */
  margin: 0 0 1.04vw 0; /* 0 0 20px 0 at 1920px viewport */
  transition: color 0.3s ease;
}

.case-card:hover .case-title {
  color: #ffffff;
}

.case-subtitle {
  font-size: 0.73vw; /* 14px at 1920px viewport */
  font-family: Helvetica, Helvetica-Bold, sans-serif;
  font-weight: bold;
  text-align: left;
  color: #333333;
  line-height: 1.04vw; /* 20px at 1920px viewport */
  margin: 0 0 0.99vw 0; /* 0 0 19px 0 at 1920px viewport */
  transition: color 0.3s ease;
}

.case-card:hover .case-subtitle {
  color: #ffffff;
}

.case-description {
  width: 28.125vw; /* 540px at 1920px viewport */
  height: 2.08vw; /* 40px at 1920px viewport */
  font-size: 0.73vw; /* 14px at 1920px viewport */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #666666;
  line-height: 1.04vw; /* 20px at 1920px viewport */
  margin: 0;
  transition: color 0.3s ease;
}

.case-card:hover .case-description {
  color: #ffffff;
}
</style>

