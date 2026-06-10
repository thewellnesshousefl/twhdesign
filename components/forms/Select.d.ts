import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/**
 * A styled native dropdown matching Input, with a calm chevron.
 */
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  hint?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
