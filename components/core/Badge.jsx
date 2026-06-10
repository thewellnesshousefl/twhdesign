import React from 'react';

/**
 * The Wellness House — Badge
 * Small status / category pill. Quiet, tinted backgrounds.
 */
export function Badge({ children, tone = 'sage', style = {}, ...rest }) {
  const tones = {
    sage:    { background: 'var(--brand-wash)', color: 'var(--brand-strong)' },
    neutral: { background: 'var(--stone-100)', color: 'var(--ink-soft)' },
    clay:    { background: 'var(--clay-100)', color: 'var(--clay-700)' },
    success: { background: 'var(--success-bg)', color: 'var(--success)' },
    warning: { background: 'var(--warning-bg)', color: 'var(--warning)' },
    error:   { background: 'var(--error-bg)', color: 'var(--error)' },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.04em',
    padding: '5px 12px',
    borderRadius: 'var(--radius-full)',
    lineHeight: 1.2,
    ...tones[tone],
    ...style,
  };
  return <span style={base} {...rest}>{children}</span>;
}
