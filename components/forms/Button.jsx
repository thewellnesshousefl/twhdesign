import React from 'react';

/**
 * The Wellness House — Button
 * Calm, architectural buttons. Primary = sage fill, secondary = outline,
 * ghost = quiet text, accent = warm clay for rare moments.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: '13px', minHeight: '38px' },
    md: { padding: '12px 28px', fontSize: '15px', minHeight: '48px' },
    lg: { padding: '16px 38px', fontSize: '16px', minHeight: '56px' },
  };

  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      border: '1px solid var(--brand)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-strong)',
      border: '1px solid var(--border-brand)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid transparent',
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)',
    },
    dark: {
      background: 'var(--forest)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--forest)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'var(--transition)',
    boxSizing: 'border-box',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-strong)';
        if (variant === 'secondary') e.currentTarget.style.background = 'var(--brand-wash)';
        if (variant === 'ghost') e.currentTarget.style.background = 'var(--stone-100)';
        if (variant === 'accent') e.currentTarget.style.background = 'var(--clay-700)';
        if (variant === 'dark') e.currentTarget.style.background = 'var(--forest-deep)';
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = variants[variant].background;
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
