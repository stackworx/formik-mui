import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';

// Special omit for TextField - https://github.com/microsoft/TypeScript/issues/28791
export type AllKeys<T> = T extends T ? keyof T : never;
export type Omit<T, K extends AllKeys<T>> = T extends T
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type TextFieldProps = FieldProps &
  Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextFieldProps): MuiTextFieldProps => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled,
  };
};

export const TextField: React.ComponentType<TextFieldProps> = ({
  children,
  ...props
}: TextFieldProps) => (
  <MuiTextField {...fieldToTextField(props)} children={children} />
);

TextField.displayName = 'FormikMaterialUITextField';
