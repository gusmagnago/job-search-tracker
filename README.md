# job-search-tracker

A personal job-search tracker with a Bauhaus face: an AI-scored inbox of roles, a drag-and-drop board for the pipeline, and per-role help from Claude for cover letters and application questions.

> Status: early. The scaffold is in place; the domain, scoring and UI are being built in the open.

## Idea

Job searching has two separate questions, so every role gets two scores:

| Score | Question | Driven by |
|---|---|---|
| **Fit** | Can I get this job? | Stack, seniority, language, location |
| **Coolness** | Would I love this job? | Your `preferences.json`: domain, product, team, dealbreakers |

Roles flow through a small state machine:

```
found → to_apply → applied → replied → interview → offer
  ↘ skipped                     ↘ rejected (from any active stage)
```

A scheduled agent finds roles and drops them into **Found**. You triage them in the inbox, then drag cards across the board. A human always submits the application; the tool never applies on your behalf.

## Design

Primary colours only, each with one job:

- **Red**: you need to act (follow-ups due)
- **Yellow**: a signal (strong scores, replies)
- **Blue**: a conversation is happening (interviews, calls)

Black rules separate everything. No gradients, no shadows.

## Make it yours

```bash
cp preferences.example.json preferences.json   # edit the weights
npm install
npm run dev                                     # http://localhost:5198
```

`preferences.json` and everything in `data/` except `sample-*.json` are gitignored, so your applications, notes and salary expectations stay on your machine.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on :5198 |
| `npm test` | Vitest |
| `npm run lint` | oxlint, zero warnings |
| `npm run typecheck` | `tsc -b` with strict settings |
| `npm run build` | Typecheck and production build |

## Stack

React 19, TypeScript (strict, `noUncheckedIndexedAccess`), Vite, zod, Vitest and Testing Library, oxlint. CI runs lint, typecheck, tests and build on every PR.

## Roadmap

- [ ] Domain: `Status` state machine and `Application` schema
- [ ] Inbox with detail drawer and keyboard triage
- [ ] Board with drag and drop (transitions validated by the state machine)
- [ ] `scoreFit` and `scoreCoolness`, fully unit-tested
- [ ] Import from a CSV export
- [ ] "Ask Claude" and "Draft cover letter" per role
- [ ] Scheduled agent that writes new roles into Found

## License

MIT
