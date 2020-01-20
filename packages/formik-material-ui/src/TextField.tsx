import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { useField, useFormikContext } from 'formik';

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  'error' | 'name' | 'onChange' | 'onBlur' | 'value'
> & {
  name: string;
};

export const useFieldToTextField = ({
  disabled,
  name,
  ...props
}: TextFieldProps): MuiTextFieldProps => {
  const { isSubmitting } = useFormikContext();
  const [field, meta] = useField(name);

  const fieldError = meta.error;
  const showError = meta.touched && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting,
    variant: props.variant ?? 'standard',
  };
};

export const TextField: React.ComponentType<TextFieldProps> = ({
  children,
  ...props
}: TextFieldProps) => (
  <MuiTextField {...useFieldToTextField(props)}>{children}</MuiTextField>
);

TextField.displayName = 'FormikMaterialUITextField';
