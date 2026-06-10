/* The Wellness House — Site footer */
function SiteFooter({ onNav }) {
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '72px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid rgba(252,251,247,0.12)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '22px', letterSpacing: '0.16em' }}>THE WELLNESS HOUSE</div>
            <p style={{ marginTop: '16px', maxWidth: '34ch', fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '21px', lineHeight: 1.35, color: 'rgba(252,251,247,0.86)' }}>
              Life feels better when you do.
            </p>
          </div>
          <div>
            <h5 style={{ margin: '0 0 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(252,251,247,0.6)', fontWeight: 500 }}>Explore</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {['Home', 'Services', 'About', 'Book'].map((l) => (
                <button key={l} onClick={() => onNav(l)} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(252,251,247,0.82)' }}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <h5 style={{ margin: '0 0 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(252,251,247,0.6)', fontWeight: 500 }}>Visit</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(252,251,247,0.82)', lineHeight: 1.5 }}>
              <span>Text 407·961·7616</span>
              <span>401 N. Mills Ave. STE A<br/>Orlando, FL 32803</span>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '28px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.04em', color: 'rgba(252,251,247,0.5)' }}>
          <span>© 2026 The Wellness House</span>
          <span>An elevated wellness experience · Orlando</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
