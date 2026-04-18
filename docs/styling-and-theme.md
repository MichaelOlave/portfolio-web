# Styling And Theme

## Styling Stack

The project uses Tailwind CSS v4 with PostCSS and a CSS-variable theme system.

Key files:

- `app/globals.css`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `components.json`

## Global CSS

`app/globals.css` is the main styling entrypoint. It:

- imports Tailwind with `@import "tailwindcss"`
- imports `tw-animate-css`
- defines the `dark` custom variant
- maps CSS variables into Tailwind theme tokens through `@theme inline`
- declares global tokens in `:root` and `.dark`
- adds custom utilities and animation helpers

The file also sets:

- `html { font-size: 19.2px; }`
- base `background` and `foreground` colors on `body`

If the overall scale of the site changes unexpectedly, this `html` font size is one of the first places to check.

## Theme Tokens

Color and radius tokens are defined as CSS variables, including:

- surface tokens such as `--background`, `--card`, `--popover`
- text tokens such as `--foreground`, `--muted-foreground`
- brand tokens such as `--primary` and `--accent`
- chart and sidebar tokens used by the wider shadcn-style component set

Light mode tokens live in `:root`. Dark mode overrides live in `.dark`.

## Tailwind Configuration

`tailwind.config.ts` extends Tailwind with:

- container sizing
- token-backed colors
- token-backed border radius values
- font families using the Geist CSS variables

Even though Tailwind v4 centers more configuration in CSS, this file still matters because the repo and shadcn-style tooling expect these mappings.

## Fonts

`app/layout.tsx` loads:

- `Geist` as `--font-geist-sans`
- `Geist_Mono` as `--font-geist-mono`

Those variables are then exposed to Tailwind through `@theme inline` and `tailwind.config.ts`.

## Theme Provider

Theme switching is handled with `next-themes`:

- `attribute="class"`
- `defaultTheme="system"`
- `enableSystem`
- `disableTransitionOnChange`

This means dark mode is applied through a `.dark` class on the document rather than separate stylesheets.

## Custom Effects And Utilities

`app/globals.css` defines several project-specific helpers, including:

- `pulse-slow`
- `gradient-bg`
- `aura-gradient`, `aura-blue`, `aura-purple`, `aura-green`
- `glow-circle`, `glow-blue`, `glow-purple`, `glow-green`
- `animate-glow`
- `gradient-text`
- `animate-blob`

These are used most visibly by `AnimatedBackground` and a few section elements.

## Practical Guidance

- Change design tokens in `app/globals.css` first, then confirm `tailwind.config.ts` still reflects the same token model.
- Check both light and dark themes after any token change.
- Be careful with data-driven class strings from JSON files, because they rely on the current utility naming remaining valid.
- If you refactor or remove custom animation classes, update `AnimatedBackground` and section markup at the same time.
