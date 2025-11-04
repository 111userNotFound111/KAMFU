<template>
  <div class="home-page">
    <!-- 顶部图片容器 -->
    <div class="hero-section">
      <img 
        :src="heroImage" 
        alt="Hero Banner"
        class="hero-image"
      >
      <!-- 文字和按钮叠加层 -->
      <div class="hero-content">
        <h1 class="hero-title">
          <div class="title-line">
            Empowering
          </div>
          <div class="title-line">
            Industries with AI
          </div>
        </h1>
        <div class="button-group">
          <button class="hero-button primary">
            Start Your AI Journe
          </button>
          <button class="hero-button secondary">
            Explore Solutions
          </button>
        </div>
      </div>
    </div>

    <!-- Why Choose Amplify Tech 区域 -->
    <div class="why-choose-section">
      <h2 class="section-title">
        <span class="title-gray">WHY CHOOSE</span>
        <span class="title-blue">AMPLIFY TECH</span>
      </h2>
      <p class="section-subtitle">
        BRIDGING THE GAP BETWEEN CUTTING-EDGE AI TECHNOLOGY AND PRACTICAL BUSINESS SOLUTIONS
      </p>
      
      <!-- 特色图片区域 -->
      <div class="feature-image-container">
        <img 
          :src="featureImage" 
          alt="Business Solutions"
          class="feature-image"
        >
        <p class="feature-text">
          Every solution is meticulously tailored to your specific business needs and challenges. We analyze your unique requirements to deliver AI solutions that perfectly align with your goals.
        </p>
      </div>
    </div>

    <!-- 统计数据区域 - 黄色背景 -->
    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-value">
            10+
          </div>
          <div class="stat-label">
            Years of Combined Experience
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            98%
          </div>
          <div class="stat-label">
            Client Satisfaction
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            5+
          </div>
          <div class="stat-label">
            Industry Verticals
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            24/7
          </div>
          <div class="stat-label">
            Support Available
          </div>
        </div>
      </div>
    </div>

    <!-- Our Core Product 区域 -->
    <div class="core-product-section">
      <h2 class="core-product-title">
        <span class="product-gray">OUR CORE</span>
        <span class="product-blue">PRODUCT</span>
      </h2>
      <p class="core-product-subtitle">
        END-TO-END AI AND TECHNOLOGY SOLUTIONS FOR MODERN ENTERPRISES
      </p>
      
      <!-- 橙色背景区域 -->
      <div class="orange-section" />

      <!-- 产品卡片容器 -->
      <div class="product-cards-container">
        <!-- 第一张卡片：AI Digital Human -->
        <div 
          class="product-card" 
          @click="navigateToProduct('ProductAIDigitalHuman')"
        >
          <img
            src="@/assets/Home/7.png"
            alt="AI Digital Human"
            class="product-image"
          >
          <div class="product-content">
            <h3 class="product-card-title">
              AI Digital Human
            </h3>
            <p class="product-card-subtitle">
              Interactive digital avatars for exhibitions, sales, and customer service with natural conversation capabilities
            </p>
            <div class="product-tags">
              <span class="product-tag">Exhibition Presenter</span>
              <span class="product-tag">AI Sales Person</span>
              <span class="product-tag">24/7 Available</span>
            </div>
          </div>
        </div>

        <!-- 第二张卡片：Intelligent Q&A System -->
        <div 
          class="product-card" 
          @click="navigateToProduct('ProductIntelligentQA')"
        >
          <img
            src="@/assets/Home/8.png"
            alt="Intelligent Q&A System"
            class="product-image"
          >
          <div class="product-content">
            <h3 class="product-card-title">
              Intelligent Q&A System
            </h3>
            <p class="product-card-subtitle">
              Customized knowledge base system providing accurate answers for business decisions and customer inquiries
            </p>
            <div class="product-tags">
              <span class="product-tag">Custom Knowledge Base</span>
              <span class="product-tag">High Accuracy</span>
              <span class="product-tag">Multi-purpose</span>
            </div>
          </div>
        </div>

        <!-- 第三张卡片：Enterprise Business Analysis -->
        <div 
          class="product-card" 
          @click="navigateToProduct('ProductBusinessAnalysis')"
        >
          <img
            src="@/assets/Home/9.png"
            alt="Enterprise Business Analysis"
            class="product-image"
          >
          <div class="product-content">
            <h3 class="product-card-title">
              Enterprise Business Analysis
            </h3>
            <p class="product-card-subtitle">
              Comprehensive business intelligence platform transforming complex data into actionable insights
            </p>
            <div class="product-tags">
              <span class="product-tag">Real-time Analytics</span>
              <span class="product-tag">AI Insights</span>
              <span class="product-tag">Custom Reports</span>
            </div>
          </div>
        </div>

        <!-- 第四张卡片：Manufacturing Digitalization -->
        <div 
          class="product-card" 
          @click="navigateToProduct('ProductManufacturing')"
        >
          <img
            src="@/assets/Home/10.png"
            alt="Manufacturing Digitalization"
            class="product-image"
          >
          <div class="product-content">
            <h3 class="product-card-title">
              Manufacturing Digitalization
            </h3>
            <p class="product-card-subtitle">
              AI-powered solutions for manufacturing optimization, automation, and data-driven improvements
            </p>
            <div class="product-tags">
              <span class="product-tag">Process Automation</span>
              <span class="product-tag">AI Problem Solving</span>
              <span class="product-tag">Predictive Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Core Services 区域 -->
    <div class="core-services-section">
      <h2 class="core-services-title">
        <span class="services-gray">OUR CORE</span>
        <span class="services-blue">SERVICES</span>
      </h2>
      <p class="core-services-subtitle">
        END-TO-END AI AND TECHNOLOGY SOLUTIONS FOR MODERN ENTERPRISES
      </p>
      
      <button 
        class="services-button" 
        @click="navigateToServices"
      >
        learn more →
      </button>
      
      <!-- 蓝色背景区域 -->
      <div class="blue-section">
        <!-- 服务模块容器 -->
        <div class="services-modules">
          <!-- 第一个模块 -->
          <div class="service-module module-1">
            <img 
              src="@/assets/Home/3.png"
              alt="Custom AI Agent Development"
              class="module-image"
            >
            <div class="module-content">
              <h3 class="module-title">
                Custom AI Agent Deve
              </h3>
              <p class="module-subtitle">
                Build intelligent AI agents that automate tasks, provide insights, and interact naturally with users for enhanced productivity
              </p>
            </div>
          </div>
          
          <!-- 第二个模块 -->
          <div class="service-module module-2">
            <img 
              src="@/assets/Home/4.png"
              alt="Data Analytics & Knowledge Base"
              class="module-image"
            >
            <div class="module-content">
              <h3 class="module-title">
                Data Analytics & Knowledge Base
              </h3>
              <p class="module-subtitle">
                Transform your existing business data into AI-ready knowledge bases that power intelligent decision-making
              </p>
            </div>
          </div>
          
          <!-- 第三个模块 -->
          <div class="service-module module-3">
            <img 
              src="@/assets/Home/5.png"
              alt="System Integration"
              class="module-image"
            >
            <div class="module-content">
              <h3 class="module-title">
                System Integration
              </h3>
              <p class="module-subtitle">
                Seamlessly integrate AI tools and capabilities into your existing business systems and workflows
              </p>
            </div>
          </div>
          
          <!-- 第四个模块 -->
          <div class="service-module module-4">
            <img 
              src="@/assets/Home/6.png"
              alt="Custom System Development"
              class="module-image"
            >
            <div class="module-content">
              <h3 class="module-title">
                Custom System Development
              </h3>
              <p class="module-subtitle">
                Full-stack development services from frontend to backend, mobile to web applications
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
import { useRouter } from 'vue-router'
import heroImageSrc from '@/assets/Home/1.png'
import featureImageSrc from '@/assets/Home/2.png'

// 使用新的首页图片
const heroImage = ref(heroImageSrc)
const featureImage = ref(featureImageSrc)

// 路由跳转
const router = useRouter()

// 跳转到服务页面
const navigateToServices = () => {
  router.push('/services')
}

// 跳转到产品页面
const navigateToProduct = (productName) => {
  router.push({ name: productName })
}
</script>

<style scoped>
.home-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.hero-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 1; /* 默认层级 */
}


.hero-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* 确保文字和按钮显示在渐变层之上 */
}

.hero-title {
  position: absolute;
  left: 8.33vw; /* 160px / 1920px * 100 */
  top: 20.46vh; /* 221px / 1080px * 100 */
  margin: 0;
  padding: 0;
}

.title-line {
  font-size: 4.58vw; /* 88px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #3285ff;
  line-height: 1.23; /* 108px / 88px = 1.227 */
  letter-spacing: 0.003em; /* 0.26px / 88px */
  margin: 0;
  padding: 0;
}

.title-line:first-child {
  margin-bottom: 0.36vh; /* 7px / 1920px * 100 (相对于视口) */
}

.button-group {
  position: absolute;
  left: 8.33vw; /* 160px / 1920px * 100 */
  top: 48.61vh; /* (221 + 108 + 7 + 108 + 60) / 1080 * 100 = 504/1080 */
  display: flex;
  gap: 2.08vw; /* 40px / 1920px * 100 */
}

.hero-button {
  width: 12.08vw; /* 232px / 1920px * 100 */
  height: 4.44vh; /* 48px / 1080px * 100 */
  background: rgba(64, 89, 255, 0.00);
  backdrop-filter: blur(1.8px);
  font-size: 0.73vw; /* 14px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.43; /* 20px / 14px */
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 第一个按钮 - 默认高亮 */
.hero-button.primary {
  border: 0.6px solid #3285ff;
  color: #3285ff;
}

.hero-button.primary:hover {
  border-color: #666666;
  color: #666666;
}

/* 第二个按钮 - 默认不高亮 */
.hero-button.secondary {
  border: 0.6px solid #666666;
  color: #666666;
}

.hero-button.secondary:hover {
  border-color: #3285ff;
  color: #3285ff;
}

/* Why Choose Amplify Tech 区域 */
.why-choose-section {
  margin-top: 11.11vh; /* 120px / 1080px * 100 */
  padding-left: 15.68vw; /* 301px / 1920px * 100 */
}

.section-title {
  font-size: 1.67vw; /* 32px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  line-height: 1.22; /* 39px / 32px = 1.21875 */
  letter-spacing: 0.001em; /* 0.03px / 32px */
  margin: 0;
  padding: 0;
}

.title-gray {
  color: #b0b4cc;
  margin-right: 0.52vw; /* 10px / 1920px * 100，增加单词间距 */
}

.title-blue {
  color: #3285ff;
}

.section-subtitle {
  width: 48.54vw; /* 932px / 1920px * 100 */
  margin-top: 1.3vh; /* 14px / 1080px * 100 */
  font-size: 0.94vw; /* 18px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  text-align: left;
  color: #b0b4cc;
  line-height: 1.39; /* 25px / 18px = 1.388 */
  letter-spacing: 0;
  margin-bottom: 0;
  padding: 0;
}

/* 特色图片区域 */
.feature-image-container {
  position: relative;
  margin-top: 2.78vh; /* 30px / 1080px * 100 */
  width: 68.75vw; /* 1320px / 1920px * 100 */
  height: 50vh; /* 540px / 1080px * 100 */
  z-index: 2; /* 确保图片在黄色区域上方 */
}

.feature-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.feature-text {
  position: absolute;
  left: 4.55%; /* 60px / 1320px * 100 */
  bottom: 5.56%; /* 30px / 540px * 100 */
  width: 86.36%; /* 给文字留出左右边距，1140px / 1320px * 100 */
  font-size: 0.94vw; /* 18px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 1.39; /* 25px / 18px */
  margin: 0;
  padding: 0;
}

/* 统计数据区域 - 黄色背景 */
.stats-section {
  position: relative;
  width: 100%;
  height: 28.24vh; /* 305px / 1080px * 100 */
  background: #ffbd3c;
  margin-top: -5.83vh; /* -63px / 1080px * 100，让黄色区域向上移动与图片重叠 */
  z-index: 1; /* 确保黄色区域在图片下方 */
  /* 图片下边界 + 242px = 黄色区域下边界 */
  /* 黄色区域上边界 = 图片下边界 + 242px - 305px = 图片下边界 - 63px */
}

.stats-container {
  position: absolute;
  left: 15.36vw; /* 295px / 1920px * 100 */
  bottom: 8.69vh; /* 94px / 1080px * 100 */
  display: flex;
  gap: 11.72vw; /* 225px / 1920px * 100 */
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 3.33vw; /* 64px / 1920px * 100 */
  font-family: 'Alibaba PuHuiTi', 'Alibaba PuHuiTi-Regular', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 1.38; /* 88px / 64px = 1.375 */
  margin: 0;
  padding: 0;
}

.stat-label {
  margin-top: 0.37vh; /* 4px / 1080px * 100 */
  font-size: 0.83vw; /* 16px / 1920px * 100 */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 1.25; /* 20px / 16px = 1.25 */
  margin-bottom: 0;
  padding: 0;
  white-space: nowrap;
}

/* Our Core Product 区域 */
.core-product-section {
  position: relative;
  margin-top: 7.41vh; /* 80px / 1080px * 100 */
  text-align: center;
}

.core-product-title {
  font-size: 1.67vw; /* 32px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.22; /* 39px / 32px */
  letter-spacing: 0.001em; /* 0.03px / 32px */
  margin: 0;
  padding: 0;
}

.product-gray {
  color: #b0b4cc;
  margin-right: 0.52vw; /* 10px / 1920px * 100，增加单词间距 */
}

.product-blue {
  color: #3285ff;
}

.core-product-subtitle {
  margin-top: 1.3vh; /* 14px / 1080px * 100 */
  font-size: 0.94vw; /* 18px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #b0b4cc;
  line-height: 1.39; /* 25px / 18px */
  letter-spacing: 0;
  margin-bottom: 0;
  padding: 0;
}

/* 橙色背景区域 */
.orange-section {
  position: relative;
  width: 100%;
  height: 46.85vh; /* 506px / 1080px * 100 */
  background: #ff7a32;
  margin-top: 13.61vh; /* 147px / 1080px * 100 */
  z-index: 1; /* 底部图层 */
}

/* 产品卡片容器 */
.product-cards-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0; /* 两两之间没有间隔 */
  margin-top: calc(-46.85vh - 6.2vh); /* 负值使其覆盖在橙色背景上，再向上67px (67px / 1080px * 100) */
  z-index: 2; /* 在橙色背景之上 */
  padding-top: 0;
}

/* 单个产品卡片 */
.product-card {
  position: relative;
  width: 20.83vw; /* 400px / 1920px * 100 */
  height: 59.26vh; /* 640px / 1080px * 100 */
  flex-shrink: 0;
  transition: transform 0.3s ease;
  cursor: pointer;
  z-index: 1; /* 默认层级 */
}

/* 黑色渐变遮罩层 - 默认显示 */
.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* 蓝色渐变遮罩层 - hover时显示 */
.product-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4c7eff 0%, rgba(95, 179, 255, 0) 100%);
  box-shadow: 14px 12px 32px 0px rgba(0, 15, 116, 0.32);
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* hover时：隐藏黑色渐变，显示蓝色渐变 */
.product-card:hover::before {
  opacity: 0;
}

.product-card:hover::after {
  opacity: 1;
}

/* 悬停效果 */
.product-card:hover {
  transform: translate(-1.56vw, -2.96vh); /* 向左30px, 向上32px */
  z-index: 10; /* hover时提升到最顶层，避免被其他卡片遮挡 */
}

/* 产品图片 */
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 产品内容层 */
.product-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 使内容不阻挡hover事件 */
  z-index: 2; /* 确保文字显示在黑色渐变层之上 */
}

/* 产品卡片标题 */
.product-card-title {
  position: absolute;
  left: 2.08vw; /* 40px / 1920px * 100 */
  top: 5.56vh; /* 60px / 1080px * 100 */
  width: 13.02vw; /* 250px / 1920px * 100 */
  height: 6.48vh; /* 70px / 1080px * 100 */
  font-size: 1.51vw; /* 29px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 1.21; /* 35px / 29px */
  text-shadow: 14px 12px 32px 0px rgba(0, 15, 116, 0.32);
  margin: 0;
  padding: 0;
}

/* 产品卡片副标题 */
.product-card-subtitle {
  position: absolute;
  left: 2.08vw; /* 40px / 1920px * 100 */
  top: 14.26vh; /* 60px + 70px + 24px = 154px / 1080px * 100 */
  width: 12.97vw; /* 249px / 1920px * 100 */
  height: 7.41vh; /* 80px / 1080px * 100 */
  font-size: 0.73vw; /* 14px / 1920px * 100 */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 1.43; /* 20px / 14px */
  text-shadow: 14px 12px 32px 0px rgba(0, 15, 116, 0.32);
  margin: 0;
  padding: 0;
}

/* 产品标签容器 */
.product-tags {
  position: absolute;
  left: 2.08vw; /* 40px / 1920px * 100 */
  top: 31.11vh; /* 336px / 1080px * 100 */
  display: flex;
  flex-direction: column; /* 竖向排列 */
  align-items: flex-start; /* 左对齐，每个标签宽度独立 */
  gap: 1.85vh; /* 20px / 1080px * 100 */
}

/* 单个产品标签（椭圆） */
.product-tag {
  display: block; /* 改为 block，在 flex 容器中更好控制 */
  height: 3.15vh; /* 34px / 1080px * 100 */
  padding: 0 0.94vw; /* 左右各18px / 1920px * 100 */
  border: 1px solid rgba(255, 255, 255, 0.70);
  border-radius: 0.94vw; /* 18px / 1920px * 100 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  background: rgba(255, 255, 255, 0.1); /* 半透明白色背景 */
  font-size: 0.73vw; /* 14px / 1920px * 100 */
  font-family: 'PingFang TC', 'PingFang TC-Regular', sans-serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 3.15vh; /* 34px / 1080px * 100 */
  white-space: nowrap;
  width: fit-content; /* 宽度自适应内容 */
}

/* ===== Our Core Services 区域 ===== */
.core-services-section {
  margin-top: 7.41vh; /* 80px / 1080px * 100 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.core-services-title {
  font-size: 1.67vw; /* 32px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.22; /* 39px / 32px */
  letter-spacing: 0.001em; /* 0.03px / 32px */
  margin: 0;
  padding: 0;
}

.services-gray {
  color: #b0b4cc;
  margin-right: 0.52vw; /* 10px / 1920px * 100，增加单词间距 */
}

.services-blue {
  color: #3285ff;
}

.core-services-subtitle {
  margin-top: 1.3vh; /* 14px / 1080px * 100 */
  font-size: 0.94vw; /* 18px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #b0b4cc;
  line-height: 1.39; /* 25px / 18px */
  letter-spacing: 0;
  margin-bottom: 0;
  padding: 0;
}

.services-button {
  margin-top: 2.78vh; /* 30px / 1080px * 100 */
  width: 9.79vw; /* 188px / 1920px * 100 */
  height: 4.44vh; /* 48px / 1080px * 100 */
  background: #3285ff;
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 0;
  font-size: 0.83vw; /* 16px / 1920px * 100 */
  font-family: 'PingFang SC', 'PingFang SC-Regular', sans-serif;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.services-button:hover {
  background: #5ba0ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(50, 133, 255, 0.3);
}

.services-button:active {
  transform: translateY(0);
}

/* 蓝色背景区域 */
.blue-section {
  position: relative;
  width: 100%;
  height: 95.37vh; /* 1030px / 1080px * 100 */
  background: #3285ff;
  margin-top: 11.11vh; /* 120px / 1080px * 100 */
  z-index: 1; /* 底部图层 */
}

/* 服务模块容器 */
.services-modules {
  position: absolute;
  top: -7.41vh; /* -80px / 1080px * 100 */
  left: 15.625vw; /* 300px / 1920px * 100 */
  width: 68.75vw; /* 1320px / 1920px * 100 */
}

/* 服务模块 */
.service-module {
  position: absolute;
  width: 33.33vw; /* 640px / 1920px * 100 */
  z-index: 2; /* 显示在蓝色背景之上 */
}

/* 模块图片 */
.module-image {
  width: 33.33vw; /* 640px / 1920px * 100 */
  height: 31.48vh; /* 340px / 1080px * 100 */
  display: block;
  object-fit: cover;
}

/* 模块内容区域 */
.module-content {
  width: 33.33vw; /* 640px / 1920px * 100 */
  height: 13.89vh; /* 150px / 1080px * 100 */
  background: #ffffff;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

/* 模块标题 */
.module-title {
  position: absolute;
  left: 1.56vw; /* 30px / 1920px * 100 */
  bottom: 7.96vh; /* 86px / 1080px * 100 */
  font-size: 20px;
  font-family: Impact, Impact-Regular;
  font-weight: 400;
  text-align: justify;
  color: #3285ff;
  line-height: 24px;
  margin: 0;
}

/* 模块副标题 */
.module-subtitle {
  position: absolute;
  left: 1.56vw; /* 30px / 1920px * 100 */
  bottom: 2.78vh; /* 30px / 1080px * 100 (86px - 24px - 16px - 16px = 30px from bottom) */
  width: 30.21vw; /* 580px / 1920px * 100 */
  height: 3.70vh; /* 40px / 1080px * 100 */
  font-size: 14px;
  font-family: Helvetica, Helvetica-Regular;
  font-weight: 400;
  text-align: left;
  color: #0e3049;
  line-height: 20px;
  margin: 0;
}

/* 第一个模块位置 */
.module-1 {
  top: 0;
  left: 0;
}

/* 第二个模块位置 */
.module-2 {
  top: 0;
  left: 35.42vw; /* 640px + 40px = 680px / 1920px * 100 */
}

/* 第三个模块位置 */
.module-3 {
  top: 50vh; /* 340px + 150px + 50px = 540px / 1080px * 100 */
  left: 0;
}

/* 第四个模块位置 */
.module-4 {
  top: 50vh; /* 与第三个模块相同：340px + 150px + 50px = 540px / 1080px * 100 */
  left: 35.42vw; /* 640px + 40px = 680px / 1920px * 100 */
}
</style>

