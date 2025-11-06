# KAMFU Tech Website - Page Structures Quick Reference

**Visual hierarchy guide for all 9 pages**

---

## Page 1: Home (1920×4510px)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Navigation Bar)                                     │
│ Logo | Home | Services | Case Studies | About | Contact | EN/中 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          HERO SECTION (1920×506px)                          │
│          Background Shape + Hero Content                    │
│          • Main headline                                    │
│          • Subheading                                       │
│          • CTA Button (206×38)                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          INTRO SECTION (1920×305px)                         │
│          Company introduction text                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  FEATURE CARD 1  │  │  FEATURE CARD 2  │  │  FEATURE CARD 3  │
│   (413×240)      │  │   (413×240)      │  │   (413×240)      │
│   Icon           │  │   Icon           │  │   Icon           │
│   Title          │  │   Title          │  │   Title          │
│   Description    │  │   Description    │  │   Description    │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          SERVICES PREVIEW (2011×824px)                      │
│          Large background image                             │
│          + Service highlights overlay                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          CASE STUDIES PREVIEW                               │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Case 1  │  │  Case 2  │  │  Case 3  │  │  Case 4  │   │
│  │ (413×164)│  │ (413×164)│  │ (413×164)│  │ (413×164)│   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          TESTIMONIALS / PARTNERS SECTION                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          CALL TO ACTION SECTION                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER (82px height)                                        │
│ Company Info | Quick Links | Social | Newsletter           │
└─────────────────────────────────────────────────────────────┘
```

**Complexity:** HIGH (56 children)
**Key Sections:** 7-8 major sections

---

## Page 2: Services (1920×3165px)

### Hierarchical Structure: Sections → Main-Containers → Containers → Components

```
┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HEADER                                            │
│   [MAIN-CONTAINER] Navigation Bar                           │
│     [CONTAINER] Logo Container                              │
│       [COMPONENT] KAMFU Logo + Text                         │
│     [CONTAINER] Navigation Menu                             │
│       [COMPONENT] NavLink: Home                             │
│       [COMPONENT] NavLink: Services (active)                │
│       [COMPONENT] NavLink: Case Studies                     │
│       [COMPONENT] NavLink: About Us                         │
│       [COMPONENT] NavLink: Contact                          │
│     [CONTAINER] Right Actions                               │
│       [COMPONENT] Language Toggle: EN / 中文                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HERO SECTION                                      │
│   [MAIN-CONTAINER] Hero Content (1920×1181px)               │
│     [CONTAINER] Background Image                            │
│       [COMPONENT] Business handshake photo (full-width)     │
│     [CONTAINER] Hero Text Overlay                           │
│       [COMPONENT] Title: "OUR SERVICES" (large white text)  │
│       [COMPONENT] Subtitle: "COMPREHENSIVE AI AND           │
│                  TECHNOLOGY SOLUTIONS FOR DIGITAL           │
│                  TRANSFORMATION" (white text)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] SERVICES GRID SECTION                             │
│   [MAIN-CONTAINER] Services Grid (2 columns × 3 rows)       │
│                                                             │
│     [CONTAINER] Service Card 1 (Blue background)            │
│       [COMPONENT] Title: "Customized AI System Development" │
│       [COMPONENT] Description: "Design and develop custom   │
│                  AI systems including intelligent agents,   │
│                  chatbots, and automated decision-making    │
│                  systems tailored to your specific industry │
│                  needs"                                     │
│                                                             │
│     [CONTAINER] Service Card 2 (Blue background)            │
│       [COMPONENT] Title: "Data Analytics & Knowledge Base"  │
│       [COMPONENT] Description: "Transform your existing     │
│                  business data into structured knowledge    │
│                  bases that AI models and agents can utilize│
│                  for intelligent insights and decision      │
│                  support"                                   │
│                                                             │
│     [CONTAINER] Service Card 3 (Blue background)            │
│       [COMPONENT] Title: "System Integration"               │
│       [COMPONENT] Description: "Seamlessly integrate AI     │
│                  tools and capabilities into your existing  │
│                  business systems, ensuring smooth workflow │
│                  automation and enhanced operational        │
│                  efficiency"                                │
│                                                             │
│     [CONTAINER] Service Card 4 (Blue background)            │
│       [COMPONENT] Title: "Custom System Development"        │
│       [COMPONENT] Description: "Full-stack development      │
│                  services building enterprise-grade         │
│                  applications from scratch, including       │
│                  backend infrastructures, APIs and clear    │
│                  user interfaces"                           │
│                                                             │
│     [CONTAINER] Service Card 5 (Blue background)            │
│       [COMPONENT] Title: "Web & Mobile Development"         │
│       [COMPONENT] Description: "Create responsive web       │
│                  applications and native mobile apps with   │
│                  modern frameworks, ensuring optimal        │
│                  performance across all devices and         │
│                  platforms"                                 │
│                                                             │
│     [CONTAINER] Service Card 6 (Blue background)            │
│       [COMPONENT] Title: "Data Governance & Security"       │
│       [COMPONENT] Description: "Implement comprehensive     │
│                  data management strategies, compliance     │
│                  frameworks, and security protocols to      │
│                  protect your digital assets"               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] DEVELOPMENT PROCESS SECTION                       │
│   [MAIN-CONTAINER] Process Content                          │
│     [CONTAINER] Section Header                              │
│       [COMPONENT] Background Image: Modern architecture     │
│       [COMPONENT] Title: "OUR DEVELOPMENT PROCESS"          │
│                  (large brown/gold text)                    │
│                                                             │
│   [MAIN-CONTAINER] Process Steps Grid (2 columns × 3 rows)  │
│                                                             │
│     [CONTAINER] Process Step 1                              │
│       [COMPONENT] Title: "Discovery & Analysis"             │
│                  (orange/yellow text)                       │
│       [COMPONENT] Description: "Implement comprehensive     │
│                  data management strategies, compliance     │
│                  frameworks, and security protocols to      │
│                  protect your digital assets"               │
│                                                             │
│     [CONTAINER] Process Step 2                              │
│       [COMPONENT] Title: "Proof of Concept"                 │
│                  (orange/yellow text)                       │
│       [COMPONENT] Description: "Rapid prototyping and POC   │
│                  development to validate feasibility and    │
│                  demonstrate value"                         │
│                                                             │
│     [CONTAINER] Process Step 3                              │
│       [COMPONENT] Title: "Agile Development"                │
│                  (orange/yellow text)                       │
│       [COMPONENT] Description: "Iterative development with  │
│                  regular feedback loops and flexible        │
│                  adaptation to changes"                     │
│                                                             │
│     [CONTAINER] Process Step 4                              │
│       [COMPONENT] Title: "Testing & QA" (orange/yellow text)│
│       [COMPONENT] Description: "Comprehensive testing       │
│                  including functionality, performance, and  │
│                  security validation"                       │
│                                                             │
│     [CONTAINER] Process Step 5                              │
│       [COMPONENT] Title: "Deployment" (orange/yellow text)  │
│       [COMPONENT] Description: "Seamless deployment with    │
│                  zero-downtime strategies and complete      │
│                  documentation"                             │
│                                                             │
│     [CONTAINER] Process Step 6                              │
│       [COMPONENT] Title: "Support & Optimization"           │
│                  (orange/yellow text)                       │
│       [COMPONENT] Description: "Ongoing maintenance,        │
│                  performance optimization, and continuous   │
│                  improvement"                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] FOOTER                                            │
│   [MAIN-CONTAINER] Footer Content (4 columns)               │
│     [CONTAINER] Company Column                              │
│       [COMPONENT] Heading: "Company" (blue text)            │
│       [COMPONENT] Link: "About Us"                          │
│       [COMPONENT] Link: "Case Studies"                      │
│     [CONTAINER] Services Column                             │
│       [COMPONENT] Heading: "Services" (blue text)           │
│       [COMPONENT] Link: "AI Development"                    │
│       [COMPONENT] Link: "Data Analytics"                    │
│       [COMPONENT] Link: "System Integration"                │
│       [COMPONENT] Link: "Custom Development"                │
│     [CONTAINER] Products Column                             │
│       [COMPONENT] Heading: "Products" (blue text)           │
│       [COMPONENT] Link: "AI Digital Human"                  │
│       [COMPONENT] Link: "Intelligent Q&A System"            │
│       [COMPONENT] Link: "Business Analysis"                 │
│       [COMPONENT] Link: "Manufacturing Solutions"           │
│     [CONTAINER] Connect Column                              │
│       [COMPONENT] Heading: "Connect" (blue text)            │
│       [COMPONENT] Link: "Contact Us"                        │
│       [COMPONENT] Link: "LinkedIn"                          │
│   [MAIN-CONTAINER] Footer Bottom Bar (Dark background)      │
│     [COMPONENT] Copyright: "© 2024 Amplify Tech. All rights │
│                 reserved."                                  │
│     [COMPONENT] Link: "Privacy Policy"                      │
│     [COMPONENT] Link: "Terms of Service"                    │
└─────────────────────────────────────────────────────────────┘
```

**Extracted Content:**
- **Services Count:** 6 services
- **Process Steps:** 6 steps
- **Color Scheme:** Blue cards for services, Orange/Yellow/Gold for process steps
- **Background Images:** Business meeting/handshake, Modern architecture

**Complexity:** MEDIUM (46 children)
**Key Sections:** 5 major sections

---

## Page 3: Case Studies Overview (1920×2033px)

### Hierarchical Structure: Sections → Main-Containers → Containers → Components

```
┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HEADER (Identical to Services page)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HERO SECTION                                      │
│   [MAIN-CONTAINER] Hero Content                             │
│     [CONTAINER] Hero Text                                   │
│       [COMPONENT] Title: "CASE STUDIES" (large blue text)   │
│       [COMPONENT] Subtitle: "COMPREHENSIVE AI AND           │
│                  TECHNOLOGY SOLUTIONS FOR DIGITAL           │
│                  TRANSFORMATION" (gray text)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] CASE STUDIES GRID SECTION                         │
│   [MAIN-CONTAINER] Case Studies Grid (2 columns × 2 rows)   │
│                                                             │
│     [CONTAINER] Case Study Card 1 (Light blue background)   │
│       [COMPONENT] Featured Image: Digital human on devices  │
│       [COMPONENT] Title: "AI Digital Human" (blue text)     │
│       [COMPONENT] Category: "Exhibition & Sales Solutions"  │
│       [COMPONENT] Description: "Interactive AI digital      │
│                  humans for product exhibitions and         │
│                  intelligent sales, replacing traditional   │
│                  human resources while providing 24/7       │
│                  service"                                   │
│                                                             │
│     [CONTAINER] Case Study Card 2 (Light blue background)   │
│       [COMPONENT] Featured Image: Laptop and phone mockups  │
│       [COMPONENT] Title: "Intelligent Q&A System"           │
│                  (blue text)                                │
│       [COMPONENT] Category: "Knowledge Management Platform" │
│       [COMPONENT] Description: "Customized knowledge base   │
│                  system providing high-accuracy answers for │
│                  business decisions and customer inquiries" │
│                                                             │
│     [CONTAINER] Case Study Card 3 (Light blue background)   │
│       [COMPONENT] Featured Image: Analytics dashboard       │
│                  on devices                                 │
│       [COMPONENT] Title: "Enterprise Business Analysis"     │
│                  (blue text)                                │
│       [COMPONENT] Category: "Business Intelligence Solution"│
│       [COMPONENT] Description: "Comprehensive analytics     │
│                  platform transforming complex business data│
│                  into actionable insights for strategic     │
│                  decision-making"                           │
│                                                             │
│     [CONTAINER] Case Study Card 4 (Light blue background)   │
│       [COMPONENT] Featured Image: Manufacturing facility    │
│                  with tech overlay                          │
│       [COMPONENT] Title: "Manufacturing Digitalization"     │
│                  (blue text)                                │
│       [COMPONENT] Category: "Industry 4.0 Solutions"        │
│       [COMPONENT] Description: "AI-powered solutions for    │
│                  manufacturing problems, providing          │
│                  automation and data-driven improvements"   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] FOOTER (Identical to Services page)               │
└─────────────────────────────────────────────────────────────┘
```

**Extracted Content:**
- **Case Studies Count:** 4 case studies
- **Layout:** 2×2 grid with large featured cards
- **Card Style:** Light blue/gray backgrounds with border, images, title, category, and description
- **Categories:** Exhibition & Sales, Knowledge Management, Business Intelligence, Industry 4.0

**Complexity:** MEDIUM (24 children)
**Key Sections:** 3 major sections

---

## Page 3.1: Case Study Detail - AI Digital Human (1920×2623px)

### Hierarchical Structure: Sections → Main-Containers → Containers → Components

```
┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HEADER (Identical to other pages)                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HERO SECTION                                      │
│   [MAIN-CONTAINER] Hero Content                             │
│     [CONTAINER] Hero Text                                   │
│       [COMPONENT] Title: "AI DIGITAL HUMAN SOLUTIONS"       │
│                  (large blue text)                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] DEMO VIDEO SECTION                                │
│   [MAIN-CONTAINER] Video Container (Large featured demo)    │
│     [CONTAINER] Video Player Frame (Rounded corners, border)│
│       [COMPONENT] Video: Digital human presenter in studio  │
│       [COMPONENT] Play button overlay                       │
│       [COMPONENT] Video controls bar                        │
│       [COMPONENT] KAMFU logo watermark                      │
│       [COMPONENT] Caption: "金融AI数字人" + Company name    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] EXHIBITION PRESENTER SUBSECTION                   │
│   [MAIN-CONTAINER] Section Header                           │
│     [COMPONENT] Title: "EXHIBITION PRESENTER" (bold blue)   │
│     [COMPONENT] Description: "INTERACTIVE AI DIGITAL HUMAN  │
│                PRESENTING PRODUCT VIDEOS, IMAGES, AND       │
│                DESCRIPTIONS FOR EXHIBITIONS" (gray text)    │
│                                                             │
│   [MAIN-CONTAINER] Features Grid (3 columns)                │
│                                                             │
│     [CONTAINER] Feature Card 1 (Blue background)            │
│       [COMPONENT] Device Mockup Image: Tablet showing UI    │
│       [COMPONENT] Title: "Interactive Presentation"         │
│       [COMPONENT] Description: "Engages visitors with       │
│                  natural conversation and dynamic product   │
│                  demonstrations"                            │
│                                                             │
│     [CONTAINER] Feature Card 2 (Blue background)            │
│       [COMPONENT] Device Mockup Image: Desktop monitor      │
│       [COMPONENT] Title: "Multi-Media Support"              │
│       [COMPONENT] Description: "Seamlessly presents videos, │
│                  images, and detailed product information"  │
│                                                             │
│     [CONTAINER] Feature Card 3 (Blue background)            │
│       [COMPONENT] Device Mockup Image: Kiosk display        │
│       [COMPONENT] Title: "24/7 Availability"                │
│       [COMPONENT] Description: "Never tired, always ready to│
│                  engage with exhibition visitors"           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] AI SALES PERSON SUBSECTION                        │
│   [MAIN-CONTAINER] Section Header                           │
│     [COMPONENT] Title: "AI SALES PERSON" (bold blue)        │
│     [COMPONENT] Description: "INTERACTIVE DIGITAL HUMAN FOR │
│                PRODUCT PRESENTATION AND INTELLIGENT SALES   │
│                AUTOMATION" (gray text)                      │
│                                                             │
│   [MAIN-CONTAINER] Features Grid (3 columns)                │
│                                                             │
│     [CONTAINER] Feature Card 1 (Orange background)          │
│       [COMPONENT] Title: "Smart Sales Conversations"        │
│       [COMPONENT] Description: "Understands customer needs  │
│                  and adapts sales pitch with context-aware  │
│                  recommendations and sales negotiations"    │
│                                                             │
│     [CONTAINER] Feature Card 2 (Orange background)          │
│       [COMPONENT] Title: "Personalized Experience"          │
│       [COMPONENT] Description: "Offers personalized product │
│                  recommendations and tailored customer      │
│                  experiences and services"                  │
│                                                             │
│     [CONTAINER] Feature Card 3 (Orange background)          │
│       [COMPONENT] Title: "Performance Analytics"            │
│       [COMPONENT] Description: "Tracks sales conversations  │
│                  and customer insights for continuous       │
│                  improvement"                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] FOOTER (Identical to other pages)                 │
└─────────────────────────────────────────────────────────────┘
```

**Extracted Content:**
- **Use Cases:** 2 major use cases (Exhibition Presenter, AI Sales Person)
- **Features Per Use Case:** 3 features each (6 total)
- **Color Coding:** Blue cards for exhibition features, Orange cards for sales features
- **Media:** Large featured video demo + device mockup images for each feature

**Complexity:** MEDIUM (40 children)
**Key Sections:** 5 major sections

**Note:** Other case study detail pages (3.2-3.4) follow similar structure with variations:
- 3.2. Intelligent Q&A System: Video demo + 6 features (blue/orange)
- 3.3. Enterprise Business Analysis: Analytics demo + 6 features (blue/orange)
- 3.4. Manufacturing Digitalization: Robotic arm imagery + 6 features (blue/orange)

**Template Reuse:** ~85% of structure is identical, content and imagery differs

---

## Page 4: About Us (1920×1788px)

### Hierarchical Structure: Sections → Main-Containers → Containers → Components

```
┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HEADER (Identical to other pages)                 │
│   [COMPONENT] NavLink: About Us (active state)              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HERO SECTION                                      │
│   [MAIN-CONTAINER] Hero Content (Split layout)              │
│     [CONTAINER] Left Content Area                           │
│       [COMPONENT] Title: "ABOUT AMPLIFY TECH" (large blue)  │
│       [COMPONENT] Description: "Founded with a vision to    │
│                  democratize AI technology, Amplify Tech    │
│                  bridges the gap between cutting-edge AI    │
│                  research and practical business            │
│                  applications. With expertise spanning      │
│                  multiple industries, we deliver            │
│                  transformative AI solutions that drive real│
│                  business value" (gray text)                │
│     [CONTAINER] Right Content Area                          │
│       [COMPONENT] Hero Image: Modern glass building         │
│                  architecture                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] MISSION & VALUES SECTION                          │
│   [MAIN-CONTAINER] Values Grid (3 columns)                  │
│                                                             │
│     [CONTAINER] Value Card 1 (Blue background)              │
│       [COMPONENT] Title: "Our Mission"                      │
│       [COMPONENT] Description: "To empower businesses of all│
│                  sizes with accessible, customized AI       │
│                  solutions that drive growth and innovation │
│                  in the digital economy"                    │
│                                                             │
│     [CONTAINER] Value Card 2 (Gray background)              │
│       [COMPONENT] Title: "Multi-Media Support"              │
│       [COMPONENT] Description: "To be the trusted AI partner│
│                  for enterprises globally, known..."        │
│                  (text truncated in design)                 │
│                                                             │
│     [CONTAINER] Value Card 3 (Gray background)              │
│       [COMPONENT] Title: "24/7 Availability"                │
│       [COMPONENT] Description: "Innovation, integrity, and  │
│                  impact drive everything we do. We..."      │
│                  (text truncated in design)                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] EXPERTISE/STATS SECTION                           │
│   [MAIN-CONTAINER] Section Header                           │
│     [COMPONENT] Title: "OUR EXPERTISE" (center-aligned)     │
│                                                             │
│   [MAIN-CONTAINER] Stats Grid (4 columns, dark background)  │
│                                                             │
│     [CONTAINER] Stat Card 1                                 │
│       [COMPONENT] Number: "10+" (large white text)          │
│       [COMPONENT] Label: "Years Experience"                 │
│                                                             │
│     [CONTAINER] Stat Card 2                                 │
│       [COMPONENT] Number: "50+" (large white text)          │
│       [COMPONENT] Label: "Expert Team"                      │
│                                                             │
│     [CONTAINER] Stat Card 3                                 │
│       [COMPONENT] Number: "5+" (large white text)           │
│       [COMPONENT] Label: "Industry Verticals"               │
│                                                             │
│     [CONTAINER] Stat Card 4                                 │
│       [COMPONENT] Number: "24/7" (large white text)         │
│       [COMPONENT] Label: "Support"                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] FOOTER (Identical to other pages)                 │
└─────────────────────────────────────────────────────────────┘
```

**Extracted Content:**
- **Company Name:** "Amplify Tech" (from design)
- **Mission Focus:** Democratizing AI technology, bridging research and business
- **Stats:** 10+ years, 50+ experts, 5+ industries, 24/7 support
- **Visual Style:** Modern architecture imagery, blue primary color, dark stats section

**Complexity:** LOW (22 children)
**Key Sections:** 4 major sections

---

## Page 5: Contact (1920×1895px)

### Hierarchical Structure: Sections → Main-Containers → Containers → Components

```
┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HEADER (Identical to other pages)                 │
│   [COMPONENT] NavLink: Contact (active state)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] HERO SECTION                                      │
│   [MAIN-CONTAINER] Hero Content (Full-width with image)     │
│     [CONTAINER] Background Image                            │
│       [COMPONENT] Hero Image: Person with hands gesture     │
│                  (right-aligned)                            │
│     [CONTAINER] Hero Text Overlay (left-aligned)            │
│       [COMPONENT] Title: "GET IN TOUCH" (large blue text)   │
│       [COMPONENT] Subtitle: "Ready to transform your        │
│                  business with AI? Let's discuss your       │
│                  project" (dark text)                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] CONTACT CONTENT SECTION (2-column layout)         │
│   [MAIN-CONTAINER] Content Grid (Left: Info, Right: Form)   │
│                                                             │
│     [CONTAINER] Left Column: Contact Information            │
│       [COMPONENT] Section Title: "LET'S BUILD SOMETHING     │
│                  AMAZING TOGETHER" (blue text)              │
│       [COMPONENT] Description: "WHETHER YOU NEED A PROOF OF │
│                  CONCEPT, FULL-SCALE IMPLEMENTATION, OR     │
│                  STRATEGIC CONSULTATION, OUR TEAM IS READY  │
│                  TO HELP YOU SUCCEED" (gray text)           │
│                                                             │
│       [CONTAINER] Office Info Block                         │
│         [COMPONENT] Label: "AUSTRALIA OFFICE" (orange text) │
│         [COMPONENT] Address: "Melbourne, VIC"               │
│                                                             │
│       [CONTAINER] Email Info Block                          │
│         [COMPONENT] Label: "EMAIL" (orange text)            │
│         [COMPONENT] Email: "contact@amplifytech.com.au"     │
│         [COMPONENT] Email: "sales@amplifytech.com.au"       │
│                                                             │
│       [CONTAINER] Phone Info Block                          │
│         [COMPONENT] Label: "PHONE" (orange text)            │
│         [COMPONENT] Phone: "+61 3 9000 0000"                │
│                                                             │
│       [CONTAINER] Business Hours Block                      │
│         [COMPONENT] Label: "BUSINESS HOURS" (orange text)   │
│         [COMPONENT] Hours: "Monday - Friday: 9:00 AM -      │
│                    6:00 PM AEST"                            │
│         [COMPONENT] Note: "24/7 Support for Enterprise      │
│                    Clients"                                 │
│                                                             │
│     [CONTAINER] Right Column: Contact Form (Blue background)│
│       [COMPONENT] Form Title: "SEND US A MESSAGE"           │
│                  (white text)                               │
│                                                             │
│       [CONTAINER] Form Fields                               │
│         [COMPONENT] Input Field: "Your Name *" (required)   │
│         [COMPONENT] Input Field: "Email Address *"          │
│                    (required)                               │
│         [COMPONENT] Input Field: "Company"                  │
│         [COMPONENT] Input Field: "Phone Number"             │
│         [COMPONENT] Input Field: "Service Interested In"    │
│         [COMPONENT] Textarea Field: "How can we help you? *"│
│                    (required, multi-line)                   │
│                                                             │
│       [CONTAINER] Form Actions                              │
│         [COMPONENT] Submit Button: "SEND MESSAGE"           │
│                    (outlined white button)                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ [SECTION] FOOTER (Identical to other pages)                 │
└─────────────────────────────────────────────────────────────┘
```

**Extracted Content:**
- **Layout:** Asymmetric 2-column (Left: info, Right: form with blue background)
- **Office Location:** Australia (Melbourne, VIC)
- **Contact Emails:** contact@amplifytech.com.au, sales@amplifytech.com.au
- **Phone:** +61 3 9000 0000
- **Business Hours:** Mon-Fri 9AM-6PM AEST, 24/7 for enterprise
- **Form Fields:** 6 fields (3 required: name, email, message)
- **Visual Style:** Blue form background, orange section labels, person imagery

**Complexity:** LOW (28 children)
**Key Sections:** 3 major sections

---

## Component Reuse Matrix

| Component | Home | Services | Case Studies | Case Detail | About | Contact |
|-----------|------|----------|--------------|-------------|-------|---------|
| Header | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Footer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| HeroSection | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| BreadcrumbBar | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ServiceCard | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| CaseStudyCard | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| FeatureCard | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ |
| ContactForm | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Button (CTA) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Reuse Rate:** 60-70% of components are shared across pages

---

## Implementation Priority

### Phase 1: Core Components (Build First)
1. Header
2. Footer
3. HeroSection
4. BreadcrumbBar
5. Container/Section wrappers
6. Button

### Phase 2: Card Components
1. ServiceCard (small + large variants)
2. CaseStudyCard
3. FeatureCard

### Phase 3: Form Components
1. Input
2. Textarea
3. ContactForm

### Phase 4: Page Assembly
1. Home (uses most components - good test)
2. Services
3. Case Studies overview
4. Case Study detail template
5. About Us
6. Contact

---

## Quick Component Finder

**Need a card component?**
- Small card (413×240): FeatureCard
- Medium card (413×164): CaseStudyCard
- Large card (940×600): ServiceCard (large variant)

**Need a hero section?**
- Full-width hero: HeroSection (height variant)
- Contact hero (620px): HeroSection (height="medium")
- Case study hero (720px): HeroSection (height="large")

**Need a layout component?**
- Page wrapper: MainLayout
- Content centering: Container
- Section spacing: Section

---

## Development Checklist by Page

### ✅ Home
- [ ] Hero section (506px)
- [ ] Intro section (305px)
- [ ] Feature cards grid (4×)
- [ ] Services preview (large image)
- [ ] Case studies preview grid
- [ ] Testimonials
- [ ] CTA section

### ✅ Services
- [ ] Page hero (1181px)
- [ ] Breadcrumb
- [ ] Services grid (4× large cards)
- [ ] Features section

### ✅ Case Studies
- [ ] Page hero (720px)
- [ ] Breadcrumb
- [ ] Filter bar (optional)
- [ ] Case studies grid (4× medium cards)

### ✅ Case Study Detail (Template)
- [ ] Case study hero (720px)
- [ ] Breadcrumb
- [ ] Content section (Overview, Problem, Solution, Results)
- [ ] Related case studies grid

### ✅ About Us
- [ ] Company hero (272px)
- [ ] Breadcrumb
- [ ] Story section (824px)
- [ ] Team grid
- [ ] Values grid

### ✅ Contact
- [ ] Contact hero (620px)
- [ ] Breadcrumb
- [ ] 2-column layout (Form + Info)
- [ ] Map (optional)

---

**Document End**

Use this quick reference alongside the main development plan for rapid implementation guidance.
