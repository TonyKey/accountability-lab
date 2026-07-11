# Accountability Lab

Accountability Lab is an independent public research studio exploring confidence, control and responsibility in AI systems. It turns accountability questions into inspectable interface experiments rather than presenting a fictional finished product.

## The Studio

- **Approval Pattern Gallery** — where should a person intervene?
- **Decision Record Explorer** — can we reconstruct what happened?
- **Oversight Console** — what deserves human attention now?
- **Accountability Eval Kit** — how accountable is this workflow?

The work continues a question first surfaced in [TX-1 Terminal Explorer](https://github.com/TonyKey/ANT-TX1-TERMINAL): what must a person know before an AI is allowed to change the world?

## Boundaries

- Completely independent of Coupa and currently standalone from WFK.digital.
- All organisations, people, workflows and operational data are fictional and synthetic.
- Regulatory material is educational design research, not legal advice or a compliance assessment.
- The interfaces are research instruments and presentation environments, not operational products.

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

## Vercel deployment

Set `NEXT_PUBLIC_SITE_URL=https://accountability-lab.studio` for canonical metadata and sitemap generation. No database, authentication or server-side secret is required for this research foundation.
