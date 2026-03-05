# Agent Guide

## Windows Command Requirement

Use `npm.cmd` for package and script execution in this repo.

If you must run plain `npm`, launch PowerShell with:

```powershell
powershell -ExecutionPolicy Bypass
```

## Objective

Maintain a clean, production-ready daycare website with strict separation of concerns, solid SEO, and good runtime performance.

## Expected Workflow

1. Read the target page/component and related service/content/config files.
2. Remove dead code and unused assets safely.
3. Keep business logic in `src/services` and content in `src/content`.
4. Keep route metadata updated through `Seo` usage.
5. Validate with a combined command before finalizing: `npm.cmd run lint; npm.cmd run build`.

## Architecture Quick Map

- `src/App.jsx`: global layout and route registration.
- `src/pages`: route screens.
- `src/components`: shared UI and SEO component.
- `src/services`: API interactions.
- `src/content`: static data arrays.
- `src/lib`: config + helpers.

## Exit Criteria

- No dead imports/files introduced.
- Lint passes.
- Build passes.
- SEO metadata exists for each route.
- Docs reflect current structure and run commands.
