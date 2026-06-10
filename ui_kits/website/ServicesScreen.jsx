/* The Wellness House — Services screen */
function ServicesScreen({ onNav }) {
  const { Button, Eyebrow, Badge, Card } = window.TheWellnessHouseDesignSystem_3295ce;
  const addons = [
    ['Cupping & gua sha', 'Add to any bodywork session'],
    ['Lymphatic drainage', 'Gentle, post-injury & recovery'],
    ['Auto-accident care', 'Documentation & coordinated care'],
    ['Couples / duo sessions', 'Side-by-side, in your home'],
  ];
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* HEADER BAND */}
      <section style={{ background: 'var(--linen)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '88px 40px 76px', textAlign: 'center' }}>
          <Eyebrow tone="sage" style={{ justifyContent: 'center' }}>Services &amp; Bodywork</Eyebrow>
          <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '60px', letterSpacing: '-0.025em', color: 'var(--ink)' }}>What we offer</h1>
          <p style={{ margin: '20px auto 0', maxWidth: '54ch', fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)' }}>
            Every session is read in real time and shaped to your body that day. Choose a starting point — we'll meet you there.
          </p>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '80px 40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {SERVICES.map((s, i) => (
            <Card key={s.title} tone="surface" padding="none" style={{ overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 0.8fr' : '0.8fr 1fr', minHeight: '280px' }}>
                {i % 2 === 0 && <PhotoPanel tone={['sage','clay','stone'][i]} label={s.title} radius="0" style={{ minHeight: '280px' }} />}
                <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {s.badges.map((b, j) => <Badge key={b} tone={j === 0 ? 'sage' : 'neutral'}>{b}</Badge>)}
                    <Badge tone="clay">{s.price}</Badge>
                  </div>
                  <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '36px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>{s.title}</h2>
                  <p style={{ margin: 0, maxWidth: '52ch', fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)' }}>{s.long}</p>
                  <div style={{ marginTop: '8px' }}>
                    <Button variant="primary" onClick={() => onNav('Book')}>Book {s.title.split(' ')[0].toLowerCase() === 'wellness' ? 'a consult' : 'this session'}</Button>
                  </div>
                </div>
                {i % 2 === 1 && <PhotoPanel tone={['sage','clay','stone'][i]} label={s.title} radius="0" style={{ minHeight: '280px' }} />}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ background: 'var(--linen)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Eyebrow tone="sage" style={{ justifyContent: 'center' }}>Modalities &amp; add-ons</Eyebrow>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '40px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>Layer in what you need</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
            {addons.map(([t, d]) => (
              <Card key={t} tone="surface" padding="md" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-full)', background: 'var(--brand-wash)', color: 'var(--brand-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="plus" size={20} />
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '19px', color: 'var(--ink)' }}>{t}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', marginTop: '2px' }}>{d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { ServicesScreen });
