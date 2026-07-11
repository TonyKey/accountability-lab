# Approval Pattern Gallery — Experience Design

## Purpose

Approval Pattern Gallery is a public, independent research exhibit about the moment between an AI proposal and a consequential action. It establishes Anthony Key's expertise in AI accountability, oversight UX, approval design, and decision records through working demonstrations rather than a product pitch.

The project is entirely non-Coupa. All organisations, people, operational data, and decisions are fictional and synthetic. It may later inform WFK, but the initial identity is **Accountability Lab** and the initial purpose is public research, portfolio evidence, and thought leadership.

## Audience

The first release addresses:

- Senior AI and product leaders designing agentic systems.
- Product and UX practitioners responsible for human oversight.
- Business leaders introducing AI into operational workflows.
- Visitors arriving from LinkedIn, X, portfolio links, and direct outreach.

The exhibit should demonstrate credible systems thinking to experts while remaining legible to non-technical operational leaders.

## Positioning

**Working title:** The Moment Before Action

**Core proposition:** Human approval is only meaningful when the person has the context, authority, and options required to make a defensible decision.

**Editorial stance:** This is a research exhibit, not a compliance product, legal service, or finished framework. It translates emerging accountability expectations into interaction and workflow questions.

## Relationship to Existing Work

TX-1 Terminal Explorer is the origin artefact. It introduced the loop:

`AI diagnoses → dry-run validates → AI proposes → human decides → system acts → record remains`

The gallery broadens that question beyond TX-1's supply-chain scenario into a reusable pattern language. A dark, terminal-like TX-1 archival exhibit will sit inside the new editorial experience and link to the original project where appropriate.

WFK supplies the visual starting point: warm paper, ink, rust accents, editorial serif display type, plain-language explanation, mono evidence labels, generous spacing, restrained motion, and accessible controls. The gallery will not carry WFK branding or sales language.

## Experience Structure

### 1. Hero — The Moment Before Action

The hero must be memorable and immediately demonstrative. A large editorial statement is paired with a staged decision sequence in which an AI action travels toward a visible consequence and pauses at a deliberately imperfect human gate.

The central visual metaphor will use Anthony's crude meeting-whiteboard drawing language, recoloured to the Accountability Lab tokens: hesitant ink lines, a single rust/red pressure point, and large empty areas. The image should communicate that a large, confident AI system can still funnel responsibility into one tiny, poorly equipped approval button.

The visitor can move the sequence from **proposed** to **paused** and reveal the first lesson: a button is not accountability.

### 2. Origin — What TX-1 Revealed

A compact archival section reconstructs the TX-1 loop and identifies the unresolved question it created: what must a person know before an AI is allowed to change the world?

### 3. Autonomy Is Not Binary

An interactive ladder distinguishes observing, recommending, preparing, reversible action, consequential action, and irreversible action. The gate becomes more demanding as consequence, uncertainty, reach, and irreversibility increase.

### 4. Anatomy of a Meaningful Gate

A decision surface is deconstructed into proposed action, evidence, uncertainty, consequences, affected parties, alternatives, reversibility, escalation, and the resulting record.

### 5. Pattern Gallery

Initial patterns:

1. Threshold gate
2. Review with evidence
3. Edit and approve
4. Escalation gate
5. Two-person rule
6. Sampled oversight
7. Time-bound delegation
8. Reversible execution

Every pattern shows:

- The operational situation it addresses.
- What the human sees and can do.
- When the pattern is useful.
- How it fails or becomes approval theatre.
- What evidence the decision record must retain.

### 6. Guided Workflow Demonstrations

Three synthetic, non-Coupa scenarios allow visitors to make a decision and inspect its record:

- Customer compensation prepared after a service failure.
- Supplier payment exception proposed despite a policy mismatch.
- Public campaign change prepared in response to a market signal.

These are walkthroughs, not productivity tools. Each scenario exposes actions, alternatives, consequences, confidence, and reversibility. The visitor's decision updates a local in-browser decision record.

### 7. Approval Theatre

A side-by-side interactive comparison contrasts a weak gate with meaningful oversight. Failure modes include rubber-stamping, missing evidence, unexplained confidence, overloaded queues, unavailable rejection, hidden consequences, and post-hoc responsibility laundering.

### 8. Anatomy of a Decision Record

The visitor explores the evidence available at decision time, the AI proposal, human edits, authority, final action, execution status, and later outcome. This section distinguishes an operational record from a simple audit event.

### 9. Regulatory Horizon

This section translates primary-source themes into design prompts. It will reference the EU AI Act, UK AI regulatory principles, and NIST AI RMF. Topics include human oversight, activity logging, traceability, documentation, monitoring, accountability, governance, contestability, and redress.

It will include a visible disclaimer: educational design research, not legal advice or a compliance assessment. Dates and claims must be source-linked and easy to update.

### 10. Open Questions

The exhibit ends as an active research programme, listing unresolved questions and planned experiments rather than claiming the subject is solved.

## Visual System

- Paper: `#f5f2eb`
- Warm paper: `#efeae0`
- Ink: `#1f1e1b`
- Soft ink: `#57534a`
- Rust: `#b85c38`
- Deep rust: `#8a3e22`
- Soft rust: `#e8c5b0`
- Dark archival surface: `#232019`
- Display: Fraunces
- Sans: DM Sans
- Evidence/metadata: JetBrains Mono

Illustration follows the LinkedIn whiteboard style but uses the gallery's paper, ink, and rust tokens. It remains sparse, awkward, human, and explanatory rather than decorative.

## Technical Architecture

- Next.js App Router with TypeScript.
- Static-first rendering suitable for Vercel.
- Local typed content modules for patterns, scenarios, regulatory references, and research questions.
- Client components only for demonstrations and stateful explanation.
- No authentication, database, external AI API, or persistence in the first release.
- URL-addressable exhibit sections for direct links from social posts and outreach.
- Accessible semantic structure, keyboard interaction, visible focus, reduced-motion support, and responsive layouts.
- Metadata, Open Graph image, sitemap, and robots configuration for public discovery.

## State and Data Flow

Scenario and pattern data remain immutable. Visitor decisions exist only in component state. Selecting an action creates an in-browser decision-record representation and reveals the consequence. Reset returns the scenario to its initial teaching state.

No visitor inputs are transmitted or stored.

## Error and Edge-State Design

- Every interaction has a visible initial, selected, resolved, and reset state.
- Buttons lock after a decision until the visitor resets or advances.
- Missing optional evidence is shown as a deliberate accountability warning, not an empty UI failure.
- JavaScript-independent sections still communicate the full argument.
- Motion never carries essential meaning and respects reduced-motion preferences.

## Verification

- Type checking, linting, and production build.
- Component tests for decision state and record generation where valuable.
- Browser walkthrough at desktop and mobile widths.
- Keyboard-only interaction pass.
- Reduced-motion and basic contrast review.
- Visual comparison against WFK tokens and the approved exhibit direction.
- Link and source verification for the regulatory horizon.

## Initial Success Criteria

A senior visitor should understand within two minutes that:

1. Approval is a designed operational capability, not a button.
2. Different AI actions require different oversight patterns.
3. A defensible decision requires context, authority, alternatives, and a durable record.
4. Anthony is investigating these questions through credible, working interaction design.

The page should contain at least one visually memorable moment and one interaction worth sharing directly from LinkedIn or a portfolio case study.
