import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, FieldConfig, useField } from 'formik';

export type TextFieldProps = FieldProps &
  FieldConfig &
  Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> & {
    // Fix for the type for variant which is using union
    // https://stackoverflow.com/questions/55664421
    variant: 'standard' | 'filled' | 'outlined' | undefined;
  };

export const fieldToTextField = ({
  name,
  form,
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
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting
  };
};

export const TextField: React.ComponentType<TextFieldProps> = ({
  children,
  ...props
}: TextFieldProps) => (
  <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>
);

TextField.displayName = 'FormikMaterialUITextField';
