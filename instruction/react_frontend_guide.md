# FRONTEND DEVELOPMENT INSTRUCTIONS FOR CLAUDE CODE
## KAMFU Tech Website - Complete Implementation Guide (React.js)

---

## PROJECT OVERVIEW

**Frontend Framework:** React 18 + Vite  
**Language:** JavaScript (JSX)  
**Styling:** Chakra UI / Tailwind CSS + shadcn/ui  
**State Management:** TanStack Query (React Query)  
**Routing:** TanStack Router / React Router v6  
**Internationalization:** i18next  
**Backend Integration:** Axios API Client  
**Testing:** Vitest + Playwright  
**Forms:** React Hook Form + Zod  
**Animations:** Framer Motion  

---

## 📋 CODE STANDARDS & CONVENTIONS

### **📌 NAMING CONVENTION SUMMARY**
| Item | Convention | Example |
|------|-----------|---------|
| Component Files | PascalCase | `Header.jsx`, `ContactForm.jsx` |
| Utility Files | camelCase | `apiClient.js`, `formatDate.js` |
| Hook Files | camelCase (use prefix) | `useAuth.js`, `useServices.js` |
| Variables | camelCase | `isLoading`, `userData` |
| Functions | camelCase | `handleSubmit`, `fetchData` |
| Constants | SCREAMING_SNAKE_CASE | `API_BASE_URL`, `MAX_SIZE` |
| CSS Classes | kebab-case (Tailwind) | `flex items-center`, `container-custom` |

### 1.1 Files & Folders
```javascript
// ✅ CORRECT - camelCase for all utility files, PascalCase for components
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx              // PascalCase for React components
│   │   ├── Footer.jsx              
│   │   └── Layout.jsx              
│   ├── sections/
│   │   ├── HeroSection.jsx         
│   │   ├── ServicesSection.jsx     
│   │   └── ContactSection.jsx      
│   └── ui/
│       ├── Button.jsx              
│       └── Card.jsx                
├── lib/
│   ├── apiClient.js                // camelCase for utilities
│   └── queryClient.js              
├── utils/
│   ├── formatDate.js               
│   └── validation.js               
├── hooks/
│   ├── useContactForm.js           // camelCase with 'use' prefix
│   ├── useServices.js              
│   └── useTranslation.js           
├── constants/
│   ├── apiEndpoints.js             
│   └── routes.js                   
└── types/
    └── index.js                    // JSDoc type definitions
```

---

## PHASE 1: PROJECT SETUP & INITIALIZATION

### Step 1.1: Create Vite + React Project
```bash
# Create project with Vite
npm create vite@latest kamfu-website -- --template react
cd kamfu-website

# Initialize Git
git init
git add .
git commit -m "feat: initial project setup"
```

### Step 1.2: Install Core Dependencies
```bash
# Core UI Framework (Choose one)
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# OR use Tailwind + shadcn/ui
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# State Management & Data Fetching
npm install @tanstack/react-query @tanstack/react-query-devtools

# Routing
npm install react-router-dom

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Internationalization
npm install i18next react-i18next i18next-browser-languagedetector

# API Client
npm install axios

# Utilities
npm install date-fns clsx

# PropTypes for runtime type checking
npm install prop-types

# Development Tools
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks
```

### Step 1.3: Install Testing Dependencies
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test
```

### Step 1.4: Configure ESLint (.eslintrc.cjs)
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'warn',
  },
}
```

### Step 1.5: Setup Path Aliases (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
```

### Step 1.6: Configure jsconfig.json (for path aliases)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

---

## PHASE 2: PROJECT STRUCTURE SETUP

### Step 2.1: Create Folder Structure
```bash
mkdir -p src/{components/{layout,sections,ui},lib,utils,hooks,constants,pages,assets/{images,icons}}
```

### Step 2.2: Create Essential Files

**src/constants/apiEndpoints.js**
```javascript
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export const API_ENDPOINTS = {
  SERVICES: '/api/services',
  CASE_STUDIES: '/api/case-studies',
  CONTACT: '/api/contact',
  ABOUT: '/api/about',
}
```

**src/types/index.js** (JSDoc type definitions)
```javascript
/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string[]} features
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} image
 * @property {string} category
 */

/**
 * @typedef {Object} ContactFormData
 * @property {string} name
 * @property {string} email
 * @property {string} [company]
 * @property {string} [phone]
 * @property {string} [service]
 * @property {string} message
 */

/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {T} data
 * @property {string} [message]
 * @property {'success'|'error'} status
 */

export {} // Make this a module
```

---

## PHASE 3: API CLIENT SETUP

### Step 3.1: Create API Client (src/lib/apiClient.js)
```javascript
import axios from 'axios'
import { API_BASE_URL } from '@/constants/apiEndpoints'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API methods
export const api = {
  // Services
  getServices: () => apiClient.get('/api/services'),
  getService: (id) => apiClient.get(`/api/services/${id}`),
  
  // Case Studies
  getCaseStudies: () => apiClient.get('/api/case-studies'),
  getCaseStudy: (id) => apiClient.get(`/api/case-studies/${id}`),
  
  // Contact
  submitContact: (data) => apiClient.post('/api/contact', data),
  
  // About
  getAbout: () => apiClient.get('/api/about'),
}

export default apiClient
```

### Step 3.2: Create Query Client (src/lib/queryClient.js)
```javascript
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
})
```

### Step 3.3: Setup Query Client in main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/queryClient'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

---

## PHASE 4: DATA FETCHING WITH TANSTACK QUERY

### Step 4.1: Create Custom Hooks for Data Fetching

**src/hooks/useServices.js**
```javascript
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/apiClient'

/**
 * Hook to fetch all services
 * @returns {Object} Query result with services data
 */
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: () => api.getServices(),
    select: (data) => data.data, // Extract data from response
  })
}

/**
 * Hook to fetch a single service
 * @param {string} id - Service ID
 * @returns {Object} Query result with service data
 */
export const useService = (id) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: () => api.getService(id),
    enabled: !!id, // Only run if id exists
  })
}
```

**src/hooks/useCaseStudies.js**
```javascript
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/apiClient'

export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => api.getCaseStudies(),
  })
}

export const useCaseStudy = (id) => {
  return useQuery({
    queryKey: ['caseStudy', id],
    queryFn: () => api.getCaseStudy(id),
    enabled: !!id,
  })
}
```

**src/hooks/useContactForm.js**
```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/apiClient'
import { useToast } from '@chakra-ui/react'

/**
 * Hook for contact form submission
 * @returns {Object} Mutation object
 */
export const useContactForm = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation({
    mutationFn: (data) => api.submitContact(data),
    onSuccess: () => {
      toast({
        title: 'Success!',
        description: 'We will contact you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    },
  })
}
```

---

## PHASE 5: COMPONENT DEVELOPMENT

### Step 5.1: Layout Components

**src/components/layout/Header.jsx**
```javascript
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Header = () => {
  const { t, i18n } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white"
      boxShadow="sm"
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link to="/">
            <Box fontWeight="bold" fontSize="xl">
              KAMFU Tech
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                {t(item.label)}
              </Link>
            ))}
          </HStack>

          {/* Language Toggle & Mobile Menu Button */}
          <Flex alignItems="center" gap={4}>
            <button onClick={toggleLanguage}>
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>

            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={onToggle}
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Stack pb={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                {t(item.label)}
              </Link>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  )
}
```

**src/components/layout/Footer.jsx**
```javascript
import { Box, Container, Grid, Heading, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box as="footer" bg="gray.900" color="white" py={12}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap={8}
        >
          {/* Company */}
          <VStack align="start">
            <Heading size="sm" mb={4}>{t('Company')}</Heading>
            <Link to="/about">{t('About Us')}</Link>
            <Link to="/case-studies">{t('Case Studies')}</Link>
          </VStack>

          {/* Services */}
          <VStack align="start">
            <Heading size="sm" mb={4}>{t('Services')}</Heading>
            <Text>AI Development</Text>
            <Text>Data Analytics</Text>
            <Text>System Integration</Text>
            <Text>Custom Development</Text>
          </VStack>

          {/* Products */}
          <VStack align="start">
            <Heading size="sm" mb={4}>{t('Products')}</Heading>
            <Text>AI Digital Human</Text>
            <Text>Intelligent Q&A System</Text>
            <Text>Business Analysis</Text>
            <Text>Manufacturing Solutions</Text>
          </VStack>

          {/* Connect */}
          <VStack align="start">
            <Heading size="sm" mb={4}>{t('Connect')}</Heading>
            <Link to="/contact">{t('Contact Us')}</Link>
            <Text>LinkedIn</Text>
          </VStack>
        </Grid>

        <Box mt={8} pt={8} borderTopWidth={1} borderColor="gray.700">
          <Text textAlign="center" fontSize="sm">
            © 2024 KAMFU Tech. All rights reserved. | Privacy Policy | Terms of Service
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
```

### Step 5.2: Section Components with TanStack Query

**src/components/sections/ServicesSection.jsx**
```javascript
import PropTypes from 'prop-types'
import { Box, Container, Heading, SimpleGrid, Spinner, Alert } from '@chakra-ui/react'
import { useServices } from '@/hooks/useServices'
import { ServiceCard } from '@/components/ui/ServiceCard'

export const ServicesSection = () => {
  const { data: services, isLoading, error } = useServices()

  if (isLoading) {
    return (
      <Box py={20} textAlign="center">
        <Spinner size="xl" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box py={20}>
        <Alert status="error">
          Failed to load services. Please try again later.
        </Alert>
      </Box>
    )
  }

  return (
    <Box as="section" py={20} bg="gray.50">
      <Container maxW="7xl">
        <Heading textAlign="center" mb={12}>
          OUR CORE SERVICES
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
```

**src/components/sections/ContactSection.jsx**
```javascript
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContactForm } from '@/hooks/useContactForm'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactSection = () => {
  const { mutate: submitContact, isPending } = useContactForm()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data) => {
    submitContact(data, {
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <Box as="section" py={20} bg="gray.50">
      <Container maxW="xl">
        <Heading textAlign="center" mb={12}>
          GET IN TOUCH
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={6}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Your Name *</FormLabel>
              <Input {...register('name')} />
              {errors.name && <Text color="red.500">{errors.name.message}</Text>}
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email Address *</FormLabel>
              <Input type="email" {...register('email')} />
              {errors.email && <Text color="red.500">{errors.email.message}</Text>}
            </FormControl>

            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input {...register('company')} />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input {...register('phone')} />
            </FormControl>

            <FormControl>
              <FormLabel>Service Interested In</FormLabel>
              <Input {...register('service')} />
            </FormControl>

            <FormControl isInvalid={!!errors.message}>
              <FormLabel>How can we help you? *</FormLabel>
              <Textarea {...register('message')} rows={5} />
              {errors.message && <Text color="red.500">{errors.message.message}</Text>}
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              isLoading={isPending}
            >
              SEND MESSAGE
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  )
}
```

---

## PHASE 6: INTERNATIONALIZATION (i18next)

**src/lib/i18n.js**
```javascript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      'Home': 'Home',
      'Services': 'Services',
      'Case Studies': 'Case Studies',
      'About Us': 'About Us',
      'Contact': 'Contact',
      'Company': 'Company',
      'Connect': 'Connect',
      // Add more translations
    },
  },
  zh: {
    translation: {
      'Home': '首页',
      'Services': '服务',
      'Case Studies': '案例研究',
      'About Us': '关于我们',
      'Contact': '联系我们',
      'Company': '公司',
      'Connect': '联系',
      // Add more translations
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
```

**Import in main.jsx:**
```javascript
import './lib/i18n'
```

---

## PHASE 7: ROUTING

**src/App.jsx**
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

## CRITICAL REMINDERS

### 🔴 **NEVER:**
- Skip PropTypes validation
- Mix naming conventions
- Use inline styles (use Chakra/Tailwind)
- Forget to handle loading/error states
- Skip error handling in async functions
- Commit console.log statements
- Ignore ESLint warnings

### 🟢 **ALWAYS:**
- Add PropTypes to all components
- Use JSDoc comments for complex functions
- Use camelCase for files (except components)
- Use TanStack Query for all server state
- Implement proper loading states
- Use React Hook Form + Zod for forms
- Follow the naming conventions strictly
- Use environment variables for config

---

## GIT COMMIT STANDARDS

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: adding tests
chore: maintenance

# Examples:
feat(contact): add email validation
fix(header): resolve mobile menu bug
docs(readme): update installation steps
test(contact): add form validation tests
```

---

**END OF REACT.JS FRONTEND INSTRUCTIONS**