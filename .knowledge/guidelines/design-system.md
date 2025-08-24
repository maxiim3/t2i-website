# Design System Guidelines

## Design Philosophy

### Core Principles
1. **Clarity over creativity** - Clear messaging beats fancy design
2. **Performance over features** - Fast loading is a feature
3. **Utility over artistry** - Communicate tool functionality
4. **Trust over trends** - Professional and reliable appearance

## Visual Identity

### Key Messaging
- **Primary**: "Convert Text to Images"
- **Disambiguation**: "(Not AI Art)" or "Utility Tool"
- **Value Prop**: "Fast, Simple, Free"

### Tone
- **Professional** but not corporate
- **Helpful** and straightforward
- **Clear** about functionality
- **Trustworthy** for business users

## Component Strategy (Pending daisyUI Decision)

### Option A: Pure Tailwind
**Pros**: Full control, minimal dependencies, custom branded components  
**Cons**: More development time, need to build everything from scratch  
**Best for**: If we have design requirements that need heavy customization

### Option B: daisyUI + Tailwind
**Pros**: Pre-built components, faster development, consistent system  
**Cons**: Additional dependency, less customization flexibility  
**Best for**: If we need to ship quickly with professional appearance

## Animation Guidelines

### Inspiration: animate-ui Style
- **Subtle entrance animations** for hero sections
- **Micro-interactions** on buttons and CTAs
- **Scroll-triggered animations** for feature reveals
- **Performance-first** - CSS transforms and opacity only

### Technical Approach
- CSS-based animations (no JS animation libraries)
- Use `transform` and `opacity` for 60fps performance
- Respect `prefers-reduced-motion`
- Progressive enhancement (content works without animations)

## Color Strategy (TBD)
- Need to align with create.t2i.app PWA colors
- Professional palette suitable for business users
- High contrast for accessibility
- Consider light/dark modes

## Typography (TBD)
- System fonts for performance
- Clear hierarchy for landing page content
- Readable at all screen sizes