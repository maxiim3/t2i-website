# Sprint 1: Foundation & MVP Delivery

## Sprint Overview
- **Velocity Target**: 20-25 story points
- **Theme**: "Ship the Foundation - Get Live Fast"
- **Goal**: Launch a functional marketing site with core pages that clearly positions T2I as a text-to-image utility (NOT AI art)

## Sprint Backlog (Prioritized)

### 🎯 Must Have (Core MVP) - 18 points total

#### 1. Setup Development Foundation [2 points]
**Story**: As a developer, I need a working Astro project with Tailwind v4 configured

**Acceptance Criteria**:
- ✅ Astro dev server runs with `bun run dev`
- ✅ Tailwind v4 CSS imports work correctly
- ✅ daisyUI components render properly
- ✅ cn utility function works for class merging

**Technical Notes**: Build on existing setup, verify all tools work

---

#### 2. Create Base Layout Component [3 points]
**Story**: As a visitor, I need consistent navigation and branding across all pages

**Acceptance Criteria**:
- ✅ Header with T2I logo/brand and navigation menu
- ✅ Footer with essential links (Privacy, Terms, FAQ)
- ✅ Mobile-responsive navigation (hamburger menu)
- ✅ SEO component with meta tags integrated

**Technical Notes**: Pure Astro components, no React needed

---

#### 3. Build Homepage with Clear Positioning [5 points]
**Story**: As a visitor, I need to immediately understand T2I converts text to images (not AI art)

**Acceptance Criteria**:
- ✅ Hero section with "Convert Text to Images (Not AI Art)" headline
- ✅ Clear value proposition explaining the utility
- ✅ Format showcase (PNG, JPG, WebP) with benefits
- ✅ Primary CTA to create.t2i.app
- ✅ Simple features grid (3-4 key benefits)

**Technical Notes**: Focus on clarity over complexity

---

#### 4. Create Text-to-PNG Landing Page [3 points]
**Story**: As a user searching "text to PNG", I need a targeted page explaining this capability

**Acceptance Criteria**:
- ✅ SEO-optimized title/meta for "text to PNG" keyword
- ✅ Clear explanation of PNG benefits (transparency)
- ✅ Use cases for PNG conversion
- ✅ CTA to start creating at create.t2i.app

**Technical Notes**: Template for other format pages later

---

#### 5. Build FAQ Page [3 points]
**Story**: As a confused visitor, I need clarity on what T2I is and isn't

**Acceptance Criteria**:
- ✅ "Is this AI?" section prominently featured
- ✅ Clear explanation of utility vs AI generation
- ✅ Common use cases explained
- ✅ Schema markup for FAQ rich snippets

**Technical Notes**: Structured data for SEO boost

---

#### 6. Deploy to Production [2 points]
**Story**: As a business, we need the site live and accessible at t2i.app

**Acceptance Criteria**:
- ✅ Site deployed to Vercel/Netlify
- ✅ Domain configured correctly
- ✅ SSL working
- ✅ Basic analytics configured

**Technical Notes**: Use existing deployment pipeline

---

### 🔄 Should Have (If Time Permits) - 7 points total

#### 7. Add Simple Animations [2 points]
**Story**: As a visitor, I want subtle animations that enhance the experience

**Acceptance Criteria**:
- ✅ Fade-in animations on scroll
- ✅ Hover effects on buttons/cards
- ✅ CSS-only, no JS libraries

**Technical Notes**: Inspired by animate-ui patterns

---

#### 8. Create 404 Page [1 point]
**Story**: As a lost visitor, I need helpful navigation when I hit a missing page

**Acceptance Criteria**:
- ✅ Friendly error message
- ✅ Links to homepage and main pages
- ✅ Consistent with site design

---

#### 9. Implement Basic SEO Optimization [2 points]
**Story**: As a business, we need basic SEO foundations in place

**Acceptance Criteria**:
- ✅ XML sitemap generated
- ✅ robots.txt configured
- ✅ Basic meta tags on all pages

**Technical Notes**: Can be enhanced in Sprint 2

---

#### 10. Add Performance Monitoring [2 points]
**Story**: As a team, we need to track Core Web Vitals

**Acceptance Criteria**:
- ✅ Lighthouse scores baseline documented
- ✅ Basic performance budget defined
- ✅ Monitoring setup for production

---

## Definition of Done

A story is DONE when:
1. ✅ Code is implemented and working locally
2. ✅ Mobile responsive design verified
3. ✅ Lighthouse score > 90 (aiming for 95+)
4. ✅ No console errors
5. ✅ Deployed to staging/preview
6. ✅ Reviewed by team
7. ✅ Merged to main branch

## Success Metrics

Sprint is successful if we achieve:
- ✅ **Site is live** at t2i.app
- ✅ **3 core pages** complete (Homepage, Text-to-PNG, FAQ)
- ✅ **Clear positioning** as utility tool (not AI)
- ✅ **Lighthouse scores** > 90 on all pages
- ✅ **Mobile responsive** on all devices
- ✅ **18+ story points** completed

## Sprint Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Tailwind v4 issues | Team confirmed it's working, CSS imports ready |
| Deployment complexity | Use simple Vercel/Netlify auto-deploy |
| Scope creep | Stick to MVP, save enhancements for Sprint 2 |
| Design decisions | Keep it simple, use daisyUI components |

## Sprint Progress Tracking

### Velocity Tracking
- **Target Velocity**: 20-25 points
- **Must Have**: 18 points
- **Should Have**: 7 points
- **Total Available**: 25 points

### Story Status Board
| Story | Points | Status |
|-------|--------|--------|
| Development Foundation | 2 | ✅ **COMPLETED** |
| Base Layout Component | 3 | Not Started |
| Homepage | 5 | Not Started |
| Text-to-PNG Landing | 3 | Not Started |
| FAQ Page | 3 | Not Started |
| Deploy to Production | 2 | Not Started |
| Simple Animations | 2 | Not Started |
| 404 Page | 1 | Not Started |
| Basic SEO | 2 | Not Started |
| Performance Monitoring | 2 | Not Started |

## Sprint 2 Preview (Next Iteration)

Based on Sprint 1 learnings, potential Sprint 2 stories:
- Additional format landing pages (/text-to-jpg, /text-to-webp)
- Trust pages (Privacy, Terms, About)
- Enhanced SEO (structured data, schema markup)
- Performance optimizations
- A/B testing setup
- Content improvements based on analytics

## Key Principles for Sprint 1

1. **Ship Fast**: Get something live to start learning
2. **Stay Simple**: No over-engineering, use existing tools
3. **Clear Message**: T2I is a utility, not AI art
4. **Iterate Based on Data**: Setup analytics to inform Sprint 2
5. **Team Velocity**: Learn actual velocity for better Sprint 2 planning

---

*Sprint Status*: In Progress  
*Current Velocity*: 2 points completed  
*Target Velocity*: 20-25 points

## Development Foundation - COMPLETED ✅

**Implementation Notes:**
- ✅ Created TestFoundation.astro component demonstrating all tech stack features
- ✅ Built reusable Button.astro component using cn utility for variants
- ✅ Updated homepage to showcase foundation validation
- ✅ Enhanced Layout.astro with proper Tailwind classes and SEO meta tags
- ✅ All acceptance criteria met: Astro dev server, Tailwind v4, daisyUI, cn utility working

**Deliverables:**
- `src/components/TestFoundation.astro` - Comprehensive tech stack validation
- `src/components/ui/Button.astro` - Reusable button component with variants
- Updated `src/pages/index.astro` - Clean homepage implementation  
- Enhanced `src/layouts/Layout.astro` - Proper Tailwind integration and SEO

**Next Story:** Base Layout Component [3 points]