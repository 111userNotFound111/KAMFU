# KAMFU Tech Website - Component Specifications

**Document Version:** 1.0
**Last Updated:** 2025-11-03
**Source:** Figma Design Analysis

---

## Table of Contents

1. [Design System](#1-design-system)
2. [Layout Components](#2-layout-components)
3. [Card Components](#3-card-components)
4. [Form Components](#4-form-components)
5. [Button Specifications](#5-button-specifications)
6. [Typography System](#6-typography-system)
7. [Spacing System](#7-spacing-system)
8. [Color Palette](#8-color-palette)

---

## 1. Design System

### Base Measurements (from Figma)

**Canvas Width:** 1920px (desktop design)

**Common Dimensions:**
- Standard button: 206px × 38px
- Small card: 413px × 240px
- Medium card: 413px × 164px
- Large card: 940px × 600px
- Hero image (full-width): 1920px × varies (500-1200px)
- Hero image (contact): 1920px × 620px
- Hero image (case studies): 1920px × 720px
- Footer bar height: 82px
- Navigation divider: 1920px × 1px

---

## 2. Layout Components

### 2.1. Header / Navigation Bar

**Specifications:**
```
Height: ~82px (estimated from footer consistency)
Width: 1920px (full-width)
Background: White / Transparent gradient
Position: Fixed top
Z-index: 1000
```

**Elements:**
- Logo (Left): ~150px width
- Navigation Menu (Center):
  - Home: 38px width
  - Services: 49px width
  - Case Studies: 77px width
  - About Us: 56px width
  - Contact: 49px width
  - Spacing between items: ~40-60px
- Language Toggle (Right): ~80px
- CTA Button (Right): 206px × 38px

**Responsive Behavior:**
- Desktop (1920px): Full navigation visible
- Tablet (768-1023px): Condensed spacing
- Mobile (<768px): Hamburger menu

**States:**
- Default: Transparent or white background
- Scrolled: Solid white with shadow
- Active link: Underline indicator (64px × 1px)
- Hover: Text color change

---

### 2.2. Footer

**Specifications:**
```
Height: Variable (estimated 300-400px)
Width: 1920px (full-width)
Background: Dark (likely #1a1a1a or similar)
Text color: White/Light gray
```

**Sections:**
1. **Footer Content:**
   - Company info (left)
   - Quick links (center)
   - Social media (right)
   - Newsletter signup (optional)

2. **Footer Bottom Bar:**
   - Height: 82px
   - Copyright text
   - Legal links

**Layout Grid:**
- 3-4 columns on desktop
- 2 columns on tablet
- 1 column on mobile

---

### 2.3. Breadcrumb Bar

**Specifications:**
```
Height: 82px (consistent across pages)
Width: 1920px (full-width)
Background: Light gray (#F5F5F5 estimated)
```

**Content:**
- Text: "Home > Services" (example)
- Font size: ~14-16px
- Text color: Gray (#666)
- Active item: Dark (#333)
- Separator: " > " or chevron icon

**Padding:**
- Left/Right: 120px (container padding)
- Top/Bottom: Centered vertically

---

## 3. Card Components

### 3.1. Small Feature Card

**Dimensions:** 413px × 240px

**Structure:**
```
┌─────────────────────────────┐
│                             │
│     [Icon/Image]            │ 80px × 80px (centered)
│                             │
│     Title Text              │ 24px font
│                             │
│     Description text here   │ 16px font
│     spanning multiple       │
│     lines                   │
│                             │
└─────────────────────────────┘
```

**Spacing:**
- Padding: 24px all sides
- Icon to title: 16px
- Title to description: 12px

**States:**
- Default: White background, subtle border
- Hover: Slight scale (1.02), shadow elevation
- Active: N/A

---

### 3.2. Case Study Card

**Dimensions:** 413px × 164px

**Structure:**
```
┌─────────────────────────────┐
│  [Thumbnail]  │  Title      │
│   Image       │  Category   │
│   164×164     │  Brief desc │
│               │  Read more→ │
└─────────────────────────────┘
```

**Layout:**
- Thumbnail: 164px × 164px (left, square, masked)
- Content area: 249px × 164px (right)
- Content padding: 16px

**Content:**
- Title: 18-20px font, bold
- Category: 14px font, gray
- Description: 14px font, 2-3 lines max
- Link: 14px font, primary color with arrow

**States:**
- Default: White background
- Hover: Image zoom effect, overlay darkens
- Active: Shadow elevation

---

### 3.3. Large Service Card

**Dimensions:** 940px × 600px

**Structure:**
```
┌──────────────────────────────────────┐
│                                      │
│                                      │
│         [Background Image]           │
│         with overlay gradient        │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  Service Title                 │  │
│  │  Service description           │  │
│  │  [Learn More Button]           │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Overlay:**
- Gradient: bottom to top, dark to transparent
- Text position: Bottom 80px from edge
- Text max-width: 700px
- Padding: 40px

**Content:**
- Title: 32px font, bold, white
- Description: 16px font, white/light gray
- Button: 206px × 38px

---

## 4. Form Components

### 4.1. Text Input

**Specifications:**
```
Width: 100% (in form context)
Min-width: 300px
Height: 48px
Border: 1px solid #D1D5DB (gray-300)
Border-radius: 8px
Padding: 12px 16px
Font-size: 16px
```

**States:**
- Default: Gray border
- Focus: Primary color border (2px), glow shadow
- Error: Red border, error message below
- Disabled: Gray background, cursor not-allowed

**Error Message:**
- Font-size: 14px
- Color: Red (#EF4444)
- Margin-top: 4px

---

### 4.2. Textarea

**Specifications:**
```
Width: 100%
Min-width: 300px
Height: 120px (expandable)
Border: 1px solid #D1D5DB
Border-radius: 8px
Padding: 12px 16px
Font-size: 16px
Resize: vertical
```

**Same states as Text Input**

---

### 4.3. Contact Form Layout

**Container:**
```
Max-width: 800px
Margin: 0 auto
Padding: 40px
```

**Form Grid:**
- 2-column grid on desktop (Name | Email)
- 1-column on mobile
- Full-width: Subject, Message, Submit button

**Field Spacing:**
- Gap between fields: 24px
- Label to input: 8px

---

## 5. Button Specifications

### 5.1. Primary Button (CTA)

**Dimensions:**
```
Width: 206px (fixed) or auto with min-width
Height: 38px
Border-radius: 4px (slightly rounded)
```

**Colors (estimated from design):**
- Background: Red (#E53935 or similar brand color)
- Text: White (#FFFFFF)
- Font-size: 16px
- Font-weight: 600 (semi-bold)

**States:**
- Default: Red background
- Hover: Darker red, slight scale (1.02)
- Active: Even darker, scale (0.98)
- Disabled: Gray background, reduced opacity
- Loading: Spinner inside, disabled state

**Padding:**
- Horizontal: 32px (when auto-width)
- Vertical: 10px (to achieve 38px height)

---

### 5.2. Secondary Button

**Same dimensions as primary**

**Colors:**
- Background: Transparent
- Border: 2px solid (primary color)
- Text: Primary color
- Font-size: 16px
- Font-weight: 600

**States:**
- Hover: Background fills with primary color, text turns white
- Active: Darker primary color background

---

### 5.3. Ghost Button (Navigation)

**Dimensions:**
```
Width: auto
Height: 38px
No border
```

**Colors:**
- Background: Transparent
- Text: Dark gray (#333) or white (on dark backgrounds)
- Font-size: 16px
- Font-weight: 500

**States:**
- Hover: Text color changes to primary, underline appears
- Active: Underline visible (64px × 1px, centered)

---

## 6. Typography System

### 6.1. Font Family

**Primary:** (Not specified in Figma data - recommend sans-serif)
- Recommended: Inter, Roboto, or SF Pro
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

**Secondary:** (For headings, if different)
- Same as primary or a complementary serif font

**Chinese Font:**
- "PingFang SC", "Microsoft YaHei", sans-serif

---

### 6.2. Font Sizes (estimated from design)

```
H1 (Page titles):        48-64px
H2 (Section headings):   32-40px
H3 (Card titles):        24-28px
H4 (Subsections):        20-24px
H5:                      18-20px
Body Large:              18px
Body:                    16px
Body Small:              14px
Caption:                 12px
```

**Line Heights:**
- Headings: 1.2-1.3
- Body text: 1.5-1.6

---

### 6.3. Font Weights

```
Light:       300
Regular:     400
Medium:      500
Semi-Bold:   600
Bold:        700
```

**Usage:**
- Headings: 600-700
- Body: 400
- Buttons: 600
- Captions: 400-500

---

## 7. Spacing System

### 7.1. Spacing Scale (based on 8px base)

```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  40px
3xl:  48px
4xl:  64px
5xl:  80px
6xl:  120px
```

---

### 7.2. Container Padding

**Desktop (1920px):**
- Outer padding: 120px (left/right)
- Content max-width: 1680px

**Tablet (768-1023px):**
- Outer padding: 40px

**Mobile (<768px):**
- Outer padding: 20px

---

### 7.3. Section Spacing

**Vertical spacing between sections:**
- Small: 40px (mobile)
- Medium: 80px (tablet)
- Large: 120px (desktop)

**Element spacing within sections:**
- Title to content: 32px
- Between cards: 24px (mobile), 32px (desktop)

---

## 8. Color Palette

### 8.1. Primary Colors (estimated from design)

```
Primary (Brand Red):
- Main: #E53935 (or similar)
- Dark: #C62828
- Light: #EF5350

Secondary (if applicable):
- To be confirmed from design
```

---

### 8.2. Neutral Colors

```
Black:        #000000
Dark Gray:    #1A1A1A (backgrounds)
Gray 900:     #212121
Gray 800:     #424242
Gray 700:     #616161
Gray 600:     #757575
Gray 500:     #9E9E9E
Gray 400:     #BDBDBD
Gray 300:     #D1D5DB
Gray 200:     #E5E5E5
Gray 100:     #F5F5F5
White:        #FFFFFF
```

**Usage:**
- Text (dark): #212121
- Text (medium): #616161
- Text (light): #9E9E9E
- Borders: #D1D5DB
- Backgrounds (light): #F5F5F5, #FFFFFF

---

### 8.3. Background Colors (from Figma)

**Identified from shapes:**
- Light gray background: RGB(204, 210, 222) ≈ #CCD2DE
- Shape color: RGB(0.80, 0.82, 0.87) ≈ #CCD2DE (confirmed)

---

### 8.4. Semantic Colors

```
Success:      #4CAF50
Warning:      #FF9800
Error:        #EF4444
Info:         #2196F3
```

---

## 9. Component Implementation Checklist

### For Each Component:

- [ ] Implement base component
- [ ] Add TypeScript interfaces
- [ ] Implement all variants (if applicable)
- [ ] Add all states (hover, active, disabled, loading)
- [ ] Make responsive (mobile, tablet, desktop)
- [ ] Add accessibility (ARIA labels, keyboard navigation)
- [ ] Implement i18n support (EN/中文)
- [ ] Add animations (Framer Motion)
- [ ] Write unit tests
- [ ] Document props and usage
- [ ] Add to Storybook (if using)

---

## 10. Design Tokens (for code implementation)

### Example: tokens.ts

```typescript
export const designTokens = {
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '80px',
    '6xl': '120px',
  },

  // Component sizes (from Figma)
  components: {
    button: {
      primary: {
        width: '206px',
        height: '38px',
      },
    },
    card: {
      small: {
        width: '413px',
        height: '240px',
      },
      medium: {
        width: '413px',
        height: '164px',
      },
      large: {
        width: '940px',
        height: '600px',
      },
    },
    hero: {
      contact: {
        width: '1920px',
        height: '620px',
      },
      caseStudy: {
        width: '1920px',
        height: '720px',
      },
    },
    breadcrumb: {
      height: '82px',
    },
  },

  // Colors
  colors: {
    primary: {
      main: '#E53935',
      dark: '#C62828',
      light: '#EF5350',
    },
    neutral: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9E9E9E',
      400: '#BDBDBD',
      300: '#D1D5DB',
      200: '#E5E5E5',
      100: '#F5F5F5',
      50: '#FAFAFA',
    },
    background: {
      light: '#CCD2DE',
    },
  },

  // Typography
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '40px',
    '6xl': '48px',
    '7xl': '64px',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
}
```

---

## 11. Figma-to-Code Mapping

### Direct Measurements from Figma

| Figma Element | Component | Dimensions |
|---------------|-----------|------------|
| 矩形 (Background shapes) | Section backgrounds | Various, full-width |
| 位图 (Images) | Hero images, thumbnails | 1920×720, 940×600, etc. |
| 编组 (Groups) | Card containers | 413×164, 413×240 |
| 直线 (Lines) | Dividers | 1920×1 |
| 蒙版 (Masks) | Image masks | Same as image |
| Text elements | Typography | Various sizes |

---

## Summary

This document provides detailed specifications extracted from the Figma design analysis for the KAMFU Tech website. Use these specifications as a reference during component implementation to ensure pixel-perfect accuracy to the design.

**Key Takeaways:**
1. **Design width:** 1920px (desktop-first)
2. **Card sizes:** Small (413×240), Medium (413×164), Large (940×600)
3. **Button size:** 206×38px
4. **Consistent heights:** Breadcrumb bar (82px), Footer bar (82px)
5. **Hero images:** Vary by page (620-1200px height)
6. **Spacing:** 8px base system
7. **Typography:** To be finalized (recommend Inter or similar)
8. **Colors:** Primary red (#E53935 estimated), light gray backgrounds (#CCD2DE)

**Next Steps:**
1. Confirm color palette with design team
2. Confirm typography choices
3. Extract assets from Figma (images, icons)
4. Begin component implementation using these specs

---

**Document prepared by:** Claude Code
**Based on:** Figma design analysis and measurements
**For use in:** Component implementation phase
