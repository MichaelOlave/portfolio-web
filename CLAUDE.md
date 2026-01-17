# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website built with React 19, TypeScript, Tailwind CSS v4, and a curated set of UI component libraries. The project uses the App Router for routing and is set up for server and client components.

## Common Development Commands

```bash
# Development
pnpm dev          # Start the dev server on http://localhost:3000

# Build & Production
pnpm build        # Build the production bundle
pnpm start        # Start the production server

# Code Quality
pnpm lint         # Run ESLint checks
```

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI Libraries**:
  - Radix UI primitives (@radix-ui/react-dialog, @radix-ui/react-separator, @radix-ui/react-slot, @radix-ui/react-tooltip)
  - Lucide React for icons
  - Sonner for toast notifications
  - Shadcn-style UI components (custom-built with CVA for variants)
- **Styling**: Tailwind CSS v4 with PostCSS, custom theme system using CSS variables
- **Theme Management**: next-themes for dark/light mode switching with system preference detection
- **Animations**: tw-animate-css package for Tailwind animation utilities

### Directory Structure

- **`app/`** - App Router pages and layouts
  - `layout.tsx` - Root layout with theme provider and toaster
  - `page.tsx` - Home page
  - `globals.css` - Global styles and CSS variables for theming

- **`components/`** - Reusable React components
  - `theme-provider.tsx` - Wrapper around next-themes for dark mode support
  - `ui/` - Primitive UI components built with Radix UI and CVA
    - Includes: button, input, separator, sheet, skeleton, sidebar, sonner, tooltip

- **`lib/`** - Utility functions and helpers

- **`hooks/`** - Custom React hooks

### Styling System

The project uses Tailwind CSS v4 with:
- CSS variables for color theming defined in `globals.css`
- Light mode (`:root`) and dark mode (`.dark`) color schemes using OKLch color space
- Class Variance Authority (CVA) for component variant management
- Custom theme utilities for sidebar and chart colors

### Theme System

ThemeProvider (from next-themes) is configured in the root layout with:
- `attribute="class"` - Theme applied as CSS class
- `defaultTheme="system"` - Follows system preferences by default
- `enableSystem` - Respects OS light/dark mode preference
- `disableTransitionOnChange` - Prevents flashing on theme switch

### UI Component Patterns

UI components in `components/ui/` follow these patterns:
- Built on Radix UI primitives for accessibility
- Use CVA (class-variance-authority) for styling variants
- Import `clsx` and `tailwind-merge` for class composition
- Exported as both default and named exports for flexibility

## ESLint Configuration

Uses flat config format with:
- Next.js core web vitals rules
- TypeScript support via eslint-config-next
- Custom ignores for build artifacts and generated files

Run `pnpm lint` to check for violations. The config is in `eslint.config.mjs`.

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Path alias: `@/*` points to root directory
- JSX: react-jsx (React 17+ syntax, no import needed)

## PostCSS & Tailwind

- PostCSS config uses `@tailwindcss/postcss` plugin for Tailwind v4
- Tailwind v4 uses new `@import` syntax in globals.css
- Custom CSS variables defined in `@theme` block for Tailwind integration
