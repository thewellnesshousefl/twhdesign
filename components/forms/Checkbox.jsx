import React from 'react';

/**
 * The Wellness House — Checkbox
 * Calm square check with sage fill when selected.
 */
export function Checkbox({
  label,
  checked = false,
  onChange,
  name,
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const boxId = id || name || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);

  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '11px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-body)',
    userSelect: 'none',
    ...style,
  };
  const box = {
    width: '20px',
    height: '20px',
    flex: 'none',
    borderRadius: 'var(--radius-sm)',
    border: `1px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
    background: checked ? 'var(--brand)' : 'var(--surface-card)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition)',
  };

  return (
    <label htmlFor={boxId} style={wrap}>
      <span style={box}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FCFBF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
      <input
        id={boxId}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      {label}
    </label>
  );
}
