import { defineStore } from 'pinia'
import { ref } from 'vue'
import { servicesApi } from '@/api/services'

export const useServicesStore = defineStore('services', () => {
  // State
  const services = ref([])
  const currentService = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Actions
  async function fetchServices() {
    loading.value = true
    error.value = null
    try {
      const response = await servicesApi.getAll()
      services.value = response.data || response
    } catch (err) {
      error.value = err.message || '获取服务列表失败'
      console.error('Error fetching services:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchServiceById(id) {
    loading.value = true
    error.value = null
    try {
      const response = await servicesApi.getById(id)
      currentService.value = response.data || response
    } catch (err) {
      error.value = err.message || '获取服务详情失败'
      console.error('Error fetching service:', err)
    } finally {
      loading.value = false
    }
  }

  function clearCurrentService() {
    currentService.value = null
  }

  return {
    services,
    currentService,
    loading,
    error,
    fetchServices,
    fetchServiceById,
    clearCurrentService,
  }
})

