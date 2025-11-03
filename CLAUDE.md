# CLAUDE.md - KAMFU Tech Website Development Guide

This file provides comprehensive guidance to Claude Code when working with this repository.

---

## PROJECT OVERVIEW

**Project Name:** KAMFU Tech Website
**Type:** Full-Stack Web Application
**Industry:** AI & Technology Solutions
**Purpose:** Corporate website showcasing services, case studies, and contact capabilities

### Technology Stack

#### Frontend
- **Framework:** React 18 + Vite (or Next.js 15)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Chakra UI / Tailwind CSS + shadcn/ui
- **State Management:** TanStack Query (React Query)
- **Routing:** TanStack Router / React Router v6
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion / Aceternity UI
- **Internationalization:** i18next (EN/中文)

#### Backend
- **Framework:** FastAPI (Python 3.11+)
- **Database:** PostgreSQL 15 (Production) / SQLite (Development)
- **ORM:** SQLAlchemy 2.0 with Async Support
- **Migrations:** Alembic
- **Email Service:** SendGrid / Resend / SMTP
- **File Storage:** Local / S3-compatible
- **API Documentation:** OpenAPI (Auto-generated)

---

## PROJECT STRUCTURE

```
webpage/
├── frontend/                  # Frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # Header, Footer, Layout (PascalCase)
│   │   │   ├── sections/     # Page sections (PascalCase)
│   │   │   └── ui/           # Reusable UI components (PascalCase)
│   │   ├── lib/              # API client, utilities (camelCase)
│   │   ├── hooks/            # Custom React hooks (camelCase with 'use')
│   │   ├── pages/            # Page components (PascalCase)
│   │   ├── types/            # TypeScript types
│   │   ├── constants/        # Constants (camelCase files)
│   │   └── utils/            # Utility functions (camelCase)
│   ├── package.json
│   └── vite.config.ts / next.config.ts
│
├── backend/                   # Backend application
│   ├── app/
│   │   ├── api/
│   │   │   ├── deps.py       # Dependencies (snake_case)
│   │   │   └── v1/
│   │   │       ├── router.py
│   │   │       └── endpoints/  # API endpoints (snake_case)
│   │   │           ├── services.py
│   │   │           ├── case_studies.py
│   │   │           ├── contact.py
│   │   │           ├── about.py
│   │   │           └── health.py
│   │   ├── core/
│   │   │   ├── config.py      # Settings (snake_case)
│   │   │   ├── security.py
│   │   │   └── logging.py
│   │   ├── db/
│   │   │   ├── session.py     # Database session
│   │   │   └── init_db.py
│   │   ├── models/            # SQLAlchemy models (snake_case files, PascalCase classes)
│   │   │   ├── service.py
│   │   │   ├── case_study.py
│   │   │   └── contact.py
│   │   ├── schemas/           # Pydantic schemas (snake_case files, PascalCase classes)
│   │   │   ├── service.py
│   │   │   └── contact.py
│   │   ├── services/          # Business logic (snake_case)
│   │   │   ├── email_service.py
│   │   │   └── storage_service.py
│   │   └── utils/             # Utilities (snake_case)
│   ├── alembic/               # Database migrations
│   ├── tests/                 # Test files
│   ├── requirements.txt
│   └── main.py
│
├── ui ux designs/             # Design files
├── instruction/               # Development instructions
└── CLAUDE.md                  # This file
```

---

## CODING STANDARDS & CONVENTIONS

### Frontend Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Component Files | PascalCase | `Header.tsx`, `ContactForm.tsx` |
| Utility Files | camelCase | `apiClient.ts`, `formatDate.ts` |
| Hook Files | camelCase (use prefix) | `useAuth.ts`, `useServices.ts` |
| Types/Interfaces | PascalCase | `User`, `ServiceResponse` |
| Variables | camelCase | `isLoading`, `userData` |
| Functions | camelCase | `handleSubmit`, `fetchData` |
| Constants | SCREAMING_SNAKE_CASE | `API_BASE_URL`, `MAX_SIZE` |
| CSS Classes | kebab-case | `flex items-center` |

**Examples:**

```typescript
// ✅ CORRECT - Frontend
// Files
components/layout/Header.tsx
lib/apiClient.ts
hooks/useServices.ts
utils/formatDate.ts

// Code
const userData = fetchUserData()
const isLoading = true
const API_BASE_URL = 'https://api.example.com'

interface User {
  id: string
  name: string
}

// ❌ INCORRECT - Frontend
components/header.tsx         // Wrong: should be PascalCase
lib/api-client.ts            // Wrong: should be camelCase
hooks/use-services.ts        // Wrong: should be camelCase
const UserData = fetch()     // Wrong: should be camelCase
interface IUser {}           // Wrong: no 'I' prefix
```

### Backend Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Files | snake_case | `main.py`, `email_service.py` |
| Folders | snake_case | `models`, `schemas`, `api` |
| Functions | snake_case | `get_services()`, `create_contact()` |
| Variables | snake_case | `user_data`, `is_active` |
| Classes | PascalCase | `Service`, `ContactForm` |
| Constants | SCREAMING_SNAKE_CASE | `DATABASE_URL`, `MAX_SIZE` |
| Database Tables | snake_case | `services`, `case_studies` |
| Database Columns | snake_case | `created_at`, `is_published` |
| API Endpoints | kebab-case | `/api/v1/case-studies` |
| Environment Variables | SCREAMING_SNAKE_CASE | `DATABASE_URL` |

**Examples:**

```python
# ✅ CORRECT - Backend
# Files
app/services/email_service.py
app/models/case_study.py
app/api/v1/endpoints/contact.py

# Code
def get_services():
    pass

user_data = {}
is_active = True
DATABASE_URL = "postgresql://..."

class Service:
    pass

# ❌ INCORRECT - Backend
app/services/EmailService.py  # Wrong: should be snake_case
def GetServices():           # Wrong: should be snake_case
UserData = {}               # Wrong: should be snake_case
```

---

## FRONTEND DEVELOPMENT GUIDE

### Key Principles

1. **Use TanStack Query for ALL Server State**
   - Never use useState for server data
   - Leverage caching, refetching, and mutations
   - Auto-generated API client from backend OpenAPI spec

2. **Component Structure**
   ```typescript
   // Example: components/sections/ServicesSection.tsx
   import { useServices } from '@/hooks/useServices'

   export const ServicesSection = () => {
     const { data: services, isLoading, error } = useServices()

     if (isLoading) return <Spinner />
     if (error) return <ErrorMessage />

     return (
       <section>
         {services?.map(service => (
           <ServiceCard key={service.id} service={service} />
         ))}
       </section>
     )
   }
   ```

3. **Custom Hooks Pattern**
   ```typescript
   // hooks/useServices.ts
   import { useQuery } from '@tanstack/react-query'
   import { ApiService } from '@/lib/api'

   export const useServices = () => {
     return useQuery({
       queryKey: ['services'],
       queryFn: () => ApiService.getServices(),
     })
   }
   ```

4. **Form Handling**
   ```typescript
   // Always use React Hook Form + Zod
   import { useForm } from 'react-hook-form'
   import { zodResolver } from '@hookform/resolvers/zod'
   import { z } from 'zod'

   const contactSchema = z.object({
     name: z.string().min(2),
     email: z.string().email(),
     message: z.string().min(10),
   })

   type ContactFormData = z.infer<typeof contactSchema>

   const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
     resolver: zodResolver(contactSchema),
   })
   ```

5. **Internationalization**
   ```typescript
   import { useTranslation } from 'react-i18next'

   const { t, i18n } = useTranslation()

   // Usage
   <h1>{t('Welcome')}</h1>
   <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
   ```

### Critical Frontend Rules

**NEVER:**
- Use `any` type in TypeScript
- Skip error handling in async functions
- Mix naming conventions (stick to camelCase for files)
- Use `<img>` instead of optimized images
- Skip accessibility attributes
- Forget to invalidate queries after mutations

**ALWAYS:**
- Use TypeScript strict mode
- Generate API client from OpenAPI spec
- Use TanStack Query for all server state
- Implement proper loading/error states
- Use React Hook Form + Zod for forms
- Follow the camelCase naming convention
- Optimize images and code split

---

## BACKEND DEVELOPMENT GUIDE

### Key Principles

1. **API Structure**
   ```python
   # app/api/v1/endpoints/services.py
   from fastapi import APIRouter, Depends
   from sqlalchemy.ext.asyncio import AsyncSession

   router = APIRouter()

   @router.get("/", response_model=ApiResponse[PaginatedResponse[ServiceResponse]])
   async def get_services(
       db: AsyncSession = Depends(get_db),
       skip: int = 0,
       limit: int = 100,
       lang: str = "en"
   ):
       # Implementation
       pass
   ```

2. **Database Models**
   ```python
   # app/models/service.py
   from sqlalchemy import Column, String, Text
   from app.db.session import Base
   from app.models.base import BaseModel

   class Service(Base, BaseModel):
       __tablename__ = "services"

       title = Column(String(255), nullable=False)
       title_zh = Column(String(255), nullable=False)
       description = Column(Text, nullable=False)
       description_zh = Column(Text, nullable=False)
   ```

3. **Pydantic Schemas**
   ```python
   # app/schemas/service.py
   from pydantic import BaseModel, Field

   class ServiceCreate(BaseModel):
       title: str = Field(..., min_length=2)
       title_zh: str = Field(..., min_length=2)
       description: str
       description_zh: str

   class ServiceResponse(BaseModel):
       id: UUID
       title: str
       description: str

       model_config = {"from_attributes": True}
   ```

4. **Email Service**
   ```python
   # app/services/email_service.py
   async def send_contact_notification(
       name: str,
       email: str,
       message: str
   ) -> bool:
       # Send notification to admin
       pass

   async def send_contact_confirmation(
       name: str,
       email: str
   ) -> bool:
       # Send confirmation to user
       pass
   ```

5. **Background Tasks**
   ```python
   from fastapi import BackgroundTasks

   @router.post("/contact")
   async def create_contact(
       data: ContactCreate,
       background_tasks: BackgroundTasks,
       db: AsyncSession = Depends(get_db)
   ):
       # Create contact
       contact = Contact(**data.model_dump())
       db.add(contact)
       await db.commit()

       # Send emails in background
       background_tasks.add_task(send_contact_notification, data.name, data.email, data.message)
       background_tasks.add_task(send_contact_confirmation, data.name, data.email)

       return ApiResponse(data=contact, message="Success")
   ```

### Critical Backend Rules

**NEVER:**
- Use synchronous DB operations (always use async)
- Skip input validation
- Expose internal errors to clients
- Store sensitive data in logs
- Use string formatting for SQL queries
- Skip database migrations

**ALWAYS:**
- Use snake_case for all Python files and functions
- Use async/await for all DB operations
- Validate all inputs with Pydantic
- Use environment variables for config
- Implement proper error handling
- Log all errors with structured logging
- Use BackgroundTasks for email sending
- Follow the snake_case naming convention

---

## API INTEGRATION

### Frontend consumes Backend API

1. **Auto-generate API Client**
   ```bash
   # After backend OpenAPI is available
   npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/lib/api --client axios
   ```

2. **Use Generated Client**
   ```typescript
   import { ApiService } from '@/lib/api'

   // All API methods are type-safe
   const services = await ApiService.getServices()
   const contact = await ApiService.submitContact(formData)
   ```

3. **API Endpoints**
   - `GET /api/v1/services` - List all services
   - `GET /api/v1/services/{id}` - Get service by ID
   - `GET /api/v1/case-studies` - List all case studies
   - `GET /api/v1/case-studies/{id}` - Get case study by ID
   - `POST /api/v1/contact` - Submit contact form
   - `GET /api/v1/about` - Get company information
   - `GET /api/v1/health` - Health check

---

## MULTILINGUAL SUPPORT (EN/中文)

### Frontend
- Use i18next for translations
- All static text must be translatable
- Store translations in `locales/en.json` and `locales/zh.json`

### Backend
- Store both English and Chinese versions in database
- Models have `field` and `field_zh` columns
- API accepts `lang` query parameter
- Return appropriate language based on `lang` parameter

---

## DEVELOPMENT WORKFLOW

### Git Commit Standards

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code restructuring
test:     Adding tests
chore:    Maintenance

# Examples:
feat(contact): add email validation
fix(header): resolve mobile menu bug
docs(readme): update installation steps
test(contact): add form validation tests
```

### Testing

**Frontend:**
```bash
npm run test        # Unit tests with Vitest
npm run test:e2e    # E2E tests with Playwright
```

**Backend:**
```bash
pytest                    # All tests
pytest tests/api/         # API tests only
pytest --cov=app         # With coverage
```

---

## ENVIRONMENT CONFIGURATION

### Frontend (.env)
```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=KAMFU Tech
```

### Backend (.env)
```bash
# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/kamfu_db

# Email
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=your_key
CONTACT_EMAIL=contact@kamfu.com
ADMIN_EMAIL=admin@kamfu.com

# CORS
BACKEND_CORS_ORIGINS=["http://localhost:3000","http://localhost:5173"]
```

---

## DEPLOYMENT CHECKLIST

### Frontend
- [ ] TypeScript compilation successful (no errors)
- [ ] All tests passing (unit + E2E)
- [ ] API client generated from backend OpenAPI
- [ ] Environment variables configured
- [ ] Responsive on mobile/tablet/desktop
- [ ] Multi-language (EN/中文) working
- [ ] Performance optimized (Lighthouse > 90)
- [ ] SEO meta tags added

### Backend
- [ ] All tests passing
- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] OpenAPI documentation accessible
- [ ] Email service tested
- [ ] File upload tested
- [ ] Error tracking configured (Sentry)
- [ ] CORS configured correctly

---

## CRITICAL REMINDERS

### For Claude Code Developers

When implementing features:

1. **Always check naming conventions first**
   - Frontend: camelCase for files (except components)
   - Backend: snake_case for everything (except classes)

2. **Use the right tools**
   - Frontend data fetching: TanStack Query, not useState
   - Frontend forms: React Hook Form + Zod
   - Frontend animations: Framer Motion
   - Backend: FastAPI with async/await

3. **Don't reinvent the wheel**
   - Use auto-generated API client from OpenAPI
   - Leverage existing UI component libraries
   - Use established patterns from the instructions

4. **Test as you go**
   - Write tests alongside features
   - Test both happy paths and error cases
   - Test multilingual support

5. **Document your code**
   - Add JSDoc/docstrings
   - Update API documentation
   - Keep README up to date

---

## SUPPORT & RESOURCES

- **Frontend Instructions:** `/instruction/complete_frontend_instructions.txt`
- **Backend Instructions:** `/instruction/complete_backend_instructions.txt`
- **UI/UX Designs:** `/ui ux designs/designs/`
- **API Documentation:** `http://localhost:8000/api/v1/docs` (when backend is running)

---

**This document is based on industry-standard practices from:**
- FastAPI Full-Stack Template (38.3K⭐ GitHub stars)
- Modern React/TypeScript best practices
- Production-tested patterns for full-stack development

**Last Updated:** 2025-10-17
