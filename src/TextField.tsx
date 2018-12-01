import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';
import { Omit } from './types';

export interface TextFieldProps
  extends FieldProps,
    Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> {}

export const fieldToTextField = ({
  field,
  form,
  variant,
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
    // Hack to work around type issue
    // See: https://github.com/Microsoft/TypeScript/issues/28791
    variant: variant as any,
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
