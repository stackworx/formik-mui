// @ts-ignore
import * as React from 'react';
import TextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';

import createComponent from './createComponent';

export interface TextFieldProps extends MuiTextFieldProps {
  disabled?: boolean;
}

export default createComponent<TextFieldProps>(
  TextField,
  ({
    field,
    form: { touched, errors, isSubmitting },
    disabled = false,
    ...props
  }) => {
    const { name } = field;

    return {
      ...props,
      ...field,
      error: touched[name] && !!errors[name],
      helperText: touched[name] && errors[name] ? errors[name] : props.helperText,
      disabled: isSubmitting || disabled,
    };
  }
);
