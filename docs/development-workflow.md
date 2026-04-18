# Development Workflow

## Canonical Commands

Use `pnpm` as the primary package manager for this repo.

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## What Kind Of Change Are You Making?

### Content-Only Changes

If you are only updating copy or portfolio entries:

1. Edit the relevant file under `data/`.
2. Run `pnpm dev`.
3. Verify the updated section in the browser.
4. Run `pnpm lint` before shipping.

### Component Or Interaction Changes

If you are changing layout, navigation, dialogs, or icon handling:

1. Update the relevant file under `components/` or `app/`.
2. Check for matching data assumptions in `data/`.
3. Run `pnpm dev`.
4. Verify scroll behavior, dialogs, and responsive layout.
5. Run `pnpm lint`.
6. Run `pnpm build` before finishing.

### Styling Or Theme Changes

If you are changing tokens, animations, or typography:

1. Update `app/globals.css` and, if needed, `tailwind.config.ts`.
2. Check light and dark themes.
3. Verify animated background performance still feels acceptable.
4. Run `pnpm lint`.
5. Run `pnpm build`.

## Validation Checklist

After meaningful changes, check:

- homepage renders without hydration errors
- navigation scrolls to the intended section
- active nav highlighting still tracks scroll position
- project dialogs open, close, and scroll correctly
- light and dark themes both look correct
- the site still feels usable on narrow screens
- external links still point where you expect

## Current Repo Assumptions

- No environment variables are required today.
- No automated test suite is present yet.
- No deployment-specific runbook is needed beyond the standard Next.js build and start commands.
- The repo currently includes both `pnpm-lock.yaml` and `package-lock.json`, but the docs and local workflow should stay aligned around `pnpm`.

## Useful Orientation Files

- `README.md` for quick start
- `docs/architecture.md` for app shape
- `docs/content-model.md` before editing JSON content
- `docs/styling-and-theme.md` before changing tokens or animations
- `AGENTS.md` for repo-specific guidance used by coding agents
