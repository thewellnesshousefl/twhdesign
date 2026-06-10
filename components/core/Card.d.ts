import * as React from 'react';

/**
 * A soft surface container for grouping content. Optional hover lift.
 *
 * @startingPoint section="Layout" subtitle="Warm surface card with hover lift" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** @default "lg" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds a hover lift + shadow for clickable cards. */
  interactive?: boolean;
  /** Background tone. @default "surface" */
  tone?: 'surface' | 'sunken' | 'sage' | 'forest';
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function Card(props: CardProps): JSX.Element;
