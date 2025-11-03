import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue'),
        meta: { title: '首页' },
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/pages/ServicesPage.vue'),
        meta: { title: '服务' },
      },
      {
        path: 'case-studies',
        name: 'CaseStudies',
        component: () => import('@/pages/CaseStudiesPage.vue'),
        meta: { title: '案例研究' },
      },
      {
        path: 'case-studies/:id',
        name: 'CaseStudyDetail',
        component: () => import('@/pages/CaseStudyDetailPage.vue'),
        meta: { title: '案例详情' },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/pages/AboutPage.vue'),
        meta: { title: '关于我们' },
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/pages/ContactPage.vue'),
        meta: { title: '联系我们' },
      },
      {
        path: 'products/ai-digital-human',
        name: 'ProductAIDigitalHuman',
        component: () => import('@/pages/ProductAIDigitalHumanPage.vue'),
        meta: { title: 'AI数字人' },
      },
      {
        path: 'products/intelligent-qa',
        name: 'ProductIntelligentQA',
        component: () => import('@/pages/ProductIntelligentQAPage.vue'),
        meta: { title: '智能问答系统' },
      },
      {
        path: 'products/business-analysis',
        name: 'ProductBusinessAnalysis',
        component: () => import('@/pages/ProductBusinessAnalysisPage.vue'),
        meta: { title: '企业商业分析产品' },
      },
      {
        path: 'products/manufacturing',
        name: 'ProductManufacturing',
        component: () => import('@/pages/ProductManufacturingPage.vue'),
        meta: { title: '制造业数字化' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: '页面未找到' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = `${title} - KAMFU Tech`
  }
  next()
})

export default router

