# Technical Stack Decisions

## Core Framework
**Decision**: Astro.js  
**Status**: Confirmed  
**Date**: 2025-08-24  
**Rationale**: Optimal for SEO, static generation, and performance requirements

## Styling & UI
**Decision**: Tailwind CSS (no React dependencies)  
**Status**: Confirmed  
**Date**: 2025-08-24  
**Rationale**: 
- Keep dependencies minimal
- Avoid React complexity for marketing site
- Pure Astro + vanilla JS approach

## Design System
**Decision**: Evaluating daisyUI vs pure Tailwind  
**Status**: Under consideration  
**Date**: 2025-08-24  
**Considerations**:
- **daisyUI Pros**: Faster development, consistent components, structured system
- **daisyUI Cons**: Additional dependency, less customization control
- **Pure Tailwind Pros**: Full control, minimal dependencies
- **Pure Tailwind Cons**: More custom work, slower initial development

## Animation Strategy
**Decision**: CSS-based animations inspired by animate-ui  
**Status**: Planned  
**Date**: 2025-08-24  
**Rationale**: 
- Want animate-ui style effects for landing page
- Minimize JS dependencies
- Focus on performance and simplicity

## Package Manager
**Decision**: Bun  
**Status**: Confirmed  
**Date**: 2025-08-24  
**Rationale**: Dependencies already installed, project running with bun

## TypeScript
**Decision**: Enabled  
**Status**: Confirmed  
**Date**: 2025-08-24  
**Rationale**: Already configured, provides type safety