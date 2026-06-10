import React from 'react';
import { Card } from './Card.jsx';
import { Badge } from './Badge.jsx';

/**
 * The Wellness House — ServiceCard
 * Branded service tile: title, description, meta badges, and a quiet CTA.
 * Composes Card + Badge.
 */
export function ServiceCard({
  title,
  description,
  badges = [],
  meta = '',
  icon = null,
  cta = 'Learn more',
  onSelect,
  style = {},
}) {
  return (
    <Card tone="surface" interactive padding="lg" onClick={onSelect} style={{ display: 'flex', flexDirection: 'column', gap: '18px', minHeight: '260px', ...style }}>
      {icon && (
        <div style={{
          width: '52px', height: '52px', borderRadius: 'var(--radius-md)',
          background: 'var(--brand-wash)', color: 'var(--brand-strong)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{icon}</div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {badges.map((b, i) => <Badge key={i} tone={i === 0 ? 'sage' : 'neutral'}>{b}</Badge>)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-lg)', color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-body)' }}>{description}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-soft)', paddingTop: '16px' }}>
        {meta && <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{meta}</span>}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500, color: 'var(--brand-strong)' }}>
          {cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    </Card>
  );
}
