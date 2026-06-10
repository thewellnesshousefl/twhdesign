import React from 'react';

/**
 * The Wellness House — Quote
 * Editorial pull-quote in Cormorant italic. Sanctuary moments.
 */
export function Quote({ children, attribution = '', align = 'left', style = {}, ...rest }) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    maxWidth: '40ch',
    ...style,
  };
  const q = {
    fontFamily: 'var(--font-accent)',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 'var(--text-2xl)',
    lineHeight: 1.25,
    color: 'var(--text-heading)',
    margin: 0,
  };
  const attr = {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
  };
  return (
    <figure style={wrap} {...rest}>
      <blockquote style={q}>{children}</blockquote>
      {attribution && (
        <figcaption style={attr}>
          <span aria-hidden="true" style={{ marginRight: '10px', color: 'var(--brand)' }}>—</span>
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
