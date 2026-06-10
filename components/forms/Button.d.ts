import * as React from 'react';

/**
 * Primary call-to-action and supporting buttons for The Wellness House.
 * Pill-shaped, calm motion, sage-led palette.
 *
 * @startingPoint section="Forms" subtitle="Pill buttons — sage, outline, ghost, clay" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'dark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps): JSX.Element;
