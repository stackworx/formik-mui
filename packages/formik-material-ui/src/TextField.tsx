import * as React from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';

export interface TextFieldProps
  extends FieldProps,
    Omit<MuiTextFieldProps, 'name' | 'value' | 'error'> {
  touchOnChange?: boolean
}

export function fieldToTextField({
  disabled,
  field,
  form: { isSubmitting, touched, errors, setTouched },
  touchOnChange,
  ...props
}: TextFieldProps): MuiTextFieldProps {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    ...props,
    ...field,
    onChange(e) {
      if (touchOnChange && !getIn(touched, field.name)) {
        setTouched({ [field.name]: true });
      }
      const onChange = props.onChange || field.onChange;
      onChange && onChange(e);
    },
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting,
    variant: props.variant,
  };
}

export function TextField({ children, ...props }: TextFieldProps) {
  return <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>;
}

TextField.displayName = 'FormikMaterialUITextField';
