import * as React from 'react';

/**
 * Uppercase wide-tracked micro-label with a leading rule; sits above headings.
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "sage" */
  tone?: 'sage' | 'muted' | 'clay' | 'light';
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
