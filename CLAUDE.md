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
- **Tailwind CSS v4**: Utility-first CSS framework (when implemented)
- **daisyUI**: Component library (planned)

## Project Context

**T2I is a text-to-image utility tool** that converts text into PNG/JPG/WebP formats. It is **NOT an AI art generator** - this distinction is critical for positioning and SEO.

### Key Objectives
1. **Disambiguation**: Clearly differentiate from AI art generators
2. **SEO Optimization**: Target utility-focused search queries like "convert text to image"
3. **Conversion**: Drive users to the PWA at create.t2i.app

### Important Documentation
- **ASTRO-IMPLEMENTATION-PLAN.md**: Detailed 6-8 week implementation roadmap
- **marketing-expert-recommendation.md**: SEO and positioning strategy

## Current State

The project is in early stages with basic Astro setup. The implementation should follow the comprehensive plan in ASTRO-IMPLEMENTATION-PLAN.md, which includes:

- Homepage with clear utility positioning
- Intent-specific landing pages (/text-to-png, /text-to-jpg, /text-to-webp)
- Trust pages (FAQ, About, Privacy, Terms)
- Machine-readable specifications for LLM discovery
- Performance optimization for Core Web Vitals

## Key Implementation Notes

1. **Messaging**: Always emphasize "NOT AI art" to avoid confusion
2. **SEO Focus**: Target utility keywords, not AI/artistic keywords
3. **Performance**: Maintain Lighthouse scores > 95
4. **Cross-domain**: Ensure smooth navigation between marketing site and PWA