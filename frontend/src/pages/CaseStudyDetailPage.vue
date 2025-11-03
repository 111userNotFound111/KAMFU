<template>
  <div class="case-study-detail-page">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
      <div class="container-custom">
        <router-link to="/case-studies" class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <span class="mr-2">←</span> {{ t('common.back') }}
        </router-link>
        <h1 class="heading-1">案例详情</h1>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="container-custom max-w-4xl">
        <div class="card">
          <p class="text-center text-gray-600">案例详情页面 - 开发中</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

