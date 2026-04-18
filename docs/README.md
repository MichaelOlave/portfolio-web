# Documentation Index

This folder holds the project-specific docs that go beyond the quick-start information in the root `README.md`.

## Guides

- [Architecture](./architecture.md): render flow, server/client boundaries, and runtime behavior
- [Components](./components.md): section map, shared components, and change impact notes
- [Content model](./content-model.md): JSON file shapes, field conventions, and safe content edits
- [Styling and theme](./styling-and-theme.md): Tailwind v4 setup, CSS tokens, fonts, and custom effects
- [Development workflow](./development-workflow.md): commands, editing workflows, and validation checklist
- [Decisions](./decisions.md): lightweight architecture and maintenance decisions visible in the codebase

## When To Use Which Doc

- Start with `architecture.md` if you are orienting yourself to the app.
- Use `content-model.md` before editing `data/*.json`.
- Use `components.md` before renaming section IDs, changing interactions, or touching shared UI pieces.
- Use `styling-and-theme.md` before changing color tokens, typography, or animation utilities.
- Use `development-workflow.md` before shipping changes or handing the project to someone new.
