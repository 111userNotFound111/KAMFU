<template>
  <div class="card hover:scale-105 cursor-pointer">
    <div class="text-5xl mb-4">{{ service.icon }}</div>
    <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
    <p class="text-gray-600">{{ service.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>

