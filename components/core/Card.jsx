import React from 'react';

/**
 * The Wellness House — Card
 * Soft, warm surface container. Optional hover lift for clickable cards.
 */
export function Card({
  children,
  padding = 'lg',
  interactive = false,
  tone = 'surface',
  style = {},
  ...rest
}) {
  const pads = { none: '0', sm: '18px', md: '24px', lg: '32px' };
  const tones = {
    surface: { background: 'var(--surface-card)', border: '1px solid var(--border-soft)' },
    sunken:  { background: 'var(--surface-sunken)', border: '1px solid var(--border-soft)' },
    sage:    { background: 'var(--brand-wash)', border: '1px solid var(--border-brand)' },
    forest:  { background: 'var(--forest)', border: '1px solid var(--forest)', color: 'var(--text-on-dark)' },
  };

  const [hover, setHover] = React.useState(false);
  const base = {
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding],
    boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    transform: interactive && hover ? 'translateY(-3px)' : 'none',
    transition: 'var(--transition)',
    cursor: interactive ? 'pointer' : 'default',
    boxSizing: 'border-box',
    ...tones[tone],
    ...style,
  };

  return (
    <div
      style={base}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
