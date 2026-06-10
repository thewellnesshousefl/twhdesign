import React from 'react';

/**
 * The Wellness House — Eyebrow
 * Uppercase, wide-tracked micro-label that sits above headings.
 */
export function Eyebrow({ children, tone = 'sage', as = 'span', style = {}, ...rest }) {
  const Tag = as;
  const tones = {
    sage: 'var(--brand-strong)',
    muted: 'var(--text-muted)',
    clay: 'var(--clay-700)',
    light: 'var(--text-on-dark)',
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: tones[tone],
    ...style,
  };
  return (
    <Tag style={base} {...rest}>
      <span aria-hidden="true" style={{ width: '24px', height: '1px', background: 'currentColor', opacity: 0.5 }} />
      {children}
    </Tag>
  );
}
