A branded service offering tile for the marketing site — pairs an icon, category badges, title, description, price/meta, and a quiet arrow CTA. Use in a 2–3 column grid on the Services view.

```jsx
<ServiceCard
  title="Chiropractic & Fascia Release"
  description="Precise adjustments paired with hands-on fascia work to restore ease of motion."
  badges={["In-home & in-office", "50 min"]}
  meta="From $180"
  cta="Explore"
/>
```

Composes `Card` (interactive) + `Badge`. Provide a 24px line `icon` for the best look.
