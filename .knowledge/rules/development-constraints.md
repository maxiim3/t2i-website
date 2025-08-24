# Development Constraints & Rules

## Hard Constraints

### Dependencies
- **NO React dependencies** - Keep pure Astro + vanilla JS
- **Minimize libraries** - Only add dependencies that provide significant value
- **Performance first** - All dependencies must justify their performance cost

### Architecture
- **Static-first** - Leverage Astro's static generation
- **No client-side SPA** - Marketing site should be statically served
- **Progressive enhancement** - Core functionality works without JS

## Soft Guidelines

### Performance Targets
- Lighthouse Performance Score > 95
- First Contentful Paint < 1.0s
- Largest Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.05

### SEO Requirements
- Every page needs proper meta tags
- Structured data where applicable
- Semantic HTML structure
- Accessible markup (WCAG 2.1 AA)

### Code Standards
- TypeScript for all new code
- ESLint and Prettier compliance
- Component-based architecture
- Consistent naming conventions

## Evaluation Criteria for New Dependencies

Before adding any dependency, ask:
1. **Performance**: Does it impact bundle size or runtime performance?
2. **Maintenance**: How actively maintained is it?
3. **Necessity**: Can we achieve the same result with less?
4. **Future-proof**: Will this still be supported in 2+ years?

## Current Pending Decisions
- daisyUI vs pure Tailwind (evaluate by development speed vs control trade-off)