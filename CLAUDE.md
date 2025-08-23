# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is currently an empty project directory. No codebase structure or build tools have been established yet.

## Related Projects

The parent directory `/home/masayuki/HTML/` contains several web projects that appear to be restaurant/business websites built with HTML, CSS, and JavaScript. These projects use various approaches:

- **GreenGrass_customCSS**: Custom CSS implementation with animations, responsive design, and Instagram integration
- **ichimuan**: Features gallery and scroll animations  
- **kitaya**: Simple restaurant site with images and basic JavaScript
- **kousaien**: Basic HTML/CSS/JS structure
- **shinanoya**: Restaurant site with menu system, takeout features, and scroll functionality

When developing in this directory, consider following patterns from these existing projects if creating a similar website.

## Development Best Practices

### HTML Best Practices
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- Include proper meta tags for viewport, charset, and description
- Use descriptive `alt` attributes for all images
- Implement proper heading hierarchy (h1 → h2 → h3)
- Add `lang` attribute to `<html>` element
- Use `loading="lazy"` for images below the fold
- Include structured data markup where appropriate

### CSS3 Best Practices (Custom CSS)
- Use CSS custom properties (variables) for consistent theming
- Implement mobile-first responsive design with media queries
- Use flexbox and CSS Grid for layouts instead of floats
- Apply BEM naming convention for maintainable class names
- Minimize specificity and avoid !important
- Use `clamp()` for fluid typography and spacing
- Implement smooth transitions and prefer CSS animations over JavaScript
- Include `:focus-visible` styles for accessibility
- Use `aspect-ratio` for maintaining image proportions

### Vanilla JavaScript (ES6+) Best Practices
- Use `const` and `let` instead of `var`
- Prefer arrow functions for callbacks and non-method functions
- Use template literals for string interpolation
- Implement event delegation for dynamic content
- Use `async/await` for asynchronous operations
- Apply destructuring for cleaner code
- Use modules with import/export for code organization
- Cache DOM queries and avoid repeated selections
- Use `IntersectionObserver` for scroll-based animations
- Implement debouncing/throttling for performance-critical events
- Use `data-*` attributes for JavaScript hooks instead of classes
- Always use `addEventListener` instead of inline event handlers
- Handle errors gracefully with try/catch blocks
- Use `DOMContentLoaded` or defer attribute for script initialization