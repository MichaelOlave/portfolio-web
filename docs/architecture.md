# Architecture

## Overview

This project is a single-route portfolio site built with the Next.js App Router. The homepage is rendered from `app/page.tsx` and composed from a small number of focused components plus JSON-backed content files in `data/`.

There is no backend layer, API route surface, CMS, or database in the current repository. All visible content is versioned with the codebase.

## Render Flow

```text
app/layout.tsx
|- next/font setup (Geist, Geist Mono)
|- ThemeProvider
|- Toaster
`- Vercel Analytics

app/page.tsx
|- AnimatedBackground
|- Navigation
`- main
   |- Hero
   |- Projects
   |- Systems
   |- About
   `- Contact
```

## Server And Client Boundaries

- `app/layout.tsx` and `app/page.tsx` are server components.
- The main page shell delegates most interactive behavior to client components.
- `Navigation`, `AnimatedBackground`, `ProjectCard`, and every section component under `components/sections/` are client components.

This split keeps the route structure simple while allowing smooth scrolling, dialogs, and theme-aware UI behavior.

## Data Flow

The homepage is content-driven:

- `Hero` reads from `data/hero.json`
- `Projects` reads from `data/projects.json`
- `Systems` reads from `data/systems.json`
- `About` reads from `data/about.json`
- `Contact` reads from `data/contact.json`

The only notable content transformation happens where JSON fields are mapped into icons, badges, and Tailwind class names.

## Runtime Behavior

- `Navigation` tracks the active section based on scroll position and uses `scrollIntoView` for smooth navigation.
- `ProjectCard` opens a dialog with case-study details for each project.
- `ThemeProvider` uses `next-themes` with `attribute="class"` and `defaultTheme="system"`.
- `Toaster` adapts to the active theme through `components/ui/sonner.tsx`.
- `Analytics` is added globally through `@vercel/analytics/next`.

## Constraints

- The app is currently optimized around a single homepage route.
- Portfolio content is edited by changing JSON files directly.
- Section IDs are coupled to navigation item IDs.
- Some content fields store icon names or Tailwind utility strings, so not every content change is JSON-only.
- There is no automated test suite yet, so behavior changes should be checked manually in the browser.
