# Component Styling Patterns & Guidelines

**Last Updated**: 2025-08-24  
**Status**: Active  

## Overview

This document establishes consistent patterns for component styling using the cn utility, daisyUI components, and Tailwind CSS in our Astro project.

## Core Principles

1. **Consistency**: All components use cn() for class management
2. **Variants**: Support multiple sizes, colors, and states
3. **Composability**: Components can be extended with custom classes
4. **Accessibility**: Include proper ARIA attributes and focus states
5. **Performance**: Minimize class conflicts and optimize bundle size

## cn Utility Usage

### Basic Pattern
```typescript
import { cn } from '../lib/utils'

interface ComponentProps {
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Component = ({ className, variant = 'primary', size = 'md', ...props }) => {
  return (
    <div
      className={cn(
        // Base classes
        'btn',
        // Variant classes
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
        },
        // Size classes
        {
          'btn-sm': size === 'sm',
          'btn-md': size === 'md', 
          'btn-lg': size === 'lg',
        },
        // Custom classes from props
        className
      )}
      {...props}
    />
  )
}
```

### Conditional Classes
```typescript
className={cn(
  'base-class',
  condition && 'conditional-class',
  {
    'variant-a': variant === 'a',
    'variant-b': variant === b,
  },
  isActive && 'active-state',
  className
)}
```

## Component Architecture

### Standard Component Structure
```typescript
// 1. Type definitions
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  variant?: VariantType
  size?: SizeType
  className?: string
  children: ReactNode
}

// 2. Variant mappings
const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  // etc...
}

const sizes = {
  sm: 'btn-sm',
  md: 'btn-md', 
  lg: 'btn-lg'
}

// 3. Component implementation
const Component = ({ variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <element
      className={cn(
        'base-classes',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
```

### daisyUI Integration
- Always start with daisyUI base classes (`btn`, `card`, `modal`, etc.)
- Use daisyUI modifiers for variants (`btn-primary`, `card-compact`)
- Add custom Tailwind classes for project-specific styling
- Override daisyUI variables in CSS for theme customization

## Naming Conventions

### Component Props
- `variant`: For different visual styles (primary, secondary, outline)
- `size`: For different sizes (sm, md, lg, xl)
- `state`: For interactive states (loading, disabled, active)
- `className`: Always accept for custom styling extensions

### Class Organization Order
1. daisyUI base class
2. daisyUI modifiers
3. Custom Tailwind classes
4. State classes
5. Prop className (always last)

## Best Practices

### Do's
- Use cn() for all dynamic class combinations
- Accept className prop for extensibility
- Provide sensible defaults for variants
- Keep variant logic in component, not parent
- Use TypeScript for variant type safety

### Don'ts
- Don't concatenate classes manually with template literals
- Don't override daisyUI classes unnecessarily
- Don't create variants that conflict with daisyUI patterns
- Don't forget to spread remaining props (...props)
- Don't hardcode colors that should be theme variables

## Common Patterns

### Button Variants
```typescript
const buttonVariants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary', 
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  link: 'btn-link'
}

const buttonSizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '', // default daisyUI size
  lg: 'btn-lg'
}
```

### Card Components  
```typescript
const cardVariants = {
  default: '',
  compact: 'card-compact',
  side: 'card-side'
}

const cardBackgrounds = {
  base: 'bg-base-100',
  neutral: 'bg-neutral',
  primary: 'bg-primary text-primary-content'
}
```

## Testing Considerations

- Test components with different variant combinations
- Verify custom className props are applied correctly
- Check that cn() properly merges conflicting classes
- Validate TypeScript types for variant props

## Migration Path

For existing components:
1. Add cn() utility import
2. Replace manual class concatenation
3. Extract variants to objects/maps
4. Add TypeScript interfaces
5. Test all variant combinations

## Performance Notes

- cn() utility is lightweight and optimized
- twMerge prevents duplicate classes in output
- Consider component-level memoization for complex variants
- daisyUI classes are optimized for minimal bundle impact

## Related Documentation

- [Decision 001: cn Utility Pattern](/Users/maxi/www/t2iapp-react/t2i-website/.knowledge/decisions/001-cn-utility-pattern.md)
- [Astro Component Guidelines](https://docs.astro.build/en/core-concepts/astro-components/)
- [daisyUI Component Reference](https://daisyui.com/components/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)