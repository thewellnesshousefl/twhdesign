/* The Wellness House — About / Welcome screen */
function AboutScreen({ onNav }) {
  const { Button, Eyebrow, Quote } = window.TheWellnessHouseDesignSystem_3295ce;
  const paras = [
    'In the journey of life, I\u2019m reaching for the stars, bypassing perceived limits and leaning into the radical power we hold over our own bodies.',
    'Having supported a global clientele, we\u2019ve witnessed the immediate power of transformation \u2014 the moment the \u201cimpossible\u201d becomes the baseline.',
    'This space is for those who desire a life where health is no longer a quiet distraction, but the foundation for everything you create. A body that feels incredible \u2014 one that makes your food taste better, your relationships flourish, and your business grow.',
    'Our sessions are a sanctuary for the shift. We provide the space to reset, explore, and reconnect with your innate potential. The body already knows how to heal; we simply create the conditions for it to do so.',
  ];
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* INTRO */}
      <section>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 40px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <Eyebrow tone="sage">Welcome to The Wellness House</Eyebrow>
            <h1 style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '56px', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
              We choose the extraordinary
            </h1>
            <p style={{ margin: '24px 0 0', maxWidth: '46ch', fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '24px', lineHeight: 1.4, color: 'var(--ink-soft)' }}>
              {paras[0]}
            </p>
          </div>
          <PhotoPanel tone="sage" label="Practitioner portrait" height="500px" radius="var(--radius-xl)" />
        </div>
      </section>

      {/* LETTER */}
      <section style={{ background: 'var(--linen)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '88px 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {paras.slice(1).map((p, i) => (
              <p key={i} style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '19px', lineHeight: 1.7, color: 'var(--text-body)' }}>{p}</p>
            ))}
          </div>
          <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '22px', color: 'var(--ink)' }}>
              This is more than a treatment. It\u2019s an experience where something shifts deep within you.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              ['compass', 'Bespoke by default', 'No two bodies are the same. Every session is read and shaped in the moment.'],
              ['heart-handshake', 'Met where you are', 'Great day or hard one, recent injury or old ache \u2014 we begin from your reality.'],
              ['moon', 'A true sanctuary', 'Unhurried, private, and calm \u2014 the space to reset and reconnect.'],
            ].map(([icon, t, d]) => (
              <div key={t}>
                <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--brand-wash)', color: 'var(--brand-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon name={icon} size={24} />
                </span>
                <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '22px', color: 'var(--ink)' }}>{t}</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-body)' }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('Book')}>Begin your experience</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { AboutScreen });
