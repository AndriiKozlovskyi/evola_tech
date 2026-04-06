# Design System Specification: The Technical Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Curator"**

This design system rejects the "template" look of standard IT portfolios in favor of a high-end editorial experience. It treats code and technical infrastructure as fine art. By utilizing intentional asymmetry, expansive negative space, and a "soft-layering" philosophy, we move away from rigid, boxy layouts. The goal is to convey an image of a professional who doesn't just "fix" IT problems but architecturally designs digital solutions with precision and elegance.

**The Signature Feel:**
- **Intentional Asymmetry:** Avoid perfectly centered blocks. Offset headlines and use staggered grid layouts to lead the eye.
- **Editorial Scale:** High-contrast typography where display text is unapologetically large, paired with generous tracking for a premium feel.
- **Atmospheric Depth:** The UI should feel like sheets of semi-transparent vellum layered over a clean, well-lit studio desk.

---

## 2. Colors: Tonal Architecture
We move beyond "color by numbers" to a system of tonal depth. The palette is rooted in a "Deep Technical Blue" that conveys authority, balanced by a range of nuanced greys.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid #e9ecef borders for sectioning. Boundaries between content sections must be defined solely through background color shifts. For example, a `surface-container-low` section should transition directly into a `surface` section without a stroke. This creates a seamless, infinite-scroll feel.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. Use these tokens to define depth:
- **Surface (Background):** `#f7f9ff` – The base canvas.
- **Surface-Container-Low:** `#f1f4f9` – Use for large secondary sections (e.g., a "Services" area).
- **Surface-Container-Lowest:** `#ffffff` – Use for floating cards or interactive elements to make them "pop" against the canvas.
- **Surface-Container-High:** `#e5e8ee` – Use for small, inset UI elements like code snippets or metadata tags.

### The Glass & Gradient Rule
To ensure the system feels "Technical" rather than just "Minimal," use **Glassmorphism** for navigation bars and floating action menus:
- **Token:** `surface` at 80% opacity + `backdrop-blur: 20px`.
- **Signature Texture:** For primary CTAs, use a subtle linear gradient from `primary` (#004275) to `primary_container` (#005a9c) at a 135-degree angle. This adds "soul" and prevents the technical blue from feeling flat.

---

## 3. Typography: The Inter Stack
We utilize **Inter** for its mathematical precision and exceptional legibility.

| Level | Size | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | 3.5rem | 700 | -0.02em | Hero headlines. Limit to < 5 words. |
| **Headline-MD** | 1.75rem | 600 | -0.01em | Section headers. |
| **Title-MD** | 1.125rem | 500 | 0 | Card titles and prominent labels. |
| **Body-LG** | 1.0rem | 400 | +0.01em | Primary reading text. |
| **Label-MD** | 0.75rem | 600 | +0.05em | Uppercase technical metadata/tags. |

**Editorial Note:** Always pair a `Display-LG` headline with a `Body-LG` sub-headline. The jump in scale creates the high-end "architectural" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "heavy" for a minimalist portfolio. This system uses **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on top of a `surface-container-low` (#f1f4f9) background. This creates a crisp, natural lift without a single pixel of shadow.
- **Ambient Shadows:** For hover states on project cards, use a tinted shadow:
  - `box-shadow: 0 20px 40px rgba(0, 66, 117, 0.06);` 
  - *Note: We use the `primary` blue color at a very low opacity for shadows to mimic natural light refraction.*
- **The Ghost Border:** If a form input or card requires a boundary for accessibility, use a "Ghost Border": `outline-variant` (#c1c7d2) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards (Portfolio & Services)
- **Background:** `surface-container-lowest` (#ffffff).
- **Radius:** `xl` (0.75rem).
- **Interaction:** On hover, apply a `scale(1.03)` transform and transition the `Ambient Shadow`.
- **Rule:** No dividers. Use 2rem of internal padding (Spacing Scale) to separate the image, title, and description.

### Buttons
- **Primary:** `primary` background, `on_primary` text. Radius: `md`.
- **Secondary:** Transparent background, `primary` text, `Ghost Border` (20% opacity `outline-variant`).
- **Interactive State:** Transitions should be `200ms cubic-bezier(0.4, 0, 0.2, 1)`.

### Input Fields
- **Style:** Understated. Use `surface-container-low` as the background. 
- **Focus State:** Transition the background to `surface-container-lowest` and add a 2px `primary` bottom-border only. Avoid full-box focus rings.

### Signature Component: The "Technical Ghost Chip"
For displaying skills (e.g., "React," "AWS"), use a chip with:
- **Background:** `secondary_container` at 30% opacity.
- **Text:** `on_secondary_container`.
- **Radius:** `full`.
- **Border:** None.

---

## 6. Do's and Don'ts

### Do
- **Do** use massive amounts of whitespace. If a section feels "finished," add 20% more padding.
- **Do** use `surface-dim` for footer backgrounds to ground the layout.
- **Do** use the `primary_fixed` (#d2e4ff) color for subtle highlight backgrounds behind important text keywords.

### Don't
- **Don't** use 100% black text. Always use `on_surface` (#181c20) for a softer, premium charcoal feel.
- **Don't** use sharp corners. Every element should have a minimum radius of `sm` to maintain the "accessible" brand personality.
- **Don't** use aggressive, fast animations. All transitions must feel fluid and weighted.
- **Don't** use "divider lines" to separate list items. Use a 16px vertical gap instead.