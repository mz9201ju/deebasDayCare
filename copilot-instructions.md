# Copilot Instructions

## Windows Command Requirement

Always use `npm.cmd` instead of `npm` when running scripts in this repository.

Run plain `npm` only if PowerShell execution policy is bypassed first.

If plain `npm` is required, first run:

```powershell
powershell -ExecutionPolicy Bypass
```

## Code Organization Rules

- Keep UI components under `src/components`.
- Keep page-level routes under `src/pages`.
- Keep business/API logic under `src/services`.
- Keep static content/data under `src/content`.
- Keep shared app config and utilities under `src/lib`.

## Refactor Standards

- Remove dead code and unused assets when confirmed not referenced.
- Prefer extracting repeated literals/data into content or config modules.
- Keep components focused on presentation and interaction.
- Move side-effectful network logic into service modules.

## SEO And Performance Standards

- Use `src/components/Seo.jsx` on every route page.
- Keep page title, description, and canonical path updated per route.
- Favor compressed images and lazy loading for media-heavy sections.
- Keep animations lightweight and respect reduced-motion preference.

## Validation

Always run this combined validation after edits (lint and build together):

```powershell
npm.cmd run lint; npm.cmd run build
```
