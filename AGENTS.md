# Accountability Lab — Codex Guidance

## Purpose

This repository is an independent public research exhibit about AI accountability, approval gates, oversight UX, and decision records. It is not Coupa work and must never contain Coupa information, terminology, screenshots, customer data, source code, or internal research.

## Content boundaries

- Use fictional organisations and synthetic operational data.
- Mark every demonstrator as synthetic.
- Separate sourced facts from interpretation and hypotheses.
- Use primary official sources for regulatory dates and obligations.
- Never claim a pattern is legally compliant or guarantees compliance.
- Retain the visible “not legal advice or a compliance assessment” boundary.
- Recheck regulatory claims and `checkedAt` dates before publication changes.

## Experience standards

- This is an editorial research environment, not operational SaaS. Product-like interfaces are research props used to make an argument and must remain visibly synthetic.
- Preserve the paper, ink, rust and archival-dark visual language.
- Use Fraunces for editorial display, DM Sans for reading, and JetBrains Mono for evidence and metadata.
- Use illustration only when it sharpens the argument. Follow the saved LinkedIn whiteboard style with project colour tokens.
- Every interactive argument must remain understandable without motion.
- Maintain keyboard operation, visible focus, semantic headings, useful alternative text, and reduced-motion support.

## Engineering standards

- Keep the application static-first and Vercel-compatible.
- Keep research content in typed local modules under `src/content`.
- Keep client components limited to interactions that require browser state.
- Do not add authentication, databases, analytics, or AI APIs without explicit approval.
- Run `pnpm test && pnpm typecheck && pnpm lint && pnpm build` before handing off changes.

## Accountability standards

For material design changes, record what changed, why, the evidence considered, and unresolved risks in `decisions/` or an appropriate plan document. Do not mistake a recorded event for a defensible decision record.
