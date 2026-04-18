# AGENTS.md

This file provides guidance to coding agents working in this repository.

## Project Overview

This repository contains a single-page portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The homepage is assembled from section components and repo-managed JSON data files under `data/`.

## Common Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev          # Start the dev server on http://localhost:3000

# Build & Production
pnpm build        # Build the production bundle
pnpm start        # Start the production server

# Code Quality
pnpm lint         # Run ESLint checks
```

Use `pnpm` as the primary package manager for this repo.

## Architecture & Key Patterns

### Tech Stack

- **Framework**: Next.js 16 with the App Router
- **Language**: TypeScript with strict mode enabled
- **UI Libraries**:
  - Radix UI primitives
  - Lucide React for icons
  - Sonner for toasts
  - Shadcn-style UI components in `components/ui/`
- **Styling**: Tailwind CSS v4 with CSS variable theme tokens
- **Theme Management**: `next-themes` with system preference support
- **Analytics**: Vercel Analytics

### Directory Structure

- **`app/`** - App Router layout, page entrypoint, and global styles
  - `layout.tsx` - Root layout with fonts, theme provider, toaster, and analytics
  - `page.tsx` - Homepage composition
  - `globals.css` - Global styles, design tokens, and custom animation helpers
- **`components/`** - Navigation, background effects, sections, and shared UI primitives
  - `sections/` - `Hero`, `Projects`, `Systems`, `About`, and `Contact`
  - `project-card.tsx` - Dialog-driven case study card
  - `ui/` - Shared shadcn-style primitives
- **`data/`** - JSON content files used by each homepage section
- **`docs/`** - Project documentation for architecture, content, styling, and workflow
- **`hooks/`** - Custom React hooks
- **`lib/`** - Shared utilities such as `cn()`
- **`public/`** - Static assets

### Render Flow

The homepage is built in `app/page.tsx` as:

1. `AnimatedBackground`
2. `Navigation`
3. `Hero`
4. `Projects`
5. `Systems`
6. `About`
7. `Contact`

### Data Model

The site is content-driven:

- `data/hero.json`
- `data/projects.json`
- `data/systems.json`
- `data/about.json`
- `data/contact.json`

Be careful with fields that map directly to icon names or Tailwind class strings. Content changes are often safe, but new categories, icon names, or utility classes usually require code updates too.

## Styling System

- Tailwind CSS v4 is initialized in `app/globals.css` with `@import "tailwindcss"`
- Theme tokens are defined in `:root` and `.dark`, then exposed via `@theme inline`
- `tailwind.config.ts` still extends colors, radius values, container settings, and font families
- Custom classes such as `gradient-bg`, `pulse-slow`, and `animate-blob` are defined in `app/globals.css`

## Theme System

`ThemeProvider` in `app/layout.tsx` is configured with:

- `attribute="class"`
- `defaultTheme="system"`
- `enableSystem`
- `disableTransitionOnChange`

## UI Component Patterns

UI primitives in `components/ui/` generally:

- build on Radix UI for accessibility
- use `class-variance-authority` when variants are needed
- compose classes with `clsx` and `tailwind-merge`

## Tooling Notes

### ESLint

- Uses the flat config format in `eslint.config.mjs`
- Includes Next.js core web vitals and TypeScript rules
- Ignores build artifacts such as `.next/`, `out/`, and `build/`

### TypeScript

- Strict mode is enabled
- Module resolution is `bundler`
- Path alias `@/*` points to the project root
- JSON imports are allowed and used throughout the app

### PostCSS And Tailwind

- `postcss.config.mjs` uses `@tailwindcss/postcss`
- Tailwind tokens are partly defined in CSS and partly reflected in `tailwind.config.ts`

## Documentation

Start with:

- `README.md` for setup and quick orientation
- `docs/architecture.md` for app structure
- `docs/content-model.md` before editing `data/*.json`
- `docs/styling-and-theme.md` before changing tokens or animations
- `docs/development-workflow.md` before shipping changes
