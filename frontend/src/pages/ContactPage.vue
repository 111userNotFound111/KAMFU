<template>
  <div class="contact-page">
    <div class="contact-hero">
      <img
        :src="backgroundImage"
        alt="Contact"
        class="contact-bg-image"
      >
      <div class="contact-content">
        <h1 class="contact-title">
          GET IN TOUCH
        </h1>
        <p class="contact-subtitle">
          Ready to transform your business with AI? Let's discuss your project
        </p>
      </div>
      
      <!-- Contact Form -->
      <div class="contact-form-container">
        <h2 class="form-title">
          SEND US A MESSAGE
        </h2>
        
        <form
          class="contact-form"
          @submit.prevent="handleSubmit"
        >
          <!-- Your Name -->
          <div class="form-group">
            <label class="form-label">Your Name *</label>
            <input 
              v-model="formData.name"
              type="text" 
              class="form-input"
              required
            >
          </div>
          
          <!-- Email Address -->
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input 
              v-model="formData.email"
              type="email" 
              class="form-input"
              required
            >
          </div>
          
          <!-- Company -->
          <div class="form-group">
            <label class="form-label">Company</label>
            <input 
              v-model="formData.company"
              type="text" 
              class="form-input"
            >
          </div>
          
          <!-- Phone Number -->
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input 
              v-model="formData.phone"
              type="tel" 
              class="form-input"
            >
          </div>
          
          <!-- Service Interested In -->
          <div class="form-group">
            <label class="form-label">Service Interested In</label>
            <div class="select-wrapper">
              <select
                v-model="formData.service"
                class="form-select"
              >
                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>
                <option value="Customized AI System Development">
                  Customized AI System Development
                </option>
                <option value="Data Analytics & Knowledge Base">
                  Data Analytics & Knowledge Base
                </option>
                <option value="System Integration">
                  System Integration
                </option>
                <option value="Custom System Development">
                  Custom System Development
                </option>
                <option value="Web & Mobile Development">
                  Web & Mobile Development
                </option>
                <option value="Data Governance & Security">
                  Data Governance & Security
                </option>
              </select>
              <div class="select-arrow">
                ▼
              </div>
            </div>
          </div>
          
          <!-- How can we help you -->
          <div class="form-group">
            <label class="form-label">How can we help you? *</label>
            <textarea 
              v-model="formData.message"
              class="form-textarea"
              required
            />
          </div>
        </form>
      </div>
    </div>

    <!-- Contact Information Section -->
    <div class="contact-info-section">
      <h2 class="info-main-title">
        LET'S BUILD SOMETHING AMAZING TOGETHER
      </h2>
      
      <p class="info-main-subtitle">
        WHETHER YOU NEED A PROOF OF CONCEPT, FULL-SCALE IMPLEMENTATION, OR STRATEGIC CONSULTATION, OUR TEAM IS READY TO HELP YOU SUCCEED
      </p>

      <div class="info-details">
        <!-- Australia Office -->
        <div class="info-item">
          <h3 class="info-section-title">
            AUSTRALIA OFFICE
          </h3>
          <p class="info-section-content">
            Melbourne, VIC
          </p>
        </div>

        <!-- Email -->
        <div class="info-item">
          <h3 class="info-section-title">
            EMAIL
          </h3>
          <p class="info-section-content">
            contact@amplifytech.com.au<br>
            sales@amplifytech.com.au
          </p>
        </div>

        <!-- Phone -->
        <div class="info-item">
          <h3 class="info-section-title">
            PHONE
          </h3>
          <p class="info-section-content">
            +61 3 9000 0000
          </p>
        </div>

        <!-- Business Hours -->
        <div class="info-item">
          <h3 class="info-section-title">
            BUSINESS HOURS
          </h3>
          <p class="info-section-content">
            Monday - Friday: 9:00 AM - 6:00 PM AEST<br>
            24/7 Support for Enterprise Clients
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import contactBgImage from '@/assets/Contact.png'

const backgroundImage = ref(contactBgImage)

const formData = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // TODO: 实现表单提交逻辑
}
</script>

<style scoped>
.contact-page {
  margin: 0;
  padding: 0;
  width: 100%;
}

.contact-hero {
  width: 100%;
  position: relative;
  display: block;
}

.contact-bg-image {
  width: 100%;
  height: auto;
  display: block;
}

.contact-content {
  position: absolute;
  left: 8.333vw; /* 160px / 1920px = 8.333% */
  top: 8.333vw; /* 160px / 1920px = 8.333% */
}

.contact-title {
  font-size: 4.583vw; /* 88px / 1920px = 4.583% */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #3285ff;
  line-height: 5.625vw; /* 108px / 1920px = 5.625% */
  letter-spacing: 0.0135vw; /* 0.26px / 1920px = 0.0135% */
  margin: 0;
  padding: 0;
}

.contact-subtitle {
  font-size: 0.9375vw; /* 18px / 1920px = 0.9375% */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #333333;
  line-height: 1.302vw; /* 25px / 1920px = 1.302% */
  letter-spacing: 0;
  margin-top: 1.042vw; /* 20px / 1920px = 1.042% */
  padding: 0;
  max-width: 52.083vw; /* 给副标题设置最大宽度，约1000px / 1920px */
}

/* 针对小屏幕的媒体查询，确保文字不会太小 */
@media (max-width: 768px) {
  .contact-content {
    left: 5vw;
    top: 10vw;
  }
  
  .contact-title {
    font-size: 8vw;
    line-height: 10vw;
  }
  
  .contact-subtitle {
    font-size: 3.5vw;
    line-height: 5vw;
    margin-top: 3vw;
    max-width: 90vw;
  }
}

/* 针对超大屏幕，防止文字过大 */
@media (min-width: 2560px) {
  .contact-title {
    font-size: 117.3px; /* 4.583vw * 2560px / 100 */
    line-height: 144px;
  }
  
  .contact-subtitle {
    font-size: 24px;
    line-height: 33.3px;
    margin-top: 26.7px;
  }
}

/* Contact Form Styles - 响应式设计 */
.contact-form-container {
  position: absolute;
  right: 15.625vw; /* 300px / 1920px * 100 */
  top: 18.333vw; /* 352px / 1920px * 100 */
  width: 32.813vw; /* 630px / 1920px * 100 */
  height: 52.656vw; /* 1011px / 1920px * 100 */
  background: #3285ff;
  padding: 2.083vw 2.604vw; /* 40px 50px / 1920px * 100 */
  box-sizing: border-box;
}

.form-title {
  font-size: 1.667vw; /* 32px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: right;
  color: #ffffff;
  line-height: 2.031vw; /* 39px / 1920px * 100 */
  letter-spacing: 0.002vw; /* 0.03px / 1920px * 100 */
  margin: 0 0 2.604vw 0; /* 50px / 1920px * 100 */
  padding: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.563vw; /* 30px / 1920px * 100 */
}

.form-label {
  font-size: 0.938vw; /* 18px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 1.146vw; /* 22px / 1920px * 100 */
  letter-spacing: 0.001vw; /* 0.01px / 1920px * 100 */
  margin: 0 0 0.625vw 0; /* 12px / 1920px * 100 */
  padding: 0;
}

.form-input {
  width: 27.604vw; /* 530px / 1920px * 100 */
  height: 2.604vw; /* 50px / 1920px * 100 */
  background: #ffffff;
  border: none;
  outline: none;
  padding: 0 0.781vw; /* 15px / 1920px * 100 */
  font-size: 0.833vw; /* 16px / 1920px * 100 */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  box-sizing: border-box;
}

.form-input:focus {
  outline: 0.104vw solid rgba(255, 255, 255, 0.5); /* 2px / 1920px * 100 */
}

.select-wrapper {
  position: relative;
  width: 27.604vw; /* 530px / 1920px * 100 */
}

.form-select {
  width: 27.604vw; /* 530px / 1920px * 100 */
  height: 2.604vw; /* 50px / 1920px * 100 */
  background: #ffffff;
  border: none;
  outline: none;
  padding: 0 2.083vw 0 0.781vw; /* 0 40px 0 15px / 1920px * 100 */
  font-size: 0.833vw; /* 16px / 1920px * 100 */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
}

.form-select:focus {
  outline: 0.104vw solid rgba(255, 255, 255, 0.5); /* 2px / 1920px * 100 */
}

.select-arrow {
  position: absolute;
  right: 0.781vw; /* 15px / 1920px * 100 */
  top: 50%;
  transform: translateY(-50%);
  color: #333333;
  pointer-events: none;
  font-size: 0.625vw; /* 12px / 1920px * 100 */
}

.form-textarea {
  width: 27.604vw; /* 530px / 1920px * 100 */
  height: 6.771vw; /* 130px / 1920px * 100 */
  background: #ffffff;
  border: none;
  outline: none;
  padding: 0.781vw; /* 15px / 1920px * 100 */
  font-size: 0.833vw; /* 16px / 1920px * 100 */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  resize: none;
  box-sizing: border-box;
}

.form-textarea:focus {
  outline: 0.104vw solid rgba(255, 255, 255, 0.5); /* 2px / 1920px * 100 */
}

/* Contact Information Section - 响应式设计 */
.contact-info-section {
  margin-left: 15.625vw; /* 300px / 1920px * 100 */
  margin-top: 6.25vw; /* 120px / 1920px * 100 */
  margin-bottom: 10.417vw; /* 200px / 1920px * 100 - 增加下边距顶开底部导航栏 */
  padding-bottom: 2.083vw; /* 40px / 1920px * 100 - 额外的内边距 */
}

.info-main-title {
  font-size: 1.667vw; /* 32px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #3285ff;
  line-height: 2.031vw; /* 39px / 1920px * 100 */
  letter-spacing: 0.002vw; /* 0.03px / 1920px * 100 */
  margin: 0;
  padding: 0;
}

.info-main-subtitle {
  width: 30.365vw; /* 583px / 1920px * 100 */
  font-size: 0.938vw; /* 18px / 1920px * 100 */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #b0b4cc;
  line-height: 1.302vw; /* 25px / 1920px * 100 */
  letter-spacing: 0;
  margin: 1.042vw 0 0 0; /* 20px / 1920px * 100 */
  padding: 0;
}

.info-details {
  margin-top: 2.604vw; /* 50px / 1920px * 100 */
}

.info-item {
  margin-bottom: 2.083vw; /* 40px / 1920px * 100 */
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-section-title {
  font-size: 0.938vw; /* 18px / 1920px * 100 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: left;
  color: #ffbd3c;
  line-height: 1.146vw; /* 22px / 1920px * 100 */
  letter-spacing: 0.001vw; /* 0.01px / 1920px * 100 */
  margin: 0;
  padding: 0;
}

.info-section-content {
  width: 30.365vw; /* 583px / 1920px * 100 */
  font-size: 0.729vw; /* 14px / 1920px * 100 */
  font-family: "PingFang SC", "PingFang SC-Regular", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #333333;
  line-height: 1.042vw; /* 20px / 1920px * 100 */
  letter-spacing: 0;
  margin: 0.729vw 0 0 0; /* 14px / 1920px * 100 */
  padding: 0;
}
</style>

