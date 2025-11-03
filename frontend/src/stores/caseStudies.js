import { defineStore } from 'pinia'
import { ref } from 'vue'
import { caseStudiesApi } from '@/api/services'

export const useCaseStudiesStore = defineStore('caseStudies', () => {
  // State
  const caseStudies = ref([])
  const currentCaseStudy = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const selectedCategory = ref('all')

  // Actions
  async function fetchCaseStudies(params) {
    loading.value = true
    error.value = null
    try {
      const response = await caseStudiesApi.getAll(params)
      caseStudies.value = response.data || response
    } catch (err) {
      error.value = err.message || '获取案例列表失败'
      console.error('Error fetching case studies:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchCaseStudyById(id) {
    loading.value = true
    error.value = null
    try {
      const response = await caseStudiesApi.getById(id)
      currentCaseStudy.value = response.data || response
    } catch (err) {
      error.value = err.message || '获取案例详情失败'
      console.error('Error fetching case study:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchByCategory(category) {
    selectedCategory.value = category
    if (category === 'all') {
      await fetchCaseStudies()
    } else {
      await fetchCaseStudies({ category })
    }
  }

  function clearCurrentCaseStudy() {
    currentCaseStudy.value = null
  }

  return {
    caseStudies,
    currentCaseStudy,
    loading,
    error,
    selectedCategory,
    fetchCaseStudies,
    fetchCaseStudyById,
    fetchByCategory,
    clearCurrentCaseStudy,
  }
})

