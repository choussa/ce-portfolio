---
name: frontend-design
description: 'Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.'
argument-hint: 'What should this interface be, who is it for, and what constraints apply?'
license: 'Complete terms in LICENSE.txt'
---

# Frontend Design

Create real, production-grade frontend code with a clear aesthetic point of view.

## When to Use
- Build or redesign a web page, app screen, component, dashboard, landing page, or visual artifact.
- Upgrade plain UI into polished, high-quality interface work.
- Translate brand or mood direction into concrete frontend implementation.

## Outcomes
- Working code in the project stack (React, Vite, HTML/CSS/JS, etc.).
- Distinct visual identity, not template-looking output.
- Responsive and accessible interface with intentional motion.

## Procedure
1. Clarify objective and constraints.
2. Choose one bold aesthetic direction and state it before coding.
3. Build visual system tokens (type, palette, spacing, surfaces, effects).
4. Implement structure and interactions section-by-section.
5. Add distinctive atmosphere and motion moments.
6. Validate quality gates and iterate.

## Step 1: Clarify Objective and Constraints
Collect:
- Purpose and audience
- Required sections/components
- Content hierarchy and conversion goal
- Stack constraints (framework, libraries, no-backend or backend)
- Accessibility and performance expectations

If requirements are incomplete, ask targeted questions before coding.

## Step 2: Commit to an Aesthetic Direction
Pick one clear direction and commit fully, for example:
- Luxury engineering
- Editorial magazine
- Brutalist utility
- Retro-futurist
- Organic minimal

State the direction in one sentence and keep all choices aligned to it.

## Step 3: Build Visual System Tokens First
Define in CSS variables (or theme tokens):
- Color system: dominant tones + controlled accents
- Typography pair: expressive display + refined body font
- Surface system: panel, border, shadow, glow, texture
- Motion system: easing, durations, reveal rhythm

Rules:
- Avoid generic defaults (Inter, Roboto, Arial, plain system stack).
- Avoid cliche purple-on-white gradient palettes unless explicitly requested.
- Keep contrast readable and hierarchy obvious.

## Step 4: Implement UI Architecture
Build in this order:
1. Layout skeleton (desktop and mobile)
2. Key visual hero moment
3. Primary sections/cards/navigation
4. Interaction states (hover, focus, active)
5. Forms and call-to-action affordances

For each section/component:
- Create a memorable visual hook.
- Preserve readability and scan flow.
- Keep spacing and alignment intentional.

## Step 5: Motion and Atmosphere
Use high-impact, coherent motion instead of random effects:
- Page-load or hero reveal choreography
- Staggered entrances for repeated elements
- Purposeful hover/focus transitions
- Optional scroll-triggered accents

Add contextual atmosphere:
- Grids, textures, meshes, overlays, geometric framing, or subtle grain
- Decorative detail that supports, not overwhelms, content

## Branching Logic
- If user requests minimalist style: reduce ornament, tighten spacing, use subtle micro-motion.
- If user requests maximalist/cinematic style: increase layering, visual depth, and orchestrated animation.
- If working in an existing design system: preserve tokens and component language, innovate within constraints.
- If performance budget is strict: prefer CSS transforms/opacity, limit heavy runtime effects, reduce asset weight.
- If accessibility concerns arise: prioritize contrast, semantic structure, focus states, keyboard flow, reduced-motion support.

## Quality Gates Before Completion
- Distinctive identity: does it look intentional and memorable?
- Technical correctness: code compiles and matches stack conventions.
- Responsiveness: strong behavior across mobile and desktop breakpoints.
- Accessibility: semantic landmarks, labels, focus styles, usable contrast.
- Interaction polish: transitions and states feel deliberate.
- Requirement coverage: every requested section and feature is present.

## Completion Checklist
- Final code is implemented in files (not just described).
- Changed files are validated via tests/build/lint when available.
- User receives concise summary of what was built and where.
- Any blockers or unverified steps are explicitly noted.

## Anti-Patterns to Avoid
- Cookie-cutter portfolio layouts with no concept.
- Repeating the same fonts/palette/motion patterns across unrelated tasks.
- Overusing generic card grids without visual hierarchy.
- Shipping style without functional states, responsive behavior, or validation.

## Example Prompts
- Design and implement a premium civil engineering portfolio with blueprint aesthetics and subtle structural animations.
- Build a high-contrast editorial landing page for an architecture studio with asymmetric composition.
- Redesign this dashboard to feel industrial and data-dense while staying accessible and responsive.
