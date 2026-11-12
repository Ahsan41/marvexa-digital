
# Marvexa Digital visual system

## Brand palette

- White: primary light sections and surfaces.
- Near-black: dark sections, headings, and high-contrast type.
- Brand red: primary actions and selective highlights.
- Muted gold: secondary premium details and quiet accents.
- Warm gray: secondary surfaces, body copy, and dividers.

Use the shared CSS custom properties in `abstract/_tokens.scss`; avoid
one-off brand colors and legacy aliases.

## Typography

Use the Outfit font variable and the shared heading/body scale in
`base/_typography.scss`. Keep headings concise and strongly hierarchical; body
copy should remain readable with a relaxed line height.

## Components

- Primary buttons use a solid red fill; secondary buttons use a white surface.
- Cards use restrained borders and shadows, with color reserved for hover/focus
  states and small visual details.
- Dark sections use the shared `.theme-dark` token scope for readable contrast.
- Prefer subtle transitions and respect `prefers-reduced-motion`.


 