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
        MANUFACTURING DIGITALIZATION & DATA-DRIVEN IMPROVEMENT
      </h1>
      
      <!-- 圆角矩形覆盖在背景图片上 -->
      <div class="content-box" />
    </div>
    
    <!-- 内容容器 -->
    <div class="content-container">
      <!-- 描述文本 -->
      <div class="description-text">
        AI-POWERED SOLUTIONS FOR MANUFACTURING OPTIMIZATION, PROVIDING INTELLIGENT AUTOMATION AND DATA-DRIVEN IMPROVEMENTS
      </div>
      
      <!-- Manufacturing Solutions 部分 -->
      <div class="manufacturing-solutions-section">
        <!-- 三组模块 -->
        <div class="modules-container">
          <!-- 第一组模块 -->
          <div class="module">
            <img 
              :src="rootCauseAnalysisImage" 
              alt="Root Cause Analysis"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                Root Cause Analysis
              </h4>
              <p class="module-description">
                AI agents identify and analyze production issues in real-time
              </p>
            </div>
          </div>
          
          <!-- 第二组模块 -->
          <div class="module">
            <img 
              :src="predictiveMaintenanceImage" 
              alt="Predictive Maintenance"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                Predictive Maintenance
              </h4>
              <p class="module-description">
                Prevent equipment failures before they occur with AI predictions
              </p>
            </div>
          </div>
          
          <!-- 第三组模块 -->
          <div class="module">
            <img 
              :src="qualityOptimizationImage" 
              alt="Quality Optimization"
              class="module-image"
            >
            <div class="module-card">
              <h4 class="module-title">
                Quality Optimization
              </h4>
              <p class="module-description module-description-wide">
                Continuously improve product quality through data analysis
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Automation Features 部分 -->
      <div class="automation-features-section">
        <!-- 三个矩形模块（无图片） -->
        <div class="modules-container">
          <!-- 第一个模块 -->
          <div class="module">
            <div class="module-card automation-card">
              <h4 class="module-title">
                Workflow Automation
              </h4>
              <p class="module-description">
                Streamline manufacturing processes with intelligent automation
              </p>
            </div>
          </div>
          
          <!-- 第二个模块 -->
          <div class="module">
            <div class="module-card automation-card">
              <h4 class="module-title">
                Resource Optimization
              </h4>
              <p class="module-description">
                Maximize efficiency in material and human resource allocation
              </p>
            </div>
          </div>
          
          <!-- 第三个模块 -->
          <div class="module">
            <div class="module-card automation-card">
              <h4 class="module-title">
                Real-time Monitoring
              </h4>
              <p class="module-description">
                Track production metrics and performance in real-time
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
import rootCauseAnalysisImageSrc from '@/assets/Case Studies-Manufacturing Digitalization & Data-Driven Improvement-1/Root Cause Analysis.png'
import predictiveMaintenanceImageSrc from '@/assets/Case Studies-Manufacturing Digitalization & Data-Driven Improvement-1/Predictive Maintenance.png'
import qualityOptimizationImageSrc from '@/assets/Case Studies-Manufacturing Digitalization & Data-Driven Improvement-1/Quality Optimization.png'

const backgroundImage = ref(backgroundImageSrc)
const rootCauseAnalysisImage = ref(rootCauseAnalysisImageSrc)
const predictiveMaintenanceImage = ref(predictiveMaintenanceImageSrc)
const qualityOptimizationImage = ref(qualityOptimizationImageSrc)
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

/* 标题覆盖在背景图片上 */
.page-title {
  width: 79.17vw; /* 1520px at 1920px viewport */
  max-width: 1520px;
  height: auto;
  position: relative;
  margin: 0;
  margin-top: 6.3vw; /* 121px at 1920px viewport */
  font-size: 4.58vw; /* 88px at 1920px viewport */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: normal;
  text-align: center;
  color: #3285ff;
  line-height: 5.63vw; /* 108px at 1920px viewport */
  letter-spacing: 0.014vw; /* 0.26px at 1920px viewport */
  z-index: 1;
}

/* 圆角矩形 */
.content-box {
  position: relative;
  margin-top: 4.17vw; /* 80px at 1920px viewport - 标题下方间隔 */
  width: 68.7vw; /* 1319px at 1920px viewport */
  height: 38.6vw; /* 742px at 1920px viewport */
  border: 0.31vw solid #002d6e; /* 6px at 1920px viewport */
  border-radius: 1.25vw; /* 24px at 1920px viewport */
  box-shadow: 0 0.68vw 1.25vw 0 rgba(0, 29, 59, 0.51); /* 0px 13px 24px at 1920px viewport */
  z-index: 1;
}

/* 内容容器 */
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.25vw ; /* 120px at 1920px viewport - 添加底部间距 */
}

/* 描述文本 */
.description-text {
  margin-top: 4.17vw; /* 80px at 1920px viewport - 圆角矩形下方间隔 */
  font-size: 1vw; /* 18px at 1920px viewport */
  font-family: PingFang SC, PingFang SC-Regular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #333333; 
  line-height: 1.3vw; /* 25px at 1920px viewport */
  letter-spacing: 0;
}

/* Manufacturing Solutions 部分 */
.manufacturing-solutions-section {
  width: 68.7vw; /* 与圆角矩形同宽 */
  /* 描述文本下方间隔 40px */
  margin-top: 2.08vw; /* 40px at 1920px viewport */
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
  margin-top: 2.08vw; /* 40px at 1920px viewport */
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

/* Automation Features 部分 */
.automation-features-section {
  width: 68.7vw; /* 与圆角矩形同宽 */
  /* Manufacturing Solutions 板块下方间隔 16px */
  margin-top: 0;
}

/* Automation Features 的卡片（黄色背景） */
.automation-card {
  background: #ffbd3c;
  /* 距离三级标题 40px */
  margin-top: 0;
}

/* Automation Features 的模块容器（调整 margin-top） */
.automation-features-section .modules-container {
  margin-top: 0.83vw; /* 16px at 1920px viewport */
}
</style>