# CLAUDE.md

Brief for AI coding assistants working on this repo.

## Project

Personal job-search tracker, released as MIT open source. Treat every change as something a stranger may pull from `main`.

## Ownership

The maintainer writes the core himself and uses AI for review. Do not implement these unless explicitly asked:

- `src/domain/` (status state machine, schemas)
- `src/scoring/` (`scoreFit`, `scoreCoolness`)

Review them instead: bugs, missing edge cases, missing tests, naming.

## Privacy

- Never commit `preferences.json`, anything in `data/` except `sample-*.json`, or `.env*`.
- Sample data uses invented companies and people only.
- The app stores no API keys in the browser. Any Anthropic API call goes through a server.

## Conventions

- TypeScript strict, no `any`. Arrow-function components, named exports.
- Comments in English.
- Validate external data (imports, agent output) with zod at the boundary.
- Board moves must go through the state machine; never set `status` directly.
- Design: primaries only (`--color-red`, `--color-yellow`, `--color-blue`) with fixed roles, black rules, visible focus, reduced-motion support.

## Commands

`npm run dev` · `npm test` · `npm run lint` · `npm run typecheck` · `npm run build`
