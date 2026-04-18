# Content Model

## Overview

Homepage content is stored in local JSON files under `data/`. Each section reads from one file, which keeps copy changes separate from layout and interaction code.

This works well for content edits, but several fields are rendered directly as icon names or Tailwind utility classes. Those fields require extra care.

## File Map

| File | Consumed by | Purpose |
| --- | --- | --- |
| `data/hero.json` | `components/sections/hero.tsx` | Intro content, CTA buttons, and summary stats |
| `data/projects.json` | `components/sections/projects.tsx` and `components/project-card.tsx` | Project grid and dialog content |
| `data/systems.json` | `components/sections/systems.tsx` | Systems cards and metrics |
| `data/about.json` | `components/sections/about.tsx` | Bio, focus areas, skills, and philosophy |
| `data/contact.json` | `components/sections/contact.tsx` | Contact methods, CTA, and footer links |

## `hero.json`

### Fields

- `name`: main hero heading
- `title`: secondary headline below the name
- `status.icon`: suffix used in `bg-${status.icon}`
- `status.text`: status label text
- `status.pulseClass`: CSS class for status animation
- `description`: main intro paragraph
- `cta[]`: button list with `label`, `variant`, and `scrollId`
- `stats[]`: quick stats with `value`, `label`, and `colorClass`

### Important Conventions

- `cta[].scrollId` must match a real section `id`.
- `status.icon`, `status.pulseClass`, and `stats[].colorClass` are rendered directly into class names.
- Keep these utility class values aligned with existing CSS and Tailwind usage unless you also update component logic.

## `projects.json`

### Fields

- `title`
- `description`
- `projects[]`
  - `id`
  - `title`
  - `description`
  - `category`
  - `tags[]`
  - `problem`
  - `solution`
  - `challenges[]`
  - `techStack[]`
  - optional `link`

### Important Conventions

- `projects[].category` must remain one of `tech`, `game-dev`, or `systems`.
- If you add a new category, update both the `ProjectData` type and `categoryColors` in `components/project-card.tsx`.
- `link` is optional. If omitted, the dialog hides the outbound button.

## `systems.json`

### Fields

- `title`
- `description`
- `components[]`
  - `title`
  - `description`
  - `iconName`
  - `technologies[]`
- `stats[]`
  - `value`
  - `label`

### Important Conventions

- `components[].iconName` must match a key in `iconMap` inside `components/sections/systems.tsx`.

## `about.json`

### Fields

- `title`
- `subtitle`
- `journey.heading`
- `journey.paragraphs[]`
- `focus.heading`
- `focus.items[]`
  - `icon`
  - `color`
  - `text`
- `skills[]`
  - `category`
  - `skills[]`
  - `accentColor`
- `philosophy`
  - `title`
  - `description`
  - `principles[]`
    - `icon`
    - `color`
    - `title`
    - `description`

### Important Conventions

- `focus.items[].color`, `skills[].accentColor`, and `philosophy.principles[].color` are class strings used directly in JSX.
- If you replace these with new utility values, make sure they exist in the current styling system.

## `contact.json`

### Fields

- `title`
- `description`
- `links[]`
  - `iconName`
  - `label`
  - `value`
  - `href`
- `cta`
  - `label`
  - `href`
  - `responseTime`
- `footer`
  - `madeWith`
  - `links[]`
    - `label`
    - `href`
  - `copyright`

### Important Conventions

- `links[].iconName` must match a case handled by `getIcon()` in `components/sections/contact.tsx`.
- External links are rendered directly from JSON, so validate URLs when editing this file.

## Safe Content Changes

These edits are usually JSON-only:

- rewriting copy
- adding or removing project entries with an existing category
- updating badges, tech lists, and descriptions
- swapping contact URLs while keeping existing icon names

## Changes That Also Need Code Updates

- renaming fields
- adding a new project category
- adding a new `iconName` in `systems.json` or `contact.json`
- changing section IDs referenced by navigation or CTAs
- introducing new class-name strings that are not already supported by the current CSS and Tailwind setup
