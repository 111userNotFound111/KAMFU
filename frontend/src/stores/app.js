import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const loading = ref(false)
  const mobileMenuOpen = ref(false)
  const locale = ref(localStorage.getItem('locale') || 'zh-CN')

  // Getters
  const isLoading = computed(() => loading.value)
  const isMobileMenuOpen = computed(() => mobileMenuOpen.value)
  const currentLocale = computed(() => locale.value)

  // Actions
  function setLoading(status) {
    loading.value = status
  }

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }

  function setLocale(newLocale) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  return {
    loading,
    mobileMenuOpen,
    locale,
    isLoading,
    isMobileMenuOpen,
    currentLocale,
    setLoading,
    toggleMobileMenu,
    closeMobileMenu,
    setLocale,
  }
})

