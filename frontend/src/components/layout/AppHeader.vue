<template>
  <header class="app-header">
    <div class="header-content">
      <!-- Logo -->
      <router-link
        to="/"
        class="logo-container"
      >
        <img
          :src="logoImage"
          alt="KAMFU"
          class="logo-image"
        >
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-items">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ 'nav-link-other-pages': !isHomeOrServices }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Language Toggle -->
      <div class="language-toggle">
        <button
          class="lang-option"
          :class="{ active: locale === 'en' }"
          @click="setLanguage('en')"
        >
          EN
        </button>
        <span class="lang-separator">/</span>
        <button
          class="lang-option"
          :class="{ active: locale === 'zh-CN' }"
          @click="setLanguage('zh-CN')"
        >
          中文
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { useRoute } from 'vue-router'
import logoImageSrc from '@/assets/kamfu.png'

const { locale } = useI18n()
const appStore = useAppStore()
const route = useRoute()

const logoImage = ref(logoImageSrc)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

// 判断是否在首页或Services页面
const isHomeOrServices = computed(() => {
  return route.path === '/' || route.path === '/services'
})

const setLanguage = (newLocale) => {
  locale.value = newLocale
  appStore.setLocale(newLocale)
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4.27vw;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1.04vw);
  z-index: 1000;
}

.header-content {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

.logo-container {
  position: absolute;
  left: 9.87%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.logo-image {
  height: 2.08vw;
  width: auto;
}

.nav-items {
  position: absolute;
  left: 34.66%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 61px;
}

.nav-link {
  font-size: 14px;
  font-family: 'PingFang SC', 'PingFang SC-Medium', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 1.04vw;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
}

/* 其他页面（非首页和Services页面）的默认颜色 */
.nav-link.nav-link-other-pages {
  color: #666666;
}

.nav-link:hover {
  color: #3285ff;
}

.nav-link.router-link-exact-active {
  color: #3285ff;
}

.language-toggle {
  position: absolute;
  right: 10.42%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.21vw;
}

.lang-option {
  font-size: 12px;
  font-family: 'MiSans', 'MiSans-Medium', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 0.83vw;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.21vw 0.42vw;
  transition: color 0.3s ease;
}

.lang-option:hover,
.lang-option.active {
  color: #3285ff;
}

.lang-separator {
  font-size: 12px;
  font-family: 'MiSans', 'MiSans-Medium', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.83vw;
}
</style>

