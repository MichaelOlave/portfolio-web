# Decisions

This file records repo-level decisions that are already visible in the codebase so future changes stay consistent with the current direction.

## 1. Single-Page Portfolio Architecture

- Status: active
- Decision: Keep the public site as a single homepage route composed of stacked sections.
- Why: The current navigation, CTA flow, and content structure are all optimized around a fast-scanning portfolio experience.
- Consequence: Section IDs, nav items, and scroll targets are closely coupled.

## 2. Content Lives In Local JSON

- Status: active
- Decision: Store portfolio content in `data/*.json` instead of a CMS or database.
- Why: The site is small, version-controlled, and easy to update through code review.
- Consequence: Content changes are simple, but some fields still depend on code-side icon maps and class-name handling.

## 3. Interactivity Lives In Client Components

- Status: active
- Decision: Keep the route shell simple and move interactive behavior into client components.
- Why: Smooth scrolling, dialogs, and theme-aware UI are easier to express in focused client components.
- Consequence: Most sections are marked `"use client"` even though the route itself is simple.

## 4. Theme Tokens Use CSS Variables

- Status: active
- Decision: Drive colors, radius values, and theme switching through CSS variables and Tailwind token mapping.
- Why: This keeps light and dark mode consistent while working well with the shadcn-style component approach.
- Consequence: Token changes should be checked in both `app/globals.css` and `tailwind.config.ts`.

## 5. Reuse A Curated UI Primitive Set

- Status: active
- Decision: Build the portfolio with a small set of Radix-based, shadcn-style primitives instead of one-off UI markup everywhere.
- Why: The shared primitives improve consistency and make future sections easier to build.
- Consequence: Changes to shared primitives can have wider impact than section-local JSX changes.
