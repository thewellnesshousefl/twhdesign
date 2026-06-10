import * as React from 'react';

/**
 * A single-line text field with label, hint, and error states.
 */
export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'date';
  name?: string;
  id?: string;
  disabled?: boolean;
  /** Error message; also turns the border red. */
  error?: string;
  /** Helper text shown when no error. */
  hint?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
