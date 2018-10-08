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
  disabled = false,
  ...props
}: TextFieldProps) => {
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

const TextField: React.ComponentType<TextFieldProps> = props => (
  <MuiTextField {...fieldToTextField(props)} />
);

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
