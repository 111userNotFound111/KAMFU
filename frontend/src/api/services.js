import apiClient from './client'

// 服务相关API
export const servicesApi = {
  // 获取所有服务
  getAll() {
    return apiClient.get('/api/services')
  },
  
  // 获取单个服务详情
  getById(id) {
    return apiClient.get(`/api/services/${id}`)
  },
}

// 案例研究相关API
export const caseStudiesApi = {
  // 获取所有案例
  getAll(params) {
    return apiClient.get('/api/case-studies', { params })
  },
  
  // 获取单个案例详情
  getById(id) {
    return apiClient.get(`/api/case-studies/${id}`)
  },
  
  // 按类别获取案例
  getByCategory(category) {
    return apiClient.get('/api/case-studies', {
      params: { category },
    })
  },
}

// 关于我们相关API
export const aboutApi = {
  // 获取公司信息
  getInfo() {
    return apiClient.get('/api/about')
  },
  
  // 获取团队信息
  getTeam() {
    return apiClient.get('/api/about/team')
  },
}

// 联系表单相关API
export const contactApi = {
  // 提交联系表单
  submit(data) {
    return apiClient.post('/api/contact', data)
  },
}

// 导出所有API
export default {
  services: servicesApi,
  caseStudies: caseStudiesApi,
  about: aboutApi,
  contact: contactApi,
}

