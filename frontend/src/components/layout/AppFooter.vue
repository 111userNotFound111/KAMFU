<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Navigation Section -->
      <div class="footer-nav">
        <!-- Company Column -->
        <div class="nav-column">
          <h3 class="nav-title">
            Company
          </h3>
          <ul class="nav-list">
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
              >
                About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/case-studies"
                class="nav-link"
              >
                Case Studies
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services Column -->
        <div class="nav-column">
          <h3 class="nav-title">
            Services
          </h3>
          <ul class="nav-list">
            <li class="nav-item">
              <router-link
                to="/services"
                class="nav-link"
              >
                AI Development
              </router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                Data Analytics
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                System Integration
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                Custom Development
              </span>
            </li>
          </ul>
        </div>

        <!-- Products Column -->
        <div class="nav-column">
          <h3 class="nav-title">
            Products
          </h3>
          <ul class="nav-list">
            <li class="nav-item">
              <router-link
                to="/products/ai-digital-human"
                class="nav-link"
              >
                AI Digital Human
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products/intelligent-qa"
                class="nav-link"
              >
                Intelligent Q&A Syst
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products/business-analysis"
                class="nav-link"
              >
                Business Analysis
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products/manufacturing"
                class="nav-link"
              >
                Manufacturing Soluti
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect Column -->
        <div class="nav-column">
          <h3 class="nav-title">
            Connect
          </h3>
          <ul class="nav-list">
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
              >
                Contact Us
              </router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                LinkedIn
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider Line -->
      <div class="footer-divider" />

      <!-- Copyright Text -->
      <div class="footer-copyright">
        © 2024 Amplify Tech. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 17.19vw; /* 330px / 1920px = 17.19vw - 不受浏览器缩放影响 */
  background: #18191a;
  margin: 0 auto;
}

.footer-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.footer-nav {
  display: flex;
  padding-top: 3.125vw; /* 60px / 1920px = 3.125vw */
  padding-left: 15.68vw; /* 301px / 1920px = 15.68vw */
}

.nav-column {
  display: flex;
  flex-direction: column;
}

.nav-column:nth-child(1) {
  margin-left: 0;
}

.nav-column:nth-child(2) {
  margin-left: 13.18vw; /* 253px / 1920px = 13.18vw */
}

.nav-column:nth-child(3) {
  margin-left: 13.44vw; /* 258px / 1920px = 13.44vw */
}

.nav-column:nth-child(4) {
  margin-left: 13.33vw; /* 256px / 1920px = 13.33vw */
}

.nav-title {
  font-size: 1.04vw; /* 20px / 1920px = 1.04vw - 纯视窗单位 */
  font-family: Impact, Impact-Regular, sans-serif;
  font-weight: 400;
  text-align: justify;
  color: #4059ff;
  line-height: 1.2;
  margin: 0 0 1.25vw 0; /* 24px / 1920px = 1.25vw */
  white-space: nowrap;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625vw; /* 12px / 1920px = 0.625vw */
}

.nav-item {
  font-size: 0.73vw; /* 14px / 1920px = 0.73vw - 纯视窗单位 */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: 400;
  text-align: justify;
  line-height: 1.21;
  white-space: nowrap;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: inline-block;
}

.nav-link:hover {
  color: #4059ff;
}

.footer-divider {
  position: absolute;
  bottom: 2.97vw; /* 57px / 1920px = 2.97vw */
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #656565;
  border-bottom: none;
  border-left: none;
  border-right: none;
}

.footer-copyright {
  position: absolute;
  bottom: 1.04vw; /* 20px / 1920px = 1.04vw */
  left: 0;
  width: 100%;
  font-size: 0.73vw; /* 14px / 1920px = 0.73vw - 纯视窗单位 */
  font-family: Helvetica, Helvetica-Regular, sans-serif;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 1.21;
  padding: 0 1.04vw; /* 20px / 1920px = 1.04vw */
  box-sizing: border-box;
}

/* 使用纯视窗单位(vw)，不受浏览器 Ctrl+滚轮 缩放影响 */
</style>
