import * as React from 'react';

/**
 * A round avatar with an image or initials fallback.
 */
export interface AvatarProps {
  src?: string;
  /** Used for alt text and the initials fallback. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** @default "sage" */
  tone?: 'sage' | 'clay' | 'stone';
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
