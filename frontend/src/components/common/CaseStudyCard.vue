<template>
  <div class="card group cursor-pointer hover:scale-105" @click="navigateToDetail">
    <div class="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
      <img
        v-if="caseStudy.image"
        :src="caseStudy.image"
        :alt="caseStudy.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
        暂无图片
      </div>
    </div>
    <div class="mb-2">
      <span class="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full">
        {{ caseStudy.category }}
      </span>
    </div>
    <h3 class="text-xl font-bold mb-2">{{ caseStudy.title }}</h3>
    <p v-if="caseStudy.description" class="text-gray-600 text-sm mb-4">
      {{ caseStudy.description }}
    </p>
    <div class="flex items-center text-primary-600 font-medium">
      <span class="mr-2">了解详情</span>
      <span>→</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const navigateToDetail = () => {
  router.push(`/case-studies/${props.caseStudy.id}`)
}
</script>

