# Approval Pattern Gallery Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Build a public Next.js research exhibit that demonstrates meaningful AI approval patterns, decision records, failure modes, and their connection to emerging accountability expectations.

**Architecture:** Use a static-first Next.js App Router application with typed local content. Server components render the editorial narrative and source material; small client components own the hero sequence, autonomy ladder, pattern selection, workflow decisions, and approval-theatre comparison. No visitor data leaves the browser.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Vitest, Testing Library, local font packages, Vercel.

---

### Task 1: Scaffold the Next.js research exhibit

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `postcss.config.mjs`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

**Step 1: Define the package and scripts**

Use Next.js and React versions compatible with the current WFK project. Include scripts for `dev`, `build`, `start`, `lint`, `typecheck`, and `test`. Add Vitest, jsdom, and Testing Library for focused interaction tests. Use local variable-font packages for DM Sans, Fraunces, and JetBrains Mono.

**Step 2: Create the minimal App Router shell**

`app/layout.tsx` must load the three local fonts, set metadata defaults, and include a skip link. `app/page.tsx` initially renders a semantic `<main>` with the working title.

**Step 3: Add the global design tokens**

Define the approved paper, ink, rust, archival-dark, success, warning, and critical tokens in `app/globals.css`. Include reset styles, visible focus, responsive container utilities, and `prefers-reduced-motion` handling.

**Step 4: Install dependencies**

Run: `pnpm install`

Expected: lockfile created with no dependency resolution errors.

**Step 5: Verify the scaffold**

Run: `pnpm typecheck && pnpm lint && pnpm build`

Expected: all commands exit 0 and Next reports a statically generated `/` route.

**Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs .gitignore app
git commit -m "chore: scaffold accountability lab exhibit"
```

### Task 2: Model the research content

**Files:**
- Create: `src/content/types.ts`
- Create: `src/content/patterns.ts`
- Create: `src/content/scenarios.ts`
- Create: `src/content/regulatory-sources.ts`
- Create: `src/content/research-questions.ts`
- Create: `src/content/content.test.ts`

**Step 1: Write failing content-contract tests**

Test that:

- All eight pattern IDs are unique.
- Every pattern includes purpose, suitable conditions, failure mode, record requirements, and demo data.
- All scenarios are explicitly marked synthetic and include at least three possible human actions.
- Every regulatory item has an official source URL, `checkedAt`, jurisdiction, design implications, and non-legal-advice wording.

**Step 2: Run the test to verify it fails**

Run: `pnpm test -- src/content/content.test.ts`

Expected: FAIL because content modules do not exist.

**Step 3: Implement the typed content**

Create shared types for `ApprovalPattern`, `Scenario`, `ScenarioAction`, `DecisionRecord`, `RegulatorySource`, and `ResearchQuestion`. Populate the eight approved patterns and three approved fictional scenarios using concise operational language.

Use only these regulatory source families in the first release:

- European Commission AI Act overview and navigation FAQ.
- UK government AI regulatory principles guidance.
- NIST AI Risk Management Framework and Human-AI Interaction appendix.

**Step 4: Run the tests**

Run: `pnpm test -- src/content/content.test.ts`

Expected: PASS.

**Step 5: Commit**

```bash
git add src/content
git commit -m "feat: add typed accountability research content"
```

### Task 3: Build the creative hero and TX-1 origin section

**Files:**
- Create: `src/components/HeroSequence.tsx`
- Create: `src/components/HeroSequence.test.tsx`
- Create: `src/components/OriginSection.tsx`
- Create: `src/components/SectionHeader.tsx`
- Create: `public/images/accountability-funnel.png`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Generate the hero illustration**

Use the LinkedIn whiteboard visual skill and its inspected style reference. Generate a wide, sparse scene: a large confident machine funnels a consequential action toward one tiny human beside an oversized red/rust APPROVE button, but the human has no evidence or alternatives. Use paper, ink, and rust colours; no logos, caption, polished linework, or corporate illustration.

Save the frozen asset as `public/images/accountability-funnel.png`.

**Step 2: Write the failing hero interaction test**

The test must assert that the hero begins in `proposed`, advances to `paused`, and reveals the lesson “A button is not accountability” after the visitor activates the sequence.

**Step 3: Run the test to verify it fails**

Run: `pnpm test -- src/components/HeroSequence.test.tsx`

Expected: FAIL because `HeroSequence` does not exist.

**Step 4: Implement the hero**

Create an editorial split layout with:

- Accountability Lab eyebrow.
- Headline: “The most important moment in AI happens just before it acts.”
- Short framing copy.
- A staged proposed → paused → examined sequence.
- The hand-drawn accountability-funnel illustration.
- Primary jump link to the first demonstration and secondary link to the research framing.

The interaction must work with pointer and keyboard input and must not require motion to convey the state change.

**Step 5: Implement the TX-1 origin section**

Render a dark archival terminal panel with the six-stage loop and a plain-language explanation of the question TX-1 left unresolved. Include a labelled external-project link placeholder that is easy to configure later.

**Step 6: Run checks**

Run: `pnpm test -- src/components/HeroSequence.test.tsx && pnpm typecheck`

Expected: PASS.

**Step 7: Commit**

```bash
git add src/components app public/images/accountability-funnel.png
git commit -m "feat: create hero and TX-1 origin exhibit"
```

### Task 4: Build the autonomy ladder, gate anatomy, and pattern gallery

**Files:**
- Create: `src/components/AutonomyLadder.tsx`
- Create: `src/components/GateAnatomy.tsx`
- Create: `src/components/PatternGallery.tsx`
- Create: `src/components/PatternGallery.test.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing gallery test**

Assert that selecting a pattern changes the displayed purpose, failure mode, and decision-record requirements and preserves proper button selection semantics.

**Step 2: Run the test to verify it fails**

Run: `pnpm test -- src/components/PatternGallery.test.tsx`

Expected: FAIL.

**Step 3: Implement the autonomy ladder**

Render six levels from observe to irreversible action. Selecting a level changes the explanation and recommended oversight intensity. Avoid implying that confidence score alone determines autonomy.

**Step 4: Implement gate anatomy**

Use a layered editorial diagram showing proposed action, evidence, uncertainty, consequences, affected parties, alternatives, reversibility, escalation, and record. Make missing elements visibly weaken the gate.

**Step 5: Implement the gallery**

Use an accessible tab-like pattern selector with a detailed exhibit panel. Each pattern shows “use when”, “failure mode”, and “record this”. Avoid product-dashboard chrome.

**Step 6: Run tests and type checking**

Run: `pnpm test -- src/components/PatternGallery.test.tsx && pnpm typecheck`

Expected: PASS.

**Step 7: Commit**

```bash
git add src/components app
git commit -m "feat: add approval pattern language"
```

### Task 5: Build guided scenarios and decision-record exploration

**Files:**
- Create: `src/lib/create-decision-record.ts`
- Create: `src/lib/create-decision-record.test.ts`
- Create: `src/components/WorkflowDemonstrator.tsx`
- Create: `src/components/WorkflowDemonstrator.test.tsx`
- Create: `src/components/DecisionRecordExplorer.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Write failing record tests**

Test that a selected action creates a record containing scenario ID, synthetic-data flag, proposal, evidence snapshot, human decision, human edit if present, authority, reversibility, timestamp label, and execution status.

**Step 2: Run tests to verify failure**

Run: `pnpm test -- src/lib/create-decision-record.test.ts`

Expected: FAIL.

**Step 3: Implement the pure record generator**

Keep the function deterministic by accepting a timestamp label. Do not store or transmit records.

**Step 4: Implement workflow demonstrations**

Build a guided three-step presentation:

1. Inspect the AI proposal and evidence.
2. Choose approve, edit, reject, or escalate as allowed by the scenario.
3. Reveal execution consequence and resulting record.

Buttons lock after resolution until reset. Every scenario prominently states that the organisation and data are fictional.

**Step 5: Implement the record explorer**

Present “what was known”, “what was proposed”, “what the human changed”, “what happened”, and “what remains reviewable”. Make the difference between an event log and a defensible decision record explicit.

**Step 6: Run interaction tests**

Run: `pnpm test -- src/lib/create-decision-record.test.ts src/components/WorkflowDemonstrator.test.tsx`

Expected: PASS.

**Step 7: Commit**

```bash
git add src/lib src/components app
git commit -m "feat: add guided accountability workflows"
```

### Task 6: Add approval theatre, regulatory horizon, and open questions

**Files:**
- Create: `src/components/ApprovalTheatre.tsx`
- Create: `src/components/RegulatoryHorizon.tsx`
- Create: `src/components/ResearchQuestions.tsx`
- Create: `src/components/SourceLink.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Implement approval theatre**

Compare a weak one-click gate with a meaningful gate. Toggles reveal rubber-stamping, missing evidence, unavailable rejection, hidden consequence, approval fatigue, and responsibility laundering. The visitor should understand that adding friction everywhere is also a failure.

**Step 2: Implement the regulatory horizon**

For each official source, show:

- What the source says at a high level.
- The corresponding product-design question.
- Date checked.
- Direct official-source link.

Display the research/non-legal-advice disclaimer before the items. Do not label patterns as compliant or non-compliant.

**Step 3: Implement open questions**

End with unresolved research questions and a dated “next experiments” list. Include a link back to Anthony's portfolio and placeholders for future article links.

**Step 4: Run checks**

Run: `pnpm typecheck && pnpm lint`

Expected: PASS.

**Step 5: Commit**

```bash
git add src/components app
git commit -m "feat: connect oversight design to governance research"
```

### Task 7: Add discovery, sharing, and deployment foundations

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/opengraph-image.tsx`
- Create: `public/favicon.svg`
- Create: `README.md`
- Create: `AGENTS.md`
- Create: `.env.example`
- Modify: `app/layout.tsx`
- Modify: `next.config.ts`

**Step 1: Add metadata and social presentation**

Use the independent Accountability Lab identity. Create a strong Open Graph card around “The Moment Before Action” and the line “A button is not accountability.” Do not use WFK branding.

**Step 2: Add sitemap and robots**

Read the public base URL from `NEXT_PUBLIC_SITE_URL`, falling back safely for local development. Generate canonical metadata.

**Step 3: Document project operation**

`README.md` must cover purpose, non-Coupa/synthetic-data boundaries, local commands, Vercel deployment, content locations, source-refresh expectations, and the TX-1 relationship.

`AGENTS.md` must require evidence/source separation, synthetic data, accessible interactions, no compliance claims, decision logging for material design changes, and visual continuity with the approved palette.

**Step 4: Run production validation**

Run: `pnpm test && pnpm typecheck && pnpm lint && pnpm build`

Expected: all exit 0; `/`, `/sitemap.xml`, `/robots.txt`, and Open Graph image build successfully.

**Step 5: Commit**

```bash
git add app public README.md AGENTS.md .env.example next.config.ts
git commit -m "chore: prepare exhibit for public deployment"
```

### Task 8: Browser verification and refinement

**Files:**
- Modify as required by verified issues only.
- Create: `docs/verification/2026-07-11-foundation-check.md`

**Step 1: Start the app**

Run: `pnpm dev`

Expected: Next.js reports a local URL and remains running.

**Step 2: Verify with the browser skill**

Check:

- Desktop hero at 1440px.
- Mobile layout around 390px.
- All interactive states and reset paths.
- Keyboard navigation and focus visibility.
- Reduced-motion behaviour.
- No horizontal overflow.
- Every official source opens correctly.
- Direct section links land with headings visible.

**Step 3: Capture and inspect screenshots**

Confirm that the page feels like an editorial research exhibit, not a SaaS dashboard; the hero has one dominant visual idea; TX-1 reads as an origin artefact; and rust is used as emphasis rather than decoration.

**Step 4: Fix verified issues and rerun checks**

Run: `pnpm test && pnpm typecheck && pnpm lint && pnpm build`

Expected: all exit 0.

**Step 5: Record verification**

Document viewport checks, interaction checks, accessibility observations, source verification, and any intentionally deferred issues.

**Step 6: Commit**

```bash
git add .
git commit -m "test: verify approval pattern gallery foundation"
```
