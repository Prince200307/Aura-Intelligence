# Design System Strategy: The Ethereal Ledger

## 1. Overview & Creative North Star
This design system is built upon the **"The Ethereal Ledger"**—a creative North Star that reimagines financial management not as a rigid spreadsheet, but as a calm, curated editorial experience. It merges the precision of *Linear*, the tactile elegance of *Apple*, and the spatial clarity of *Notion*. 

The system moves beyond the "template" look by rejecting traditional boxy containment. Instead, it utilizes intentional asymmetry and "breathing depth." We treat the UI as an atmospheric environment where information floats on layers of light and frosted glass, creating a sense of intelligence and calm authority.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a warm, organic foundation to reduce "screen fatigue" and establish trust.

### The Palette
*   **Foundation:** `background` (#faf9f6) – A warm, parchment-like off-white.
*   **Accent:** `primary` (#3525cd) – A deep, authoritative indigo for key actions.
*   **Intelligence:** `tertiary` (#7e3000) – Used sparingly for "smart" insights or editorial highlights.

### The "No-Line" Rule
Standard 1px borders for sectioning are strictly prohibited. Information architecture must be defined through **Tonal Transitions**. To separate a sidebar from a main feed, transition from `surface-container-low` to `surface`. Boundaries are felt through color shifts, not drawn with ink.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials:
1.  **Base:** `surface` (Background layer)
2.  **Sectioning:** `surface-container-low` (Subtle inset areas)
3.  **Interactive Cards:** `surface-container-lowest` (Pure #FFFFFF at 0.85 opacity).

### The "Glass & Gradient" Rule
Floating elements (Modals, Hover Cards) must utilize **Glassmorphism**. Use `surface-container-lowest` with a `12px` backdrop-blur. For primary CTAs, apply a subtle linear gradient from `primary` (#3525cd) to `primary_container` (#4f46e5) at a 135° angle to give buttons a "gem-like" physical presence.

---

## 3. Typography: Editorial Authority
We utilize a dual-font approach: **Manrope** for structural displays and **Inter** for high-utility data.

*   **Display (Manrope - 3.5rem):** Reserved for "Hero" moments like total net worth. It should feel monumental.
*   **Headlines (Manrope - 1.5rem to 2rem):** Used to introduce new narrative sections.
*   **Body (Inter - 0.875rem):** The workhorse. Balanced for maximum legibility in transaction lists.
*   **Label (Inter - 0.75rem / Uppercase / Tracking-Wide):** Use these as "Metadata Tags." The wide tracking adds a premium, architectural feel to small text.

The hierarchy is designed to lead the eye from "The Story" (Display) down to "The Detail" (Body) without friction.

---

## 4. Elevation & Depth
In this system, depth is a functional tool, not a decoration.

*   **The Layering Principle:** Avoid shadows for static elements. Create lift by placing a `surface-container-lowest` card on top of a `surface-container-low` background. This "Tonal Lift" is cleaner and more sophisticated than a drop shadow.
*   **Ambient Shadows:** For elevated elements (e.g., active dropdowns), use a multi-layered shadow:
    *   *Layer 1:* 0px 4px 20px rgba(27, 28, 26, 0.04)
    *   *Layer 2:* 0px 12px 40px rgba(27, 28, 26, 0.06)
    Shadows must be tinted with the `on-surface` color to feel like natural ambient occlusion.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at 20% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `12px` radius. No border. White text.
*   **Secondary:** `surface-container-high` fill with `primary` text. No border.
*   **Tertiary:** Transparent background. `primary` text. Use only for low-priority actions (e.g., "Cancel").

### Cards & Financial Lists
*   **Execution:** Forbid divider lines. Use `16px` of vertical whitespace to separate transaction items. 
*   **Interaction:** On hover, a card should transition from 85% opacity to 100% and scale 1.01x to simulate "physical attraction."

### Input Fields
*   **Styling:** `12px` radius. Fill with `surface-container-low`. 
*   **States:** On focus, transition the background to `surface-container-lowest` and apply a `1px` Ghost Border in `primary`.

### "Aura" Intelligence Chips
*   **Context:** Unique to this app. Use for AI-generated expense insights.
*   **Style:** `8px` radius. `secondary-container` background with a subtle pulse animation. Use `label-sm` typography.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts for dashboards (e.g., a wide 2/3 column for charts and a narrow 1/3 column for recent activity) to avoid the "Standard Grid" look.
*   **Do** use `surface-dim` for inactive or "past-tense" information.
*   **Do** prioritize white space over lines. If in doubt, add 8px more padding.

### Don't
*   **Don’t** use pure black (#000000) for text. Always use `on-surface` (#1b1c1a) to maintain the "warm" aesthetic.
*   **Don’t** use harsh 1px dividers to separate list items. 
*   **Don’t** use high-saturation reds or greens for financial status. Use the semantic tokens (`error`, `on-tertiary-container`) which are calibrated to remain "calm" even when communicating overspending.