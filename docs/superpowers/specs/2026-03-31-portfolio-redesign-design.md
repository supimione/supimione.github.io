# Portfolio Redesign — Dark Futuristic / Cyberpunk

## Overview

Single-page portfolio for Supratim Das — Full-Stack Software Engineer (7+ years) and Founder of Dreamlytix. Dark cyberpunk aesthetic with neon green (#22D3EE replaced with #22C55E / green-500 family) accents, particle backgrounds, cursor trail, typing animations, and scroll-triggered reveals.

**Tech:** Next.js 14, Tailwind CSS, Framer Motion, React Icons, Aceternity UI components.

## Color Palette

- Background: `#0a0a0a` (near-black)
- Surface/Cards: `rgba(255,255,255,0.05)` glass-morphism with backdrop-blur
- Primary accent: `#22D3EE` neon green (Tailwind `green-400` / `emerald-400` range)
- Text primary: `#ffffff`
- Text secondary: `#9ca3af` (gray-400)
- Borders: `rgba(34,211,238,0.3)` (neon green at 30% opacity)
- Glow: `0 0 20px rgba(34,211,238,0.5)`

**Note:** The exact neon green hex will be `#4ade80` (green-400) for consistency with Tailwind's palette. Glows and accents use this as the base.

## Global Elements

### Particle Background
- HTML Canvas covering full page, z-index behind content
- ~80 small green dots drifting randomly
- Particles within 100px of cursor get pushed away (repel effect)
- Runs on requestAnimationFrame, paused when tab not visible

### Cursor Glow Trail
- A `div` following the mouse with CSS: `w-6 h-6 rounded-full bg-green-400 opacity-50 blur-xl pointer-events-none fixed z-50`
- Position updated via mousemove listener with slight lerp for smoothness

### Scan-line Overlay
- Pseudo-element on body: repeating 2px transparent/1px rgba(0,0,0,0.1) horizontal lines
- Very subtle, adds CRT/cyberpunk texture

### Dark Mode Only
- Remove the light/dark toggle — this portfolio is dark-only to maintain the cyberpunk aesthetic
- Remove darkMode state from page.tsx and layout.tsx

## Sections

### 1. Hero (100vh)

**Layout:** Centered content, full viewport height.

**Content:**
- Typing animation (custom hook with blinking cursor): `> Hey, I'm Supratim Das_`
  - Monospace font, neon green color
  - Types out character by character over ~2 seconds
- Headline: "Full-Stack Engineer & Founder" — text-5xl/6xl, font-bold, white
- Subtext: "Building scalable products & transforming education through Dreamlytix" — text-lg, gray-400
- Two CTA buttons side by side:
  - "View My Work" — outlined, neon green border with glow, scrolls to #projects
  - "Let's Connect" — filled neon green bg, scrolls to #contact
- Scroll indicator: animated bouncing chevron-down at bottom

**Animations:** Typing starts on mount. Headline + subtext fade-up with 0.3s stagger. Buttons fade-up after text.

### 2. About

**Layout:** Two-column on desktop (md+), stacked on mobile.

**Left column:**
- "A passionate Software Engineer with 7+ years of experience building scalable, high-performance web & mobile applications."
- "From frontend to backend to mobile — I handle the full picture. Alongside engineering, I'm building Dreamlytix — transforming schools into digital ecosystems."

**Right column:** Three highlight cards stacked vertically:
- "7+ Years Experience"
- "Founder @ Dreamlytix"
- "AI-Powered Workflow"
- Each card: dark bg, neon green left border, subtle glow on hover

**Background:** Faint dot-grid pattern (CSS radial-gradient repeating).

**Animation:** Scroll-triggered fade-up via Framer Motion `whileInView`.

### 3. Tech Stack

**Layout:** Category groups with pill badges.

**Categories & items:**
- Frontend: React, Next.js, Redux, TypeScript, JavaScript, Tailwind CSS, Material UI, Kendo UI
- Backend: Node.js, NestJS, MongoDB, PostgreSQL, REST APIs
- Mobile: React Native
- Testing: Cypress, Jest
- Tools: Git, GitHub, Bitbucket, Jira, Figma, Postman, Webpack
- AI: Claude AI, Codex

**Category label:** Monospace, neon green, text-sm uppercase.

**Badge style:** `px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 text-sm`. On hover: `border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.3)]`.

**Animation:** Scroll-triggered staggered fade-up. Each badge appears with 50ms delay after the previous.

### 4. Projects

**Title:** Typing animation `> Projects_` in monospace neon green.

**Layout:** 3-column grid on desktop, 1-column mobile.

**Card design:**
- Glass-morphism: `bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-xl p-6`
- On hover: `border-green-400/60 shadow-[0_0_20px_rgba(74,222,128,0.2)] scale-[1.02]`
- Content: project title (white, bold), description (gray-400), tech pills (small green badges), "View Project ->" link

**Placeholder cards:** 3 cards with generic project names/descriptions.

**Animation:** Scroll-triggered staggered fade-up with 150ms delay between cards.

### 5. Dreamlytix Spotlight

**Layout:** Full-width centered card.

**Card design:**
- Dark bg with gradient border (green-400 to emerald-600)
- `rounded-2xl p-8 md:p-12`

**Content:**
- Label: "Currently Building" — monospace, neon green, text-sm uppercase
- Title: "Dreamlytix" — text-4xl, font-bold, white
- Description: "Transforming traditional schools into digitally empowered ecosystems through modern, scalable software solutions and SaaS products."
- CTA: "Visit Dreamlytix" button linking to https://dreamlytix.com/

**Animation:** Scroll-triggered slide-in from left.

### 6. Contact + Footer

**Title:** `> Let's Connect_` monospace neon green.

**Content (centered):**
- Tagline: "Whether it's building products, collaborating on ideas, or discussing tech & AI — I'm always open to meaningful conversations."
- Contact info: email (mailto link), phone
- Social icons row: LinkedIn, Instagram, GitHub — circular buttons with neon green glow on hover

**Footer bar:**
- "© 2026 Supratim Das" left-aligned
- Nav links right-aligned: Home, Projects, About, Contact (smooth scroll anchors)
- Border-top with green-400/20

**Animation:** Scroll-triggered fade-up.

## File Structure

```
src/
  app/
    page.tsx          — Main single-page with all sections
    layout.tsx        — Simplified (dark-only, remove darkMode prop)
    globals.css       — Base styles, scan-line overlay, custom utilities
  components/
    Hero.tsx
    About.tsx
    TechStack.tsx
    Projects.tsx
    DreamlytixSpotlight.tsx
    Contact.tsx
    Footer.tsx         — Updated
    Navbar.tsx         — Updated (smooth scroll anchors instead of routes)
    ParticleBackground.tsx
    CursorGlow.tsx
    TypingAnimation.tsx
    ui/
      navbar-menu.tsx  — Keep existing
```

## Navbar Updates

- Change links from route-based (`/home`, `/projects`) to anchor-based (`#hero`, `#about`, `#tech`, `#projects`, `#dreamlytix`, `#contact`)
- Add smooth scroll behavior
- Keep floating pill style, add slight neon green glow to active item

## Dependencies

No new dependencies needed. Everything uses:
- `framer-motion` (already installed) for scroll animations
- `react-icons` (already installed) for social icons
- `tailwind-merge` + `clsx` (already installed) for class utilities
- Raw Canvas API for particles (no library needed)

## Performance Considerations

- Particle canvas uses requestAnimationFrame, pauses on tab blur
- Cursor glow uses CSS transform (GPU-accelerated)
- Framer Motion `whileInView` with `once: true` so animations don't re-trigger
- Images lazy-loaded if added later
