export interface WithFormProps {
  value: unknown;
  onChange: (value: unknown) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  touched?: boolean;
  disabled?: boolean;
  required?: boolean;
}