A pill-shaped button for primary actions, navigation, and form submits — use `primary` (sage) for the main action on a view, `secondary` (outline) beside it, `ghost` for low-emphasis, and `accent` (clay) only for rare warm moments.

```jsx
<Button variant="primary" size="lg">Book a session</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` · `secondary` · `ghost` · `accent` · `dark`. Sizes: `sm` · `md` · `lg`. Supports `fullWidth`, `disabled`, `iconLeft`/`iconRight`. Hover darkens fills and washes outlines; motion is slow and calm (no bounce).
