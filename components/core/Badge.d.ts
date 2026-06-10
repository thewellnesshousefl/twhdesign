import * as React from 'react';

/**
 * A small pill for categories, status, and metadata.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "sage" */
  tone?: 'sage' | 'neutral' | 'clay' | 'success' | 'warning' | 'error';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
