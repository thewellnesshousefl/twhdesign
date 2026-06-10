import * as React from 'react';

/**
 * An editorial pull-quote set in Cormorant italic for sanctuary / testimonial moments.
 *
 * @startingPoint section="Content" subtitle="Editorial italic pull-quote" viewport="700x220"
 */
export interface QuoteProps {
  children: React.ReactNode;
  /** Optional attribution line (rendered uppercase). */
  attribution?: string;
  /** @default "left" */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

export function Quote(props: QuoteProps): JSX.Element;
