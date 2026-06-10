import React from 'react';

/**
 * The Wellness House — Avatar
 * Round practitioner / client avatar with initials fallback.
 */
export function Avatar({ src, name = '', size = 48, tone = 'sage', style = {}, ...rest }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

  const tones = {
    sage: { background: 'var(--sage-200)', color: 'var(--sage-800)' },
    clay: { background: 'var(--clay-300)', color: 'var(--clay-700)' },
    stone: { background: 'var(--stone-200)', color: 'var(--ink-soft)' },
  };

  const base = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: 'var(--radius-full)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 'none',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: `${Math.round(size * 0.36)}px`,
    letterSpacing: '0.02em',
    boxShadow: 'inset 0 0 0 1px rgba(35,36,30,0.06)',
    ...tones[tone],
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '·')}
    </span>
  );
}
