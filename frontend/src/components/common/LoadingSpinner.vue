<template>
  <div class="flex justify-center items-center" :class="containerClass">
    <div
      class="animate-spin rounded-full border-b-2"
      :class="spinnerClass"
      :style="{ width: size, height: size }"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '48px',
  },
  color: {
    type: String,
    default: 'primary',
  },
  containerClass: {
    type: String,
    default: 'py-12',
  },
})

const spinnerClass = computed(() => {
  const colorMap = {
    primary: 'border-primary-600',
    white: 'border-white',
    gray: 'border-gray-600',
  }
  return colorMap[props.color] || colorMap.primary
})
</script>

