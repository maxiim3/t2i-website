# Decision 001: cn Utility Pattern for Component Variants

**Date**: 2025-08-24  
**Status**: Approved  
**Decision Owner**: Development Team  

## Context

The T2I marketing website requires a consistent, maintainable approach to component styling that works well with our chosen tech stack (Astro + daisyUI + Tailwind CSS). The team needs to build reusable components with variants while avoiding CSS class conflicts.

## Decision

Implement the `cn` utility pattern for all component variants and dynamic class management:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Rationale

1. **Component Variants**: Enables clean implementation of component variants (size, color, state)
2. **Class Conflict Prevention**: twMerge intelligently handles overlapping Tailwind classes
3. **Conditional Styling**: clsx provides clean conditional class application
4. **daisyUI Compatibility**: Works seamlessly with daisyUI component classes
5. **Developer Experience**: Familiar pattern used across modern React/component ecosystems

## Dependencies

- `clsx` - for conditional class handling
- `tailwind-merge` - for intelligent Tailwind class merging

## Implementation Requirements

1. Install required dependencies: `bun add clsx tailwind-merge`
2. Utility already exists in `src/lib/utils.ts`
3. Use cn() for all component styling with variants
4. Establish component prop patterns for variant control

## Success Criteria

- Button component with size/color variants working
- No CSS class conflicts in components
- Clean component API for variant selection
- Consistent styling patterns across all components

## Risks & Mitigation

**Risk**: Bundle size increase from dependencies  
**Mitigation**: Both libraries are lightweight and commonly used

**Risk**: Learning curve for team members  
**Mitigation**: Pattern is widely adopted and well-documented

## Related Decisions

- [002-daisyui-component-library] - Component library choice
- [003-astro-framework] - Framework selection

## Next Steps

1. Verify cn utility implementation in utils.ts
2. Install clsx and tailwind-merge dependencies
3. Create first component using cn pattern (Button)
4. Document component variant patterns in guidelines