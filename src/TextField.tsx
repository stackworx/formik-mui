import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, FieldConfig, useField } from 'formik';

export type TextFieldProps = FieldProps &
  FieldConfig &
  Omit<MuiTextFieldProps, 'error' | 'onChange' | 'value'>;

export const fieldToTextField = ({
  name,
  form,
  variant = 'standard',
  disabled,
  ...props
}: TextFieldProps): MuiTextFieldProps => {
  if (name === undefined)
    throw TypeError(
      'Missing required name attribute on <Field />. This is needed to hook up your @material-ui Text field with Formik.'
    );
  if (props.component)
    throw TypeError(
      '<Field component> is deprecated in favour of <Field as>. This is needed to hook up your @material-ui Text field with Formik.'
    );

  const [field, meta] = useField(name);
  const { touched, error } = meta;
  const showError = touched && !!error;

  return {
    ...field,
    ...props,
    variant,
    error: showError,
    helperText: showError ? error : props.helperText,
    disabled: disabled !== undefined ? disabled : false,
  };
};

export const TextField: React.ComponentType<TextFieldProps> = ({
  children,
  ...props
}: TextFieldProps) => (
  <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>
);

TextField.displayName = 'FormikMaterialUITextField';
