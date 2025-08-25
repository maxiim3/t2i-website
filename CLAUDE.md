# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
bun install

# Start local development server at localhost:4321
bun run dev

# Build production site to ./dist/
bun run build

# Preview production build locally
bun run preview

# Run Astro CLI commands
bun run astro
```

## High-Level Architecture

This is the **marketing website** for the T2I application, implementing a dual-domain strategy:

- **t2i.app** (this repository): SEO-optimized marketing site built with Astro.js
- **create.t2i.app**: The actual PWA application (separate repository)

The marketing site serves as the primary SEO and discovery layer, driving qualified traffic to the PWA application.

### Technology Stack
- **Astro.js**: Static site generator for optimal SEO performance
- **TypeScript**: Type safety across the codebase
- **Tailwind CSS v3**: Utility-first CSS framework (Astro-compatible)
- **No React dependencies**: Pure Astro + vanilla JS approach
- **daisyUI**: Under evaluation vs pure Tailwind (see `.knowledge/decisions/`)
- **Bun**: Package manager (dependencies installed, project running)

## Project Context

**T2I is a text-to-image utility tool** that converts text into PNG/JPG/WebP formats. It is **NOT an AI art generator** - this distinction is critical for positioning and SEO.

### Key Objectives
1. **Disambiguation**: Clearly differentiate from AI art generators
2. **SEO Optimization**: Target utility-focused search queries like "convert text to image"
3. **Conversion**: Drive users to the PWA at create.t2i.app

### Important Documentation
- **ASTRO-IMPLEMENTATION-PLAN.md**: Detailed 6-8 week implementation roadmap
- **marketing-expert-recommendation.md**: SEO and positioning strategy
- **`.knowledge/`**: Project knowledge base with decisions, rules, and guidelines

## Current State & Strategy

**MVP Focus**: 2-week sprint targeting 3 essential pages for fastest market entry:
1. **Homepage** (`/`) - Hero with clear "Convert Text to Images (Not AI Art)" messaging
2. **Text-to-PNG Landing** (`/text-to-png`) - Target highest-value keyword (1,300 searches/month)
3. **FAQ Page** (`/faq`) - Address AI confusion, build trust

**Post-MVP**: Scale based on data with remaining landing pages and trust content.

### Development Constraints
- **NO React dependencies** - Keep pure Astro + vanilla JS
- **Minimize libraries** - Only add dependencies with significant value
- **Performance targets**: Lighthouse >95, Core Web Vitals optimized
- **Animation**: CSS-based animations inspired by animate-ui (no JS animation libraries)

## Key Implementation Notes

1. **Messaging**: Always emphasize "NOT AI art" to avoid confusion
2. **SEO Focus**: Target utility keywords, not AI/artistic keywords
3. **Performance**: Maintain Lighthouse scores > 95
4. **Cross-domain**: Ensure smooth navigation between marketing site and PWA
- don't count tasks in hours or days or weeks. use sprint points instead
- we use tailwindcss v4, we don't need a configuration file