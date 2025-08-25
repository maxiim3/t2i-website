# SEO Component Usage Guide

## TL;DR - Quick Implementation
```astro
---
import SEO from '../components/SEO.astro';
---
<SEO 
  title="Your Page Title"
  description="Your page description"
  og={{ image: "/og-image.jpg" }}
  twitter={{ image: "/twitter-image.jpg" }}
/>
```

## Component Overview
The SEO component (`/src/components/SEO.astro`) provides comprehensive SEO optimization including meta tags, Open Graph, Twitter Cards, and structured data. It automatically handles defaults and fallbacks.

## Usage Instructions

### 1. Basic Implementation
Place the SEO component in your page or layout `<head>` section:

```astro
---
import SEO from '../components/SEO.astro';
---
<html>
<head>
  <SEO 
    title="Custom Page Title"
    description="Custom page description"
  />
</head>
<body>
  <!-- page content -->
</body>
</html>
```

### 2. Props Reference

#### Required Props
None - component works with all defaults

#### Optional Props
- `title` (string): Page title (default: "T2I - Convert Text to Images")
- `description` (string): Meta description (default: component default)
- `canonical` (string): Canonical URL (default: current page URL)
- `noindex` (boolean): Add noindex/nofollow robots tag (default: false)

#### Open Graph Props (`og` object)
- `og.title` (string): OG title (fallback: main title)
- `og.description` (string): OG description (fallback: main description)  
- `og.image` (string): OG image URL (absolute URL recommended)
- `og.type` (string): OG type (default: "website")

#### Twitter Props (`twitter` object)
- `twitter.title` (string): Twitter title (fallback: main title)
- `twitter.description` (string): Twitter description (fallback: main description)
- `twitter.image` (string): Twitter image URL (absolute URL recommended)
- `twitter.card` ('summary' | 'summary_large_image'): Card type (default: "summary_large_image")

#### Structured Data Props
- `structuredData` (object): Custom JSON-LD data (merges with defaults)

## Social Media Requirements

### Open Graph (Facebook/LinkedIn)
**Required for optimal sharing:**
- `og.title`: 60 characters max
- `og.description`: 160 characters max  
- `og.image`: 1200x630px, JPG/PNG, <8MB

**Best Practices:**
- Use absolute URLs for images
- Test with Facebook Sharing Debugger
- Include og.type for non-webpage content

### Twitter Cards
**Required for cards:**
- `twitter.title`: 70 characters max
- `twitter.description`: 160 characters max
- `twitter.image`: 1200x675px for large image cards

**Card Types:**
- `summary`: Small square image
- `summary_large_image`: Large rectangular image (recommended)

### LinkedIn
Uses Open Graph tags - no additional requirements

## Content Guidelines

### Title Guidelines
- **Length**: 50-60 characters (search results)
- **Format**: "Primary Keyword - Brand" or "Page Name | Brand"
- **Avoid**: ALL CAPS, excessive punctuation
- **Include**: Primary keyword near beginning

### Description Guidelines  
- **Length**: 150-160 characters (search results)
- **Content**: Clear value proposition, include keywords naturally
- **Avoid**: Keyword stuffing, duplicate content
- **Include**: Call-to-action when appropriate

### Image Requirements
- **OG Images**: 1200x630px, JPG/PNG, <8MB
- **Twitter Images**: 1200x675px for large cards, 120x120px for summary
- **Quality**: High resolution, clear text if included
- **Format**: JPG for photos, PNG for graphics with text
- **Optimization**: Compress for web (<500KB recommended)

### URL Guidelines
- **Canonical**: Use absolute URLs when specified
- **Structure**: Clean, readable URLs
- **HTTPS**: Always use secure URLs
- **Consistency**: Match actual page URL

## Implementation Checklist

### Pre-Implementation
- [ ] Identify target keywords for page
- [ ] Write compelling title (50-60 chars)
- [ ] Write clear description (150-160 chars)
- [ ] Create/optimize social sharing images
- [ ] Review structured data requirements

### During Implementation
- [ ] Import SEO component in page/layout
- [ ] Add to `<head>` section
- [ ] Set required props (title, description)
- [ ] Add social media images
- [ ] Set canonical URL if needed
- [ ] Test component renders without errors

### Post-Implementation Testing
- [ ] Validate HTML (W3C Validator)
- [ ] Test social sharing (Facebook Debugger, Twitter Card Validator)
- [ ] Verify structured data (Google Rich Results Test)
- [ ] Check meta tags in browser dev tools
- [ ] Test on mobile devices
- [ ] Validate canonical URLs

### Common Implementation Examples

#### Homepage
```astro
<SEO 
  title="T2I - Convert Text to Images Online"
  description="Free text-to-image converter. Transform any text into PNG, JPG, or WebP images instantly. No AI art generation - simple text conversion tool."
  og={{
    image: "/images/homepage-og.jpg",
    type: "website"
  }}
  twitter={{
    image: "/images/homepage-twitter.jpg"
  }}
/>
```

#### Feature Page
```astro
<SEO 
  title="Custom Fonts - T2I Text to Image"
  description="Create images with custom fonts. Upload your own fonts or choose from our library. Perfect for logos, headers, and branded content."
  canonical="https://t2i.app/features/custom-fonts"
  og={{
    image: "/images/custom-fonts-og.jpg",
    type: "article"
  }}
/>
```

#### Blog Post
```astro
<SEO 
  title="How to Create Perfect Social Media Images"
  description="Learn best practices for creating social media images that drive engagement. Tips for dimensions, text, and visual hierarchy."
  og={{
    title: "Perfect Social Media Images - Complete Guide",
    image: "/images/blog-social-media-og.jpg",
    type: "article"
  }}
  structuredData={{
    "@type": "BlogPosting",
    "headline": "How to Create Perfect Social Media Images",
    "author": {
      "@type": "Organization", 
      "name": "T2I"
    },
    "datePublished": "2024-01-15"
  }}
/>
```

## Common Mistakes to Avoid

### Content Issues
- **Don't**: Duplicate titles across pages
- **Don't**: Leave descriptions empty or use defaults everywhere
- **Don't**: Use relative URLs for social images
- **Don't**: Exceed character limits (truncation hurts CTR)

### Technical Issues
- **Don't**: Place SEO component outside `<head>`
- **Don't**: Forget to test social sharing
- **Don't**: Use low-quality or wrong-sized images
- **Don't**: Skip canonical URLs for duplicate content

### SEO Issues
- **Don't**: Keyword stuff titles/descriptions
- **Don't**: Use generic or vague descriptions
- **Don't**: Ignore mobile optimization
- **Don't**: Forget to update meta tags when content changes

## Troubleshooting

### Social Sharing Not Working
1. Verify image URLs are absolute
2. Check image dimensions and file size
3. Clear social platform caches
4. Validate meta tags in browser

### Search Results Issues
1. Check title/description lengths
2. Verify canonical URLs
3. Ensure unique content per page
4. Test with Google Search Console

### Structured Data Errors
1. Validate JSON-LD syntax
2. Use Google Rich Results Test
3. Check required properties for schema type
4. Verify URL structure

## Resources
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org Documentation](https://schema.org/)