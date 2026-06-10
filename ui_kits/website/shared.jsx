/* The Wellness House — UI kit shared helpers */

// Line icon via Lucide (loaded from CDN in index.html).
function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.6, style = {} }) {
  return (
    <i
      data-lucide={name}
      style={{ display: 'inline-flex', width: size, height: size, color, ...style }}
      data-sw={strokeWidth}
    />
  );
}

// Polished placeholder for real photography. Warm tonal wash + monogram watermark.
function PhotoPanel({ tone = 'sage', label = 'Photography', radius = 'var(--radius-lg)', ratio, height, style = {} }) {
  const tones = {
    sage:  'linear-gradient(150deg, #aeb79c 0%, #6f8060 60%, #45523a 100%)',
    clay:  'linear-gradient(150deg, #e0cab4 0%, #c08e6f 65%, #9a6b4f 100%)',
    stone: 'linear-gradient(150deg, #e7dccb 0%, #c3b9a6 60%, #9e9582 100%)',
    forest:'linear-gradient(150deg, #3a4733 0%, #232c1e 70%, #1a2116 100%)',
  };
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: radius,
      background: tones[tone], boxShadow: 'var(--shadow-sm)',
      aspectRatio: ratio || 'auto', height: height || 'auto', ...style,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,0.18), transparent 60%)' }} />
      <div style={{
        position: 'absolute', left: 0, bottom: 0, padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.16em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)',
      }}>
        <span style={{ width: 18, height: 1, background: 'currentColor', opacity: 0.7 }} />
        {label}
      </div>
    </div>
  );
}

const SERVICES = [
  {
    icon: 'activity',
    title: 'Chiropractic & Fascia Release',
    short: 'Precise adjustments paired with hands-on fascia work to restore ease of motion.',
    long: 'Gentle, intentional adjustments combined with deep fascia release to free restricted tissue, calm the nervous system, and return your body to easeful, natural movement.',
    badges: ['In-home & in-office', '50 min'],
    price: 'From $180',
  },
  {
    icon: 'hand',
    title: 'Massage & Bodywork',
    short: 'Slow, intentional bodywork that meets your nervous system where it is.',
    long: 'A fully bespoke session — therapeutic, lymphatic, or deeply restorative — read in real time and shaped to what your body is asking for that day.',
    badges: ['In-home', '75 min'],
    price: 'From $210',
  },
  {
    icon: 'sparkles',
    title: 'Wellness Consultations',
    short: 'A grounded conversation about how you want to feel, and the path there.',
    long: 'We map where you are and where you want to be — movement, recovery, stress, sleep — and design a simple, sustainable plan rooted in your real life.',
    badges: ['Virtual or in-person', '45 min'],
    price: 'From $140',
  },
];

const NAV = ['Home', 'Services', 'About', 'Book'];

Object.assign(window, { Icon, PhotoPanel, SERVICES, NAV });
