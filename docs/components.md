# Components

## Page Composition

The top-level page composition lives in `app/page.tsx`:

- `AnimatedBackground`: fixed gradient and blob effects behind the page
- `Navigation`: sticky top navigation with active-section highlighting
- `Hero`
- `Projects`
- `Systems`
- `About`
- `Contact`

## Section Components

| Component | Source file | Data source | Notes |
| --- | --- | --- | --- |
| `Hero` | `components/sections/hero.tsx` | `data/hero.json` | Uses JSON-driven CTA buttons, stats, and status styling |
| `Projects` | `components/sections/projects.tsx` | `data/projects.json` | Renders a grid of `ProjectCard` components |
| `Systems` | `components/sections/systems.tsx` | `data/systems.json` | Maps `iconName` strings to lucide icons |
| `About` | `components/sections/about.tsx` | `data/about.json` | Renders narrative copy, skills, and philosophy content |
| `Contact` | `components/sections/contact.tsx` | `data/contact.json` | Maps icon names to SVG or lucide icons and renders external links |

## Shared Components

### `Navigation`

`components/navigation.tsx` owns the top nav item list and expects each item ID to match a section ID on the page.

If you rename a section ID, update:

- the section `id`
- the `navItems` entry in `Navigation`
- any CTA button `scrollId` values in `data/hero.json`

### `AnimatedBackground`

`components/animated-background.tsx` renders fixed-position blurred color blobs and depends on animation classes defined in `app/globals.css`.

### `ProjectCard`

`components/project-card.tsx` is the main interactive content component in the app.

It is responsible for:

- displaying project summary cards
- opening dialog-based case studies
- mapping project categories to badge colors
- optionally rendering an outbound project link

`ProjectCard` expects `project.category` to be one of:

- `tech`
- `game-dev`
- `systems`

## Theme And Layout Helpers

- `components/theme-provider.tsx` wraps `next-themes`
- `components/ui/sonner.tsx` provides a theme-aware toaster
- `lib/utils.ts` exports `cn()` for class merging
- `hooks/use-mobile.ts` provides a small viewport helper even though it is not currently wired into the homepage flow

## UI Primitive Library

The repo includes a broader set of shadcn-style primitives in `components/ui/` than the homepage currently uses. The page actively uses pieces such as `button`, `badge`, `card`, `dialog`, `separator`, and `sonner`, while other primitives are available for future expansion.

## Change Impact Notes

- Changing section order is straightforward in `app/page.tsx`, but confirm scroll tracking still feels right.
- Changing section IDs affects navigation and hero CTAs.
- Changing icon strings in content files requires matching updates to `iconMap` or `getIcon`.
- Changing project categories requires updating both the `ProjectData` type and the category color map.
- Changing dialog behavior should be checked for keyboard navigation and scroll behavior.
