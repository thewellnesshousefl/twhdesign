/* @ds-bundle: {"format":3,"namespace":"TheWellnessHouseDesignSystem_3295ce","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"0decef440564","components/core/Badge.jsx":"df631f81d300","components/core/Card.jsx":"f71139076dda","components/core/Eyebrow.jsx":"a1c8a811257e","components/core/Quote.jsx":"bd210a190fa6","components/core/ServiceCard.jsx":"1d3339672ae1","components/forms/Button.jsx":"db9776abd070","components/forms/Checkbox.jsx":"c223c83bc288","components/forms/Input.jsx":"2603d299b02b","components/forms/Select.jsx":"f7491b0eb313","ui_kits/website/AboutScreen.jsx":"f5826fdaa5df","ui_kits/website/BookingScreen.jsx":"5871114230b1","ui_kits/website/HomeScreen.jsx":"81fbe70bf590","ui_kits/website/ServicesScreen.jsx":"6364b42fe729","ui_kits/website/SiteFooter.jsx":"3cf3c08c8eea","ui_kits/website/SiteHeader.jsx":"783a366b1e1b","ui_kits/website/shared.jsx":"5ca298003df8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheWellnessHouseDesignSystem_3295ce = window.TheWellnessHouseDesignSystem_3295ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Avatar
 * Round practitioner / client avatar with initials fallback.
 */
function Avatar({
  src,
  name = '',
  size = 48,
  tone = 'sage',
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  const tones = {
    sage: {
      background: 'var(--sage-200)',
      color: 'var(--sage-800)'
    },
    clay: {
      background: 'var(--clay-300)',
      color: 'var(--clay-700)'
    },
    stone: {
      background: 'var(--stone-200)',
      color: 'var(--ink-soft)'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Badge
 * Small status / category pill. Quiet, tinted backgrounds.
 */
function Badge({
  children,
  tone = 'sage',
  style = {},
  ...rest
}) {
  const tones = {
    sage: {
      background: 'var(--brand-wash)',
      color: 'var(--brand-strong)'
    },
    neutral: {
      background: 'var(--stone-100)',
      color: 'var(--ink-soft)'
    },
    clay: {
      background: 'var(--clay-100)',
      color: 'var(--clay-700)'
    },
    success: {
      background: 'var(--success-bg)',
      color: 'var(--success)'
    },
    warning: {
      background: 'var(--warning-bg)',
      color: 'var(--warning)'
    },
    error: {
      background: 'var(--error-bg)',
      color: 'var(--error)'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Card
 * Soft, warm surface container. Optional hover lift for clickable cards.
 */
function Card({
  children,
  padding = 'lg',
  interactive = false,
  tone = 'surface',
  style = {},
  ...rest
}) {
  const pads = {
    none: '0',
    sm: '18px',
    md: '24px',
    lg: '32px'
  };
  const tones = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-soft)'
    },
    sage: {
      background: 'var(--brand-wash)',
      border: '1px solid var(--border-brand)'
    },
    forest: {
      background: 'var(--forest)',
      border: '1px solid var(--forest)',
      color: 'var(--text-on-dark)'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Eyebrow
 * Uppercase, wide-tracked micro-label that sits above headings.
 */
function Eyebrow({
  children,
  tone = 'sage',
  as = 'span',
  style = {},
  ...rest
}) {
  const Tag = as;
  const tones = {
    sage: 'var(--brand-strong)',
    muted: 'var(--text-muted)',
    clay: 'var(--clay-700)',
    light: 'var(--text-on-dark)'
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
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '24px',
      height: '1px',
      background: 'currentColor',
      opacity: 0.5
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Quote
 * Editorial pull-quote in Cormorant italic. Sanctuary moments.
 */
function Quote({
  children,
  attribution = '',
  align = 'left',
  style = {},
  ...rest
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    maxWidth: '40ch',
    ...style
  };
  const q = {
    fontFamily: 'var(--font-accent)',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 'var(--text-2xl)',
    lineHeight: 1.25,
    color: 'var(--text-heading)',
    margin: 0
  };
  const attr = {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: q
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: attr
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginRight: '10px',
      color: 'var(--brand)'
    }
  }, "\u2014"), attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
/**
 * The Wellness House — ServiceCard
 * Branded service tile: title, description, meta badges, and a quiet CTA.
 * Composes Card + Badge.
 */
function ServiceCard({
  title,
  description,
  badges = [],
  meta = '',
  icon = null,
  cta = 'Learn more',
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: "surface",
    interactive: true,
    padding: "lg",
    onClick: onSelect,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      minHeight: '260px',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '52px',
      height: '52px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-wash)',
      color: 'var(--brand-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: i === 0 ? 'sage' : 'neutral'
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-soft)',
      paddingTop: '16px'
    }
  }, meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--brand-strong)'
    }
  }, cta, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Button
 * Calm, architectural buttons. Primary = sage fill, secondary = outline,
 * ghost = quiet text, accent = warm clay for rare moments.
 */
function Button({
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
    sm: {
      padding: '8px 18px',
      fontSize: '13px',
      minHeight: '38px'
    },
    md: {
      padding: '12px 28px',
      fontSize: '15px',
      minHeight: '48px'
    },
    lg: {
      padding: '16px 38px',
      fontSize: '16px',
      minHeight: '56px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      border: '1px solid var(--brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-strong)',
      border: '1px solid var(--border-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)'
    },
    dark: {
      background: 'var(--forest)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--forest)'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-strong)';
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--brand-wash)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--stone-100)';
      if (variant === 'accent') e.currentTarget.style.background = 'var(--clay-700)';
      if (variant === 'dark') e.currentTarget.style.background = 'var(--forest-deep)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Checkbox
 * Calm square check with sage fill when selected.
 */
function Checkbox({
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
    ...style
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
    transition: 'var(--transition)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: box
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FCFBF7",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: boxId,
    name: name,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Input
 * Quiet text field with floating label option and calm focus ring.
 */
function Input({
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
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    width: '100%',
    ...style
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: 'var(--text-body)'
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
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: lab
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--error)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wellness House — Select
 * Native select styled to match Input, with a calm chevron.
 */
function Select({
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
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    width: '100%',
    ...style
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: 'var(--text-body)'
  };
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
    backgroundPosition: 'right 14px center'
  };
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: lab
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* The Wellness House — About / Welcome screen */
function AboutScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Quote
  } = window.TheWellnessHouseDesignSystem_3295ce;
  const paras = ['In the journey of life, I\u2019m reaching for the stars, bypassing perceived limits and leaning into the radical power we hold over our own bodies.', 'Having supported a global clientele, we\u2019ve witnessed the immediate power of transformation \u2014 the moment the \u201cimpossible\u201d becomes the baseline.', 'This space is for those who desire a life where health is no longer a quiet distraction, but the foundation for everything you create. A body that feels incredible \u2014 one that makes your food taste better, your relationships flourish, and your business grow.', 'Our sessions are a sanctuary for the shift. We provide the space to reset, explore, and reconnect with your innate potential. The body already knows how to heal; we simply create the conditions for it to do so.'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px 72px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage"
  }, "Welcome to The Wellness House"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '56px',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: 'var(--ink)'
    }
  }, "We choose the extraordinary"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: '46ch',
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '24px',
      lineHeight: 1.4,
      color: 'var(--ink-soft)'
    }
  }, paras[0])), /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: "sage",
    label: "Practitioner portrait",
    height: "500px",
    radius: "var(--radius-xl)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--linen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '26px'
    }
  }, paras.slice(1).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '19px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      paddingTop: '32px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '22px',
      color: 'var(--ink)'
    }
  }, "This is more than a treatment. It\\u2019s an experience where something shifts deep within you.")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px'
    }
  }, [['compass', 'Bespoke by default', 'No two bodies are the same. Every session is read and shaped in the moment.'], ['heart-handshake', 'Met where you are', 'Great day or hard one, recent injury or old ache \u2014 we begin from your reality.'], ['moon', 'A true sanctuary', 'Unhurried, private, and calm \u2014 the space to reset and reconnect.']].map(([icon, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-wash)',
      color: 'var(--brand-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '22px',
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Book')
  }, "Begin your experience")))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingScreen.jsx
try { (() => {
/* The Wellness House — Booking screen */
function BookingScreen({
  onNav,
  preset
}) {
  const {
    Button,
    Eyebrow,
    Input,
    Select,
    Checkbox,
    Card,
    Badge
  } = window.TheWellnessHouseDesignSystem_3295ce;
  const [service, setService] = React.useState(preset || '');
  const [location, setLocation] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [reminders, setReminders] = React.useState(true);
  const [done, setDone] = React.useState(false);
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '560px',
        margin: '0 auto',
        padding: '120px 40px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 64,
        borderRadius: 'var(--radius-full)',
        background: 'var(--success-bg)',
        color: 'var(--success)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '28px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '46px',
        letterSpacing: '-0.02em',
        color: 'var(--ink)'
      }
    }, "Your request is in"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: '17px',
        lineHeight: 1.7,
        color: 'var(--text-body)'
      }
    }, "Thank you", name ? `, ${name.split(' ')[0]}` : '', ". We'll text ", phone || 'you', " shortly to confirm your ", service || 'session', ". We're looking forward to meeting you there."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '36px',
        display: 'flex',
        gap: '12px',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNav('Home')
    }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDone(false)
    }, "Book another")))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--linen)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '76px 40px 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage",
    style: {
      justifyContent: 'center'
    }
  }, "Reserve your time"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '56px',
      letterSpacing: '-0.025em',
      color: 'var(--ink)'
    }
  }, "Book a session"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px auto 0',
      maxWidth: '46ch',
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Share a few details and we'll text to confirm. Prefer to talk? Text us at 407\xB7961\xB77616."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 40px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 0.7fr',
      gap: '40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    placeholder: "Choose a service",
    value: service,
    onChange: e => setService(e.target.value),
    required: true,
    options: SERVICES.map(s => s.title)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Location",
    placeholder: "Where shall we meet?",
    value: location,
    onChange: e => setLocation(e.target.value),
    required: true,
    options: ['In-home (we come to you)', 'In-office \u2014 401 N. Mills Ave.']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    type: "tel",
    placeholder: "(407) 000-0000",
    hint: "We'll text to confirm",
    value: phone,
    onChange: e => setPhone(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    placeholder: "Recent injury, areas of focus, preferred times\\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me appointment reminders",
    checked: reminders,
    onChange: e => setReminders(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Request my session")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sage",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage"
  }, "What to expect"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '18px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, ['A reply by text to confirm your time', 'Intake handled simply, before we begin', 'A calm, unhurried, fully present session'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-strong)',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), t)))), /*#__PURE__*/React.createElement(Card, {
    tone: "forest",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '22px',
      lineHeight: 1.4,
      color: '#FCFBF7'
    }
  }, "The body already knows how to heal; we simply create the conditions for it to do so."))))));
}
Object.assign(window, {
  BookingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* The Wellness House — Home screen */
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Quote,
    ServiceCard
  } = window.TheWellnessHouseDesignSystem_3295ce;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '620px',
      marginTop: '-82px',
      paddingTop: '82px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(155deg, #3a4733 0%, #232c1e 55%, #1a2116 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(90% 70% at 75% 25%, rgba(174,183,156,0.25), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px 110px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "An Elevated Wellness Experience"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '76px',
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      color: '#FCFBF7'
    }
  }, "Life feels better", /*#__PURE__*/React.createElement("br", null), "when you do."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      maxWidth: '46ch',
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'rgba(252,251,247,0.82)'
    }
  }, "Chiropractic & fascia release, massage & bodywork, and wellness consultations \u2014 a boutique experience, at home or in-office."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '38px',
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Book')
  }, "Book a session"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#FCFBF7',
      borderColor: 'rgba(252,251,247,0.5)'
    },
    onClick: () => onNav('Services')
  }, "Explore services"))), /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: "clay",
    label: "Hero \xB7 bodywork",
    height: "440px",
    radius: "var(--radius-xl)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '88px 40px 72px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage",
    style: {
      justifyContent: 'center'
    }
  }, "We meet you there"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '32px',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, "We're here for you when you feel great, to help you stay that way. And we're here when things feel off, too."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '8px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage"
  }, "Our services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '44px',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, "Care, tailored to your body")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('Services')
  }, "View all services \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '22px'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26
    }),
    title: s.title,
    description: s.short,
    badges: s.badges,
    meta: s.price,
    cta: "Explore",
    onSelect: () => onNav('Services')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--linen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: "stone",
    label: "In-home session",
    height: "420px",
    radius: "var(--radius-xl)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage"
  }, "At home or in-office"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '40px',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, "A sanctuary, wherever you are"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: '50ch',
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "We bring the calm to you \u2014 a fully present session in your own space \u2014 or welcome you into the house on North Mills. Either way, the room is yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => onNav('Book')
  }, "Reserve your time"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--forest)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '110px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "The Wellness House",
    align: "center",
    style: {
      maxWidth: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FCFBF7',
      fontSize: '40px'
    }
  }, "This space is for those who choose the extraordinary.")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
/* The Wellness House — Services screen */
function ServicesScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Badge,
    Card
  } = window.TheWellnessHouseDesignSystem_3295ce;
  const addons = [['Cupping & gua sha', 'Add to any bodywork session'], ['Lymphatic drainage', 'Gentle, post-injury & recovery'], ['Auto-accident care', 'Documentation & coordinated care'], ['Couples / duo sessions', 'Side-by-side, in your home']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--linen)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: '88px 40px 76px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage",
    style: {
      justifyContent: 'center'
    }
  }, "Services & Bodywork"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '60px',
      letterSpacing: '-0.025em',
      color: 'var(--ink)'
    }
  }, "What we offer"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: '54ch',
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Every session is read in real time and shaped to your body that day. Choose a starting point \u2014 we'll meet you there."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '80px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    tone: "surface",
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: i % 2 ? '1fr 0.8fr' : '0.8fr 1fr',
      minHeight: '280px'
    }
  }, i % 2 === 0 && /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: ['sage', 'clay', 'stone'][i],
    label: s.title,
    radius: "0",
    style: {
      minHeight: '280px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, s.badges.map((b, j) => /*#__PURE__*/React.createElement(Badge, {
    key: b,
    tone: j === 0 ? 'sage' : 'neutral'
  }, b)), /*#__PURE__*/React.createElement(Badge, {
    tone: "clay"
  }, s.price)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '36px',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, s.long), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('Book')
  }, "Book ", s.title.split(' ')[0].toLowerCase() === 'wellness' ? 'a consult' : 'this session'))), i % 2 === 1 && /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: ['sage', 'clay', 'stone'][i],
    label: s.title,
    radius: "0",
    style: {
      minHeight: '280px'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--linen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sage",
    style: {
      justifyContent: 'center'
    }
  }, "Modalities & add-ons"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '40px',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, "Layer in what you need")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '18px'
    }
  }, addons.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "surface",
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: 'var(--brand-wash)',
      color: 'var(--brand-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '19px',
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, d))))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
/* The Wellness House — Site footer */
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: '40px',
      paddingBottom: '48px',
      borderBottom: '1px solid rgba(252,251,247,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '22px',
      letterSpacing: '0.16em'
    }
  }, "THE WELLNESS HOUSE"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '16px',
      maxWidth: '34ch',
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '21px',
      lineHeight: 1.35,
      color: 'rgba(252,251,247,0.86)'
    }
  }, "Life feels better when you do.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 16px',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(252,251,247,0.6)',
      fontWeight: 500
    }
  }, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '11px'
    }
  }, ['Home', 'Services', 'About', 'Book'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav(l),
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'rgba(252,251,247,0.82)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 16px',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(252,251,247,0.6)',
      fontWeight: 500
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '11px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'rgba(252,251,247,0.82)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "Text 407\xB7961\xB77616"), /*#__PURE__*/React.createElement("span", null, "401 N. Mills Ave. STE A", /*#__PURE__*/React.createElement("br", null), "Orlando, FL 32803")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '28px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      letterSpacing: '0.04em',
      color: 'rgba(252,251,247,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The Wellness House"), /*#__PURE__*/React.createElement("span", null, "An elevated wellness experience \xB7 Orlando"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* The Wellness House — Site header / nav */
function SiteHeader({
  current,
  onNav,
  overHero = false
}) {
  const onDark = overHero;
  const link = label => {
    const active = current === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onNav(label),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: onDark ? 'rgba(252,251,247,0.86)' : 'var(--text-body)',
        opacity: active ? 1 : 0.78,
        borderBottom: active ? `1px solid ${onDark ? 'var(--text-on-dark)' : 'var(--brand)'}` : '1px solid transparent',
        paddingBottom: '3px',
        transition: 'var(--transition)'
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: onDark ? 'transparent' : 'rgba(244,241,234,0.86)',
      backdropFilter: onDark ? 'none' : 'saturate(140%) blur(10px)',
      borderBottom: onDark ? '1px solid transparent' : '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '18px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('Home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${onDark ? 'rgba(252,251,247,0.5)' : 'var(--border-brand)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 60 60",
    fill: "none",
    stroke: onDark ? '#FCFBF7' : '#6F8060',
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 32 A 16 16 0 0 1 46 32"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "36",
    x2: "52",
    y2: "36"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "30",
    y1: "12",
    x2: "30",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "44",
    y1: "17",
    x2: "40",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "20",
    y2: "22"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'left',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '9px',
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(252,251,247,0.7)' : 'var(--text-muted)'
    }
  }, "The"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '17px',
      letterSpacing: '0.18em',
      color: onDark ? '#FCFBF7' : 'var(--ink)'
    }
  }, "WELLNESS HOUSE"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }
  }, NAV.filter(n => n !== 'Book').map(link)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      letterSpacing: '0.03em',
      color: onDark ? 'rgba(252,251,247,0.82)' : 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, "Text 407\xB7961\xB77616"), /*#__PURE__*/React.createElement(Button, {
    variant: onDark ? 'secondary' : 'primary',
    size: "sm",
    style: onDark ? {
      color: '#FCFBF7',
      borderColor: 'rgba(252,251,247,0.6)'
    } : {},
    onClick: () => onNav('Book')
  }, "Book a session"))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* The Wellness House — UI kit shared helpers */

// Line icon via Lucide (loaded from CDN in index.html).
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.6,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    },
    "data-sw": strokeWidth
  });
}

// Polished placeholder for real photography. Warm tonal wash + monogram watermark.
function PhotoPanel({
  tone = 'sage',
  label = 'Photography',
  radius = 'var(--radius-lg)',
  ratio,
  height,
  style = {}
}) {
  const tones = {
    sage: 'linear-gradient(150deg, #aeb79c 0%, #6f8060 60%, #45523a 100%)',
    clay: 'linear-gradient(150deg, #e0cab4 0%, #c08e6f 65%, #9a6b4f 100%)',
    stone: 'linear-gradient(150deg, #e7dccb 0%, #c3b9a6 60%, #9e9582 100%)',
    forest: 'linear-gradient(150deg, #3a4733 0%, #232c1e 70%, #1a2116 100%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      background: tones[tone],
      boxShadow: 'var(--shadow-sm)',
      aspectRatio: ratio || 'auto',
      height: height || 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.82)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: 'currentColor',
      opacity: 0.7
    }
  }), label));
}
const SERVICES = [{
  icon: 'activity',
  title: 'Chiropractic & Fascia Release',
  short: 'Precise adjustments paired with hands-on fascia work to restore ease of motion.',
  long: 'Gentle, intentional adjustments combined with deep fascia release to free restricted tissue, calm the nervous system, and return your body to easeful, natural movement.',
  badges: ['In-home & in-office', '50 min'],
  price: 'From $180'
}, {
  icon: 'hand',
  title: 'Massage & Bodywork',
  short: 'Slow, intentional bodywork that meets your nervous system where it is.',
  long: 'A fully bespoke session — therapeutic, lymphatic, or deeply restorative — read in real time and shaped to what your body is asking for that day.',
  badges: ['In-home', '75 min'],
  price: 'From $210'
}, {
  icon: 'sparkles',
  title: 'Wellness Consultations',
  short: 'A grounded conversation about how you want to feel, and the path there.',
  long: 'We map where you are and where you want to be — movement, recovery, stress, sleep — and design a simple, sustainable plan rooted in your real life.',
  badges: ['Virtual or in-person', '45 min'],
  price: 'From $140'
}];
const NAV = ['Home', 'Services', 'About', 'Book'];
Object.assign(window, {
  Icon,
  PhotoPanel,
  SERVICES,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
