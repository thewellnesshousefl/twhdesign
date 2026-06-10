/* The Wellness House — Site header / nav */
function SiteHeader({ current, onNav, overHero = false }) {
  const onDark = overHero;
  const link = (label) => {
    const active = current === label;
    return (
      <button
        key={label}
        onClick={() => onNav(label)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
          letterSpacing: '0.04em',
          color: onDark ? 'rgba(252,251,247,0.86)' : 'var(--text-body)',
          opacity: active ? 1 : 0.78,
          borderBottom: active ? `1px solid ${onDark ? 'var(--text-on-dark)' : 'var(--brand)'}` : '1px solid transparent',
          paddingBottom: '3px', transition: 'var(--transition)',
        }}
      >{label}</button>
    );
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: onDark ? 'transparent' : 'rgba(244,241,234,0.86)',
      backdropFilter: onDark ? 'none' : 'saturate(140%) blur(10px)',
      borderBottom: onDark ? '1px solid transparent' : '1px solid var(--border-soft)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '18px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
      }}>
        <button onClick={() => onNav('Home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', padding: 0 }}>
          <span style={{
            width: 34, height: 34, borderRadius: 'var(--radius-full)',
            border: `1px solid ${onDark ? 'rgba(252,251,247,0.5)' : 'var(--border-brand)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 60 60" fill="none" stroke={onDark ? '#FCFBF7' : '#6F8060'} strokeWidth="2" strokeLinecap="round">
              <path d="M14 32 A 16 16 0 0 1 46 32" /><line x1="8" y1="36" x2="52" y2="36" />
              <line x1="30" y1="12" x2="30" y2="18" /><line x1="44" y1="17" x2="40" y2="22" /><line x1="16" y1="17" x2="20" y2="22" />
            </svg>
          </span>
          <span style={{ textAlign: 'left', lineHeight: 1.1 }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase', color: onDark ? 'rgba(252,251,247,0.7)' : 'var(--text-muted)' }}>The</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '17px', letterSpacing: '0.18em', color: onDark ? '#FCFBF7' : 'var(--ink)' }}>WELLNESS HOUSE</span>
          </span>
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {NAV.filter((n) => n !== 'Book').map(link)}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.03em', color: onDark ? 'rgba(252,251,247,0.82)' : 'var(--text-body)', whiteSpace: 'nowrap' }}>
            Text 407·961·7616
          </span>
          <Button variant={onDark ? 'secondary' : 'primary'} size="sm"
            style={onDark ? { color: '#FCFBF7', borderColor: 'rgba(252,251,247,0.6)' } : {}}
            onClick={() => onNav('Book')}>
            Book a session
          </Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { SiteHeader });
