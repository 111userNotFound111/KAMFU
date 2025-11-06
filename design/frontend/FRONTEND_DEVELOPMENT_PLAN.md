# KAMFU Tech Website - Frontend Development Plan

**Document Version:** 1.0
**Last Updated:** 2025-11-03
**Analyzed Figma File:** 官网 (Official Website)
**Total Pages:** 9

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Design Analysis Overview](#2-design-analysis-overview)
3. [Page-by-Page Structure Analysis](#3-page-by-page-structure-analysis)
4. [Component Library Design](#4-component-library-design)
5. [Frontend Architecture](#5-frontend-architecture)
6. [Technology Stack](#6-technology-stack)
7. [File Structure](#7-file-structure)
8. [Development Phases](#8-development-phases)
9. [Implementation Guidelines](#9-implementation-guidelines)
10. [Responsive Design Strategy](#10-responsive-design-strategy)
11. [Performance Optimization](#11-performance-optimization)
12. [Testing Strategy](#12-testing-strategy)

---

## 1. Executive Summary

### Project Overview
KAMFU Tech Website is a corporate website showcasing AI and technology solutions, featuring 9 distinct pages organized into 4 main categories:
- **Main Pages:** Home, Services, About Us, Contact
- **Case Studies Overview:** Case Studies listing page
- **Individual Case Studies:** 4 detailed case study pages

### Key Findings from Design Analysis
- **Design Width:** 1920px (Desktop-first design)
- **Total Components Analyzed:** 932 elements
- **Component Distribution:**
  - Text Elements: 420 (45%)
  - Layout Containers: 283 (30%)
  - Shapes/Backgrounds: 146 (16%)
  - Images: 78 (8%)
  - Form Elements: 5 (1%)

### Design Patterns Identified
1. **Consistent Navigation:** All pages share identical header/footer structure
2. **Hero Sections:** Full-width hero images on most pages (1920px wide)
3. **Card-Based Layouts:** Case studies use card components (413x164px)
4. **Bilingual Content:** Chinese design with EN/中文 requirement
5. **Form Integration:** Contact page includes form elements

---

## 2. Design Analysis Overview

### Page Groupings

#### Group 1: Main Information Pages
| Page | Height | Complexity | Primary Function |
|------|--------|------------|------------------|
| Home | 4510px | High | Landing page with multiple sections |
| Services | 3165px | Medium | Service offerings showcase |
| About Us | 1788px | Low | Company information |
| Contact | 1895px | Low | Contact form and info |

#### Group 2: Case Studies Hub
| Page | Height | Complexity | Primary Function |
|------|--------|------------|------------------|
| Case Studies | 2033px | Medium | Case study overview/grid |

#### Group 3: Individual Case Study Pages
| Page | Height | Consistency |
|------|--------|-------------|
| AI Digital Human | 2623px | Similar structure |
| Intelligent Q&A System | 2433px | Similar structure |
| Enterprise Business Analysis | 2433px | Similar structure |
| Manufacturing Digitalization | 2516px | Similar structure |

**Key Insight:** Case study detail pages share ~90% structural similarity, enabling template reuse.

---

## 3. Page-by-Page Structure Analysis

### 3.1. Home Page (1. Home)

**Dimensions:** 1920x4510px
**Complexity:** High (56 direct children)

#### Main Container Structure
```
HomePage (1920x4510)
├── HeroSection (1920x506)
│   ├── Background Shape (1920x506)
│   ├── Hero Image
│   └── Hero Content (Text + CTA)
├── IntroSection (1920x305)
│   ├── Background Shape (1920x305)
│   └── Introduction Content
├── FeaturesSection
│   ├── Feature Cards (4x 413x240)
│   └── Card Grid Layout
├── ServicesPreview
│   ├── Large Image (2011x824)
│   └── Service Highlights
├── CaseStudiesPreview
│   ├── Case Study Cards
│   └── Carousel/Grid
├── TestimonialsSection
├── CTASection
└── Footer
```

#### Key Components
- **Navigation Bar:** Fixed header with logo + menu items
  - Items: Home, Services, Case Studies, About Us, Contact
  - Language Toggle: EN/中文
  - CTA Button: 206x38px

- **Hero Section:** Full-width background + centered content
  - Headline text
  - Subheading
  - Primary CTA button

- **Feature Cards:** 4 cards in grid (2x2 or 4x1)
  - Size: 413x240px each
  - Image + title + description

- **Service Preview:** Large image with overlaid text
  - Size: 2011x824px
  - Call-to-action overlay

---

### 3.2. Services Page (2. Services)

**Dimensions:** 1920x3165px
**Complexity:** Medium (46 direct children)

#### Main Container Structure
```
ServicesPage (1920x3165)
├── Header (Navigation)
├── PageHero
│   ├── Hero Image (1920x1181)
│   └── Page Title + Breadcrumb
├── ServicesGrid
│   ├── ServiceCard 1 (940x600)
│   ├── ServiceCard 2
│   ├── ServiceCard 3
│   └── ServiceCard 4
├── ServiceDetails
│   └── Detailed descriptions
└── Footer
```

#### Key Components
- **Breadcrumb Navigation:** Home > Services
- **Service Cards:** Large cards (940x600px)
  - Service image
  - Service title (EN + 中文)
  - Description
  - "Learn More" link

- **Service Features:** List or grid of features
  - Icon + text combination
  - Responsive layout

---

### 3.3. Case Studies Overview (3. Case Studies)

**Dimensions:** 1920x2033px
**Complexity:** Medium (24 direct children)

#### Main Container Structure
```
CaseStudiesPage (1920x2033)
├── Header (Navigation)
├── PageHero (1920x720)
│   └── Hero Image + Title
├── FilterBar
│   └── Category filters
├── CaseStudiesGrid
│   ├── CaseStudyCard 1 (413x164)
│   ├── CaseStudyCard 2 (413x164)
│   ├── CaseStudyCard 3 (413x164)
│   └── CaseStudyCard 4 (413x164)
└── Footer
```

#### Key Components
- **Case Study Cards:** Consistent size (413x164px)
  - Thumbnail image with mask
  - Title
  - Brief description
  - "View Details" link
  - Hover effect

---

### 3.4. Individual Case Study Pages

**Pattern:** All 4 case study detail pages share this structure

**Dimensions:** 1920x2400-2600px (varies slightly)
**Complexity:** Medium (40-42 direct children)

#### Shared Container Structure
```
CaseStudyDetailPage
├── Header (Navigation)
├── PageHero (1920x720)
│   └── Case study hero image
├── BreadcrumbBar (1920x82)
│   └── Home > Case Studies > [Study Name]
├── ContentSection (1920x1023)
│   ├── Background shape
│   ├── Problem Statement
│   ├── Solution Overview
│   ├── Technologies Used
│   └── Results/Metrics
├── RelatedCaseStudies
│   ├── Card 1 (413x164)
│   ├── Card 2 (413x164)
│   ├── Card 3 (413x164)
│   └── Card 4 (413x164)
└── Footer
```

#### Page-Specific Content

**3.4.1. AI Digital Human**
- Focus: Digital avatar technology
- Extra sections: 4 container groups (编组 1-4)
- Content height: 2623px

**3.4.2. Intelligent Q&A System**
- Focus: AI-powered Q&A
- Standard case study layout
- Content height: 2433px

**3.4.3. Enterprise Business Analysis Product**
- Focus: Business intelligence
- Standard case study layout
- Content height: 2433px

**3.4.4. Manufacturing Digitalization**
- Focus: Industrial IoT & data analytics
- Content height: 2516px

---

### 3.5. About Us Page (4. About Us)

**Dimensions:** 1920x1788px
**Complexity:** Low (22 direct children)

#### Main Container Structure
```
AboutUsPage (1920x1788)
├── Header (Navigation)
├── PageHero
│   ├── Hero Image (1921x272)
│   └── Company tagline
├── CompanyStory (1920x824)
│   ├── Background image
│   ├── Mission statement
│   └── Vision statement
├── TeamSection
│   └── Team member cards
├── ValuesSection
│   └── Core values
└── Footer
```

#### Key Components
- **Company Hero:** Wide banner (1921x272px)
- **Story Section:** Image background with text overlay (1920x824px)
- **Team Cards:** Team member profiles
- **Values Grid:** Company values showcase

---

### 3.6. Contact Page (5. Contact)

**Dimensions:** 1920x1895px
**Complexity:** Low (28 direct children)

#### Main Container Structure
```
ContactPage (1920x1895)
├── Header (Navigation)
├── PageHero (1920x620)
│   └── Contact hero image
├── BreadcrumbBar (1920x82)
├── ContactContent
│   ├── ContactForm (Left)
│   │   ├── Name input
│   │   ├── Email input
│   │   ├── Subject input
│   │   ├── Message textarea
│   │   └── Submit button
│   └── ContactInfo (Right)
│       ├── Office address
│       ├── Phone number
│       ├── Email address
│       └── Business hours
└── Footer
```

#### Key Components
- **Contact Form:** Form with validation
  - Text inputs
  - Textarea for message
  - Submit button (206x38px)
  - Form validation (React Hook Form + Zod)

- **Contact Information:** Static info display
  - Address with map link
  - Contact details
  - Social media links

---

## 4. Component Library Design

### 4.1. Layout Components

#### Main Layout (`components/layout/MainLayout.tsx`)
```typescript
interface MainLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}
```
- Wraps all pages
- Includes Header and Footer
- Manages scroll restoration

#### Header (`components/layout/Header.tsx`)
```typescript
interface HeaderProps {
  variant?: 'transparent' | 'solid'
}
```
- Logo (left)
- Navigation menu (center)
  - Home, Services, Case Studies, About Us, Contact
- Language toggle (right)
- CTA button (right)
- Responsive hamburger menu
- Sticky on scroll

#### Footer (`components/layout/Footer.tsx`)
- Company information
- Quick links
- Social media icons
- Copyright notice
- Newsletter signup (optional)

---

### 4.2. Section Components

#### HeroSection (`components/sections/HeroSection.tsx`)
```typescript
interface HeroSectionProps {
  backgroundImage: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  height?: 'full' | 'medium' | 'small'
  overlay?: boolean
}
```
- Full-width background image
- Centered or left-aligned content
- Call-to-action button
- Responsive heights

#### BreadcrumbBar (`components/sections/BreadcrumbBar.tsx`)
```typescript
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbBarProps {
  items: BreadcrumbItem[]
}
```
- Consistent 1920x82px height
- Breadcrumb navigation
- Appears on all pages except Home

---

### 4.3. Card Components

#### ServiceCard (`components/ui/ServiceCard.tsx`)
```typescript
interface ServiceCardProps {
  image: string
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  link: string
  size?: 'small' | 'large'
}
```
- Sizes: Small (413x240px), Large (940x600px)
- Image with hover effect
- Bilingual title/description
- Link to detail page

#### CaseStudyCard (`components/ui/CaseStudyCard.tsx`)
```typescript
interface CaseStudyCardProps {
  id: string
  thumbnail: string
  title: string
  titleZh: string
  category: string
  excerpt: string
  excerptZh: string
  link: string
}
```
- Standard size: 413x164px
- Masked thumbnail image
- Title + brief description
- Hover state with overlay
- Click to detail page

#### FeatureCard (`components/ui/FeatureCard.tsx`)
```typescript
interface FeatureCardProps {
  icon: string | React.ReactNode
  title: string
  titleZh: string
  description: string
  descriptionZh: string
}
```
- Icon/image (top)
- Title (middle)
- Description (bottom)
- Responsive grid layout

---

### 4.4. Form Components

#### ContactForm (`components/forms/ContactForm.tsx`)
```typescript
interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
```
- React Hook Form + Zod validation
- Field-level error messages
- Submit with loading state
- Success/error notifications
- Email integration (SendGrid/Resend)

#### Input (`components/ui/Input.tsx`)
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
}
```
- Styled input with label
- Error state
- Focus states
- Accessibility compliant

#### Textarea (`components/ui/Textarea.tsx`)
- Similar to Input
- Expandable textarea
- Character count (optional)

---

### 4.5. UI Components

#### Button (`components/ui/Button.tsx`)
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: React.ReactNode
}
```
- Standard size: 206x38px (from design)
- Multiple variants
- Loading state
- Icon support

#### LanguageToggle (`components/ui/LanguageToggle.tsx`)
```typescript
interface LanguageToggleProps {
  onChange?: (lang: 'en' | 'zh') => void
}
```
- Toggle between EN/中文
- Uses i18next context
- Persists selection to localStorage

---

### 4.6. Utility Components

#### Container (`components/ui/Container.tsx`)
```typescript
interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
  children: React.ReactNode
}
```
- Max-width: 1920px (full), 1440px (xl), 1200px (lg)
- Responsive padding
- Centers content

#### Section (`components/ui/Section.tsx`)
```typescript
interface SectionProps {
  background?: 'white' | 'gray' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```
- Wrapper for page sections
- Background color options
- Consistent vertical spacing

---

## 5. Frontend Architecture

### 5.1. Architecture Pattern

**Chosen Pattern:** Component-Based Architecture with Feature Folders

```
frontend/src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, MainLayout)
│   ├── sections/       # Page sections (HeroSection, etc.)
│   ├── forms/          # Form components
│   └── ui/             # Base UI components (Button, Input, Card)
├── pages/              # Page components (one per route)
├── hooks/              # Custom React hooks
├── lib/                # External integrations (API client, utils)
├── types/              # TypeScript type definitions
├── constants/          # Constants and configuration
├── utils/              # Utility functions
└── locales/            # i18n translation files
```

### 5.2. State Management Strategy

**Server State:** TanStack Query (React Query)
- All data fetching from backend API
- Automatic caching and revalidation
- Optimistic updates for mutations

**Client State:** React Context + hooks
- UI state (theme, language)
- Form state (React Hook Form)
- Modal/dialog state

**URL State:** TanStack Router
- Query parameters (filters, pagination)
- Route parameters (case study ID)

### 5.3. Routing Strategy

**Chosen Router:** TanStack Router

```typescript
// Route structure
const routes = [
  { path: '/', component: HomePage },
  { path: '/services', component: ServicesPage },
  { path: '/case-studies', component: CaseStudiesPage },
  { path: '/case-studies/:id', component: CaseStudyDetailPage },
  { path: '/about', component: AboutUsPage },
  { path: '/contact', component: ContactPage },
]
```

**Route Parameters:**
- `/case-studies/:id` - Dynamic case study detail pages
  - `ai-digital-human`
  - `intelligent-qa-system`
  - `enterprise-business-analysis`
  - `manufacturing-digitalization`

---

## 6. Technology Stack

### 6.1. Core Framework

**React 18 + Vite** (Recommended)
- Faster build times than Next.js for SPA
- Better DX with HMR
- Smaller bundle size
- CSR-first approach (suitable for corporate site)

**Alternative:** Next.js 15
- Use if SSR/SSG is required
- Better SEO out of the box
- Image optimization
- API routes (if backend proxy needed)

### 6.2. Language

**TypeScript (Strict Mode)**
- Type safety
- Better IDE support
- Prevents runtime errors
- Required per CLAUDE.md

### 6.3. UI Framework

**Primary:** Tailwind CSS
- Utility-first CSS
- Responsive design
- Custom design system
- Small bundle size

**Component Library:** shadcn/ui
- Unstyled, customizable components
- Built on Radix UI
- Accessibility built-in
- Copy-paste components

**Optional:** Chakra UI
- Faster initial setup
- Built-in responsive props
- Good TypeScript support

### 6.4. Animations

**Framer Motion**
- Page transitions
- Scroll animations
- Hover effects
- Element entrance animations

**Alternative:** Aceternity UI
- Pre-built animation components
- Modern, sleek effects

### 6.5. Forms

**React Hook Form + Zod**
- Type-safe form validation
- Better performance than Formik
- Schema-based validation
- Easy error handling

### 6.6. Data Fetching

**TanStack Query (React Query)**
- Server state management
- Automatic caching
- Background refetching
- Optimistic updates

### 6.7. Internationalization

**i18next + react-i18next**
- EN/中文 support
- Namespace organization
- Dynamic language switching
- SEO-friendly

### 6.8. Additional Tools

- **API Client:** Auto-generated from OpenAPI spec (openapi-typescript-codegen)
- **Icons:** React Icons / Lucide React
- **Date Formatting:** date-fns
- **Image Optimization:** Vite image plugin / Next.js Image
- **Analytics:** Google Analytics 4 / Plausible

---

## 7. File Structure

### 7.1. Complete Project Structure

```
frontend/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── case-studies/
│   │   └── logos/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BreadcrumbBar.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   └── CaseStudiesSection.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Textarea.tsx
│   │       ├── Card.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── CaseStudyCard.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── Container.tsx
│   │       ├── Section.tsx
│   │       ├── LanguageToggle.tsx
│   │       └── Spinner.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── CaseStudyDetailPage.tsx
│   │   ├── AboutUsPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   │   ├── useServices.ts
│   │   ├── useCaseStudies.ts
│   │   ├── useAboutUs.ts
│   │   ├── useContactForm.ts
│   │   └── useLanguage.ts
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   └── generated/         # Auto-generated from OpenAPI
│   │   ├── i18n.ts
│   │   └── queryClient.ts
│   ├── types/
│   │   ├── service.ts
│   │   ├── caseStudy.ts
│   │   ├── contact.ts
│   │   └── common.ts
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── apiEndpoints.ts
│   │   └── config.ts
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── validation.ts
│   │   └── helpers.ts
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json
│   │   │   ├── home.json
│   │   │   ├── services.json
│   │   │   ├── caseStudies.json
│   │   │   ├── about.json
│   │   │   └── contact.json
│   │   └── zh/
│   │       ├── common.json
│   │       ├── home.json
│   │       ├── services.json
│   │       ├── caseStudies.json
│   │       ├── about.json
│   │       └── contact.json
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## 8. Development Phases

### Phase 1: Foundation Setup (Week 1)

**Tasks:**
1. Initialize Vite + React + TypeScript project
2. Install and configure dependencies:
   - Tailwind CSS + shadcn/ui
   - TanStack Router
   - TanStack Query
   - i18next
   - React Hook Form + Zod
   - Framer Motion
3. Set up project structure (folders and files)
4. Configure TypeScript strict mode
5. Set up ESLint + Prettier
6. Create environment variables template

**Deliverables:**
- ✅ Project scaffolding complete
- ✅ All dependencies installed and configured
- ✅ Dev server running
- ✅ Build process working

---

### Phase 2: Component Library (Week 2)

**Tasks:**
1. **Base UI Components:**
   - Button (with variants)
   - Input, Textarea
   - Card
   - Container, Section
   - Spinner, Error message

2. **Layout Components:**
   - MainLayout
   - Header (with navigation)
   - Footer
   - LanguageToggle

3. **Card Components:**
   - ServiceCard (small and large)
   - CaseStudyCard
   - FeatureCard

4. **Section Components:**
   - HeroSection
   - BreadcrumbBar

**Deliverables:**
- ✅ Storybook setup (optional)
- ✅ All base components implemented
- ✅ Component documentation
- ✅ Unit tests for critical components

---

### Phase 3: i18n & API Integration (Week 2-3)

**Tasks:**
1. Set up i18next with EN/中文 translations
2. Create translation files for all pages
3. Generate API client from backend OpenAPI spec
4. Create custom hooks for data fetching:
   - useServices
   - useCaseStudies
   - useAboutUs
   - useContactForm
5. Set up TanStack Query with proper caching

**Deliverables:**
- ✅ Language switching working
- ✅ All translation keys defined
- ✅ API client generated and tested
- ✅ Data fetching hooks implemented

---

### Phase 4: Page Implementation - Main Pages (Week 3-4)

**Tasks:**
1. **Home Page:**
   - Hero section
   - Features section
   - Services preview
   - Case studies preview
   - CTA section

2. **Services Page:**
   - Page hero
   - Services grid
   - Service details

3. **About Us Page:**
   - Company hero
   - Story section
   - Team section
   - Values section

4. **Contact Page:**
   - Contact form with validation
   - Contact information
   - Form submission logic

**Deliverables:**
- ✅ All main pages functional
- ✅ Navigation between pages working
- ✅ Responsive layouts
- ✅ Content loading from API

---

### Phase 5: Page Implementation - Case Studies (Week 4)

**Tasks:**
1. **Case Studies Overview Page:**
   - Hero section
   - Filter/search functionality
   - Case study grid
   - Pagination

2. **Case Study Detail Template:**
   - Reusable template component
   - Dynamic routing
   - Content sections
   - Related case studies
   - Implement all 4 case study pages using template

**Deliverables:**
- ✅ Case studies listing page
- ✅ Case study detail template
- ✅ All 4 case study pages working
- ✅ Dynamic routing functional

---

### Phase 6: Animations & Interactions (Week 5)

**Tasks:**
1. Page transition animations
2. Scroll-triggered animations
3. Hover effects on cards
4. Button interactions
5. Form validation animations
6. Loading states

**Deliverables:**
- ✅ Smooth page transitions
- ✅ Engaging scroll animations
- ✅ Polished user interactions
- ✅ Loading states everywhere

---

### Phase 7: Responsive Design (Week 5-6)

**Tasks:**
1. Implement responsive breakpoints:
   - Mobile: 320px - 767px
   - Tablet: 768px - 1023px
   - Desktop: 1024px - 1920px
2. Responsive navigation (hamburger menu)
3. Responsive grids and layouts
4. Mobile-optimized forms
5. Touch interactions
6. Cross-browser testing

**Deliverables:**
- ✅ Fully responsive on all devices
- ✅ Mobile navigation working
- ✅ Touch-friendly interactions
- ✅ Cross-browser compatibility

---

### Phase 8: Optimization & Polish (Week 6)

**Tasks:**
1. **Performance:**
   - Code splitting
   - Lazy loading images
   - Route-based code splitting
   - Bundle size optimization

2. **SEO:**
   - Meta tags
   - Open Graph tags
   - Sitemap
   - robots.txt

3. **Accessibility:**
   - ARIA labels
   - Keyboard navigation
   - Screen reader testing
   - Color contrast checks

4. **Testing:**
   - Unit tests
   - Integration tests
   - E2E tests (Playwright)

**Deliverables:**
- ✅ Lighthouse score > 90
- ✅ Accessibility score > 95
- ✅ All tests passing
- ✅ SEO optimized

---

### Phase 9: Deployment Preparation (Week 7)

**Tasks:**
1. Environment configuration (prod, staging)
2. CI/CD pipeline setup
3. Error tracking (Sentry)
4. Analytics setup (GA4)
5. Final QA testing
6. Documentation

**Deliverables:**
- ✅ Production build ready
- ✅ Deployment pipeline configured
- ✅ Monitoring setup
- ✅ Documentation complete

---

## 9. Implementation Guidelines

### 9.1. Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `ServiceCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useServices.ts`)

**Code:**
- Variables: `camelCase`
- Functions: `camelCase`
- Components: `PascalCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Interfaces/Types: `PascalCase`

### 9.2. Component Structure Template

```typescript
// ServiceCard.tsx
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  image: string
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  link: string
  size?: 'small' | 'large'
}

export const ServiceCard = ({
  image,
  title,
  titleZh,
  description,
  descriptionZh,
  link,
  size = 'small',
}: ServiceCardProps) => {
  const { i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <motion.div
      className={`service-card ${size === 'large' ? 'w-[940px] h-[600px]' : 'w-[413px] h-[240px]'}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img src={image} alt={isZh ? titleZh : title} />
      <h3>{isZh ? titleZh : title}</h3>
      <p>{isZh ? descriptionZh : description}</p>
      <a href={link}>Learn More</a>
    </motion.div>
  )
}
```

### 9.3. Custom Hook Template

```typescript
// useServices.ts
import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@/lib/api'
import type { Service } from '@/types/service'

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async (): Promise<Service[]> => {
      const response = await ApiService.getServices()
      return response.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useService = (id: string) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: async (): Promise<Service> => {
      const response = await ApiService.getServiceById(id)
      return response.data
    },
    enabled: !!id,
  })
}
```

### 9.4. Page Component Template

```typescript
// ServicesPage.tsx
import { useTranslation } from 'react-i18next'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { useServices } from '@/hooks/useServices'
import { Spinner } from '@/components/ui/Spinner'
import { ErrorMessage } from '@/components/ui/ErrorMessage'

export const ServicesPage = () => {
  const { t } = useTranslation('services')
  const { data: services, isLoading, error } = useServices()

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage error={error} />

  return (
    <MainLayout>
      <HeroSection
        backgroundImage="/images/services-hero.jpg"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        height="medium"
      />

      <section className="services-grid py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services?.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                titleZh={service.titleZh}
                description={service.description}
                descriptionZh={service.descriptionZh}
                link={`/services/${service.id}`}
                size="large"
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
```

### 9.5. Form Handling Template

```typescript
// ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { ApiService } from '@/lib/api'
import { useTranslation } from 'react-i18next'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const { t } = useTranslation('contact')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => ApiService.submitContact(data),
    onSuccess: () => {
      // Show success message
      reset()
    },
  })

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name">{t('form.name')}</label>
        <input {...register('name')} id="name" />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">{t('form.email')}</label>
        <input {...register('email')} id="email" type="email" />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="subject">{t('form.subject')}</label>
        <input {...register('subject')} id="subject" />
        {errors.subject && <span className="error">{errors.subject.message}</span>}
      </div>

      <div>
        <label htmlFor="message">{t('form.message')}</label>
        <textarea {...register('message')} id="message" rows={5} />
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? t('form.sending') : t('form.submit')}
      </button>
    </form>
  )
}
```

---

## 10. Responsive Design Strategy

### 10.1. Breakpoint System

```css
/* tailwind.config.ts */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet portrait
      'lg': '1024px',  // Tablet landscape / small desktop
      'xl': '1280px',  // Desktop
      '2xl': '1920px', // Large desktop (design width)
    },
  },
}
```

### 10.2. Responsive Component Examples

#### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Cards */}
</div>
```

#### Responsive Typography
```typescript
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  {title}
</h1>
```

#### Responsive Spacing
```typescript
<section className="py-8 md:py-12 lg:py-16 xl:py-20">
  {/* Content */}
</section>
```

### 10.3. Mobile-First Approach

**Strategy:** Design mobile first, then enhance for larger screens

**Benefits:**
- Better performance on mobile
- Forces prioritization of content
- Easier to scale up than down

---

## 11. Performance Optimization

### 11.1. Code Splitting

**Route-based splitting:**
```typescript
// App.tsx
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
// ... other pages

<Suspense fallback={<Spinner />}>
  <Routes />
</Suspense>
```

### 11.2. Image Optimization

**Strategies:**
- Use WebP format with PNG/JPG fallback
- Responsive images with `srcset`
- Lazy load images below the fold
- Compress images (TinyPNG, ImageOptim)

```typescript
<img
  src="/images/hero.webp"
  srcSet="/images/hero-sm.webp 640w, /images/hero-md.webp 1024w, /images/hero-lg.webp 1920w"
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
  alt="Hero image"
  loading="lazy"
/>
```

### 11.3. Bundle Size Optimization

**Techniques:**
- Tree shaking (automatic with Vite)
- Remove unused dependencies
- Use lighter alternatives (e.g., date-fns vs moment.js)
- Analyze bundle with `vite-bundle-visualizer`

### 11.4. Caching Strategy

**TanStack Query caching:**
- `staleTime`: 5 minutes (data considered fresh)
- `cacheTime`: 10 minutes (data kept in cache)
- Automatic background refetching

---

## 12. Testing Strategy

### 12.1. Unit Testing (Vitest)

**What to test:**
- Utility functions
- Custom hooks
- Component logic

**Example:**
```typescript
// formatDate.test.ts
import { describe, it, expect } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats date correctly', () => {
    expect(formatDate('2025-01-15')).toBe('Jan 15, 2025')
  })
})
```

### 12.2. Component Testing (React Testing Library)

**Example:**
```typescript
// ServiceCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ServiceCard } from './ServiceCard'

test('renders service card with title', () => {
  render(
    <ServiceCard
      title="AI Solutions"
      titleZh="AI 解决方案"
      description="Desc"
      descriptionZh="描述"
      image="/test.jpg"
      link="/services/ai"
    />
  )
  expect(screen.getByText('AI Solutions')).toBeInTheDocument()
})
```

### 12.3. E2E Testing (Playwright)

**Critical user flows:**
- Navigation through all pages
- Contact form submission
- Language switching
- Case study filtering

**Example:**
```typescript
// contact-form.spec.ts
import { test, expect } from '@playwright/test'

test('submit contact form', async ({ page }) => {
  await page.goto('/contact')
  await page.fill('[name="name"]', 'John Doe')
  await page.fill('[name="email"]', 'john@example.com')
  await page.fill('[name="subject"]', 'Inquiry')
  await page.fill('[name="message"]', 'Test message')
  await page.click('button[type="submit"]')
  await expect(page.locator('.success-message')).toBeVisible()
})
```

---

## Summary & Next Steps

### Design Analysis Complete ✅
- 9 pages analyzed in detail
- 932 components identified and categorized
- Common patterns and reusable components documented
- Page structures mapped

### Frontend Architecture Defined ✅
- Component-based architecture with feature folders
- Technology stack selected (React + Vite + TypeScript + Tailwind)
- State management strategy (TanStack Query + React Context)
- Routing approach (TanStack Router)

### Development Plan Created ✅
- 9-phase development roadmap (7 weeks)
- Component library designed
- File structure defined
- Implementation guidelines provided

---

## Immediate Next Steps

1. **Review this plan** with the development team
2. **Confirm technology choices** (Vite vs Next.js, Chakra UI vs Tailwind only)
3. **Set up development environment** (Phase 1)
4. **Begin component library implementation** (Phase 2)
5. **Coordinate with backend team** for API integration

---

**Document prepared by:** Claude Code
**Analysis based on:** Figma file "官网" (File ID: ZE7q1M5LefhOKYdxu297ZU)
**Adherence to:** CLAUDE.md standards and best practices
