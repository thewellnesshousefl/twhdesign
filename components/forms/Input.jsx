import React from 'react';

/**
 * The Wellness House — Input
 * Quiet text field with floating label option and calm focus ring.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  name,
  id,
  disabled = false,
  error = '',
  hint = '',
  required = false,
  style = {},
  ...rest
}) {
  const inputId = id || name || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focused, setFocused] = React.useState(false);

  const wrap = { display: 'flex', flexDirection: 'column', gap: '7px', width: '100%', ...style };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: 'var(--text-body)',
  };
  const field = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-heading)',
    background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
    border: `1px solid ${error ? 'var(--error)' : focused ? 'var(--brand)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-md)',
    padding: '13px 16px',
    outline: 'none',
    boxShadow: focused && !error ? '0 0 0 3px var(--ring)' : 'none',
    transition: 'var(--transition)',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <div style={wrap}>
      {label && (
        <label htmlFor={inputId} style={lab}>
          {label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        style={field}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {error
        ? <span style={{ fontSize: '12px', color: 'var(--error)' }}>{error}</span>
        : hint && <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
