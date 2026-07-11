# Approval Pattern Gallery

**The Moment Before Action** is an independent Accountability Lab research exhibit about meaningful human approval, oversight patterns, and decision records for consequential AI actions.

It continues a question first surfaced in [TX-1 Terminal Explorer](https://github.com/TonyKey/ANT-TX1-TERMINAL): what must a person know before an AI is allowed to change the world?

## Boundaries

- This is completely independent of Coupa.
- All organisations, people, workflows, and operational data are fictional and synthetic.
- The regulatory horizon is educational design research, not legal advice or a compliance assessment.
- The experience is a presentation and investigation, not an operational product.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```

## Content structure

- `src/content/patterns.ts` — approval pattern language.
- `src/content/scenarios.ts` — synthetic workflow demonstrations.
- `src/content/regulatory-sources.ts` — official sources and design implications.
- `src/content/research-questions.ts` — the active research programme.
- `docs/plans/` — approved experience and implementation decisions.

## Vercel deployment

Import the Git repository into Vercel and set:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

No database or server-side secret is required for this foundation.

## Updating regulatory material

Use official primary sources. Verify dates and claims, update each source’s `checkedAt` field, and retain the non-legal-advice boundary. Never infer compliance from the presence of an interface pattern.
