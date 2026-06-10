/* The Wellness House — Booking screen */
function BookingScreen({ onNav, preset }) {
  const { Button, Eyebrow, Input, Select, Checkbox, Card, Badge } = window.TheWellnessHouseDesignSystem_3295ce;
  const [service, setService] = React.useState(preset || '');
  const [location, setLocation] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [reminders, setReminders] = React.useState(true);
  const [done, setDone] = React.useState(false);

  if (done) {
    return (
      <div style={{ background: 'var(--paper)' }}>
        <section>
          <div style={{ maxWidth: '560px', margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
            <span style={{ width: 64, height: 64, borderRadius: 'var(--radius-full)', background: 'var(--success-bg)', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
              <Icon name="check" size={30} />
            </span>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '46px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>Your request is in</h1>
            <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)' }}>
              Thank you{name ? `, ${name.split(' ')[0]}` : ''}. We'll text {phone || 'you'} shortly to confirm your {service || 'session'}. We're looking forward to meeting you there.
            </p>
            <div style={{ marginTop: '36px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button variant="primary" onClick={() => onNav('Home')}>Back to home</Button>
              <Button variant="ghost" onClick={() => setDone(false)}>Book another</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <section style={{ background: 'var(--linen)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '76px 40px 64px', textAlign: 'center' }}>
          <Eyebrow tone="sage" style={{ justifyContent: 'center' }}>Reserve your time</Eyebrow>
          <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '56px', letterSpacing: '-0.025em', color: 'var(--ink)' }}>Book a session</h1>
          <p style={{ margin: '18px auto 0', maxWidth: '46ch', fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7, color: 'var(--text-body)' }}>
            Share a few details and we'll text to confirm. Prefer to talk? Text us at 407·961·7616.
          </p>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 40px 96px', display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: '40px', alignItems: 'start' }}>
          {/* FORM */}
          <Card tone="surface" padding="lg">
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <Select label="Service" placeholder="Choose a service" value={service} onChange={(e) => setService(e.target.value)} required
                  options={SERVICES.map((s) => s.title)} />
                <Select label="Location" placeholder="Where shall we meet?" value={location} onChange={(e) => setLocation(e.target.value)} required
                  options={['In-home (we come to you)', 'In-office \u2014 401 N. Mills Ave.']} />
              </div>
              <Input label="Full name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <Input label="Email" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input label="Mobile" type="tel" placeholder="(407) 000-0000" hint="We'll text to confirm" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <Input label="Anything we should know?" placeholder="Recent injury, areas of focus, preferred times\u2026" />
              <Checkbox label="Text me appointment reminders" checked={reminders} onChange={(e) => setReminders(e.target.checked)} />
              <div style={{ marginTop: '6px' }}>
                <Button variant="primary" size="lg" type="submit" fullWidth>Request my session</Button>
              </div>
            </form>
          </Card>

          {/* SUMMARY */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Card tone="sage" padding="lg">
              <Eyebrow tone="sage">What to expect</Eyebrow>
              <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['A reply by text to confirm your time', 'Intake handled simply, before we begin', 'A calm, unhurried, fully present session'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.5, color: 'var(--ink-soft)' }}>
                    <span style={{ color: 'var(--brand-strong)', marginTop: '2px' }}><Icon name="check" size={18} /></span>{t}
                  </li>
                ))}
              </ul>
            </Card>
            <Card tone="forest" padding="lg">
              <p style={{ margin: 0, fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '22px', lineHeight: 1.4, color: '#FCFBF7' }}>
                The body already knows how to heal; we simply create the conditions for it to do so.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { BookingScreen });
