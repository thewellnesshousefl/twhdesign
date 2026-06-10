/* The Wellness House — Home screen */
function HomeScreen({ onNav }) {
  const { Button, Eyebrow, Quote, ServiceCard } = window.TheWellnessHouseDesignSystem_3295ce;
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '620px', marginTop: '-82px', paddingTop: '82px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #3a4733 0%, #232c1e 55%, #1a2116 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 70% at 75% 25%, rgba(174,183,156,0.25), transparent 60%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 40px 110px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
          <div>
            <Eyebrow tone="light">An Elevated Wellness Experience</Eyebrow>
            <h1 style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '76px', lineHeight: 0.98, letterSpacing: '-0.025em', color: '#FCFBF7' }}>
              Life feels better<br/>when you do.
            </h1>
            <p style={{ margin: '26px 0 0', maxWidth: '46ch', fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.6, color: 'rgba(252,251,247,0.82)' }}>
              Chiropractic &amp; fascia release, massage &amp; bodywork, and wellness consultations — a boutique experience, at home or in-office.
            </p>
            <div style={{ marginTop: '38px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('Book')}>Book a session</Button>
              <Button variant="secondary" size="lg" style={{ color: '#FCFBF7', borderColor: 'rgba(252,251,247,0.5)' }} onClick={() => onNav('Services')}>Explore services</Button>
            </div>
          </div>
          <PhotoPanel tone="clay" label="Hero · bodywork" height="440px" radius="var(--radius-xl)" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '88px 40px 72px', textAlign: 'center' }}>
          <Eyebrow tone="sage" style={{ justifyContent: 'center' }}>We meet you there</Eyebrow>
          <p style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '32px', lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
            We're here for you when you feel great, to help you stay that way. And we're here when things feel off, too.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '8px 40px 96px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px' }}>
            <div>
              <Eyebrow tone="sage">Our services</Eyebrow>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '44px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>Care, tailored to your body</h2>
            </div>
            <Button variant="ghost" onClick={() => onNav('Services')}>View all services →</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} icon={<Icon name={s.icon} size={26} />} title={s.title}
                description={s.short} badges={s.badges} meta={s.price} cta="Explore"
                onSelect={() => onNav('Services')} />
            ))}
          </div>
        </div>
      </section>

      {/* AT-HOME FEATURE */}
      <section style={{ background: 'var(--linen)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 40px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'center' }}>
          <PhotoPanel tone="stone" label="In-home session" height="420px" radius="var(--radius-xl)" />
          <div>
            <Eyebrow tone="sage">At home or in-office</Eyebrow>
            <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '40px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>A sanctuary, wherever you are</h2>
            <p style={{ margin: '22px 0 0', maxWidth: '50ch', fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)' }}>
              We bring the calm to you — a fully present session in your own space — or welcome you into the house on North Mills. Either way, the room is yours.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Button variant="dark" onClick={() => onNav('Book')}>Reserve your time</Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: 'var(--forest)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '110px 40px', textAlign: 'center' }}>
          <Quote attribution="The Wellness House" align="center" style={{ maxWidth: '100%', alignItems: 'center' }}>
            <span style={{ color: '#FCFBF7', fontSize: '40px' }}>This space is for those who choose the extraordinary.</span>
          </Quote>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
