# Bano Qabil Pro

A premium IT skills training platform redesign with modern UI/UX, built with Next.js 14 and Tailwind CSS.

## Features

✅ **Modern Design** - Green + White theme with premium aesthetics
✅ **Responsive** - Mobile-first approach, works on all devices
✅ **Smooth Animations** - Framer Motion animations for engaging UI
✅ **Performance** - Optimized for speed under 2s load time
✅ **Bilingual Support** - English + Urdu content ready
✅ **9 Complete Sections:**
  - Sticky Navigation Bar
  - Hero Section with Stats
  - Courses Grid (Bento Layout)
  - Why Bano Qabil Features
  - Application Timeline
  - Cities Coverage Map
  - Success Stories Carousel
  - CTA Banner with Countdown
  - Footer with Contact Info
  - Mobile Sticky Apply Button

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Color Palette

```css
--primary: #0A7A4F (Dark Green)
--accent: #22C55E (Bright Green)
--bg: #FFFFFF (White)
--card-bg: #F0FDF4 (Light Green)
--text: #0F172A (Dark Text)
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Courses.tsx      # Courses grid
│   ├── WhyBanoQabil.tsx # Features section
│   ├── HowToApply.tsx   # Application steps
│   ├── Cities.tsx       # Cities coverage
│   ├── SuccessStories.tsx # Success carousel
│   ├── CTABanner.tsx    # CTA with countdown
│   ├── Footer.tsx       # Footer
│   └── MobileApplyButton.tsx # Mobile button
├── tailwind.config.js   # Tailwind config
├── next.config.js       # Next.js config
└── package.json         # Dependencies
```

## Performance

- Page Load: < 2 seconds
- Image Optimization: Built-in Next.js Image component
- Lazy Loading: Components load on viewport intersection
- Animation Performance: GPU-accelerated with Framer Motion

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#0A7A4F',
  accent: '#22C55E',
  // ...
}
```

### Content
Update component content in `/components` folder

### Animations
Modify animation timings in component files

## License

Copyright © 2024 Bano Qabil Pro. All rights reserved.

## Support

For support, email info@banoqabil.pk or call +92 (0)300 1234567
