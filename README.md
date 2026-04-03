# supimione.com

Personal portfolio website of **Supratim Das** — Full-Stack Software Engineer & Founder of [Dreamlytix](https://dreamlytix.com).

**Live:** [www.supimione.com](https://www.supimione.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (Static Export) |
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://motion.dev/) + CSS transitions |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Deployment | GitHub Pages |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, SEO, fonts, JSON-LD)
│   ├── page.tsx            # Homepage (dynamic imports with loading states)
│   └── globals.css         # Theme, utilities, animations
├── components/
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About me + CountUp stats
│   ├── Experience.tsx      # Work history timeline (server component)
│   ├── TechStack.tsx       # Tabbed technology grid
│   ├── Projects.tsx        # Project cards (server component)
│   ├── DreamlytixSpotlight.tsx  # Featured project (server component)
│   ├── Contact.tsx         # Contact info + social links
│   ├── Footer.tsx          # Footer with navigation
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── InViewSection.tsx   # Reusable scroll-triggered visibility wrapper
│   ├── ParticleBackground.tsx  # Canvas particle system
│   ├── CursorGlow.tsx      # Custom cursor effect
│   ├── TypingAnimation.tsx # Typewriter text effect
│   └── ui/
│       └── navbar-menu.tsx # Navbar primitives
├── data/
│   ├── about.ts            # About section data
│   ├── socials.ts          # Social media links
│   └── techstack.ts        # Technology categories and items
├── hooks/
│   └── useInView.ts        # IntersectionObserver hook
└── utils/
    └── cn.ts               # Tailwind class merge utility
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Lint
npm run lint
```

The production build outputs static files to the `out/` directory, ready for deployment to any static hosting provider.

## Key Features

- **Server/Client Component Split** — Below-fold sections use server components where possible, reducing client JS bundle
- **Dynamic Imports** — Code-split sections with loading placeholders to optimize initial load
- **SEO Optimized** — Full metadata, Open Graph, Twitter cards, JSON-LD structured data, robots.txt, sitemap.xml
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion` support
- **Performance** — Priority image loading, font subsetting, touch-aware effects, visibility-based animation pausing
- **Glass Morphism Design** — Blue-purple theme with particle background, cursor glow, and scroll-triggered animations

## License

All rights reserved. This is a personal portfolio — code is viewable but not licensed for reuse.

---

Built with Next.js & deployed on GitHub Pages.
