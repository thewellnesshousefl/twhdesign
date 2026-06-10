A labelled checkbox for consent, opt-ins, and intake questions.

```jsx
<Checkbox label="Text me appointment reminders" checked={ok} onChange={e => setOk(e.target.checked)} />
```

Controlled via `checked` + `onChange`. Square with sage fill + white check when on.
