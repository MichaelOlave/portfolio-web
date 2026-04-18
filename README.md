# Michael Olave Portfolio Web

A single-page portfolio site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The app uses the App Router, a small set of client-side interactive components, and repo-managed JSON content under `data/`.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4 with CSS variable theme tokens
- `next-themes` for dark mode
- Radix UI primitives, lucide-react icons, Sonner toasts, and shadcn-style UI building blocks
- Vercel Analytics

## Getting Started

Use `pnpm` as the primary package manager for this repo.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev    # Start the local dev server
pnpm build  # Build the production bundle
pnpm start  # Run the production server
pnpm lint   # Run ESLint
```

## Project Structure

```text
app/         App Router entrypoints, layout, and global styles
components/  Navigation, sections, shared UI primitives, and interactive cards
data/        JSON content rendered by the homepage sections
docs/        Architecture, content, styling, and maintenance docs
hooks/       Small reusable React hooks
lib/         Shared utilities
public/      Static assets
```

## Content Editing

Most portfolio copy and structured content lives in `data/*.json`.

- Update `data/hero.json` for the hero section and top-level stats.
- Update `data/projects.json` for project cards and dialog content.
- Update `data/systems.json` for systems cards and metrics.
- Update `data/about.json` and `data/contact.json` for the remaining sections.

If you change data field names, icon names, or utility-class strings stored in JSON, update the matching component code as well.

## Documentation

- [Docs index](./docs/README.md)
- [Architecture](./docs/architecture.md)
- [Components](./docs/components.md)
- [Content model](./docs/content-model.md)
- [Styling and theme](./docs/styling-and-theme.md)
- [Development workflow](./docs/development-workflow.md)
- [Decisions](./docs/decisions.md)

## Notes

- No environment variables are currently required for local development.
- The site is a single-page experience rooted in `app/page.tsx`.
- There is no backend, CMS, or test suite in the current repo.
