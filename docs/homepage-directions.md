# Homepage directions — proposal

> **Constraint:** `src/content/claims.ts` does not exist yet.
> Per CLAUDE.md, no specific metrics, customer names, press quotes, or
> performance numbers may appear in final copy until they are added to
> that file with `verified: true`.
>
> Items below marked **[needs verification]** are structural placeholders.
> They define *what kind* of proof goes in each slot, not the proof itself.

---

## Direction A: "The Proof Wall"

**Positioning:** Lead with hard evidence — let numbers and logos do the
talking so investors see traction before they read a single paragraph.

### Hero

| Element   | Content |
| --------- | ------- |
| Headline  | Operational results, not promises. |
| Subhead   | blomso gives operators the data infrastructure to measure, prove, and improve what matters. |
| Primary CTA | See how it works |

### Proof section (immediately below hero)

A single full-width bar containing three slots, each rendered only when
a corresponding verified claim exists:

| Slot | Type | Status |
| ---- | ---- | ------ |
| Metric strip (e.g., X operators, Y data points) | Numeric claims | **[needs verification]** — add entries to `claims.ts` |
| Logo garden (customer / partner logos) | Social proof | **[needs verification]** — need logo list + permission flags |
| Press quote or badge (e.g., "Featured in …") | Authority | **[needs verification]** — need source + date |

**Render rule:** If zero verified claims exist for a slot, hide that
slot entirely — never show an empty row.

### Sections (6 max)

| # | Section | Purpose | Claim dependency |
| - | ------- | ------- | ---------------- |
| 1 | Hero | Hook + single CTA | None (descriptive only) |
| 2 | Proof bar | Metrics / logos / press | **[needs verification]** — all slots gated |
| 3 | Problem statement | Articulate the operator pain point (narrative, no stats) | None |
| 4 | How it works | 3-step visual flow explaining the product | None (structural) |
| 5 | Results snapshot | Before/after or case-study card | **[needs verification]** — needs case study data |
| 6 | CTA + footer | Final conversion prompt | None |

### Recommended type pair: **Option A — "Institutional"**
DM Serif Display headlines project financial gravity; Inter body text
keeps the proof bar and metric strip clean.

---

## Direction B: "The Operator's Lens"

**Positioning:** Speak directly to the operator persona — frame blomso
as the tool *they* have been assembling manually, now purpose-built.

### Hero

| Element   | Content |
| --------- | ------- |
| Headline  | Your operation, measured end to end. |
| Subhead   | One platform to capture field data, surface inefficiencies, and show stakeholders exactly where the value is. |
| Primary CTA | Request a walkthrough |

### Proof section (after "How it works", not top-of-page)

Placed lower because this direction leads with empathy, not evidence.
Proof arrives once the visitor already sees themselves in the narrative.

| Slot | Type | Status |
| ---- | ---- | ------ |
| Operator testimonial cards (quote + name + role) | Social proof | **[needs verification]** — need quotes + consent |
| Outcome metrics (per-operator or aggregate) | Numeric claims | **[needs verification]** — add to `claims.ts` |

### Sections (6 max)

| # | Section | Purpose | Claim dependency |
| - | ------- | ------- | ---------------- |
| 1 | Hero | Empathy-first hook + CTA | None |
| 2 | Pain points | 3 cards describing operator struggles (narrative) | None |
| 3 | How it works | Product walkthrough, screenshot or diagram | None |
| 4 | Proof & outcomes | Testimonials + metrics | **[needs verification]** |
| 5 | Integration / compatibility | Logos of systems blomso connects to | **[needs verification]** — need integration list |
| 6 | CTA + footer | Conversion close | None |

### Recommended type pair: **Option B — "Technical"**
Plus Jakarta Sans headlines feel approachable yet expert; Source Sans 3
body reads clearly in the narrative-heavy pain-point cards.

---

## Direction C: "The Investor Brief"

**Positioning:** Treat the homepage like page one of a pitch deck —
market size → problem → solution → traction — so investors absorb the
thesis in one scroll.

### Hero

| Element   | Content |
| --------- | ------- |
| Headline  | The operating layer for measurable outcomes. |
| Subhead   | blomso replaces fragmented spreadsheets and siloed reporting with a single source of operational truth. |
| Primary CTA | View the platform |

### Proof section (dedicated "Traction" section, mid-page)

Structured like a pitch-deck traction slide:

| Slot | Type | Status |
| ---- | ---- | ------ |
| Key growth metrics (MRR, operator count, data volume) | Numeric claims | **[needs verification]** — add to `claims.ts` |
| Named pilot logos | Social proof | **[needs verification]** — need logo permissions |
| Timeline milestones (founded → first pilot → current) | Company milestones | **[needs verification]** — need dates |

### Sections (6 max)

| # | Section | Purpose | Claim dependency |
| - | ------- | ------- | ---------------- |
| 1 | Hero | Thesis statement + CTA | None |
| 2 | Market context | Size the problem — why now (narrative framing) | **[needs verification]** if citing market-size numbers |
| 3 | Solution overview | What blomso does in concrete terms | None |
| 4 | Traction | Metrics + logos + milestones | **[needs verification]** — all slots gated |
| 5 | Team or backers strip | Faces / names / affiliations | **[needs verification]** — need bios + photos |
| 6 | CTA + footer | "Talk to us" close | None |

### Recommended type pair: **Option A — "Institutional"**
Serif headlines mirror pitch-deck gravity; the timeline and traction
section benefit from Inter's tabular number support.

---

## Comparison matrix

| Criteria | A: Proof Wall | B: Operator's Lens | C: Investor Brief |
| -------- | ------------- | ------------------- | ----------------- |
| Primary audience | Investors first, operators second | Operators first, investors second | Investors almost exclusively |
| Proof placement | Top of page | Mid-page | Dedicated mid-page section |
| Works with zero verified claims? | Partially — hero + problem + how-it-works still stand | Yes — 4 of 6 sections are claim-free | Weakly — traction section would be empty |
| Brand tone fit | High | High | High |
| Risk | Empty proof bar if claims aren't populated soon | Slower investor hook | Thin without real traction data |

## Recommendation

**Start with Direction B ("The Operator's Lens")** as the initial build.
It is the most resilient to the current absence of `src/content/claims.ts`
— four of six sections need zero verified claims. Once claims are
populated and verified, layer in proof elements and consider migrating
toward Direction A.

## Next step

Create `src/content/claims.ts` with the verified-claim schema and
populate the first batch of data so proof sections can be unblocked.
