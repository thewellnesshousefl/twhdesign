import React from 'react';

/**
 * The Wellness House — Select
 * Native select styled to match Input, with a calm chevron.
 */
export function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select…',
  name,
  id,
  disabled = false,
  hint = '',
  required = false,
  style = {},
  ...rest
}) {
  const selectId = id || name || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focused, setFocused] = React.useState(false);

  const wrap = { display: 'flex', flexDirection: 'column', gap: '7px', width: '100%', ...style };
  const lab = { fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-body)' };
  const field = {
    appearance: 'none',
    WebkitAppearance: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: value ? 'var(--text-heading)' : 'var(--text-muted)',
    background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--brand)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-md)',
    padding: '13px 40px 13px 16px',
    outline: 'none',
    boxShadow: focused ? '0 0 0 3px var(--ring)' : 'none',
    transition: 'var(--transition)',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237C7464' stroke-width='1.6'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
  };

  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div style={wrap}>
      {label && (
        <label htmlFor={selectId} style={lab}>
          {label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={field}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      >
        <option value="" disabled>{placeholder}</option>
        {norm.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {hint && <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
