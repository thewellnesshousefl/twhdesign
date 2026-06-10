import * as React from 'react';

/**
 * A branded service tile — title, description, meta badges, and a quiet CTA.
 * Composes Card + Badge.
 *
 * @startingPoint section="Marketing" subtitle="Service offering tile with badges + CTA" viewport="700x300"
 */
export interface ServiceCardProps {
  title: string;
  description: string;
  /** Short pills, e.g. ["In-home", "60 min"]. First renders in sage. */
  badges?: string[];
  /** Small meta line in the footer, e.g. "From $180". */
  meta?: string;
  /** Optional icon node (24px line icon recommended). */
  icon?: React.ReactNode;
  /** CTA label. @default "Learn more" */
  cta?: string;
  onSelect?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
